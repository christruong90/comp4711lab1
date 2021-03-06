var quiz = [
		{
			question:"<p> 1) Which code snippet can be used to create a new Date Object?</p>",
			choices: ["<input type=\"radio\" name=\"q1\"> <span style =\"color:purple\">new </span>Date()<br>",
			 "<input type=\"radio\" name=\"q1\"> <span style =\"color:purple\">new</span> date_create(\'2019-01-10\') <br>", 
			 "<input type=\"radio\" name=\"q1\"> <span style =\"color:purple\">new</span> current_date() <br>", 
			 "<input type=\"radio\" name=\"q1\"> <span style =\"color:purple\">new</span> get_date() <br>"],
			answer: 1
		},
		{
			question:"<p> 2) What is the difference between \"==\" and \"===\"?</p>",
			choices: ["<input type=\"radio\" name=\"q2\"> <span style =\"color:red\">\"==\"</span> is comparison and <span style =\"color:red\">\"===\"" +
				"</span> is assignment <br>", "<input type=\"radio\" name=\"q2\"> <span style =\"color:red\">\"==\"</span> is assignment and <span style =\"color:red\">\"" + "===\"" +
				"</span> is comparison <br>", "<input type=\"radio\" name=\"q2\"> <span style =\"color:red\">\"==\"</span> will check comparison after conversion of data types" +  
				"and <span style =\"color:red\">\"===\"</span> will compare without conversion of data type <br>", "<input type=\"radio\" name=\"q2\"> They are the both identical <br>"],
			answer: 2		
		},
		{
			question:"<p> 3) What will be the output of the following code snippet?</p><br>" +
				"<span style =\"color:green\">var </span> pens;<br>" +
				"pens = [<span style =\"color:red\">\"red\"</span>, <span style =\"color:red\">\"blue\"</span>, <span style =\"color:red\">\"green\"</span>," +
				"<span style =\"color:red\">\"orange\"</span>];<br><br>" +
				"<span style =\"color:green\">var </span> color = pens[2];<br>" +
				"<span style =\"color:blue\">console</span>.log(color);<br><br>",
			choices:["<input type=\"radio\" name=\"q3\"> \"red\" <br>",
					"<input type=\"radio\" name=\"q3\"> \"blue\" <br>",
					"<input type=\"radio\" name=\"q3\"> \"green\" <br>",
					"<input type=\"radio\" name=\"q3\"> \"orange\" <br>"],
			answer: 3
		},
		{
			question:"<p> 4) What will be the output of the following code snippet? if a = 1 and b = 2<p>" +
				"a == b ? <span style =\"color:blue\">console</span>.log(<span style =\"color:red\">\"Match\"</span>) : <span style =\"color:blue\">console</span>.log(<span style =\"" +
				"color:red\">\"No Match\"</span>);",
			
			choices:["<input type=\"radio\" name=\"q4\"> Match <br>", "<input type=\"radio\" name=\"q4\"> No Match <br>",
					"<input type=\"radio\" name=\"q4\"> Undefined <br>", "<input type=\"radio\" name=\"q4\"> NaN <br>" ],
			answer: 4 
		}, 
		{ 
			question:"<p>5) Consider the following code snippet:</p>" + 
		
				"<span style =\"color:orange\">function</span> <span style =\"color:teal\">myFunc</span>(yolo) {<br>" +
				"<span style =\"color:blue\">console</span>.log(<span style =\"color:red\">\"hello\"</span>)<br><br>" +

				"<span style =\"color:green\">var</span> x;<br>" +
			"}<br>" +
			"<span style =\"color:green\">var</span> y;<br><br>" +

			"What type of scope is <span style =\"color:green\">var</span> x and <span style =\"color:green\">var</span> y??<br><br>",
			choices: ["<input type=\"radio\" name=\"q5\"> <span style =\"color:green\">var</span> x = global scope and <span style =\"color:green\">var</span> y = local scope <br>",
					"<input type=\"radio\" name=\"q5\"> <span style =\"color:green\">var</span> y = global scope and <span style =\"color:green\">var</span> x = local scope <br>", 
					"<input type=\"radio\" name=\"q5\"> <span style =\"color:green\">var</span> x = block scope and <span style =\"color:green\">var</span> y = local scope <br>",
					"<input type=\"radio\" name=\"q5\"> <span style =\"color:green\">var</span> x = global scope and <span style =\"color:green\">var</span> y = block scope <br>"],
			answer: 5

		},
		{ 
			question:"<p>6) In a method, \"this\" refers to: </p>",
			choices: ["<input type=\"radio\" name=\"q6\"> Global Object<br>",
					"<input type=\"radio\" name=\"q6\"> any Object<br>", 
					"<input type=\"radio\" name=\"q6\"> undefined <br>",
					"<input type=\"radio\" name=\"q6\"> Owner Object <br>"],
			answer: 3

		},
		{ 
			question:"<p>7) In a function in strict mode,  \"this\" refers to: </p>",
			choices: ["<input type=\"radio\" name=\"q7\"> Global Object<br>",
					"<input type=\"radio\" name=\"q7\"> Element that received the event<br>", 
					"<input type=\"radio\" name=\"q7\"> Owner Object <br>",
					"<input type=\"radio\" name=\"q7\"> undefined <br>"],
			answer: 3

		},
		{ 
			question:"<p>8) In an event,  \"this\" refers to: </p>",
			choices: ["<input type=\"radio\" name=\"q8\"> Global Object<br>",
					"<input type=\"radio\" name=\"q8\"> Element that received the event<br>", 
					"<input type=\"radio\" name=\"q8\"> Owner Object <br>",
					"<input type=\"radio\" name=\"q8\"> undefined <br>"],
			answer: 1

		},
		{ 
			question:"<p>9) Alone, \"this\" refers to: </p>",
			choices: ["<input type=\"radio\" name=\"q9\"> Global Object<br>",
					"<input type=\"radio\" name=\"q9\"> Element that received the event<br>", 
					"<input type=\"radio\" name=\"q9\"> Owner Object <br>",
					"<input type=\"radio\" name=\"q9\"> undefined <br>"],
			answer: 0

		},
		{ 
			question:"<p>10) Methods like call(), and apply() can refer this to what type of object? </p>",
			choices: ["<input type=\"radio\" name=\"q10\"> Global Object<br>",
					"<input type=\"radio\" name=\"q10\"> owner objects<br>", 
					"<input type=\"radio\" name=\"q10\"> any object<br>",
					"<input type=\"radio\" name=\"q10\"> Undefined objects <br>"],
			answer: 2

		}
		];
		
	var quizKey = [1,2,3,4,5]

	function startQuiz(){
		var userInput = prompt("Number of Questions?");

		if(userInput >0 && userInput < 11) {
			for (let i = 0; i < userInput; i++) {
				document.writeln(quiz[i].question);
				// document.writeln("<br>")
				document.writeln("<form>")
				for (let j = 0; j < 4; j++) {
					document.writeln(quiz[i].choices[j])
				}
				document.writeln("</form>")
			}
		} else {
			alert("must be a number between 0 - 10")
			startQuiz();
		}
	}

	startQuiz();