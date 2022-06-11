// console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);




function mouseOver(event) {
	event.preventDefault()

	alert('Everytime you think of your future, you are creating a possible direction.')
}

let img = document.querySelector('#mouse-over')

img.addEventListener('mouseover', mouseOver)