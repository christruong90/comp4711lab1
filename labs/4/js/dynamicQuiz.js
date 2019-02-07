var quiz = [
		{
			question:"<p> 1) What will the following fullName function output when called?</p> <br>" +
			"var person = {<br>" +
			  "&emsp;firstName: \"John\",<br>" +
			  "&emsp;lastName : \"Doe\",<br>" +
			  "&emsp;id       : 5566,<br>" +
			  "&emsp;fullName : function() {<br>" +
			   "&emsp;return this.firstName + \" \" + this.lastName;<br>" +
			  "&emsp;}<br>" +
			"};<br>",
			choices: ["<input type=\"radio\" name=\"q1\">Doe John<br>", "<input type=\"radio\" name=\"q1\">5566<br>", 
			"<input type=\"radio\" name=\"q1\">John Doe<br>", "<input type=\"radio\" name=\"q1\">Your name<br>"],
			answer: 2
		},
		{
			question:"<p> 2) What does \'this\' refer to in a function?</p>",
			choices: ['<input type=\"radio\" name=\"q2\">refers to owner object<br>', '<input type=\"radio\" name=\"q2\">refers to any object available<br>', 
			'<input type=\"radio\" name=\"q2\">refers to a global object<br>', '<input type=\"radio\" name=\"q2\">refers to element that received the event<br>'],
			answer: 2		
		},
		{
			question:"<p> 3) What will \'this\' return under strict mode for the following function?</p>" +
				'function myFunction() {<br>' +
		  		'&emsp;return this;<br>' +
				'}'
			,
			choices:["<input type=\"radio\" name=\"q3\"> This <br>",
					"<input type=\"radio\" name=\"q3\"> The global object <br>",
					"<input type=\"radio\" name=\"q3\"> Error <br>",
					"<input type=\"radio\" name=\"q3\"> Undefined <br>"],
			answer: 3
		},
		{
			question:"<p> 4) What does \'this\' refer to in event handlers? <p>",
			
			choices:["<input type=\"radio\" name=\"q4\"> Global object <br>", "<input type=\"radio\" name=\"q4\"> Undefined <br>",
					"<input type=\"radio\" name=\"q4\"> Person object <br>", "<input type=\"radio\" name=\"q4\"> HTML element receiving event <br>" ],
			answer: 3 
		}, 
		{ 
			question:"<p>5) What do methods call() and apply() refer to for \'this\'?</p>",
			choices: ["<input type=\"radio\" name=\"q5\"> Owner object<br>",
					"<input type=\"radio\" name=\"q5\"> Global object <br>", 
					"<input type=\"radio\" name=\"q5\"> Undefined <br>",
					"<input type=\"radio\" name=\"q5\"> Any Object <br>"],
			answer: 3

		},
		{ 
			question:"<p>6) What does the following code snippet do?</p>" + 
					"document.getElementsByTagName(\"H1\")[0].setAttribute(\"class\", \"democlass\");"
					,
			choices: ["<input type=\"radio\" name=\"q6\"> Gives the h1 element(s) a class=democlass attribute <br>",
					"<input type=\"radio\" name=\"q6\"> Creates an h1 element with class=democlass attribute <br>", 
					"<input type=\"radio\" name=\"q6\"> Undefined <br>",
					"<input type=\"radio\" name=\"q6\"> Deletes all h1 elements <br>"],
			answer: 0

		},
		{ 
			question:"<p>7) What is not a type of CSS styling technique? </p>" 
					,
			choices: ["<input type=\"radio\" name=\"q7\"> Internal styling <br>",
					"<input type=\"radio\" name=\"q7\"> Inline styling <br>", 
					"<input type=\"radio\" name=\"q7\"> Linear Styling <br>",
					"<input type=\"radio\" name=\"q7\"> External syling <br>"],
			answer: 1
		},
		{ 
			question:"<p>8) Javascript supports how many  types of loops? </p>",
			choices: ["<input type=\"radio\" name=\"q8\"> 2 <br>",
					"<input type=\"radio\" name=\"q8\"> 8 <br>", 
					"<input type=\"radio\" name=\"q8\"> 4 <br>",
					"<input type=\"radio\" name=\"q8\"> 1 <br>"],
			answer: 2
		},  
		{ 
			question:"<p>9) What is a HTML DOM event? </p>",
			choices: ["<input type=\"radio\" name=\"q9\"> When a 404 error occurs in the HTML page <br>",
					"<input type=\"radio\" name=\"q9\"> When an HTML page is being ran locally on a machine <br>", 
					"<input type=\"radio\" name=\"q9\"> Allows Javascript to register different event handlers in an HTML document <br>",
					"<input type=\"radio\" name=\"q9\"> An undefined error <br>"],
			answer: 3
		},
		{ 
			question:"<p>10) What does addEventListener() method do? </p>",
			choices: ["<input type=\"radio\" name=\"q10\"> Sets an attribute to an HTML element <br>",
					"<input type=\"radio\" name=\"q10\"> Attaches an event handler to the specified element <br>", 
					"<input type=\"radio\" name=\"q10\"> Sets a Count timer on a button <br>",
					"<input type=\"radio\" name=\"q10\"> An undefined error <br>"],
			answer: 1
		}
		];
		
	var quizKey = [1,2,3,4,3]

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