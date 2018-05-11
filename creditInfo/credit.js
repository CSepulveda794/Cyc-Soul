/*
     Author: Michael Wood
     Date:  4.26.18
     Filename: Credit.css 

*/

// Retrieve
window.addEventListener("load", function() {
    // retrive the field/value pairs from the url
    var formData = location.search.slice(1);
    formData = formData.replace(/\+/g, " ");
    formData = decodeURIComponent(formData);

    d = document.getElementById('TOTAL');
    B = document.forms.order.elements.d.value;


    document.getElementById("TOTAL") = d;
    window.alert(d);
    document.getElementById('Cost').value = Math.max(Math.round(d * 100) / 100);


    alert(B);
});