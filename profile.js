function checkColor(event) {
	event.preventDefault();
	
	alert('Maroon');
}
let check = document.querySelector('#color');
check.addEventListener('click', checkColor);




function checkPlace(event) {
	event.preventDefault();
	
	alert('Outdoors');
}
let check2 = document.querySelector('#place');
check2.addEventListener('click', checkPlace);




function checkRitual(event) {
	event.preventDefault();
	
	alert('Hot Bath');
}
let check3 = document.querySelector('#ritual');
check3.addEventListener('click', checkRitual);



function randomTravel(event){
	event.preventDefault();
	
	alert('LAKE TAHOE!!!');
}
let travel = document.querySelector('#travel')
travel.addEventListener('click', randomTravel)

