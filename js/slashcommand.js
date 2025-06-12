const command = [
	{
		command: "/anonymous",
		childs: ["/anon"],
		comment:
			" - When set to anonymous, details such as your class and level will not be shown in things like /who lists.",
	},
	{
		command: "/assist",
		comment:
			" - Assist your defensive target or a player or pet specified by name.",
	},
	{ command: "/autoattack", comment: " - Toggle auto-attacking" },
	{ command: "/canceltrade", comment: " - End any active trade." },
	{
		command: "/camp",
		comment:
			" - Camp starts the process of safely leaving the world, which requires sitting uninterrupted for 30 seconds.",
	},
	{
		command: "/consider",
		childs: ["/con", "/c"],
		comment: " - Consider your target.",
	},
	{ command: "/disband", comment: " - Disband your group entirely." },
	{
		command: "/dragcorpse",
		childs: ["/drag", "/corpse"],
		comment: " - Start/Stop dragging a corpse.",
	},
	{
		command: "/emote",
		childs: [
			"em",
			"me",
			"bow",
			"conversate",
			"talk",
			"clap",
			"applause",
			"laugh",
			"lol",
			"yes",
			"no",
			"point",
			"flex",
			"roar",
			"cheer",
			"come",
			"fight",
			"cry",
			"sad",
			"shrug",
			"stay",
			"eat",
			"drink",
			"bandage",
			"dance",
			"ponder",
			"wounded",
			"whistle",
			"wave",
			"yawn",
		],
		comment: " - Send an emote, which is visible to nearby players",
	},
	{
		command: "/friend",
		comment:
			" - Ask another player to be your friend by targeting them first or typing their name.",
	},
	{
		command: "/guildcreate",
		childs: ["/createguild"],
		comment: " - Create a new guild with the specified name.",
	},
	{
		command: "/guilddemote",
		comment:
			" - Demote the guild member that you have defensively targeted, or by typing the name of the player.",
	},
	{
		command: "/guilddisband",
		childs: ["/disbandguild"],
		comment: " - Disband your guild (with confirmation).",
	},
	{
		command: "/guildinvite",
		childs: ["/inviteguild"],
		comment:
			" - Invite someone to your guild by defensively targeting them or by name.",
	},
	{
		command: "/guildpromote",
		comment:
			" - Promote the guild member that you have defensively targeted or by typing the name of the player.",
	},
	{
		command: "/guildremove",
		comment:
			" - Remove a member (or yourself, if you don't have a defensive target and don't type a name after the command) from your guild by defensively targeting them or by name.",
	},
	{
		command: "/guildroster",
		childs: ["/guildmembers"],
		comment: " - List of players in your guild",
	},
	{
		command: "/help",
		childs: ["/gethelp"],
		comment:
			" - Lists all server commands available to you, or help information about a specific command.",
	},
	{ command: "/invite", comment: " - Invite someone to your group" },
	{ command: "/kick", comment: " - Kick a member from your group" },
	{
		command: "/lay",
		childs: ["/laydown", "/sleep"],
		comment: " - Toggle laying down",
	},
	{
		command: "/leader",
		comment:
			" - Pass leader to player in your group by name or defensive target",
	},
	{ command: "/leave", comment: " - Leave your current group" },
	{
		command: "/lfg",
		comment:
			" - Toggle your looking for group status so that you will be shown as interested in grouping, or not.",
	},
	{
		command: "/loc",
		comment:
			" - Entering this command returns a set of coordinates and automatically copies them to your clipboard for easy sharing. The first set of coordinates are X axis, or east/west. The second set of coordinates are Z axis, or up/down. The third set of coordinates are Y axis, or north/south. The fourth and final set, ranging from 0-360, tell you which direction you're facing in degrees.",
	},
	{
		command: "/lootmode",
		childs: ["/lootmethod"],
		comment: " - Change the loot mode for your group",
	},
	{ command: "/motd", comment: " - Show the current message of the day" },
	{
		command: "/petattack",
		childs: ["/petkill"],
		comment:
			" - Order your selected pet(s) (for all your pets, if all is typed after the command) to attack your offensive target.",
	},
	{
		command: "/petbackoff",
		childs: ["/petback", "/petcalm"],
		comment:
			" - Order your selected pet(s) --or all pets if all is typed after the command-- to stop attacking and return to you. This makes your pet(s) passive until ordered to guard you.",
	},
	{
		command: "/petdeselect",
		childs: ["/petunselect"],
		comment: " - Deselect which of your pets to give command to",
	},
	{
		command: "/petdismiss",
		childs: ["/petdespawn"],
		comment:
			" - Dismiss your selected pet(s) —or all your pets if ‘all’ is typed after the command.",
	},
	{
		command: "/petfollow",
		comment:
			" - Order your selected pet(s) —or or all your pets if ‘all’ is typed after the command —to follow you.",
	},
	{
		command: "/petguard",
		comment:
			" - Order your selected pet(s) — or all your pets if ‘all’ is typed after the command —to guard you.",
	},
	{
		command: "/petstay",
		comment:
			" - Order your selected pet(s) — or all your pets if ‘all’ is typed after the command —to stop following you",
	},
	{
		command: "/quit",
		childs: ["/exit"],
		comment:
			" - Quit the game immediately. This will leave you in the world for 30 seconds, during which time you may die.",
	},
	{
		command: "/random",
		childs: ["/rand", "/roll", "/md"],
		comment: " - Roll a random number",
	},
	{
		command: "/refundmasterypoints",
		childs: ["/refundmp", "/rmp"],
		comment:
			" - Refunds all mastery points by removing all ability upgrades.",
	},
	{ command: "/sit", childs: ["/rest"], comment: " – Toggle sitting" },
	{
		command: "/skiplooter",
		childs: ["/skip"],
		comment:
			" – If the loot mode for your group is Round Robin, this will skip the current looter and advance to the next group member",
	},
	{ command: "/stand", comment: " – Stand Up" },
	{
		command: "/stuck",
		childs: ["/unstuck"],
		comment: " – Attempts to fix a stuck character by gating them",
	},
	{
		command: "/targetgroupmember",
		childs: ["/tgm"],
		comment:
			" – Defensively target a group member by name, such as /tgm Fred or optionally, target their pet by supplying either 1 or 2 to target their 1st or 2nd pet. Ex: /targetgroupmember Fred 1 (would target Fred’s 1st pet) or 0 (zero) to target their next pet.",
	},
	{
		command: "/time",
		childs: ["/tod"],
		comment: " - Get the current hour of the day.",
	},
	{ command: "/trade", comment: " - Begin trade with your defensive target." },
	{
		command: "/unfriend",
		comment: " - Remove a player from your friends list.",
	},
	{
		command: "/who",
		comment:
			" - List players in your zone, or include players in other zones by including the 'all' parameter.",
	},
	{ command: "/zonename", comment: " - Show the name of the zone you’re in." },
];

function addCommande(modalContent) {
	command.forEach((element) => {
		// console.log(element);
		let commandeBloc = document.createElement("div");
		commandeBloc.className = "commande-bloc";

		let commandeName = document.createElement("div");
		commandeName.className = "commande-name";

		let commandeitem = document.createElement("div");
		commandeitem.textContent = element.command;
		commandeitem.className = "command-item";
		commandeName.append(commandeitem);

		if (element.childs) {
			element.childs.forEach((item) => {
				let itemdiv = document.createElement("div");
				itemdiv.textContent = item;
				itemdiv.className = "command-item";
				commandeName.append(itemdiv);
			});
		}
		commandeBloc.append(commandeName);

		let commandeComent = document.createElement("div");
		commandeComent.className = "commande-coment";
		commandeComent.textContent = element.comment;
		commandeBloc.append(commandeComent);

		modalContent.append(commandeBloc);
	});
}
