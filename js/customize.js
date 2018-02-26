const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function log(msg) {
	console.log(msg);
}

function handleCheck() {
	
	this.nextSibling.nextSibling.style.textDecoration = "line-through";
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));
