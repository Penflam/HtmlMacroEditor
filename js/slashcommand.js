const command = [
	{
		command: "/anonymous",
		tested: false,
		childs: [
			{
				command: "/anon",
				tested: false,
			},
		],
		comment:
			" - When set to anonymous, details such as your class and level will not be shown in things like /who lists.",
	},
	{
		command: "/assist",
		tested: true,
		comment:
			" - Assist your defensive target or a player or pet specified by name.",
	},
	{
		command: "/autoattack",
		tested: true,
		comment: " - Toggle auto-attacking",
	},
	{
		command: "/canceltrade",
		tested: false,
		comment: " - End any active trade.",
	},
	{
		command: "/camp",
		tested: false,
		comment:
			" - Camp starts the process of safely leaving the world, which requires sitting uninterrupted for 30 seconds.",
	},
	{
		command: "/consider",
		tested: false,
		childs: [
			{
				command: "/con",
				tested: false,
			},
			{
				command: "/c",
				tested: true,
			},
		],
		comment: " - Consider your target.",
	},
	{
		command: "/disband",
		tested: false,
		comment: " - Disband your group entirely.",
	},
	{
		command: "/dragcorpse",
		tested: false,
		childs: [
			{
				command: "/drag",
				tested: false,
			},
			{
				command: "/corpse",
				tested: false,
			},
		],
		comment: " - Start/Stop dragging a corpse.",
	},
	{
		command: "/emote",
		childs: [
			{
				command: "/em",
				tested: false,
			},
			{
				command: "/me",
				tested: false,
			},
			{
				command: "/bow",
				tested: true,
			},
			{
				command: "/conversate",
				tested: false,
			},
			{
				command: "/talk",
				tested: false,
			},
			{
				command: "/clap",
				tested: false,
			},
			{
				command: "/applause",
				tested: false,
			},
			{
				command: "/laugh",
				tested: false,
			},
			{
				command: "/lol",
				tested: false,
			},
			{
				command: "/yes",
				tested: false,
			},
			{
				command: "/no",
				tested: false,
			},
			{
				command: "/point",
				tested: false,
			},
			{
				command: "/flex",
				tested: false,
			},
			{
				command: "/roar",
				tested: false,
			},
			{
				command: "/cheer",
				tested: false,
			},
			{
				command: "/come",
				tested: false,
			},
			{
				command: "/fight",
				tested: false,
			},
			{
				command: "/cry",
				tested: false,
			},
			{
				command: "/sad",
				tested: false,
			},
			{
				command: "/shrug",
				tested: false,
			},
			{
				command: "/stay",
				tested: false,
			},
			{
				command: "/eat",
				tested: false,
			},
			{
				command: "/drink",
				tested: false,
			},
			{
				command: "/bandage",
				tested: false,
			},
			{
				command: "/dance",
				tested: false,
			},
			{
				command: "/ponder",
				tested: false,
			},
			{
				command: "/wounded",
				tested: false,
			},
			{
				command: "/whistle",
				tested: false,
			},
			{
				command: "/wave",
				tested: true,
			},
			{
				command: "/yawn",
				tested: false,
			},
		],
		comment: " - Send an emote, which is visible to nearby players",
	},
	{
		command: "/friend <name>",
		tested: true,
		comment:
			" - Ask another player to be your friend by targeting them first or typing their name.",
	},
	{
		command: "/guildcreate",
		tested: false,
		childs: [
			{
				command: "/createguild",
				tested: false,
			},
		],
		comment: " - Create a new guild with the specified name.",
	},
	{
		command: "/guilddemote",
		tested: false,
		comment:
			" - Demote the guild member that you have defensively targeted, or by typing the name of the player.",
	},
	{
		command: "/guilddisband",
		tested: false,
		childs: [
			{
				command: "/disbandguild",
				tested: false,
			},
		],
		comment: " - Disband your guild (with confirmation).",
	},
	{
		command: "/guildinvite",
		tested: false,
		childs: [
			{
				command: "/inviteguild",
				tested: false,
			},
		],
		comment:
			" - Invite someone to your guild by defensively targeting them or by name.",
	},
	{
		command: "/guildpromote",
		tested: false,
		comment:
			" - Promote the guild member that you have defensively targeted or by typing the name of the player.",
	},
	{
		command: "/guildremove",
		tested: false,
		comment:
			" - Remove a member (or yourself, if you don't have a defensive target and don't type a name after the command) from your guild by defensively targeting them or by name.",
	},
	{
		command: "/guildroster",
		tested: false,
		childs: [
			{
				command: "/guildmembers",
				tested: false,
			},
		],
		comment: " - List of players in your guild",
	},
	{
		command: "/help",
		tested: false,
		childs: [
			{
				command: "/gethelp",
				tested: false,
			},
		],
		comment:
			" - Lists all server commands available to you, or help information about a specific command.",
	},
	{
		command: "/invite",
		tested: false,
		comment: " - Invite someone to your group",
	},
	{
		command: "/kick",
		tested: false,
		comment: " - Kick a member from your group",
	},
	{
		command: "/lay",
		tested: false,
		childs: [
			{
				command: "/laydown",
				tested: false,
			},
			{
				command: "/sleep",
				tested: false,
			},
		],
		comment: " - Toggle laying down",
	},
	{
		command: "/leader",
		tested: false,
		comment:
			" - Pass leader to player in your group by name or defensive target",
	},
	{ command: "/leave", tested: false, comment: " - Leave your current group" },
	{
		command: "/lfg",
		tested: true,
		comment:
			" - Toggle your looking for group status so that you will be shown as interested in grouping, or not.",
	},
	{
		command: "/loc",
		tested: true,
		comment:
			" - Entering this command returns a set of coordinates and automatically copies them to your clipboard for easy sharing. The first set of coordinates are X axis, or east/west. The second set of coordinates are Z axis, or up/down. The third set of coordinates are Y axis, or north/south. The fourth and final set, ranging from 0-360, tell you which direction you're facing in degrees.",
	},
	{
		command: "/lootmode",
		tested: false,
		childs: [
			{
				command: "/lootmethod",
				tested: false,
			},
		],
		comment: " - Change the loot mode for your group",
	},
	{ command: "/motd", comment: " - Show the current message of the day" },
	{
		command: "/petattack",
		tested: true,
		childs: [
			{
				command: "/petkill",
				tested: false,
			},
		],
		comment:
			" - Order your selected pet(s) (for all your pets, if all is typed after the command) to attack your offensive target.",
	},
	{
		command: "/petbackoff",
		childs: [
			{
				command: "/petback",
				tested: false,
			},
			{
				command: "/petcalm",
				tested: false,
			},
		],
		comment:
			" - Order your selected pet(s) --or all pets if all is typed after the command-- to stop attacking and return to you. This makes your pet(s) passive until ordered to guard you.",
	},
	{
		command: "/petdeselect",
		tested: false,
		childs: [
			{
				command: "/petunselect",
				tested: false,
			},
		],
		comment: " - Deselect which of your pets to give command to",
	},
	{
		command: "/petdismiss",
		tested: false,
		childs: [
			{
				command: "/petdespawn",
				tested: false,
			},
		],
		comment:
			" - Dismiss your selected pet(s) —or all your pets if ‘all’ is typed after the command.",
	},
	{
		command: "/petfollow",
		tested: false,
		comment:
			" - Order your selected pet(s) —or or all your pets if ‘all’ is typed after the command —to follow you.",
	},
	{
		command: "/petguard",
		tested: false,
		comment:
			" - Order your selected pet(s) — or all your pets if ‘all’ is typed after the command —to guard you.",
	},
	{
		command: "/petstay",
		tested: false,
		comment:
			" - Order your selected pet(s) — or all your pets if ‘all’ is typed after the command —to stop following you",
	},
	{
		command: "/quit",
		tested: false,
		childs: [
			{
				command: "/exit",
				tested: false,
			},
		],
		comment:
			" - Quit the game immediately. This will leave you in the world for 30 seconds, during which time you may die.",
	},
	{
		command: "/random",
		tested: false,
		childs: [
			{
				command: "/rand",
				tested: false,
			},
			{
				command: "/roll",
				tested: false,
			},
			{
				command: "/md",
				tested: false,
			},
		],
		comment: " - Roll a random number",
	},
	{
		command: "/refundmasterypoints",
		tested: false,
		childs: [
			{
				command: "/refundmp",
				tested: false,
			},
			{
				command: "/rmp",
				tested: false,
			},
		],
		comment:
			" - Refunds all mastery points by removing all ability upgrades.",
	},
	{
		command: "/sit",
		tested: true,
		childs: [
			{
				command: "/rest",
				tested: true,
			},
		],
		comment:
			" - Toggle sitting (rest is diferent as sit) somme bug sometime where you never stand ! type /rest to toggle and not just jump ;).",
	},
	{
		command: "/skiplooter",
		tested: false,
		childs: [
			{
				command: "/skip",
				tested: false,
			},
		],
		comment:
			" - If the loot mode for your group is Round Robin, this will skip the current looter and advance to the next group member",
	},
	{ command: "/stand", tested: false, comment: " - Stand Up" },
	{
		command: "/stuck",
		tested: false,
		childs: [
			{
				command: "/unstuck",
				tested: false,
			},
		],
		comment: " - Attempts to fix a stuck character by gating them",
	},
	{
		command: "/targetgroupmember",
		tested: false,
		childs: [
			{
				command: "/tgm",
				tested: true,
			},
		],
		comment:
			" - Defensively target a group member by name, such as /tgm Fred or optionally, target their pet by supplying either 1 or 2 to target their 1st or 2nd pet. Ex: /targetgroupmember Fred 1 (would target Fred’s 1st pet) or 0 (zero) to target their next pet.",
	},
	{
		command: "/time",
		tested: true,
		childs: [
			{
				command: "/tod",
				tested: false,
			},
		],
		comment: " - Get the current hour of the day.",
	},
	{
		command: "/trade",
		tested: false,
		comment: " - Begin trade with your defensive target.",
	},
	{
		command: "/unfriend",
		tested: false,
		comment: " - Remove a player from your friends list.",
		exemple: "/unfriend Tapaunpéo",
	},
	{
		command: "/who",
		tested: true,
		comment:
			" - List players in your zone, or include players in other zones by including the 'all' parameter.",
		exemple: "/who friends\n\n /",
	},
	{
		command: "/zonename",
		tested: false,
		comment: " - Show the name of the zone you’re in.",
		exemple: "/loc\n/time\n/zonename",
	},
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
		let classtested = element.tested ? "ok" : "ko";
		commandeitem.className = "command-item " + classtested;
		commandeName.append(commandeitem);

		if (element.childs) {
			element.childs.forEach((item) => {
				let itemdiv = document.createElement("div");
				itemdiv.textContent = item.command;
				classtested = item.tested ? "ok" : "ko";
				itemdiv.className = "command-item " + classtested;
				commandeName.append(itemdiv);
			});
		}
		commandeBloc.append(commandeName);

		let commandeComent = document.createElement("div");
		commandeComent.className = "commande-coment";
		commandeComent.textContent = element.comment;
		commandeBloc.append(commandeComent);
		if (element.exemple) {
			let commandeexemple = document.createElement("div");
			commandeexemple.className = "commande-exemple";
			let exemple = document.createElement("pre");
			exemple.textContent = "Exemple:\n" + element.exemple;

			commandeexemple.append(exemple);
			commandeBloc.append(commandeexemple);
		}
		modalContent.append(commandeBloc);
	});
}
