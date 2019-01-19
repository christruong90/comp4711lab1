var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];

		function createAlphabet() {
			var AlphabetTable = document.createElement("table")
			var tableRow = document.createElement("TR");
			for (let i = 0; i < 13; i++) {
				let tableCell = document.createElement("TD")
				let btn = document.createElement("BUTTON");
				btn.onclick = function() {
					alert(alphabet[i]);
				}
				let letter = document.createTextNode(alphabet[i]);
				btn.appendChild(letter);
				tableCell.appendChild(btn);
				tableRow.appendChild(tableCell);
			}
			var tableRow2 = document.createElement("TR");
			for (let i =13; i < 26; i++) {
				let tableCell = document.createElement("TD");
				let btn = document.createElement("BUTTON");
				btn.onclick = function() {
					alert(alphabet[i]);
				}
				let letter = document.createTextNode(alphabet[i]);
				btn.appendChild(letter);
				tableCell.appendChild(btn);
				tableRow2.appendChild(tableCell);
			}

			AlphabetTable.appendChild(tableRow);
			AlphabetTable.appendChild(tableRow2);
			// document.body.appendChild(AlphabetTable);
			var partA = document.getElementById("parta");
			partA.appendChild(AlphabetTable);
		}
		createAlphabet();