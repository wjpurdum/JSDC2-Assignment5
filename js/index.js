//Model

var input = [
	
	{
		value: 0,
		'above one-hundred': false,
		'below-zero': false
	},


//View - needs to reference template and compile - takes list up top and turns it into html
function renderNumber() {
$('#Number').html(input);
var source = $('#countly-template').html();
var template = Handlebars.compile(source);

}

//Controller - listens for events and lists functions that need to happen 


function setup() {
	
	renderNumber();

	$('#countUp').on('click', addOne);
	$('#countDown').on('click', subtractOne);
	$('#Reset').on('click', setToZero);
}

function addOne() {
	var input = input += 1;
	if input > 100 {
		input.above one-hundred = true;
	}
	else if input <0 {
		input.below-zero = true;
	}

}

function subtractOne() {
	var input = input -= 1;
	
	if input > 100 {
		input.above one-hundred = true;
	}
	else if input < 0 {
		input.below-zero = true;
	}

	renderNumber();
}

function setToZero() {
	var input = 0;
	renderNumber();

}

};

$(document).ready(setup);






