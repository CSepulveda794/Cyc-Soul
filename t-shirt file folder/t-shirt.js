document.getElementById("button1").onclick = function() {
    var image = document.getElementById("black");
    image.src = "../products/black-tee.png"
}

document.getElementById("button2").onclick = function() {
    var image = document.getElementById("black");
    image.src = "../products/grey-tee.png"
}

document.getElementById("button3").onclick = function() {
    var image = document.getElementById("black");
    image.src = "../products/sports-grey-tee.png"
}

document.getElementById("qty").onclick = function() {
    a = document.getElementById('qty').value;
    b = document.getElementById('price').value;
    c = a * b;
    d = c + 4.99;

    document.getElementById('TOTAL').value = Math.max(Math.round(d * 100) / 100);



}