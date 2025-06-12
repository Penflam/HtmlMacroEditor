// Contenus de chaque modal, uniquement en texte
const modalContents = {
	import:
		"Importez vos macros depuis un fichier local. Cliquez sur [Importer macros (backup)]",
	export:
		"Téléchargez vos macros enregistrées en local pour le partager. Cliquez sur [Exporter macros (backup)]",
	clear: "Attention : cette action supprimera toutes vos macros en local.",
	fichiers:
		"Les fichiers des personnages se trouvent dans :\n <pre>C:/Users/[VotreNom]/AppData/LocalLow/Visionary Realms/Pantheon/Settings/CharacterSettings/</pre>",
	changer:
		"Pour changer les fichiers de personnages, allez dans les paramètres ou copiez vos fichiers dans le dossier indiqué. (à faire)",
	tuto: "Lien vers la vidéo tutorielle à venir. (à faire)",
	github: "Lien Github : https://github.com/ton-repo",
	demo: "Démo Github : https://github.com/ton-repo/demo",
	autres: "Autres sources à venir… (à faire)",
	macro: "Consultez la documentation ou la vidéo pour créer et utiliser vos macros. (à faire)",
};

document.querySelectorAll("[data-modal]").forEach((el) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		const key = this.getAttribute("data-modal");
		const content = modalContents[key] || "Contenu à venir…";
		const modalContent = document.getElementById("modalContent");
		modalContent.textContent = content;
		// Pour gérer les sauts de ligne dans le texte :
		modalContent.innerHTML = modalContent.textContent.replace(/\n/g, "<br>");
		document.getElementById("modalBg").classList.add("active");
	});
});

document.getElementById("modalClose").onclick = function () {
	document.getElementById("modalBg").classList.remove("active");
};

document.getElementById("modalBg").onclick = function (e) {
	if (e.target === this) {
		this.classList.remove("active");
	}
};

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape") {
		document.getElementById("modalBg").classList.remove("active");
	}
});
