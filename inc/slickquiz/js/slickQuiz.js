/*!
 * SlickQuiz jQuery Plugin
 * http://github.com/jewlofthelotus/SlickQuiz
 *
 * @updated October 25, 2014
 * @version 1.5.20
 *
 * @author Julie Cameron - http://www.juliecameron.com
 * @copyright (c) 2013 Quicken Loans - http://www.quickenloans.com
 * @license MIT
 */

(function($){
    $.slickQuiz = function(element, options) {
		 console.log(options);
		 console.log(options.timerLength);
        var plugin   = this,
            $element = $(element),
            _element = '#' + $element.attr('id'),
            defaults = {
                checkAnswerText:  'Check My Answer!',
                nextQuestionText: 'Next &raquo;',
                backButtonText: '',
                completeQuizText: '',
                tryAgainText: '',
                questionCountText: 'Question %current of %total',
                preventUnansweredText: 'You must select at least one answer.',
                preventUnansweredMultiText: 'You must fill all fields in.',
                questionTemplateText:  '%count. %text',
                scoreTemplateText: '%score / %total',
                nameTemplateText:  '<span>Quiz: </span>%name',
                skipStartButton: false,
                numberOfQuestions: null,
                randomSortQuestions: false,
                randomSortAnswers: false,
                preventUnanswered: false,
                disableScore: false,
                disableRanking: false,
                scoreAsPercentage: false,
					 timerLength:100,
					 warningTimer:10,
                perQuestionResponseMessaging: true,
                perQuestionResponseAnswers: false,
                completionResponseMessaging: false,
                displayQuestionCount: true,   // Deprecate?
                displayQuestionNumber: true,  // Deprecate?
                animationCallbacks: { // only for the methods that have jQuery animations offering callback
                    setupQuiz: function () {},
                    startQuiz: function () {},
                    resetQuiz: function () {},
                    checkAnswer: function () {},
                    nextQuestion: function () {},
                    backToQuestion: function () {},
                    completeQuiz: function () {}
                },
                events: {
                    onStartQuiz: function (options) {},
                    onCompleteQuiz: function (options) {}  // reserved: options.questionCount, options.score
                },
					 timer_time: (options.timerLength ? options.timerLength : 30),    //  The default time of the timer
					 warning_timer: (options.warningTimer ? (options.warningTimer) : -1),    //  The default time of the timer
					 timer_mode: (options.timerMode ? options.timerMode : 1),    //    Mode: count up or count down
					 timer_status: 0,    //    Status: timer is running or stoped
					 timer_id:0,    //    This is used by setInterval function
					 
					 this_questions:"",
					 this_questionCount:0,
					 
					 debug: (options.debug ? options.debug : false)
            },

            // Class Name Strings (Used for building quiz and for selectors)
            questionCountClass     = 'questionCount',
            questionGroupClass     = 'questions',
            questionClass          = 'question',
            answersClass           = 'answers',
            responsesClass         = 'responses',
            completeClass          = 'complete',
            correctClass           = 'correctResponse',
            incorrectClass         = 'incorrectResponse',
            correctResponseClass   = 'correct',
            incorrectResponseClass = 'incorrect',
            checkAnswerClass       = 'checkAnswer',
            nextQuestionClass      = 'nextQuestion',
            lastQuestionClass      = 'lastQuestion',
            backToQuestionClass    = 'backToQuestion',
            tryAgainClass          = 'tryAgain',

            // Sub-Quiz / Sub-Question Class Selectors
            _questionCount         = '.' + questionCountClass,
            _questions             = '.' + questionGroupClass,
            _question              = '.' + questionClass,
            _answers               = '.' + answersClass,
            _answer                = '.' + answersClass + ' li',
            _responses             = '.' + responsesClass,
            _response              = '.' + responsesClass + ' li',
            _correct               = '.' + correctClass,
            _correctResponse       = '.' + correctResponseClass,
            _incorrectResponse     = '.' + incorrectResponseClass,
            _checkAnswerBtn        = '.' + checkAnswerClass,
            _nextQuestionBtn       = '.' + nextQuestionClass,
            _prevQuestionBtn       = '.' + backToQuestionClass,
            _tryAgainBtn           = '.' + tryAgainClass,

            // Top Level Quiz Element Class Selectors
            _quizStarter           = _element + ' .startQuiz',
            _quizName              = _element + ' .quizName',
            _quizArea              = _element + ' .quizArea',
            _quizResults           = _element + ' .quizResults',
            _quizResultsCopy       = _element + ' .quizResultsCopy',
            _quizHeader            = _element + ' .quizHeader',
            _quizScore             = _element + ' .quizScore',
            _quizLevel             = _element + ' .quizLevel',

            // Top Level Quiz Element Objects
            $quizStarter           = $(_quizStarter),
            $quizName              = $(_quizName),
            $quizArea              = $(_quizArea),
            $quizResults           = $(_quizResults),
            $quizResultsCopy       = $(_quizResultsCopy),
            $quizHeader            = $(_quizHeader),
            $quizScore             = $(_quizScore),
            $quizLevel             = $(_quizLevel)
        ;
		 $(_element + ' div.timer').hide();

        // Reassign user-submitted deprecated options
        var depMsg = '';

        if (options && typeof options.disableNext != 'undefined') {
            if (typeof options.preventUnanswered == 'undefined') {
                options.preventUnanswered = options.disableNext;
            }
            depMsg += 'The \'disableNext\' option has been deprecated, please use \'preventUnanswered\' in it\'s place.\n\n';
        }

        if (options && typeof options.disableResponseMessaging != 'undefined') {
            if (typeof options.preventUnanswered == 'undefined') {
                options.perQuestionResponseMessaging = options.disableResponseMessaging;
            }
            depMsg += 'The \'disableResponseMessaging\' option has been deprecated, please use' +
                      ' \'perQuestionResponseMessaging\' and \'completionResponseMessaging\' in it\'s place.\n\n';
        }

        if (options && typeof options.randomSort != 'undefined') {
            if (typeof options.randomSortQuestions == 'undefined') {
                options.randomSortQuestions = options.randomSort;
            }
            if (typeof options.randomSortAnswers == 'undefined') {
                options.randomSortAnswers = options.randomSort;
            }
            depMsg += 'The \'randomSort\' option has been deprecated, please use' +
                      ' \'randomSortQuestions\' and \'randomSortAnswers\' in it\'s place.\n\n';
        }

        if (depMsg !== '') {
            if (typeof console != 'undefined') {
                console.warn(depMsg);
            } else {
                alert(depMsg);
            }
        }
        // End of deprecation reassignment


        plugin.config = $.extend(defaults, options);

        // Set via json option or quizJSON variable (see slickQuiz-config.js)
        var quizValues = (plugin.config.json ? plugin.config.json : typeof quizJSON != 'undefined' ? quizJSON['chapter_'+plugin.config.quizChapter] : null);

        // Get questions, possibly sorted randomly
        var questions = plugin.config.randomSortQuestions ?
                        quizValues.questions.sort(function() { return (Math.round(Math.random())-0.5); }) :
                        quizValues.questions;

        // Count the number of questions
        var questionCount = questions.length;

        // Select X number of questions to load if options is set
        if (plugin.config.numberOfQuestions && questionCount >= plugin.config.numberOfQuestions) {
            questions = questions.slice(0, plugin.config.numberOfQuestions);
            questionCount = questions.length;
        }

		  plugin.config.this_questions = questions;
		  plugin.config.this_questionCount = questionCount;
		  
        // some special private/internal methods
        var internal = {method: {
            // get a key whose notches are "resolved jQ deferred" objects; one per notch on the key
            // think of the key as a house key with notches on it
            getKey: function (notches) { // returns [], notches >= 1
                var key = [];
                for (i=0; i<notches; i++){ key[i] = $.Deferred ();}
                return key;

            },

            // put the key in the door, if all the notches pass then you can turn the key and "go"
            turnKeyAndGo: function (key, go) { // key = [], go = function ()
                // when all the notches of the key are accepted (resolved) then the key turns and the engine (callback/go) starts
                $.when.apply (null, key). then (function () {
                    go ();
                });
            },

            // get one jQ
            getKeyNotch: function (key, notch) { // notch >= 1, key = []
                // key has several notches, numbered as 1, 2, 3, ... (no zero notch)
                // we resolve and return the "jQ deferred" object at specified notch
                return function () {
                    key[notch-1].resolve (); // it is ASSUMED that you initiated the key with enough notches
                };
            }
				
        }};
				
		  var timer;//init timer
	
        plugin.method = {
            // Sets up the questions and answers based on above array
			  startTimer: function(interval){

							if(plugin.config.timer_status === 0){
								plugin.config.timer_status = 1;
								plugin.config.timer_id = setInterval(function(){  
		
									if(plugin.config.timer_time >= 0){

										var second = Math.floor(plugin.config.timer_time % 60);
										var minute = Math.floor(plugin.config.timer_time / 60) % 60;
										var hour = Math.floor(plugin.config.timer_time / 3600) % 60;

										second = (second < 10) ? '0'+second : second;
										minute = (minute < 10) ? '0'+minute : minute;
										hour = (hour < 10) ? '0'+hour : hour;

										$(_element + ' div.timer span.second').html(second);
										$(_element + ' div.timer span.minute').html(minute);
										$(_element + ' div.timer span.hour').html(hour);
										$(_element + ' div.timer').show();

					 					plugin.config.timer_time--;
										
										if((plugin.config.timer_time) < 0 ) {
											$(' div.timer span.second').html('00');
											 plugin.method.completeQuiz({callback: plugin.config.animationCallbacks.completeQuiz});
											}
										
										if(plugin.config.timer_time < plugin.config.warning_timer) {
											jQuery(_element + " .timer").css('color', 'red');
											}
										
										if(typeof(callback) === 'function') callback(plugin.config.timer_time);
									}
								}, 1000);
							}				
							},
											
				stopTimer:	function (){
							if(plugin.config.timer_status === 1){
								plugin.config.timer_status = 0;
								clearInterval(plugin.config.timer_id);
							}
						},
								
				resetTimer:	function (sec){
									sec = (typeof(sec) !== 'undefined') ? sec : 0;
									plugin.config.timer_time = sec;
									generateTime(time);
								},	 					
																	 
            setupQuiz: function(options) { // use 'options' object to pass args
                var key, keyNotch, kN;
                key = internal.method.getKey (3); // how many notches == how many jQ animations you will run
                keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
                kN = keyNotch; // you specify the notch, you get a callback function for your animation

                $quizName.hide().html(plugin.config.nameTemplateText
                    .replace('%name', quizValues.info.name) ).fadeIn(1000, kN(key,1));
                $quizHeader.hide().prepend($('<div class="quizDescription">' + quizValues.info.main + '</div>')).fadeIn(1000, kN(key,2));
                $quizResultsCopy.append(quizValues.info.results);

                // add retry button to results view, if enabled
                if (plugin.config.tryAgainText && plugin.config.tryAgainText !== '') {
                    $quizResultsCopy.append('<p><a class="button ' + tryAgainClass + '" href="#">' + plugin.config.tryAgainText + '</a></p>');
                }

                // Setup questions
                var quiz  = $('<ol class="' + questionGroupClass + '"></ol>'),
                    count = 1;

                // Loop through questions object
                for (var i in questions) {
                    if (questions.hasOwnProperty(i)) {
                        var question = questions[i];

                        var questionHTML = $('<li class="' + questionClass +'" id="question' + (count - 1) + '"></li>');

                        if (plugin.config.displayQuestionCount) {
                            questionHTML.append('<div class="' + questionCountClass + '">' +
                                plugin.config.questionCountText
                                    .replace('%current', '<span class="current">' + count + '</span>')
                                    .replace('%total', '<span class="total">' +
                                        questionCount + '</span>') + '</div>');
                        }

                        var formatQuestion = '';
                        if (plugin.config.displayQuestionNumber) {
                            formatQuestion = plugin.config.questionTemplateText
                                .replace('%count', count).replace('%text', question.q);
                        } else {
                            formatQuestion = question.q;
                        }
                        questionHTML.append('<h3>' + formatQuestion + '</h3>');

                        // Count the number of true values
                        var truths = 0;
                        for (i in question.a) {
                            if (question.a.hasOwnProperty(i)) {
                                answer = question.a[i];
                                if (answer.correct) {
                                    truths++;
                                }
                            }
                        }
                        // Now let's append the answers with checkboxes or radios depending on truth count
                        var answerHTML = $('<ul class="' + answersClass + '"></ul>');
								

                        // Get the answers
                        var answers = plugin.config.randomSortAnswers ?
                            question.a.sort(function() { return (Math.round(Math.random())-0.5); }) :
                            question.a;

                        // prepare a name for the answer inputs based on the question
                        var selectAny     = question.select_any ? question.select_any : false,
                            forceCheckbox = question.force_checkbox ? question.force_checkbox : false,
                            textQuestion  = question.text_question ? question.text_question : false,
                            multiTextQuestion  = question.multi_text_question ? question.multi_text_question : false,
                            checkbox      = (truths > 1 && !selectAny) || forceCheckbox,
                            inputName     = $element.attr('id') + '_question' + (count - 1);
                            //inputType     = checkbox ? 'checkbox' : 'radio';
 								if(textQuestion){
									inputType      = 'text';
									}
								else if(multiTextQuestion){
									inputType      = 'multi_text';
									}
								else {
									inputType      = checkbox ? 'checkbox' : 'radio';
									}

                        if( count === quizValues.questions.length ) {
                            nextQuestionClass = nextQuestionClass + ' ' + lastQuestionClass;
                        }

								
								if(plugin.config.debug) { console.log(""); }
								if(plugin.config.debug) { console.log(""); }
								if(plugin.config.debug) { console.log("question: " + question.q); }
								if(inputType === "text") {
									//if(plugin.config.debug) { console.log(question.a); }
									var optionId = inputName + '_' + 0;
									var input = '<input id="' + optionId + '" name="' + inputName + '" type="' + inputType + '" /> ';
									var optionLabel = '<label for="' + optionId + '"></label>';
									var answerContent = $('<li></li>')
										.append(input)
										.append(optionLabel);
									answerHTML.append(answerContent);
									}
								else if(inputType === "multi_text") {
									
									var count_inputs = answers.length;
									for (i in answers) {
										if(plugin.config.debug) { console.log(answers[i]); }
										//var answerContent = $('<li></li>')
										//	.append("Input for answer " + answers[i].option);
										var optionId = inputName + '_' + i.toString();
										var input = '<input id="' + optionId + '" name="' + inputName + '" type="' + inputType + '" /> ';
										var optionLabel = '<label for="' + optionId + '"></label>';
										var answerContent = $('<li></li>')
											.append(input)
											.append(optionLabel);
										answerHTML.append(answerContent);
										
										//answerHTML.append(answerContent);
										}
									//	.append(input)
									//	.append(optionLabel);
									
									}
								else {
									for (i in answers) {
										if(plugin.config.debug) { console.log(answers[i]); }
										 if (answers.hasOwnProperty(i)) {
											  answer   = answers[i],
											  optionId = inputName + '_' + i.toString();
												var input = '<input id="' + optionId + '" name="' + inputName + '" type="' + inputType + '" /> ';
												if(inputType === 'text'){
													var optionLabel = '<label for="' + optionId + '"></label>';
													}
												else{
													var optionLabel = '<label for="' + optionId + '">' + answer.option + '</label>';
													}
												var answerContent = $('<li></li>')
													.append(input)
													.append(optionLabel);
											  answerHTML.append(answerContent);
											 }
										}
									}
								
							
                        // Append answers to question
                        questionHTML.append(answerHTML);

                        // If response messaging is NOT disabled, add it
                        if (plugin.config.perQuestionResponseMessaging || plugin.config.completionResponseMessaging) {

									 // Now let's append the correct / incorrect response messages
									 
									var correct_response = "";
									var incorrect_response = "";
									function orArray(arr){
										var outStr = "";
										if (arr.length === 1) {
											outStr = arr[0];
										} else if (arr.length === 2) {
											outStr = arr.join(' or ');
										} else if (arr.length > 2) {
											outStr = arr.slice(0, -1).join(', ') + ', or ' + arr.slice(-1);
										}
											return outStr;
										}
									function multiOrArray(arr){
										var outStr = "";
										if (arr.length === 1) {
											outStr = arr[0];
										} else if (arr.length === 2) {
											outStr = arr.join(' or ');
										} else if (arr.length > 2) {
											outStr = arr.slice(0, -1).join(', ') + ', or ' + arr.slice(-1) ;
										}
											return outStr;
										}
									function andArray(arr){
										var outStr = "";
										if (arr.length === 1) {
											outStr = arr[0];
										} else if (arr.length === 2) {
											outStr = arr.join(' and ');
										} else if (arr.length > 2) {
											outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
										}
											return outStr;
										}		
									var valid_answers = "";								
									switch(inputType) {
										case "text":
											valid_answers += "The correct answer is ";
											var temp_correct_answers = [];
											var comma_string = "";
											for (i in answers) {
												temp_correct_answers.push(answers[i].option);
												}
											valid_answers += orArray(temp_correct_answers);
											valid_answers += ".";
											$('.rightAnswers ol').append("<li>"+valid_answers+"<li>");
											console.log(valid_answers);
											break;
											
										case "multi_text":
		                           valid_answers += "The correct answer is ";
											var temp_correct_answers = [];
											var comma_string = "";
											for (i in answers) {
												temp_correct_answers.push((answers[i].option[0]));
												}
											valid_answers += andArray(temp_correct_answers);
											valid_answers += ".";
											$('.rightAnswers ol').append("<li>"+valid_answers+"<li>");
											console.log(valid_answers);
											break;
											
										case "checkbox":
											valid_answers += "The correct answer is ";
											var temp_correct_answers = [];
											var comma_string = "";
											for (i in answers) {
												if(answers[i].correct == true) {
													temp_correct_answers.push(answers[i].option);
													}
												}
											valid_answers += andArray(temp_correct_answers);
											valid_answers += ".";
											$('.rightAnswers ol').append("<li>"+valid_answers+"<li>");
											console.log(valid_answers);
											break;
					
										case "radio":
											valid_answers += "The correct answer is ";
											var temp_correct_answers = [];
											for (i in answers) {
												if(answers[i].correct == true) {
													temp_correct_answers.push(answers[i].option);
													}
												}
											valid_answers += temp_correct_answers[0];
											valid_answers += ".";
											$('.rightAnswers ol').append("<li>"+valid_answers+"<li>");
											console.log(valid_answers);
											break;
										}
									 
									 /*
									 for (i in answers) {
												 var answer = answers[i]; 
		
											 if (answer.correct == true){
												 console.log("right");
												 console.log(answer.option);
												 
											 }
										}*/
									 // <p><span>Incorrect</span> The correct answers are Desktop, Portable, and Pen.</p>
									 // <p><i> + explanation + </i></p>
									 
                            var responseHTML = $('<ul class="' + responsesClass + '"></ul>');

									 var correct_response = "";
									 correct_response   += '<li class="' + correctResponseClass + '">';
									 correct_response   += "   <p class='correct_or_incorrect'>";
									 correct_response   += "      <span>Correct</span>";
									 correct_response   += "   </p>";
									 correct_response   += "   <p>";
									 correct_response   += "      <div class='the_answers_given' style='display:inline;'></div>";
									 correct_response   += "      <div class='valid_answers'>";
									 correct_response   +=           valid_answers;
									 correct_response   += "      </div>";
									 correct_response   += "   </p>";
									 correct_response   += "   <p>";
									 correct_response   += "      <i class='explanation'>";
									 correct_response   +=           question.explanation;
									 correct_response   += "      </i>";
									 correct_response   += "   </p>";
									 correct_response   += '</li>';
                            responseHTML.append(correct_response);
									 
									 var incorrect_response = "";
									 incorrect_response   += '<li class="' + incorrectResponseClass + '">';
									 incorrect_response   += "   <p class='correct_or_incorrect'>";
									 incorrect_response   += "      <span>Incorrect</span>";
									 incorrect_response   += "   </p>";
									 incorrect_response   += "   <p>";
									 incorrect_response   += "      <div class='the_answers_given' style='display:inline;'></div>";
									 incorrect_response   += "      <div class='valid_answers'>";
									 incorrect_response   +=           valid_answers;
									 incorrect_response   += "      </div>";
									 incorrect_response   += "   </p>";
									 incorrect_response   += "   <p>";
									 incorrect_response   += "      <i class='explanation'>";
									 incorrect_response   +=           question.explanation;
									 incorrect_response   += "      </i>";
									 incorrect_response   += "   </p>";
									 incorrect_response   += '</li>';
									 responseHTML.append(incorrect_response);

                            // Append responses to question
                            questionHTML.append(responseHTML);
								}
	
                        // Appends check answer / back / next question buttons
                        if (plugin.config.backButtonText && plugin.config.backButtonText !== '') {
                            questionHTML.append('<a href="#" class="button ' + backToQuestionClass + '">' + plugin.config.backButtonText + '</a>');
                        }

                        var nextText = plugin.config.nextQuestionText;
                        if (plugin.config.completeQuizText && count == questionCount) {
                            nextText = plugin.config.completeQuizText;
                        }

                        // If we're not showing responses per question, show next question button and make it check the answer too
                        if (!plugin.config.perQuestionResponseMessaging) {
                            questionHTML.append('<a href="#" class="button ' + nextQuestionClass + ' ' + checkAnswerClass + '">' + nextText + '</a>');
                        } else {
                            questionHTML.append('<a href="#" class="button ' + nextQuestionClass + '">' + nextText + '</a>');
                            questionHTML.append('<a href="#" class="button ' + checkAnswerClass + '" data-questiontype="' + inputType + '">' + plugin.config.checkAnswerText + '</a>');
                        }

                        // Append question & answers to quiz
                        quiz.append(questionHTML);

                        count++;
                    }
                }

                // Add the quiz content to the page
                $quizArea.append(quiz);

                // Toggle the start button OR start the quiz if start button is disabled
                if (plugin.config.skipStartButton || $quizStarter.length === 0) {
                    $quizStarter.hide();
                    plugin.method.startQuiz.apply (this, [{callback: plugin.config.animationCallbacks.startQuiz}]); // TODO: determine why 'this' is being passed as arg to startQuiz method
                    kN(key,3).apply (null, []);
                } else {
                    $quizStarter.fadeIn(500, kN(key,3)); // 3d notch on key must be on both sides of if/else, otherwise key won't turn
                }

                internal.method.turnKeyAndGo (key, options && options.callback ? options.callback : function () {});
            },
				
            // Starts the quiz (hides start button and displays first question)
            startQuiz: function(options) {
					if ($('#namefield').val() == ''){
						$(".quizDescription")
						.animate({
						color: "#F00"
						}, 500)
						.animate({
						color: "#F00"
						}, 2000)
						.animate({
						color: "#000"        
						}, 500);
							return false;
						} 
		         // setTimeout(ten, ((plugin.config.timerLength-plugin.config.warningTimer) * 1000));
					 plugin.method.startTimer(plugin.config.timer_time);
					 $('#namefield').hide();
                var key, keyNotch, kN;
                key = internal.method.getKey (1); // how many notches == how many jQ animations you will run
                keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
                kN = keyNotch; // you specify the notch, you get a callback function for your animation

                function start(options) {
                    var firstQuestion = $(_element + ' ' + _questions + ' li').first();
                    if (firstQuestion.length) {
                        firstQuestion.fadeIn(500, function () {
                            if (options && options.callback) options.callback ();
                        });
                    }
                }

                if (plugin.config.skipStartButton || $quizStarter.length == 0) {
                    start({callback: kN(key,1)});
                } else {
                    $quizStarter.fadeOut(300, function(){
                        start({callback: kN(key,1)}); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
                    });
                }

                internal.method.turnKeyAndGo (key, options && options.callback ? options.callback : function () {});

                if (plugin.config.events &&
                        plugin.config.events.onStartQuiz) {
                    plugin.config.events.onStartQuiz.apply (null, []);
                }
            },

            // Resets (restarts) the quiz (hides results, resets inputs, and displays first question)
            resetQuiz: function(startButton, options) {
					 timer.stop();
					 timer.reset(80);
                var key, keyNotch, kN;
                key = internal.method.getKey (1); // how many notches == how many jQ animations you will run
                keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
                kN = keyNotch; // you specify the notch, you get a callback function for your animation

                $quizResults.fadeOut(300, function() {
                    $(_element + ' input').prop('checked', false).prop('disabled', false);

                    $quizLevel.attr('class', 'quizLevel');
                    $(_element + ' ' + _question).removeClass(correctClass).removeClass(incorrectClass).remove(completeClass);
                    $(_element + ' ' + _answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);

                    $(_element + ' ' + _question          + ',' +
                      _element + ' ' + _responses         + ',' +
                      _element + ' ' + _response          + ',' +
                      _element + ' ' + _nextQuestionBtn   + ',' +
                      _element + ' ' + _prevQuestionBtn
                    ).hide();

                    $(_element + ' ' + _questionCount + ',' +
                      _element + ' ' + _answers + ',' +
                      _element + ' ' + _checkAnswerBtn
                    ).show();

                    $quizArea.append($(_element + ' ' + _questions)).show();

                    kN(key,1).apply (null, []);

                    plugin.method.startQuiz({callback: plugin.config.animationCallbacks.startQuiz},$quizResults); // TODO: determine why $quizResults is being passed
                });

                internal.method.turnKeyAndGo (key, options && options.callback ? options.callback : function () {});
            },
				
            // Validates the response selection(s), displays explanations & next question button
            checkAnswer: function(checkButton, options) {
                var key, keyNotch, kN;
                key = internal.method.getKey (2); // how many notches == how many jQ animations you will run
                keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
                kN = keyNotch; // you specify the notch, you get a callback function for your animation
					 console.log($(checkButton).data('questiontype'));
					 
						//console.table(questions);
						//console.table(plugin.config.this_questions);
					
					var answers_given = "";
					var answer_list = "<ul></ul>";
					if($(checkButton).data('questiontype') == 'text'){
		
						var questionLI      = $($(checkButton).parents(_question)[0]); // <li id="question0" class="question"....>
						var questionIndex   = parseInt(questionLI.attr('id').replace(/(question)/, ''), 10); // 0
						var textAnswer      = $(_element+'_question'+questionIndex+'_0').val(); // $("#slickQuiz1_question0_0").val()
						var answers         = questions[questionIndex].a; // questions[0].a
						answers_given 		  =  $(_element+'_question'+questionIndex+'_0').val();
						//$(".quizRecord ol").append("<li>"+ answers_given + "</li>");
						
						//var answerArray     = answers.split("|");
						//var textAnswerArray = textAnswer.toString().toLowerCase().split(" ");
						//console.log(textAnswerArray);
                if (plugin.config.preventUnanswered && textAnswer.length === 0) {
						$("h3")
						.animate({color:"#F00"}, 500)
						.animate({color:"#F00"}, 2000)
						.animate({color:"#000"}, 500);
						return false;
                }
						var correctResponse = false;
						
						for (i in answers) {
							var answer = answers[i].option.toString().toLowerCase();
							if(textAnswer.toLowerCase() == answer) {
								correctResponse = true;
								}
							}
						}
					else if($(checkButton).data('questiontype') == 'multi_text'){
				
						var questionLI      = $($(checkButton).parents(_question)[0]);
						var questionIndex   = parseInt(questionLI.attr('id').replace(/(question)/, ''), 10);
						var answers         = questions[questionIndex].a;
						var answers_given;
						//var answerArray     = answers.split("|");
						//var textAnswerArray = textAnswer.toString().toLowerCase().split(" ");
						//console.log(textAnswerArray);
						function andArray(arr){
							var outStr = "";
						if (arr.length === 1) {
							outStr = arr[0];
						} else if (arr.length === 2) {
							outStr = arr.join(' and ');
						} else if (arr.length > 2) {
						outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
						}
							return outStr;
						}	
						var multi_array=[];
						jQuery("input[id^='"+(_element.replace("#", ""))+"_question"+questionIndex+"_']").each(function(){
													multi_array.push(jQuery(this).val());
													answers_given = andArray(multi_array);
													//$(".quizRecord ol").append("<li>" + answers_given + "</li>");
					
													})
													
						//var textAnswers     = $('#slickQuiz_question0_0').val();
						
						var is_unanswered_questions = false;
						jQuery("input[id^='"+(_element.replace("#", ""))+"_question"+questionIndex+"_']").each(function() {
							 if (plugin.config.preventUnanswered && jQuery(this).val().length === 0) {
								  is_unanswered_questions = true;
							 }
							});
						if(is_unanswered_questions==true) {
							$(" h3")
							.animate({
							color: "#F00"
							}, 500)
							.animate({
							color: "#F00"
							}, 2000)
							.animate({
							color: "#000"        
							}, 500);
								return false;
							}		
						var correctResponse = false;
						var arr2 =  answers;  // Correct answers in JSON	
						var num_inputs = jQuery("input[id^='"+(_element.replace("#", ""))+"_question"+questionIndex+"_']").length;
						var correct = 0;
						for(var i = 0; i < num_inputs; i++){
							for(var j = 0; j < arr2.length; j++){     
								var tmp_array=arr2[j].option;
								var tmp_answer =  jQuery(_element+"_question"+questionIndex+"_"+i).val().toLowerCase();
								if($.inArray(tmp_answer, tmp_array) > -1){
									console.log(arr2[j].option[0])
									console.log(arr2[j].option[1])
									console.log($.inArray(tmp_answer, arr2[j].option))
									console.log("matched")
									correct++;
									arr2.splice(j, 1);
									//tmp_array.filter(function(e){return e!==tmp_answer})
									// Remove the value at arr2[j] from arr2
									}
								} 

							}
						if(correct == num_inputs){
							console.log("Correct!");
							correctResponse = true;
							}
						else{
							console.log("So Wrong.");    
							}
						}
					else{

                var questionLI    = $($(checkButton).parents(_question)[0]),
                    answerLIs     = questionLI.find(_answers + ' li'),
                    answerSelects = answerLIs.find('input:checked'),
                    questionIndex = parseInt(questionLI.attr('id').replace(/(question)/, ''), 10),
                    answers       = questions[questionIndex].a,
                    selectAny     = questions[questionIndex].select_any ? questions[questionIndex].select_any : false;
							
							//var searchIDs = 	$("input[name=slickQuiz_question0]:checked").map(function () {return this.value;}).get().join(",");
							//console.log(searchIDs);
							
							if($(checkButton).data('questiontype') == 'radio') {
								answers_given = jQuery("#"+jQuery("input[name='"+(_element.replace("#", ""))+"_question"+questionIndex+"']:checked").attr('id')).next("label").text();
								console.log("Answers given: " + answers_given);
								
								//$(".quizRecord ol").append("<li>"+ answers_given + "</li>");
						
								}
							else {
								
								jQuery("input[name='"+(_element.replace("#", ""))+"_question"+questionIndex+"']:checked").each(function() {
									answers_given += jQuery(this).parent().find('label').text() + ", ";
									//$(".quizRecord ol").append("<li>" + answers_given + "</li>");
					
									});
								   answers_given = answers_given.substring(0, answers_given.length-2);
								}					
                answerLIs.addClass(incorrectResponseClass);
                // Collect the true answers needed for a correct response
                var trueAnswers = [];
                for (i in answers) {
                    if (answers.hasOwnProperty(i)) {
                        var answer = answers[i],
                            index  = parseInt(i, 10);

                        if (answer.correct) {
						
								
                            trueAnswers.push(index);
                            answerLIs.eq(index).removeClass(incorrectResponseClass).addClass(correctResponseClass);
                        }
                    }
                }


                var selectedAnswers = [];
                answerSelects.each( function() {
                    var id = $(this).attr('id');
                    selectedAnswers.push(parseInt(id.replace(/(.*\_question\d{1,}_)/, ''), 10));
                });

                if (plugin.config.preventUnanswered && selectedAnswers.length === 0) {
						$(" h3")
							.animate({
							color: "#F00"
							}, 500)
							.animate({
							color: "#F00"
							}, 2000)
							.animate({
							color: "#000"        
							}, 500);
						return false;
                }

                // Verify all/any true answers (and no false ones) were submitted
                var correctResponse = plugin.method.compareAnswers(trueAnswers, selectedAnswers, selectAny);
					
					 }


                if (correctResponse) {
                    questionLI.addClass(correctClass);
                } else {
                    questionLI.addClass(incorrectClass);
						  // #todo get answers_given 
                }
					 questionLI.find('.the_answers_given').html("You answered "+answers_given+"."+"<br>");

                // Toggle appropriate response (either for display now and / or on completion)
                questionLI.find(correctResponse ? _correctResponse : _incorrectResponse).show();

                // If perQuestionResponseMessaging is enabled, toggle response and navigation now
                if (plugin.config.perQuestionResponseMessaging) {
                    $(checkButton).hide();
                    if (!plugin.config.perQuestionResponseAnswers) {
                        // Make sure answers don't highlight for a split second before they hide
                        questionLI.find(_answers).hide({
                            duration: 0,
                            complete: function() {
                                questionLI.addClass(completeClass);
                            }
                        });
                    } else {
                        questionLI.addClass(completeClass);
                    }
                    questionLI.find('input').prop('disabled', true);
                    questionLI.find(_responses).show();
                    questionLI.find(_nextQuestionBtn).fadeIn(300, kN(key,1));
                    questionLI.find(_prevQuestionBtn).fadeIn(300, kN(key,2));
                    if (!questionLI.find(_prevQuestionBtn).length) kN(key,2).apply (null, []); // 2nd notch on key must be passed even if there's no "back" button
                } else {
                    kN(key,1).apply (null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
                    kN(key,2).apply (null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
                }

					 
					 console.log("Getting question data for #" + questionIndex);
					 var question_data = plugin.method.getQuestionData(questionIndex);
					 console.table(question_data);
					 
					 var dir = "";
	 					if(questionIndex < ($('.question').length/2)){
							dir = 'left';
						} else
						{
							dir = 'right';
						}
					 
					 $(".quizResultsCopy .review .review_"+dir+"_col").append('<p><b>Question '+(questionIndex+1)+':</b> ' + question_data["the_question"].replace(/\D[0-9]/g, "")+"</p>");
					 // anthony todo: add question # above
					 $(".quizResultsCopy .review .review_"+dir+"_col").append("<p>");
					 $(".quizResultsCopy .review .review_"+dir+"_col").append('<span class="correct_incorrect">'+question_data["correct_or_incorrect"]+'</span>&nbsp&nbsp&nbsp');
					 $(".quizResultsCopy .review .review_"+dir+"_col").append("<br>"+question_data["you_answered"]);
					 $(".quizResultsCopy .review .review_"+dir+"_col").append("<br>"+question_data["correct_answer"]);
					 $(".quizResultsCopy .review .review_"+dir+"_col").append("</p>");
					 $(".quizResultsCopy .review .review_"+dir+"_col").append("<p style='margin-bottom:10px;'><i>"+question_data["the_explanation"]+"</i></p>");
					 $(".quizResultsCopy .review .review_"+dir+"_col").append("<hr/>");
					 
					 jQuery(".correct_incorrect:contains('Correct')").css({'color': 'green', 'font-weight':'bold'});
					 jQuery(".correct_incorrect:not(:contains('Correct'))").css({'color': 'red', 'font-weight':'bold'});
					 
					 if($('#review_'+questionIndex+' .correct_incorrect').text() == "Correct"){
						 $('#review_'+questionIndex+' .correct_incorrect').css({'color': 'green', 'font-weight':'bold'});
						 } else {
							  $('#review_'+questionIndex+' .correct_incorrect').css({'color': 'red', 'font-weight':'bold'});
							 }
                internal.method.turnKeyAndGo (key, options && options.callback ? options.callback : function () {});
            },

            // Moves to the next question OR completes the quiz if on last question
            nextQuestion: function(nextButton, options) {
                var key, keyNotch, kN;
                key = internal.method.getKey (1); // how many notches == how many jQ animations you will run
                keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
                kN = keyNotch; // you specify the notch, you get a callback function for your animation

                var currentQuestion = $($(nextButton).parents(_question)[0]),
                    nextQuestion    = currentQuestion.next(_question),
                    answerInputs    = currentQuestion.find('input:checked');

                // If response messaging has been disabled or moved to completion,
                // make sure we have an answer if we require it, let checkAnswer handle the alert messaging
                /*if (plugin.config.preventUnanswered && answerInputs.length === 0) {
                    return false;
                }*/

                if (nextQuestion.length) {
                    currentQuestion.fadeOut(300, function(){
                        nextQuestion.find(_prevQuestionBtn).show().end().fadeIn(500, kN(key,1));
                        if (!nextQuestion.find(_prevQuestionBtn).show().end().length) kN(key,1).apply (null, []); // 1st notch on key must be passed even if there's no "back" button
                    });
                } else {
                    kN(key,1).apply (null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
                    plugin.method.completeQuiz({callback: plugin.config.animationCallbacks.completeQuiz});
                }

                internal.method.turnKeyAndGo (key, options && options.callback ? options.callback : function () {});
            },

            // Go back to the last question
            backToQuestion: function(backButton, options) {
                var key, keyNotch, kN;
                key = internal.method.getKey (2); // how many notches == how many jQ animations you will run
                keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
                kN = keyNotch; // you specify the notch, you get a callback function for your animation

                var questionLI = $($(backButton).parents(_question)[0]),
                    responses  = questionLI.find(_responses);

                // Back to question from responses
                if (responses.css('display') === 'block' ) {
                    questionLI.find(_responses).fadeOut(300, function(){
                        questionLI.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
                        questionLI.find(_responses + ', ' + _response).hide();
                        questionLI.find(_answers).show();
                        questionLI.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
                        questionLI.find('input').prop('disabled', false);
                        questionLI.find(_answers).fadeIn(500, kN(key,1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
                        questionLI.find(_checkAnswerBtn).fadeIn(500, kN(key,2));
                        questionLI.find(_nextQuestionBtn).hide();

                        // if question is first, don't show back button on question
                        if (questionLI.attr('id') != 'question0') {
                            questionLI.find(_prevQuestionBtn).show();
                        } else {
                            questionLI.find(_prevQuestionBtn).hide();
                        }
                    });

                // Back to previous question
                } else {
                    var prevQuestion = questionLI.prev(_question);

                    questionLI.fadeOut(300, function() {
                        prevQuestion.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
                        prevQuestion.find(_responses + ', ' + _response).hide();
                        prevQuestion.find(_answers).show();
                        prevQuestion.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
                        prevQuestion.find('input').prop('disabled', false);
                        prevQuestion.find(_nextQuestionBtn).hide();
                        prevQuestion.find(_checkAnswerBtn).show();

                        if (prevQuestion.attr('id') != 'question0') {
                            prevQuestion.find(_prevQuestionBtn).show();
                        } else {
                            prevQuestion.find(_prevQuestionBtn).hide();
                        }

                        prevQuestion.fadeIn(500, kN(key,1));
                        kN(key,2).apply (null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
                    });
                }

                internal.method.turnKeyAndGo (key, options && options.callback ? options.callback : function () {});
            },
				
				getQuestionData: function(question_number) {
										//temporary
					//var question_number = 0;
					
					var question_data   = {};
					
					var the_question    = "";
					var correct_or_incorrect = "";
					var you_answered    = "";
					var correct_answer  = "";
					var the_explanation = "";
					
					var this_question_li = jQuery("div"+_element.replace("#/[^0-9]+/", "")+" div.quizArea ol.questions li#question"+question_number);
					var this_response_li = this_question_li.find("ul.responses li").filter(function() { return jQuery(this).css('display') == 'list-item'; });
					
					the_question    = this_question_li.find("h3").text().replace(/[0-9]+\./, "").trim();
					correct_or_incorrect = this_response_li.find("p.correct_or_incorrect span").text();
					
					you_answered    = this_response_li.find("div.the_answers_given").text();
					correct_answer  = this_response_li.find("div.valid_answers").text();
					the_explanation = this_response_li.find("i.explanation").text();
					//$(the_explanation).css('font-style', 'italicized');
					question_data["the_question"]    = the_question;
					question_data["correct_or_incorrect"] = correct_or_incorrect;
					question_data["you_answered"]    = you_answered;
					question_data["correct_answer"]  = correct_answer;
					question_data["the_explanation"] = the_explanation;
					
					console.table(question_data);
					
					return question_data;
					},

		      emailResults: function(name, score, levelText){
					var information = "";
					var correct_incorrect = ''

					for(i = 0 ; i < $('.question').length ; i++) {
						var question_data = plugin.method.getQuestionData(i);
						
					  if (question_data["correct_or_incorrect"] === "Correct"){
						  correct_incorrect = 'green'
						  } else {
							  correct_incorrect = 'red'
							  }
						  
						information += "<p style='padding-top:5px;'><b>Question #" + (i+1) + ":</b> " + question_data["the_question"];
						
						
						information += "<span style='color:" + correct_incorrect + "'>";
						information += "<br>";
						information += "<b>" + question_data["correct_or_incorrect"] + "</b></span><br>";
						information += question_data["you_answered"] + "<br>";
						information += question_data["correct_answer"];
						information += "<br>";
						information += "<i>Explanation: " + question_data["the_explanation"] + "</i></p>";
					}
					var data = {
						name: name, //form input for name
						score: score, 
						leveltext: levelText,
						information: information
						}
					jQuery.ajax({
						type: 'POST',
						dataType: "html",
						url: '/vnprodcheck/dev/emailResults',
						data:  data ,
						beforeSend : function (data) {
							//jQuery("#email_results").html("<i>loading...</i>");
							},
						success: function (data) {
							//jQuery("#email_results").html(data);
							}
						});
					},
					
            // Hides all questions, displays the final score and some conclusive information
            completeQuiz: function(options) {
					$('.review div hr:last-child').hide();
					 plugin.method.stopTimer();
                var key, keyNotch, kN;
                key = internal.method.getKey (1); // how many notches == how many jQ animations you will run
                keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
                kN = keyNotch; // you specify the notch, you get a callback function for your animation

                var score        = $(_element + ' ' + _correct).length,
                    displayScore = score;
                if (plugin.config.scoreAsPercentage) {
                    displayScore = (score / questionCount).toFixed(2)*100 + "%";
                }

                if (plugin.config.disableScore) {
                    $(_quizScore).remove()
                } else {
                    $(_quizScore + ' span').html(plugin.config.scoreTemplateText
                        .replace('%score', displayScore).replace('%total', questionCount));
                }

                if (plugin.config.disableRanking) {
                    $(_quizLevel).remove()
                } else {
                    var levels    = [
                                        quizValues.info.level1, // 80-100%
                                        quizValues.info.level2, // 60-79%
                                        quizValues.info.level3, // 40-59%
                                        quizValues.info.level4, // 20-39%
                                        quizValues.info.level5  // 0-19%
                                    ],
                        levelRank = plugin.method.calculateLevel(score),
                        levelText = $.isNumeric(levelRank) ? levels[levelRank] : '';

                    $(_quizLevel + ' span').html(levelText);
                    $(_quizLevel).addClass('level' + levelRank);
						  plugin.method.emailResults(jQuery('#namefield').val(), score, levelText);
                }
					 
                $quizArea.fadeOut(300, function() {
                    // If response messaging is set to show upon quiz completion, show it now
                    if (plugin.config.completionResponseMessaging) {
                        $(_element + ' .button:not(' + _tryAgainBtn + '), ' + _element + ' ' + _questionCount).hide();
                        $(_element + ' ' + _question + ', ' + _element + ' ' + _answers + ', ' + _element + ' ' + _responses).show();
                        $quizResults.append($(_element + ' ' + _questions)).fadeIn(500, kN(key,1));
                    } else {
                        $quizResults.fadeIn(500, kN(key,1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
                    }
                });

                internal.method.turnKeyAndGo (key, options && options.callback ? options.callback : function () {});

                if (plugin.config.events &&
                        plugin.config.events.onCompleteQuiz) {
                    plugin.config.events.onCompleteQuiz.apply (null, [{
                        questionCount: questionCount,
                        score: score
                    }]);
                }
            },

            // Compares selected responses with true answers, returns true if they match exactly
            compareAnswers: function(trueAnswers, selectedAnswers, selectAny) {
                if ( selectAny ) {
                    return $.inArray(selectedAnswers[0], trueAnswers) > -1;
                } else {
                    // crafty array comparison (http://stackoverflow.com/a/7726509)
                    return ($(trueAnswers).not(selectedAnswers).length === 0 && $(selectedAnswers).not(trueAnswers).length === 0);
                }
            },

            // Calculates knowledge level based on number of correct answers
            calculateLevel: function(correctAnswers) {
                var percent = (correctAnswers / questionCount).toFixed(2),
                    level   = null;

                if (plugin.method.inRange(0, 0.20, percent)) {
                    level = 4;
                } else if (plugin.method.inRange(0.21, 0.40, percent)) {
                    level = 3;
                } else if (plugin.method.inRange(0.41, 0.60, percent)) {
                    level = 2;
                } else if (plugin.method.inRange(0.61, 0.80, percent)) {
                    level = 1;
                } else if (plugin.method.inRange(0.81, 1.00, percent)) {
                    level = 0;
                }

                return level;
            },

            // Determines if percentage of correct values is within a level range
            inRange: function(start, end, value) {
                return (value >= start && value <= end);
            }
        };
	     plugin.init = function() {
            // Setup quiz
			
            plugin.method.setupQuiz.apply (null, [{callback: plugin.config.animationCallbacks.setupQuiz}]);

            // Bind "start" button
            $quizStarter.on('click', function(e) {
                e.preventDefault();

                if (!this.disabled && !$(this).hasClass('disabled')) {
                    plugin.method.startQuiz.apply (null, [{callback: plugin.config.animationCallbacks.startQuiz}]);
                }
            });

            // Bind "try again" button
            $(_element + ' ' + _tryAgainBtn).on('click', function(e) {
                e.preventDefault();
                plugin.method.resetQuiz(this, {callback: plugin.config.animationCallbacks.resetQuiz});
            });

            // Bind "check answer" buttons
            $(_element + ' ' + _checkAnswerBtn).on('click', function(e) {
                e.preventDefault();
                plugin.method.checkAnswer(this, {callback: plugin.config.animationCallbacks.checkAnswer});
            });

            // Bind input fields buttons
				$(_element + " ul.answers input[type$='text']").on('keypress', function(e) {
					var key_pressed = e.which || e.keyCode;  // Use either which or keyCode, depending on browser support
					if (key_pressed === 13){
						console.log("Enter was pressed!");
						$(this).parent().parent().parent().find('a.checkAnswer').trigger('click');
						}
					
					});
					
				$('#namefield').keypress(function(e){
				  var key_pressed = e.which || e.keyCode;
				  if (key_pressed == 13){
						e.preventDefault();
				      $('a.button.startQuiz').trigger('click')
				      }
				   });
   

            // Bind "back" buttons
            $(_element + ' ' + _prevQuestionBtn).on('click', function(e) {
                e.preventDefault();
                plugin.method.backToQuestion(this, {callback: plugin.config.animationCallbacks.backToQuestion});
            });

            // Bind "next" buttons
            $(_element + ' ' + _nextQuestionBtn).on('click', function(e) {
                e.preventDefault();
                plugin.method.nextQuestion(this, {callback: plugin.config.animationCallbacks.nextQuestion});
            });

            // Accessibility (WAI-ARIA).
            var _qnid = $element.attr('id') + '-name';
            $quizName.attr('id', _qnid);
            $element.attr({
              'aria-labelledby': _qnid,
              'aria-live': 'polite',
              'aria-relevant': 'additions',
              'role': 'form'
            });
            $(_quizStarter + ', [href = "#"]').attr('role', 'button');
        };
        plugin.init();
    }

    $.fn.slickQuiz = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('slickQuiz')) {
                var plugin = new $.slickQuiz(this, options);
                $(this).data('slickQuiz', plugin);
            }
        });
    };

})(jQuery);
