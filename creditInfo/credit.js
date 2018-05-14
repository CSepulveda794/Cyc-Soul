/*
     Author: Michael Wood
     Date:  4.26.18
     Filename: Credit.css 

*/

// Retrieve
// window.addEventListener("load", function() {
//     var urlString = "file:///Users/michaelwood/Documents/Cyc-Soul/creditInfo/creditInfo.html?adress=&price=16.50&TOTAL=54.49";
//     urlParams = parseURLParams(urlString);

//     // retrive the field/value pairs from the url
//     // var formData = location.search.slice(1);
//     // formData = formData.replace(/\+/g, " ");
//     // formData = decodeURIComponent(formData);

//     // d = document.getElementById('TOTAL');
//     // B = document.forms.order.elements.d.value;


//     // document.getElementById("TOTAL") = d;
//     // window.alert(d);
//     // document.getElementById('Cost').value = Math.max(Math.round(d * 100) / 100);


//     // alert(B);
// });
// window.addEventListener("load", parseURLParams());

// function parseURLParams(url) {
//     var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
//     var url = new URL(url_string);
//     var c = url.searchParams.get("c");
//     console.log(c);
// }
window.addEventListener("load", Cost);
    
function Cost() {
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("Cost").value = obj.total;
}
