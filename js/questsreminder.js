const modal = document.getElementById("modal");
const form = document.getElementById("entryForm");
const entriesDiv = document.getElementById("entries");
const filterType = document.getElementById("filterType");
const filterDate = document.getElementById("filterDate");
const sortOrder = document.getElementById("sortOrder");
const filterText = document.getElementById("filterText");

const typeIcon = {
	quête: "📝",
	objet: "📦",
	lieu: "🗺️",
};
let entries = JSON.parse(localStorage.getItem("pantheonEntries") || "[]");

function save() {
	localStorage.setItem("pantheonEntries", JSON.stringify(entries));
	render();
}
function resetFilters() {
	document.getElementById("filterType").value = "";
	document.getElementById("filterDate").value = "";
	document.getElementById("sortOrder").value = "desc";
	document.getElementById("filterText").value = "";
	render();
}
// 🟡 Fonction de surbrillance
function highlight(text, filter) {
	if (!filter) return text;
	const re = new RegExp(`(${filter})`, "gi");
	return text.replace(re, "<mark>$1</mark>");
}
// JavaScript : fonctions pour ajouter, remplir et lire les champs de lien
function addLienField(titre = "", url = "") {
	const container = document.getElementById("lienContainer");
	const div = document.createElement("div");
	div.innerHTML = `
    <input type="text" class="lienTitreField" placeholder="Titre du lien" value="${titre}" />
    <input type="url" class="lienURLField" placeholder="https://..." value="${url}" />
    <button type="button" onclick="this.parentNode.remove()">❌</button>
  `;
	container.appendChild(div);
}

// 🔄 Redéfinition de render()
function render() {
	const typeFilter = filterType.value.toLowerCase();
	const dateFilter = filterDate.value;
	const textFilter = filterText.value.toLowerCase();
	const order = sortOrder.value;
	entriesDiv.innerHTML = "";
	let filtered = entries.filter((e) => {
		const matchesType = !typeFilter || e.type === typeFilter;
		const matchesDate = !dateFilter || e.dateAjout.startsWith(dateFilter);
		const matchesText =
			!textFilter ||
			e.type.toLowerCase().includes(textFilter) ||
			e.titre.toLowerCase().includes(textFilter) ||
			e.description.toLowerCase().includes(textFilter) ||
			(e.lien && e.lien.toLowerCase().includes(textFilter));
		return matchesType && matchesDate && matchesText;
	});
	filtered.sort((a, b) =>
		order === "asc"
			? new Date(a.dateAjout) - new Date(b.dateAjout)
			: new Date(b.dateAjout) - new Date(a.dateAjout)
	);
	filtered.forEach((entry) => {
		const icon = typeIcon[entry.type] || "";
		const div = document.createElement("div");
		div.className = "entry" + (entry.valide ? " validated" : "");
		let ladate = new Date(entry.dateAjout).toLocaleDateString();
		let ladescription = highlight(entry.description, textFilter);
		div.innerHTML = ` <strong>${icon} [${entry.type.toUpperCase()}]</strong> <b>${highlight(
			entry.titre,
			textFilter
		)}</b><br>
					<small>Ajouté le ${ladate}</small><br>
					<p>${ladescription}</p>
					
					${
						entry.liens && Array.isArray(entry.liens)
							? entry.liens
									.map(
										(link) =>
											`<a href="${
												link.url
											}" target="_blank">🔗 ${highlight(
												link.titre,
												textFilter
											)}</a>`
									)
									.join("<br>")
							: ""
					}

      <div class="actions"><button onclick="toggleValid(${entry.id})">${
			entry.valide ? "Marquer non validé" : "Valider"
		}</button>
        <button onclick="editEntry(${entry.id})">Modifier</button>
        <button onclick="deleteEntry(${entry.id})">Supprimer</button>
      </div>`;
		entriesDiv.appendChild(div);
	});
}

// 🎯 Accessibilité modale
function openModal() {
	modal.style.display = "flex";
	document.getElementById("titre").focus();
}

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeModal();
});

window.addEventListener("click", (e) => {
	if (e.target === modal) closeModal();
});
form.onsubmit = (e) => {
	e.preventDefault();
	const id = document.getElementById("entryId").value;
	const liens = Array.from(document.querySelectorAll("#lienContainer div"))
		.map((div) => {
			const titre = div.querySelector(".lienTitreField").value.trim();
			const url = div.querySelector(".lienURLField").value.trim();
			return titre && url ? { titre, url } : null;
		})
		.filter((l) => l);

	const newEntry = {
		id: id ? parseInt(id) : Date.now(),
		type: document.getElementById("type").value,
		titre: document.getElementById("titre").value,
		description: document.getElementById("description").value,
		liens: liens,
		dateAjout: new Date().toISOString(),
		valide: false,
	};

	if (id) {
		entries = entries.map((e) => (e.id === newEntry.id ? newEntry : e));
	} else {
		entries.push(newEntry);
	}

	form.reset();
	document.getElementById("lienContainer").innerHTML = "";
	closeModal();
	document.getElementById("entryId").value = "";
	save();
};

function toggleValid(id) {
	const entry = entries.find((e) => e.id === id);
	if (entry) {
		entry.valide = !entry.valide;
		save();
	}
}

function editEntry(id) {
	const entry = entries.find((e) => e.id === id);
	if (entry) {
		document.getElementById("entryId").value = entry.id;
		document.getElementById("type").value = entry.type;
		document.getElementById("titre").value = entry.titre;
		document.getElementById("description").value = entry.description;

		document.getElementById("lienContainer").innerHTML = "";
		if (Array.isArray(entry.liens)) {
			entry.liens.forEach((link) => addLienField(link.titre, link.url));
		}

		openModal();
	}
}

function deleteEntry(id) {
	if (confirm("Supprimer cette entrée ?")) {
		entries = entries.filter((e) => e.id !== id);
		save();
	}
}

function showForm(type) {
	document.getElementById("entryId").value = "";
	document.getElementById("type").value = type;
	document.getElementById("titre").value = "";
	document.getElementById("description").value = "";
	// document.getElementById("lien").value = "";
	openModal();
}

function openModal() {
	modal.style.display = "flex";
}

function closeModal() {
	modal.style.display = "none";
}

filterType.onchange = render;
filterDate.onchange = render;
sortOrder.onchange = render;
filterText.oninput = render;

render();
