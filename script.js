function clearip() {
    document.getElementById("input").value = "";
}

function add() {
    var text = document.getElementById("input").value;
    var btn = document.createElement("BUTTON");
    btn.innerHTML = text;
    btn.onclick = function () {
        this.parentElement.removeChild(this);
    };
    document.getElementById("list").appendChild(btn);
    clearip()
}