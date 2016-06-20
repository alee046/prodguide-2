// Setup your quiz text and questions here


var quizJSON = {
	
"chapter_1":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 1 Test",
		"main":    "<p>Please enter your name before starting the quiz.</p>",
		"results": "<h5>Please see your supervisor to discuss this quiz.</h5>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Fill in the blank: \"_______ is the process of heating plant material gradually below the point at which it burns.\"",
		"a": [
			{"option": "vaporization"} ,
			{"option": "vaporizing"} 
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "When combustion occurs, what is created?",
		"a": [
			{"option": "smoke"},
			{"option": "fire"},
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "What are the three basic types of vaporizers?",
		"a": [
			{"option": "Desktop",					"correct": true},
			{"option": "Bionic",						"correct": false},
			{"option": "Pen",					"correct": true},
			{"option": "Portable",						"correct": true} 
			],
		"force_checkbox":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Check all that apply: Vaporizers help the user achieve the same desired effects of smoking without the harmful ________ ",
		"a": [
			{"option": "Smoke",						"correct": true  },
			{"option": "Carcinogens",				"correct": true  },
			{"option": "Tricroms",					"correct": false },
			{"option": "By-products",				"correct": true  } 
			],
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "The process of burning something is called?",
		"a": [
			{"option": "Convection",				"correct": false },
			{"option": "Conduction",				"correct": false },
			{"option": "Reduction",					"correct": false },
			{"option": "Combustion",				"correct": true  } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "The heating method in which plant material comes into direct contact with a heat source is called?",
		"a": [
			{"option": "Convection",				"correct": false },
			{"option": "Conduction",				"correct": true  },
			{"option": "Reduction",					"correct": false },
			{"option": "Combustion",				"correct": false } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "The heating method in which heated air passes through and around the plant material is called?",
		"a": [
			{"option": "Convection",				"correct": true  },
			{"option": "Conduction",				"correct": false },
			{"option": "Reduction",					"correct": false },
			{"option": "Combustion",				"correct": false } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which heating method is most conducive to true vaporization?",
		"a": [
			{"option": "Convection",				"correct": true  },

			{"option": "Conduction",				"correct": false }
		
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following are reasons why people vaporize?",
		"a": [
			{"option": "Discreetness",				   "correct": true  },
			{"option": "Conserves money and herb", "correct": true },
			{"option": "Clean Taste",				   "correct": true  },
			{"option": "Health Benefits",			   "correct": true  } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "What is the ideal temperature range at which to vaporize?",
		"a": [
			{"option": "225-250 Degrees",			"correct": false },
			{"option": "350-395 Degrees",			"correct": true  },
			{"option": "150-200 Degrees",			"correct": false },
			{"option": "450-475 Degrees",			"correct": false } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		} ]
	},
"chapter_2":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 2 Test",
		"main":    "<p>Please enter your name before starting the quiz.</p>",
		"results": "<h5>Please see your supervisor to discuss this quiz.</h5>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Fill in the blank: Desktop vaporizers heat plant material using through the ________ heating method.",
		"a": [
			{"option": "Convection"} ,
			{"option": "Conduction"} 
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "True or False: Desktop vaporizers are more powerful than portable vaporizers",
		"a": [
			{"option": "True" , "correct": true},
			{"option": "False",	"correct": false}
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Name the three different types of desktop vaporizers.",
		"a": [
			{"option": ["whip","whip-style", "whip style"]},
			{"option": ["forced air", "bag", "forced-air"]},
			{"option": ["dual function", "dual", "multifunction", "multi-function", "dual-function"]} 
			],
		"multi_text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "Fill in the blank: \"Forced-air desktop vaporizers utilize an internal _____________ that propels hot air through your herbs.\"",
		"a": [
			{"option": "fan"} 			 
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following is a dual-function forced-air vaporizer (whip/balloon)?  ",
		"a": [
			{"option": "Volcano Classic",			"correct": false },
			{"option": "Volcano Digital",			"correct": false  },
			{"option": "Extreme-Q",			"correct": true },
			{"option": "None of the Above",			"correct": false  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "Fill in the blank: \"Desktop vaporizers that utilize whip and balloon bag delivery systems are referred to as _____________.\"",
		"a": [
			{"option": ["dual function", "multifunction", "multi-function", "dual-function"]} 			 
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following peices combine to form a whip?  ",
		"a": [
			{"option": "Tubing",			"correct": true },
			{"option": "Wand",			"correct": true  },
			{"option": "Heater Cover",			"correct": false },
			{"option": "Mouthpiece",			"correct": true  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "Fill in the blank: \"Forced-air desktop vaporizers utilize an internal _____________ that propels hot air through your herbs.\"",
		"a": [
			{"option": "fan"} 			 
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "Fill in the blank: \"Forced-air desktop vaporizers utilize an internal _____________ that propels hot air through your herbs.\"",
		"a": [
			{"option": "fan"} 			 
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "True or False: Desktop vaporizers are more powerful than portable vaporizers",
		"a": [
			{"option": "True" , "correct": true},
			{"option": "False",	"correct": false}
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}]
	},
"chapter_3":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 3 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "True or False: Portable vaporizers are just as powerful and dependable as desktop vaporizers.",
		"a": [
			{"option": "True" , "correct": false},
			{"option": "False",	"correct": true}
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "Fill in the blank: The heating chamber of a portable vaporizer is similar to an __________ in the sense that it “cooks” your herbs.",
		"a": [
			{"option": "Oven" },
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Name two materials that the heating chamber of a portable vaporizer can be constructed from.",
		"a": [
			{"option": ["ceramic", "1"]},
			{"option": ["stainless Steel", "2"]},
			{"option": ["glass", "3"]} 
			],
		"multi_text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following is NOT a heating method utilized by portable vaporizers?",
		"a": [
			{"option": "conduction",				"correct": false  },
			{"option": "convection",				"correct": false  },
			{"option": "combustion",				"correct": true },
			{"option": "condcution + convection",		"correct": false   } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Name the two types of temperature control options used by portable vaporizers. ",
		"a": [
			{"option": "precise" },
			{"option": "preset" }
			],
		"multi_text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: Once activated, portable vaporizers (unlike pen vaporizers) heat-up and stay at a _______________ temperature for the duration of the session.",
		"a": [
			{"option": "Constant"},
			{"option": "Consistent"}
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: Some portable vaporizers are powered by ____________ instead of batteries.",
		"a": [
			{"option": "Butane" },
			{"option": "Flame"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Most portable vaporizers are designed primarily for use with:",
		"a": [
			{"option": "Dry Herbs",				"correct": true  },
			{"option": "Wax Concentrates",	"correct": false  },
			{"option": "E-Juice",				"correct": false },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: ___________ are vaporizers produced by several different manufactures that look and function nearly identically.",
		"a": [
			{"option": "rebrand" },
			{"option": "clone" }
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Fill in the blank: A portable vaporizers battery can either be embedded into the unit, or is ________________ and able to be replaced.",
		"a": [
			{"option": "Removeable" },

			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}, { 
		
		"q": "If a customer is interested in purchasing a G Pro, which portable vaporizer should you recommend to them instead?",
		"a": [
			{"option": "K-Vape"},

			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}, { 
		
		"q": "Name one feature that sets the K-Vape apart from the G Pro and other similar rebrands.",
		"a":  [
			{"option": "warranty"},
			{"option": "lifetime warranty"},
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "True or False: The K-Vape utilizes precise digital temperature control.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true  },
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Which of the following is a feature NOT shared by the Air and Solo?",
		"a": [
			{"option": "Glass draw-stem",			"correct": false },
			{"option": "Preset temp settings",			"correct": false  },
			{"option": "Removable battery",			"correct": true  },
			{"option": "Made by Arizer",			"correct": false  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Complete the analogy: The Arizer Air is to the Arizer Solo as the Crafty is to the _____________.",
		"a": [
			{"option": "Mighty" }

			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following are features of the Mighty, but not the Crafty?",
		"a": [
			{"option": "Dual Battery",			"correct": true },
			{"option": "Digital Display",			"correct": true  },
			{"option": "Heats material through convection + conduction",			"correct": false },
			{"option": "Manufactured by Storz & Bickel",			"correct": false  },

			],
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}, { 
		
		"q": "Fill in the blank: Unlike the original DaVinci, the Ascent utilizes a _________ mouthpiece and vapor path. ",
		"a": [
			{"option": "glass"},
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following are advantages of the SideKick when compared to the Haze?",
		"a": [
			{"option": "Compatible with herbs + wax",			"correct": false },
			{"option": "Digital display ",			"correct": true  },
			{"option": "Stirring mechanism ",			"correct": true },
			{"option": "Vapor cooling insert ",			"correct": true  },

			],
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: Unlike the Magic Flight Launch Box, the Maud-Dib is designed specifically for _________.",
		"a": [
			{"option": "wax"},
			{"option": "wax concentrates"},
			{"option": "concentrates"},
			{"option": "concentrate"},
			{"option": "extracts"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",

		}, { 
		
		"q": "True or False: The Prima and PAX 2 are both powered by removable/replaceable lithium-ion batteries.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		} ]
},
"chapter_4":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 4 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Pen vaporizers heat material through which heating method?",
		"a": [
			{"option": "Conduction",			"correct": true },
			{"option": "Convection",			"correct": false },
			{"option": "Reduction",			"correct": false },
			{"option": "Combustion",			"correct": true  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, {
		
		"q": "True or false: Pen vaporizers are considered 'true vaporizers'.",
		"a": [
			{"option": "True", "correct": false },
			{"option": "False", "correct": true }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Fill in the blank: Because pen vaporizers heat material through conduction, _________ is created, not vapor.",
		"a": [
			{"option": "smoke"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: _________ pens are also referred to as e-cigs.",
		"a": [
			{"option": "e-juice"},
			{"option": "e juice"},
			{"option": "ejuice" }
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "True or false: Some pen vaporizers are compatible with multiple different materials.",
		"a": [
			{"option": "True", "correct": true },
			{"option": "False", "correct": false }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: Pen vaporizers require you to press and hold the __________ in order to activate the heating coil.",
		"a": [
			{"option": "Power Button"},
			{"option": "Button"},
			{"option": "Power"}
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following is not a part of a pen vaporizer:",
		"a": [
			{"option": "Battery",			"correct": false },
			{"option": "Heating Chamber/Tank",			"correct": false },
			{"option": "Whip",			"correct": true },
			{"option": "Atomizer",			"correct": false },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following types of threading is utilized by most pen vaporizer batteries, and is referred to as 'universal':",
		"a": [
			{"option": "720",				"correct": false  },
			{"option": "510",				"correct": true   },
			{"option": "610",				"correct": false  },
			{"option": "900",				"correct": false  }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: The tank of an e-juice pen vaporizer is also sometimes referred to as a ____________",
		"a": [
			{"option": "Clearomizer" },
			{"option": "cartomizer" }
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Fill in the blank: Pen vaporizers are equipped with a safety mechanism that requires you to press the power button consecutively ________ times in order to unlock the battery.",
		"a": [
			{"option": "five" },
			{"option": "5" }
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}]
},
"chapter_5":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 5 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Which of the following are reasons why people use herb pen vaporizers?",
		"a": [
			{"option": "Quick",			"correct": true },
			{"option": "Discreet",			"correct": true  },
			{"option": "Easy to use",			"correct": true  },
			{"option": "Convenient",			"correct": true  },
			],
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, {
		
		"q": "Fill in the blank: Unlike portable vaporizer which heat dry material through convection, herb pens heat material through __________.",
		"a": [
			{"option": "combustion",			"correct": false },
			{"option": "reduction",			"correct": false  },
			{"option": "conduction",			"correct": true  },
			{"option": "induction",			"correct": false  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Fill in the blank: Herb Pens utilize a heating chamber in which dry material comes into direct _________ with the heating coil.",
		"a": [
			{"option": "contact"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: Because herb pen vaporizers heat dry material through conduction, they create ___________, not vapor.",
		"a": [
			{"option": "smoke"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Name the two different types of batteries utilized herb pen vaporizers.",
		"a": [
			{"option": ["Standard", "510"]},
			{"option": ["elips", "ellipse"]}
			],
		"multi_text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: When __________ occurs, smoke is produced.",
		"a": [
			{"option": "combustion"}
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "True or False: The functionality of herb pen vaporizers differs greatly from unit to unit.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		},{ 
		
		"q": "True or false: Herb pen vaporizer heat dry material more evenly than portable vaporizers.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following would be the best option for a customer looking for a true vaporization experience:",
		"a": [
			{"option": "Portable Vaporizer",				"correct": false  },
			{"option": "Herb Pen Vaporizer",				"correct": true   }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "True or false: Herb pen vaporizers typically take between 20-30 seconds to heat-up.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}]
},"chapter_6":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 6 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Fill in the blank: The main difference between wax pen vaporizers is the type of _____________ they utilize.",
		"a": [
			{"option": "atomizer"}
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, {
		
		"q": "Wicked atomizers are ideal for which type of wax?",
		"a": [
			{"option": "High viscosity (thick/solid)",			"correct": false },
			{"option": "Low viscosity (runny/liquidy)",			"correct": true  }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Wickless atomizers refer to atomizers that utilize heating coils wrapped around ceramic or quartz ________.",
		"a": [
			{"option": "fiber",			"correct": false },
			{"option": "rods",			"correct": true  },			
			{"option": "dishes",			"correct": false },
			{"option": "chambers",			"correct": false  }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following is not a feature of ceramic dish atomizers:",
		"a": [
			{"option": "no exposed coils",			"correct": false },
			{"option": "flat",			"correct": false  },			
			{"option": "good for conserving material",			"correct": false },
			{"option": "dual-rods",			"correct": true  }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Most wax pen atomizers utilize heating coils constructed from which material?",
		"a": [
			{"option": "quartz-crystal",			"correct": false },
			{"option": "ceramic",			"correct": false  },			
			{"option": "fiber",			"correct": false },
			{"option": "titanium",			"correct": true  }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which type of atomizer would melt wax the quickest, and produce the largest clouds?",
		"a": [
			{"option": "ceramic rod dual-coil",			"correct": false },
			{"option": "ceramic dish",			"correct": false  },			
			{"option": "quartz rod dual-coil",			"correct": false },
			{"option": "ceramic rod triple-coil",			"correct": true  }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which type of atomizer would melt wax the slowest?",
		"a": [
			{"option": "ceramic rod dual-coil",			"correct": false },
			{"option": "ceramic dish",			"correct": true  },			
			{"option": "quartz rod dual-coil",			"correct": false },
			{"option": "ceramic rod triple-coil",			"correct": false  }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		},{ 
		
		"q": "Fill in the blank: Other than standard 510 threading, some wax pens now utilize ___________ connections.",
		"a": [
			{"option": "Magnetic"},
			{"option": "Magnet"},
			{"option": "Magnets"}
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: An eRig, also called an _________is a portable dab rig that is powered by a lithium-ion battery.",
		"a": [
			{"option": "Enail"},
			{"option": "e-nail"},
			{"option": "eNail"},
			{"option": "e-Nail"}
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Which of the following is not another name for another name for a flat ceramic dish atomizer?",
		"a": [
			{"option": "bagel",			"correct": true },
			{"option": "donut",			"correct": false },
			{"option": "terra",			"correct": false },
			{"option": "halo",			"correct": false }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		} ,  {
		
		"q": "Which of the following is NOT a feature shared by the Dontus and Galaxy wax pen vaporizers?",
		"a": [
			{"option": "quartz rod atomizer",			"correct": true },
			{"option": "made by KandyPens",			"correct": false  },
			{"option": "lifetime warranty",			"correct": false  },
			{"option": "temperature control battery",			"correct": false  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		},  {
		
		"q": "True or false: Atomizers for the KandyPens Donuts and Galaxy wax pens are interchange.",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false  }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		},  {
		
		"q": "True of false: The R Series 2 and OG Four 2.0 are wax pens made by manufacturer #ThisThingRips.",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false  }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		},  {
		
		"q": "True or false: The KandyPens Gravity and Dr. Dabber Aura both include quartz crystal and coilless ceramic atomizers.",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		} ,{
		
		"q": "Which of the following is a feature shared by both the KandyPens Gravity and Dr. Dabber Aura?",
		"a": [
			{"option": "magnetic connection",			"correct": false },
			{"option": "lifetime warranty",			"correct": false  },
			{"option": "temperature control",			"correct": true  },
			{"option": "battery",			"correct": false  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, {
		
		"q": "If a customer is looking for a wax pen that utilizes an elips style battery, which of the following would you not recommend?",
		"a": [
			{"option": "Cloud Pen 2.0",			"correct": false },
			{"option": "Grenco Science microG",			"correct": false  },
			{"option": "Pulsar Ninja V4",			"correct": false  },
			{"option": "KandyPens Donuts",			"correct": true  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		},  {
		
		"q": "If a customer is interested in the G Pen from Grenco Science and the Galaxy from KandyPens, which unit would you recommend to them?",
		"a": [
			{"option": "Galaxy"}
			],
		"text_question": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		},  {
		
		"q": "True or False: The Atmos Kiln and Pulsar Sirius are two units with similar features.",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false  },
			],
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		},  {
		
		"q": "True or False: The Ghost and Gravity are both wax pens made by #ThisThingRips?",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true },
			],
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		},  {
		
		"q": "Which of the following is not a wax pen made by KandyPens?",
		"a": [
			{"option": "Donuts",			"correct": false },
			{"option": "Gravity",			"correct": false },
			{"option": "Ninja",			"correct": true  },
			{"option": "Galaxy",			"correct": false  },
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		} ]
},"chapter_7":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 7 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Fill in the blank: E-Juice is available with varying levels of __________, typically between 0mg – 24mg.",
		"a": [
			{"option": "nicotine"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, {
		
		"q": "Fill in the blank: ____ and _____ are the abbreviated terms for the two main ingredients of e-juice.",
		"a": [
			{"option": "VG" },
			{"option": "PG" }
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "True or false: An e-juice with a 80/20 PG/VG ratio would be considered more ‘natural’ than an e-juice with a PG/VG ratio of 60/40?",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}, { 
		"q": "Fill in the blank: The reason why propylene glycol (PG) is added to e-juice is because it carries _________ better than vegetable glycerin (VG).",
		"a": [
			{"option": "flavor"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Propylene glycol (PG) is safe to vaporize, and is also the main ingredient in.",
		"a": [
			{"option": "mouthwash",			"correct": false },
			{"option": "cough drops",			"correct": false },
			{"option": "asthma inhalers",			"correct": true },
			{"option": "hand sanitizer",			"correct": false }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}]
},"chapter_8":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 8 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "True or False: Unlike herb pens and wax pens, e-juice pens do not utilize an atomizer.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true  }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, {
		
		"q": "True or false: Similar to herb pens and wax pens, e-juice pen batteries typically feature 510 threading.",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": " What is another term used to describe the tank of an e-juice pen?",
		"a": [
			{"option": "clearomizer"},
			{"option": "cartomizer"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}, { 
		"q": "Fill in the blank: E-juice pens are a great cession tool used by people that are trying to quit _________.",
		"a": [
			{"option": "smoking"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Which of the following is not a component of an e-juice pen vaporizer?",
		"a": [
			{"option": "atomizer",			"correct": false },
			{"option": "tank",			"correct": false },
			{"option": "battery",			"correct": false },
			{"option": "induction port",			"correct": true }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "True or False: While all e-juice vaporizers function similarly, things like size, atomizer type, battery life and overall build quality tend to vary from unit to unit.",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "True or False: E-juice atomizers typically utilize wicks, which absorb the liquid in the tank and is then heated by pressing the power button.",
		"a": [
			{"option": "True",			"correct": true },
			{"option": "False",			"correct": false }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		},{ 
		
		"q": "True or False: Instead of smoke, these pens only produce pure vapor, making them ideal for public use.",
		"a": [
			{"option": "True",			"correct": true  },
			{"option": "False",			"correct": false }
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: In recent years, atomizers have been redesigned and improved to feature shorter _______.",
		"a": [
			{"option": "wicks" }
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: Another term commonly used to describe an e-juice pen vaporizer is an _________.",
		"a": [
			{"option": "E-cig"},
			{"option": "ecig"},
			{"option": "e cig"}
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}]
}, "chapter_9":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 9 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Name the two different types of mods.",
		"a": [
			{"option": ["mechanical"]},
			{"option": ["electronic"]}
			],
			
		"multi_text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, {
		
		"q": "Fill in the blank: ___________ mods are unregulated devices with no safety restrictions, and are recommended for experts only.",
		"a": [
			{"option": "Mechanical"}
			],
			
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Fill in the blank: ___________ mods feature advanced internal electronics which allow for variable power adjustment and control over ohms, wattage and voltage output.",
		"a": [
			{"option": "Electronic"}
			],
			
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}, { 
		
		"q": "Fill in the blank: Mod atomizer resistance is measured in __________, (typically signified with the Ω symbol).",
		"a": [
			{"option": "ohms"}
			],
			
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "Atomizers that utilize coils rated for resistance levels below 1.0 Ω are referred to as __________ resistance atomizers.",
		"a": [
			{"option": "sub-ohm"},
			{"option": "sub ohm"},
			{"option": "subohm"}
			],
			
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Atomizers that utilize coils rated for resistance levels above 1.0 Ω are referred to as __________ resistance atomizers",
		"a": [
			{"option": "sub-ohm",			"correct": false },
			{"option": "standard",			"correct": true },
			{"option": "voltage",			"correct": false },
			{"option": "ohm",			"correct": false}
			],
		
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "True or False: The higher the atomizer resistance, the bigger the vapor clouds a mod will produce.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true }
			],
			
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		},{ 
		
		"q": "True or False: An electronic mod rated for atomizer resistance levels between 0.4 Ω – 2.5 Ω would be compatible with tank that utilizes a 0.2 Ω atomizer.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true }
			],
			
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "If a customer wants the biggest cloud production possible from their mod, what resistance atomizer would you recommend?",
		"a": [
			{"option": "0.2 Ω",			"correct": false },
			{"option": "1.5 Ω",			"correct": false },
			{"option": "1.0 Ω",			"correct": false },
			{"option": "0.1 Ω",			"correct": true}
			],
			
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "Fill in the blank: ____________ mods typically feature OLED display screens, as well as a multitude of advanced safety features.",
		"a": [
			{"option": "electronic"}
			],
			
		"text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}]
}, "chapter_10":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 10 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<p>Please enter your name before starting the quiz.</p>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Fill in the blanks: Ecstasy herbal cigarettes contain a unique blend of all-natural herbs that are 100% _________ and __________ free.",
		"a": [
			{"option": ["tobacco"]},
			{"option": ["nicotine"]}
			],
			
		"multi_text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, {
		
		"q": "Name the five different blends of Ecstasy Herbal Cigarettes.",
		"a": [
			{"option": ["white"]},
			{"option": ["reds"]},
			{"option": ["ultra"]},
			{"option": ["menthol"]},
			{"option": ["cannabis-free", "cannabis free"]}
			],
			
		"multi_text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "True or False: Ecstasy herbal cigarettes feature many of the same ingredients found in traditional tobacco cigarettes.",
		"a": [
			{"option": "True",			"correct": false },
			{"option": "False",			"correct": true }
			],
	
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",	
		}, { 
		
		"q": "Select all that apply: Aside from being a healthier alternative to traditional tobacco cigarettes, Ecstasy herbal cigarettes are also used as props in.",
		"a": [
			{"option": "film",			"correct": true },
			{"option": "television",			"correct": true },			
			{"option": "theatre",			"correct": true }
			],
			
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}, { 
		
		"q": "This blend of Ecstasy herbal cigarettes features a lighter, more traditional tobacco-like flavor and aroma.",
		"a": [
			{"option": "Whites",			"correct": true },
			{"option": "Reds",			"correct": false },			
			{"option": "Ultras",			"correct": false },
			{"option": "Menthol",			"correct": false },			
			{"option": "Cannabis-Free",			"correct": false }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "This blend of Ecstasy herbal cigarettes features a full-flavored, traditional tobacco-like aroma and taste.",
		"a": [
			{"option": "Whites",			"correct": false },
			{"option": "Reds",			"correct": true },			
			{"option": "Ultras",			"correct": false },
			{"option": "Menthol",			"correct": false },			
			{"option": "Cannabis-Free",			"correct": false }
			],
		
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "This is newest Ecstasy blend, which features exotic herbs, and a smooth, relaxing smoke.",
		"a": [
			{"option": "Whites",			"correct": false },
			{"option": "Reds",			"correct": false },			
			{"option": "Ultras",			"correct": true },
			{"option": "Menthol",			"correct": false },			
			{"option": "Cannabis-Free",			"correct": false }
			],
			
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		},{ 
		
		"q": "Featuring the same herbal blend as Reds and Whites, this Ecstasy blend has an added “minty” taste.",
		"a": [
			{"option": "Whites",			"correct": false },
			{"option": "Reds",			"correct": false },			
			{"option": "Ultras",			"correct": false },
			{"option": "Menthol",			"correct": true },			
			{"option": "Cannabis-Free",			"correct": false }
			],
			
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "While this Ecstasy blend feels, smells, and tastes like the “real thing”, this herbal blend is 100% legal and contains absolutely no THC.",
		"a": [
			{"option": "Whites",			"correct": false },
			{"option": "Reds",			"correct": false },			
			{"option": "Ultras",			"correct": false },
			{"option": "Menthol",			"correct": false },			
			{"option": "Cannabis-Free",			"correct": true }
			],
			
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		
		}, { 
		
		"q": "If someone who smokes ‘Light’ cigarettes is interested in switching to Ecstasy herbal cigarettes, what would be the best blend to recommend to them?",
		"a": [
			{"option": "Whites",			"correct": true },
			{"option": "Reds",			"correct": false },			
			{"option": "Ultras",			"correct": false },
			{"option": "Menthol",			"correct": false },			
			{"option": "Cannabis-Free",			"correct": false }
			],

		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb.",
		}]
}
};
