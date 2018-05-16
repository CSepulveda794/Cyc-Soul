document.getElementById("qty").onclick = function() {
    a = document.getElementById('qty').value;
    b = document.getElementById('price').value;
    c = a * b;
    d = c + 4.99;

    document.getElementById('TOTAL').value = Math.max(Math.round(d * 100) / 100);



}