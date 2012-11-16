/*
 * In dieser Datei können eigene JavaScript-Funktionen definiert werden oder zusätzliche JavaScript-Dateien nachgeladen werden.
 *
 * Die Funktion loadJSFile("fileName.js") wird von der GeoQuest-App. zur Verfügung gestellt, um zusätzliche JavaScript-Dateien nachzuladen.
 * Als Parameter wird der Dateiname als String übergeben.
 *
 */
 
loadJSFile("additionalCustomer.js");

function someFunction() {
	document.getElementById("Test").style.backgroundColor="white";
	tag = document.getElementById("Test").firstChild;
	tag.data = tag.data + "customer.js Ausgabe   ";
}

someFunction();
