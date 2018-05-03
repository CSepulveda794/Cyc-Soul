// addEventListener("load", changeColor);

// function changeColor() {
//     if (document.getElementById("button1").onclick() == true) {
//         alert("1")
//     } else if(document.getElementById("button2").onclick() == true){
//         alert("2")
//     } else if (document.getElementById("button3").onclick() == true){
//         alert("3")
//     }
// }

document.getElementById("button1").onclick = function () {
    var image = document.getElementById("black");
    image.src = "../products/black-tee.png"
}

document.getElementById("button2").onclick = function () {
    var image = document.getElementById("black");
    image.src = "../products/grey-tee.png"
}

document.getElementById("button3").onclick = function () {
    var image = document.getElementById("black");
    image.src = "../products/sports-grey-tee.png"
}