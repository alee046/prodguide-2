// Setup your quiz text and questions here


var quizJSON = {
"chapter_1":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 1 Test",
		"main":    "<p>Hope you studied!</p>",
		"results": "<h5>Please see your supervisor to discuss this quiz.</h5>",
		"level1":  "Vapornation King",
		"level2":  "Vapornation City Council",
		"level3":  "Vapornation Citizen",
		"level4":  "Vapornation Town Idiot",
		"level5":  "Mookie's Assistant"
		},
	"questions": [ {
		
		"q": "Answer is 'aaa' or 'bbb'",
		"a": [
			{"option": "aaa"} ,
			{"option": "bbb"} 
			],
		"text_question": true,
		"explanation": "11111",
		
		},{
		
		"q": "Answer is 'aaa' or 'bbb'",
		"a": [
			{"option": "aaa"} ,
			{"option": "bbb"} 
			],
		"text_question": true,
		"explanation": "11111",
		
		}, {
		
		"q": "Click the correct answers.",
		"a": [
			{"option": "correct",					"correct": true},
			{"option": "incorrect",					"correct": false},
			{"option": "correct",					"correct": true},
			{"option": "correct",					"correct": true} 
			],
		"force_checkbox":true,
		"explanation": "22222",
		
		}, { 
		
		"q": "Answer is 'aaa', 'bbb', and 'ccc'",
		"a": [
			{"option": "aaa"},
			{"option": "bbb"},
			{"option": "ccc"},
			],
		"multi_text_question":true,
		"explanation": "33333",
		
		}, { 
		
		"q": "Click the correct answer.",
		"a": [
			{"option": "incorrect",				"correct": false },
			{"option": "incorrect",				"correct": false },
			{"option": "incorrect",				"correct": false },
			{"option": "correct",				"correct": true  } 
			],
		"explanation": "44444",
		
		} ]
	},
"chapter_2":{
	"info": {
		"name":    "VaporNation Learning Center - Chapter 2 Test",
		"main":    "<p>Hope you studied!</p>",
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
		"explanation": "Remember that, as opposed to \\\"Combustion\\\" that combusts the herb, our products utilize \\\"Vaporization\\\" that vaporizeses the herb."
		
		}, {
		
		"q": "When combustion occurs, what is created?",
		"a": [
			{"option": "smoke"},
			{"option": "fire"},
			],
		"text_question":true,
		"explanation": "Remember that, as opposed to \\\"Combustion\\\" that combusts the herb, our products utilize \\\"Vaporization\\\" that vaporizeses the herb."
		
		}, { 
		
		"q": "What are the three basic types of vaporizers?",
		"a": [
			{"option": "Desktop",					"correct": true},
			{"option": "Bionic",						"correct": false},
			{"option": "Portable",					"correct": true},
			{"option": "Pens",						"correct": true} 
			],
		"force_checkbox":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "What are the three basic types of vaporizers?",
		"a": [
			{"option": "Desktop"},
			{"option": "Portable"},
			{"option": "Handheld"},
			],
		"multi_text_question":true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "Check all that apply: Vaporizers help the user achieve the same desired effects of smoking without the harmful ________ ",
		"a": [
			{"option": "Smoke",						"correct": true  },
			{"option": "Carcinogens",				"correct": true  },
			{"option": "Tricroms",					"correct": false },
			{"option": "By-products",				"correct": true  } 
			],
		"force_checkbox": true,
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "The process of burning something is called?",
		"a": [
			{"option": "Convection",				"correct": false },
			{"option": "Conduction",				"correct": false },
			{"option": "Reduction",					"correct": false },
			{"option": "Combustion",				"correct": true  } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "The heating method in which plant material comes into direct contact with a heat source is called?",
		"a": [
			{"option": "Convection",				"correct": false },
			{"option": "Conduction",				"correct": true  },
			{"option": "Reduction",					"correct": false },
			{"option": "Combustion",				"correct": false } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "The heating method in which heated air passes through and around the plant material is called??",
		"a": [
			{"option": "Convection",				"correct": true  },
			{"option": "Conduction",				"correct": false },
			{"option": "Reduction",					"correct": false },
			{"option": "Combustion",				"correct": false } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "Which heating method is most conducive to true vaporization?",
		"a": [
			{"option": "Convection",				"correct": true  },

			{"option": "Conduction",				"correct": false }
		
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "Which of the following are reasons why people vaporize??",
		"a": [
			{"option": "Discreetness",				"correct": true  },
			{"option": "Delicious smoky flavor","correct": false },
			{"option": "Clean Taste",				"correct": true  },
			{"option": "Health Benefits",			"correct": true  } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		}, { 
		
		"q": "What is the ideal temperature range at which to vaporize??",
		"a": [
			{"option": "225-250 Degrees",			"correct": false },
			{"option": "350-395 Degrees",			"correct": true  },
			{"option": "150-200 Degrees",			"correct": false },
			{"option": "450-475 Degrees",			"correct": false } 
			],
		"explanation": "Remember that, as opposed to \"Combustion\" that combusts the herb, our products utilize \"Vaporization\" that vaporizeses the herb."
		
		} ]
	}
}
