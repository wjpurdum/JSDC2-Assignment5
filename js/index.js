//Model

var input =
// changed value to be a property
    {
        'value': 0,
        'aboveOneHundred': false,
        'belowZero': false
    }
  //removed comma


//View - needs to reference template and compile - takes list up top and turns it into html
function renderNumber() {
$('#Number').html(input.value);
var source = $('#countly-template').html();
//removed input on click will render each individually
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
     input.value = input.value + 1 ;
    if (input > 100) {
  // put conditions in parenthesis
        input.aboveOneHundred = true;
    }
    else if (input < 0) {
        input.belowZero = true;
    }
  renderNumber();
};

function subtractOne() {
    input.value = input.value - 1;
    if (input.value > 100) {
  //put conditions in parenthesis
        input.aboveOneHundred = true;
    }
    else if (input < 0) {
        input.belowZero = true;
    }

    renderNumber();
}

function setToZero() {
    input.value = 0;
    renderNumber();
//removed additional parenthesis
};

$(document).ready(setup);