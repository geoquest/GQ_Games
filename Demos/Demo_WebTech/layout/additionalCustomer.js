/*
 * Eigene JavaScript-Dateien, wie z.B. diese, können in customer.js eingebunden werden. Die Funktionsweise wird dort erklärt.
 *
 */
 
function anyFunction() {
	tag = document.getElementById("Test").firstChild;
	tag.data = tag.data + "additionalCustomer.js Ausgabe   ";
	alert("JavaScriptAlert!!!");
}

anyFunction();