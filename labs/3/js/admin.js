
let jsonData = []
let count = 0;

function addQ(){
	
	let nameInput = document.getElementById("questionBox").value
	let choicesArray =[]
	let radios = document.getElementsByName("choices")
	let answer
	jsonElement = {}

	
	for (let i = 0; i < 4; i++) {
		choicesArray[i] = document.getElementById("choice" + i).value
		if (radios[i].checked) {
			// alert("choice " + i)
			answer = i
		}
	}
	
	jsonElement.id = count;
	jsonElement.questions = nameInput
	jsonElement.choices = choicesArray
	jsonElement.answer = answer

	jsonData.push(jsonElement)
	count++;
	
	newForm()
	
}


function newForm() {
	let before = document.getElementById("questionList")
	before.innerHTML = ''

	for (let x = 0; x < jsonData.length; x++) {
		let space1 = document.createElement('br')
		
		let f = document.createElement("form");
		f.setAttribute("id", "addedQ");

		let q = document.createElement('input');
		// let testQ = document.createTextNode(jsonData[x].questions)
		q.setAttribute('type', 'text')
		q.setAttribute('id', 'updateQ' + x)
		q.setAttribute('class', 'updateQclass')
		q.value = jsonData[x].questions
		// q.appendChild()

		f.appendChild(q)
		f.appendChild(space1)
		f.appendChild(space1)

		for (let y = 0; y < 4; y++) {
			let r = document.createElement("input");
			r.setAttribute('type', 'radio');
			r.setAttribute('name', 'choice');
			r.setAttribute('id', 'updateRadio' + x + y)

			let choice = jsonData[x].choices[y]


			// console.log(choice)
			let b = document.createElement('input')
			b.setAttribute('type', 'text')
			b.setAttribute('id', 'editInput' + x + y)
			b.setAttribute('class', 'choiceClass')
			b.value = choice

			// r.appendChild(b)
			f.appendChild(r)
			f.appendChild(b)
			let space = document.createElement('br')
			f.appendChild(space)

			if (jsonData[x].answer == y) {
				r.checked = true;
			}
			
		}

		let update = document.createElement('button')
		update.setAttribute('type', 'button')
		update.setAttribute('onclick', 'updateElement(' + x + ')')
		let updateText = document.createTextNode("UPDATE")
		update.appendChild(updateText)


		let del = document.createElement('button')
		del.setAttribute('type', 'button')
		del.setAttribute("onclick", "deleteElement(" + x + ")")
		let delText = document.createTextNode("REMOVE QUESTION")
		del.appendChild(delText)


		f.appendChild(del)
		f.appendChild(update)

		
		// console.log
		let space = document.createElement('br')
		document.getElementById('questionList').appendChild(f);
		document.getElementById('questionList').appendChild(space);

	}

	// document.getElementById('testArea').innerHTML =""
	// document.getElementById("testArea").append(JSON.stringify(jsonData))
}

function deleteElement(index) {
	jsonData.splice(index, 1)
	newForm()

	// document.getElementById('testArea').innerHTML =""
	// document.getElementById("testArea").append(JSON.stringify(jsonData))
}

function updateElement(index) {
	// jsonData[index].splice()
	jsonData[index].questions = document.getElementById('updateQ' + index).value

	for (let x = 0; x < 4; x++) {
		jsonData[index].choices[x] = document.getElementById('editInput' + index + x).value

		if(document.getElementById('updateRadio' + index + x).checked) {
			jsonData[index].answer = x;
		}
	}

	newForm()

	// document.getElementById('testArea').innerHTML =""
	// document.getElementById("testArea").append(JSON.stringify(jsonData))
}


function storeQuiz() {
	let jsonQuiz = JSON.stringify(jsonData)
	// console.log(jsonQuiz)
	localStorage.setItem('quiz', jsonQuiz)
}

function clearStorage() {
	localStorage.clear()
}





