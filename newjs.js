function rightornot() {
    var x=document.getElementById("2333").value;
    if (x == "Running"){
        alert("wrong!")
    }else if (x == "Hiking"){
        alert("Right!")
    }else if (x == "Ball Games"){
        alert("Right")
    }else if (x == "Video Games"){
        alert("Wrong")
    }

}

function right() {
    alert("right!!!")
}

function wrong() {
    alert("wrong!!!")
}

function display() {
    document.getElementById("time").innerHTML=Date();
}