"use strict";
const inputMail = document.getElementById("inputMail");
const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function regex() {
    mailRegex.test(inputMail.value) ? alert("E-mail válido") : alert("E-mail inválido");
}
