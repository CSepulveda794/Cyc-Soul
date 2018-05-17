document.getElementById("button1").onclick = function () {
    var image = document.getElementById("hat");
    image.src = "../products/hat1.png";
}

document.getElementById("button2").onclick = function () {
    var image = document.getElementById("hat");
    image.src = "../products/hat2.png";
}


document.getElementById("qty").onclick = function() {
    a = document.getElementById('qty').value;
    b = document.getElementById('price').value;
    c = a * b;
    d = c + 4.99;
    document.getElementById('TOTAL').value = Math.max(Math.round(d * 100) / 100);

    myObj = { "total": d, };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

}