/* -------------------------------------------------------------- */
// État courant
let currentJson = null; // JSON actuellement chargé
let currentMacros = []; // Alias sur currentJson.Macros
let windowSettings = [];
let windowLocations = [];
let exportChar = false;
let exportLink = document.getElementById("exportBtn");

/* -------------------------------------------------------------- */
// Utilitaires DOM & stockage
const $ = (sel) => document.querySelector(sel);

function showMessage(msg, isError = false) {
	const el = $("#message");
	el.textContent = msg;
	el.style.color = isError ? "red" : "green";
}

function getStoredMacros() {
	return JSON.parse(localStorage.getItem("storedMacros") || "[]");
}

function saveStoredMacros(macros) {
	localStorage.setItem("storedMacros", JSON.stringify(macros));
}

function mergeMacros(existing, incoming) {
	const map = new Map(existing.map((m) => [m.MacroName.toLowerCase(), m]));
	incoming.forEach((m) => map.set(m.MacroName.toLowerCase(), m));
	return [...map.values()];
}

/* -------------------------------------------------------------- */
// Rendus
function escapeHTML(txt) {
	return txt.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
}

function inCurrentJson(name) {
	return (
		currentJson &&
		currentMacros.some(
			(m) => m.MacroName.toLowerCase() === name.toLowerCase()
		)
	);
}

function updateMacroTable() {
	const tbody = $("#macroTable tbody");
	tbody.innerHTML = "";
	const macros = getStoredMacros();
	const hasCurrent = !!currentJson;

	macros.forEach((macro, index) => {
		const inCurrent = inCurrentJson(macro.MacroName);
		const row = document.createElement("tr");
		row.className = inCurrent ? "in-current" : "not-in-current";
		row.innerHTML = `
          <td class="td"><input type="text" value="${escapeHTML(
					macro.MacroName
				)}" data-index="${index}" class="edit-name"/></td>
          <td><textarea data-index="${index}" class="edit-text">${escapeHTML(
			macro.MacroText
		)}</textarea></td>
          <td class="td actions">
            <button class="button" onclick="saveEdit(${index})" title="Sauvegarder">💾</button>
            <button class="button" onclick="deleteMacro(${index})" title="Supprimer du stockage">🚮</button>
            <button class="button" onclick="removeFromCurrent(${index})" title="Supprimer du JSON courant" ${
			inCurrent ? "" : "disabled"
		}>➖</button>
            <button class="button" onclick="addToCurrent(${index})" title="Ajouter au JSON courant" ${
			inCurrent || !hasCurrent ? "disabled" : ""
		}>➕</button>
          </td>`;
		tbody.appendChild(row);
	});
	applyFilter();
}

function renderSettingsSections() {
	if (windowSettings && windowSettings.length) {
		$("#wsSection").hidden = false;
		$("#wsCount").textContent = windowSettings.length;
		$("#wsContent").textContent = JSON.stringify(windowSettings, null, 2);
	}
	if (windowLocations && windowLocations.length) {
		$("#wlSection").hidden = false;
		$("#wlCount").textContent = windowLocations.length;
		$("#wlContent").textContent = JSON.stringify(windowLocations, null, 2);
	}
}

/* -------------------------------------------------------------- */
// CRUD stockage
window.saveEdit = function (index) {
	const name = document
		.querySelector(`.edit-name[data-index='${index}']`)
		.value.trim();
	const text = document.querySelector(
		`.edit-text[data-index='${index}']`
	).value;
	if (!name) return showMessage("Nom de macro vide.", true);

	let macros = getStoredMacros();
	if (
		macros.some(
			(m, i) =>
				i !== index && m.MacroName.toLowerCase() === name.toLowerCase()
		)
	) {
		return showMessage("Un autre macro porte déjà ce nom.", true);
	}
	const oldName = macros[index].MacroName.toLowerCase();
	macros[index] = { MacroName: name, MacroText: text };
	saveStoredMacros(macros);

	// maj JSON courant si présent
	if (currentJson) {
		const idxCur = currentMacros.findIndex(
			(m) => m.MacroName.toLowerCase() === oldName
		);
		if (idxCur !== -1)
			currentMacros[idxCur] = { MacroName: name, MacroText: text };
	}
	updateMacroTable();
	showMessage("Macro mise à jour.");
};

window.deleteMacro = function (index) {
	if (!confirm("Supprimer cette macro du stockage ?")) return;
	let macros = getStoredMacros();
	const removed = macros.splice(index, 1)[0];
	saveStoredMacros(macros);

	if (currentJson) {
		currentJson.Macros = currentJson.Macros.filter(
			(m) => m.MacroName.toLowerCase() !== removed.MacroName.toLowerCase()
		);
		currentMacros = currentJson.Macros;
	}
	updateMacroTable();
	showMessage("Macro supprimée du stockage.");
};

/* -------------------------------------------------------------- */
// Actions sur JSON courant
window.removeFromCurrent = function (index) {
	if (!currentJson) {
		exportChar = false;
		return showMessage("Aucun JSON courant chargé.", true);
	}
	const macro = getStoredMacros()[index];
	currentJson.Macros = currentJson.Macros.filter(
		(m) => m.MacroName.toLowerCase() !== macro.MacroName.toLowerCase()
	);
	currentMacros = currentJson.Macros;
	updateMacroTable();
	showMessage("Macro retirée du JSON courant.");
};

window.addToCurrent = function (index) {
	if (!currentJson) {
		exportChar = false;
		return showMessage("Aucun JSON courant chargé.", true);
	}
	const macro = getStoredMacros()[index];
	if (inCurrentJson(macro.MacroName)) {
		return showMessage("Macro déjà présente dans le JSON courant.", true);
	}
	currentJson.Macros.push({ ...macro });
	currentMacros = currentJson.Macros;
	updateMacroTable();
	showMessage("Macro ajoutée au JSON courant.");
};

/* -------------------------------------------------------------- */
// Import / export stockage
function exportStoredMacros() {
	const macros = getStoredMacros();
	if (!macros.length) return showMessage("Aucune macro à exporter.", true);
	const blob = new Blob([JSON.stringify(macros, null, 2)], {
		type: "application/json",
	});
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "Macros_backup.json";
	a.click();
	URL.revokeObjectURL(url);
}

function importStoredMacros(file) {
	const reader = new FileReader();
	reader.onload = (e) => {
		try {
			const incoming = JSON.parse(e.target.result);
			if (!Array.isArray(incoming)) throw new Error();
			const merged = mergeMacros(getStoredMacros(), incoming);
			saveStoredMacros(merged);
			updateMacroTable();
			showMessage(
				`${incoming.length} macros importées depuis le backup. Total : ${merged.length}.`
			);
		} catch {
			showMessage("Fichier de backup invalide.", true);
		}
	};
	reader.readAsText(file);
}

/* -------------------------------------------------------------- */
// Gestion JSON courant via drag & drop
function handleFileDrop(file) {
	const reader = new FileReader();
	reader.onload = (e) => {
		try {
			const json = JSON.parse(e.target.result);
			if (
				!json.Macros ||
				!json.WindowSettingValues ||
				!json.WindowLocations
			) {
				exportTrigger(false);
				return showMessage("Fichier JSON invalide.", true);
			}
			currentJson = json;
			currentMacros = json.Macros;
			windowSettings = json.WindowSettingValues;
			windowLocations = json.WindowLocations;

			const merged = mergeMacros(getStoredMacros(), currentMacros);
			saveStoredMacros(merged);
			updateMacroTable();
			renderSettingsSections();
			showMessage(
				`${currentMacros.length} macros importées. Total stock : ${merged.length}.`
			);
			exportTrigger(true);
		} catch {
			showMessage("Erreur lors de la lecture du fichier JSON.", true);
		}
	};
	reader.readAsText(file);
}

function exportTrigger(boule = false) {
	exportChar = boule ? true : false;
	exportChar
		? (exportLink.style.display = "block")
		: (exportLink.style.display = "none");
}

function initDropzone() {
	const dropzone = document.getElementById("dropzone");
	dropzone.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropzone.classList.add("hover");
	});
	dropzone.addEventListener("dragleave", () =>
		dropzone.classList.remove("hover")
	);
	dropzone.addEventListener("drop", (e) => {
		e.preventDefault();
		dropzone.classList.remove("hover");
		const file = e.dataTransfer.files[0];
		if (file && file.type === "application/json") {
			handleFileDrop(file);
		} else {
			showMessage("Veuillez déposer un fichier JSON.", true);
		}
	});
}

function applyFilter() {
	const term = $("#searchInput").value.toLowerCase();
	const rows = $("#macroTable tbody").querySelectorAll("tr");
	rows.forEach((row) => {
		const text = row.innerText.toLowerCase();
		row.style.display = text.includes(term) ? "" : "none";
	});
}

document.addEventListener("DOMContentLoaded", () => {
	$("#importMacrosBtn").addEventListener("click", () => {
		$("#importMacrosFile").click();
	});
	initDropzone();
	updateMacroTable();
	exportTrigger(false);

	$("#addForm").addEventListener("submit", (e) => {
		e.preventDefault();
		const name = $("#newMacroName").value.trim();
		const text = $("#newMacroText").value;
		if (!name) return showMessage("Le nom ne peut pas être vide.", true);
		let macros = getStoredMacros();
		if (
			macros.some((m) => m.MacroName.toLowerCase() === name.toLowerCase())
		) {
			return showMessage("Nom de macro déjà existant.", true);
		}
		macros.push({ MacroName: name, MacroText: text });
		saveStoredMacros(macros);
		updateMacroTable();
		showMessage("Macro ajoutée.");
		e.target.reset();
	});

	$("#exportBtn").addEventListener("click", () => {
		if (!currentJson) {
			exportTrigger();
			return showMessage("Aucun JSON chargé à exporter.", true);
		}
		currentJson.Macros = getStoredMacros().filter((macro) =>
			currentJson.Macros.some(
				(jm) => jm.MacroName.toLowerCase() === macro.MacroName.toLowerCase()
			)
		);
		const blob = new Blob([JSON.stringify(currentJson, null, 2)], {
			type: "application/json",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "CharacterSettings.json";
		a.click();
		URL.revokeObjectURL(url);
	});

	$("#searchInput").addEventListener("input", applyFilter);
	$("#resetBtn").addEventListener("click", () => {
		if (!confirm("Vider complètement les macros enregistrées ?")) return;
		localStorage.removeItem("storedMacros");
		updateMacroTable();
		showMessage("Macros réinitialisées.");

		exportTrigger();
	});

	$("#exportMacrosBtn").addEventListener("click", exportStoredMacros);
	$("#importMacrosFile").addEventListener("change", (e) => {
		const file = e.target.files[0];
		if (file) importStoredMacros(file);
		e.target.value = "";
	});
});
