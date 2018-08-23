//todo Fix errors
//todo add selection lists
//todo add more 
//todo Add some styles for the throw


"use strict";
var formValidity = true;

//Function to validate the form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    validateRequired();
}

//Function to validate the input fields
function validateRequired() {
    var collectInput = document.getElementsByTagName("input")
    var errorDiv = document.getElementById("errorText");
    var currentElementCount = collectInput.length;
    var validity = true;
    var currentElement;

    //Looping though the inputs and coloring the blanks the color . if not blank leave/color white.
    try {
        for (let i = 0; i < currentElementCount; i++) {
            currentElement = collectInput[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                validity = false;
            } else {
                currentElement.style.background = "rgb(255,255,255)";
            }
        }

        //If the user forgots to fill out a field, then spit out this message
        if (validity === false) {
            throw "Please enter the rest of the form";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            formValidity = true;
        }      
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }

    //If the form has no errors submit.
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }


    //This part of the code validates the Radio buttons
    var radio = document.getElementsByName("YoN");
    if (!radio[0].checked && !radio[1].checked) {
        for (var i = 0; i < radio.length; i++) {
            radio[i].style.outline = "1px solid rgb(255,0,0)";
        }
        validity = false;
    } else {
        for (var i = 0; i < radio.length; i++) {
            radio[i].style.outline = "";
        }
    }


    //This part of the code validates the Selection list
    var validity = true;
    var select = document.getElementsByName("gender");
    var selectAmountLength = select.length;
    currentElement = select[i];
    if (!select[0].value && !select[1].value) {
        for (var i = 0; i < selectAmountLength; i++) {
            currentElement.style.outline = "1px solid rgb(255,0,0)";
        }
        validity = false;
    } else {
        for (var i = 0; i < selectAmountLength; i++) {
            currentElement.style.outline = "";
        }
    }

}

//An function that would call all the other functions
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false)
    } else {
        form.addEventListener("onsubmit", validateForm)
    }
}

addEventListener("load", createEventListeners);