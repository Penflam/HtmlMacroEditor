function getBasicMacros() {
	return [
		{
			MacroName: "LOC+",
			MacroText: "/zonename\n/time\n/loc",
		},
		{
			MacroName: "RECALLStone",
			MacroText: "/stuck bind",
		},
		{
			MacroName: "GUILD",
			MacroText: "/who guild",
		},
		{
			MacroName: "NECR2",
			MacroText:
				"/stand\n/tgm Mortderire 1\n/petattack\n/wait 5\n/use 3 ;(Curse of pain 2s)\n/wait 3\n/use 3 ;(Sicken 2s)\n/wait 5\n/stand\n/technique 3 ;(Laucust Charm)\n/wait 2\n/technique 1 ;(Induce Nausea)\n/wait 2\n/use 6 ;(Wrack Bones if undead)\n/wait 3\n/use 2 ;(Life draw if notundead)\n/wait 3",
		},
		{
			MacroName: "PAL2",
			MacroText: "/use 6\n/wait 1\n/utility 1\n/wait 2\n/technique 2",
		},
	];
}
