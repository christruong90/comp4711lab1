
function retrieveQuiz() {
	let savedQuiz = localStorage.getItem('quiz')
	let parsedQuiz = JSON.parse(savedQuiz)

	if (Array.isArray(parsedQuiz)) {
		return parsedQuiz;
	} else {
		alert("QUIZ NOT FOUND")
	}

	
}

function displayQuiz() {
	let quiz = retrieveQuiz();
	let form = document.createElement('form')
	let space = document.createElement('br')

	form.setAttribute('id', 'quiz')

	for (let x =0; x< quiz.length; x++) {
		//create and append question
		let space = document.createElement('br')
		let q = document.createElement('p');
		q.setAttribute('id', 'question' + x)
		q.setAttribute('class', 'boldQ')
		let question =  document.createTextNode(quiz[x].questions)
		
		q.appendChild(question)
		q.appendChild(space)

		form.appendChild(q)

		for (y=0; y< 4; y++) {
			// create and append radio buttons
			let space = document.createElement('br')
			let r = document.createElement('input')
			r.setAttribute('type', 'radio')
			r.setAttribute('name', x)
			r.setAttribute('id', 'radio' + x + y)
			r.value = quiz[x].choices[y]
			
			//create and append choices
			let a = document.createElement('label')
			let answer = document.createTextNode(quiz[x].choices[y])
			a.appendChild(answer)
			a.setAttribute('id', "choice" + x + y)
			

			form.appendChild(r)
			form.appendChild(a)
			form.appendChild(space)
		}
	
		

	}

	let button = document.createElement('button')
	button.setAttribute('type', 'button')
	button.setAttribute('id', 'submitQuiz')
	button.setAttribute('onclick', 'validateAnswers()')
	let buttonText = document.createTextNode("Submit Quiz")
	button.appendChild(buttonText)

	let link = document.createElement('a')
	// link.setAttribute('href', 'admin.html')
	link.href = 'admin.html'
	let returnBtn =document.createElement('button')
	returnBtn.setAttribute('type', 'button')
	returnBtn.setAttribute('id', 'goAdmin')
	let returnText = document.createTextNode("Return To Admin Page")
	returnBtn.appendChild(returnText)
	link.appendChild(returnBtn)
	

	
	form.appendChild(space)
	form.appendChild(button)
	form.appendChild(link)

	document.getElementById('quizDisplay').appendChild(form)

	



	
}

function validateAnswers() {
	let key = answerKey()
	let score = 0
	let quiz = retrieveQuiz()
	
	for (let b =0; b < quiz.length; b++) {
		for (let d =0; d < 4; d++) {
			if(quiz[b].answer == d) {
				let a = document.getElementById('choice'+ b + d)
				let highlight = document.createElement('span')
				highlight.setAttribute('class', 'hColor')
				highlight.innerHTML = a.innerHTML

				a.innerHTML = ""
				a.appendChild(highlight)
			}

			let selRadio = document.getElementById('radio' + b + d)
			if (selRadio.checked) {
				let rb = document.getElementById('choice'+ b + d)
				let selectHighlight = document.createElement('span')
				selectHighlight.setAttribute('class', 'selectColor')
				selectHighlight.innerHTML = rb.innerHTML

				rb.innerHTML = ""
				rb.appendChild(selectHighlight)
			}
		}
	}

	for (let x = 0; x < key.length; x++) {
		let check = document.getElementsByName(x);
		if (check[key[x]].checked) {
			score++;
		}
	}


	
	alert("Your Score is: " + score + '/' + answerKey().length)
}

function answerKey() {
	let quiz = retrieveQuiz()
	let key = []
	for (let u =0; u <quiz.length; u++) {
		key.push(quiz[u].answer)
	}
	return key;
}
answerKey()
displayQuiz()

