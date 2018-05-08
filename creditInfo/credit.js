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
    var formFields = formData.split(/[&=]/g);

    document.forms.order.elements.d.value = formFields[1];
    document.forms.order.elements.a.value = formFields[2];
    document.forms.order.elements.b.value = formFields[3];
    document.forms.order.elements.c.value = formFields[4];




    c = a * b;
    d = c + 4.99;
    document.getElementById('Cost').value = Math.max(Math.round(d * 100) / 100);
});