function displayDate(){
	
	let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("test1").innerHTML = time;

    
}

displayDate()