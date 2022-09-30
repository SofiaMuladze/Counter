
let countLabel = document.createElement("h2");
let counter = 0;
countLabel.innerHTML = counter;
document.getElementById("value").appendChild(countLabel);

let minusBtn = document.createElement("button");
minusBtn.innerHTML = "-";
document.getElementById("buttons").appendChild(minusBtn);

let vLine = document.createElement("div");
vLine.className = "vl";
document.getElementById("buttons").appendChild(vLine);

let plusBtn = document.createElement("button");
plusBtn.innerHTML = "+";
document.getElementById("buttons").appendChild(plusBtn);

let resetBtn = document.createElement("button");
resetBtn.innerHTML = "reset";
document.getElementById("reset").appendChild(resetBtn);

plusBtn.addEventListener("click", () => count(1))
minusBtn.addEventListener("click", () => count(-1))
resetBtn.addEventListener("click", () => count(0))

function count(value) {
    if(value == 0) {
        counter = 0
    } else {
        counter = counter + value
    }
    countLabel.innerHTML = counter;
}

