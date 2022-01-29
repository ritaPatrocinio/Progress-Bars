const Finish = document.getElementById("Finish");
const p = document.getElementsByTagName("p");
const box = document.getElementsByClassName("box");

Finish.addEventListener('click', FinishEventHandler);

function FinishEventHandler(event) {
    if(Finish.innerHTML === "Refresh"){
        Array.prototype.forEach.call(p, ps => ps.innerHTML = "50%");
        Array.prototype.forEach.call(box, b => b.style.width = "50%");
        Finish.innerHTML = "Finish"
    }
    else {
        Array.prototype.forEach.call(p, ps => ps.innerHTML = "100%");
        Array.prototype.forEach.call(box, b => b.style.width = "100%");
        Finish.innerHTML = "Refresh"
    }   
}