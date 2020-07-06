var nome = prompt("Tuo Nome");
var cognome = prompt("Tuo Cognome");
var favColour = prompt("Tuo colore preferito");
var secretPsw = nome + cognome + favColour + 19 ;


document.getElementById('secretPsw').innerHTML = 'La tua password molto insicura e\':' + " " + secretPsw;

