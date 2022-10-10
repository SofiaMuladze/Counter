
let counter = 0;

createElement("h2","counter", counter, "value");
createElement("button","minusBtn", "-", "buttons");
createElement("button","plusBtn", "+", "buttons");
createElement("button","resetBtn", "reset", "reset");

var wrapper = document.getElementById("wrapper");
wrapper.onclick = function(event) {
    let target = event.target; 
    if (target.id == 'minusBtn') count(-1); 
    if (target.id == 'plusBtn') count(1); 
    if (target.id == 'resetBtn') count(0); 
};

function createElement(elementTag, elementId, elementValue, appendToElement) {
    let element = document.createElement(elementTag);
    element.id = elementId;
    element.innerHTML = elementValue;
    document.getElementById(appendToElement).appendChild(element);
}


function count(value) {
    if (value == 0) {
        counter = 0
    } else {
        counter = counter + value
    }
    document.getElementById("counter").innerHTML = counter;
}

