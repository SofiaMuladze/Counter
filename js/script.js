let count = 0;

document.getElementById("minusBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

 document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("plusBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}