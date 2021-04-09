var showButton1 = document.getElementById("showButton1");
var hiddenContent1 = document.getElementById("hiddenContent1");
showButton1.addEventListener("click", showFunction1);

var showButton2 = document.getElementById("showButton2");
var hiddenContent2 = document.getElementById("hiddenContent2");
showButton2.addEventListener("click", showFunction2);

var showButton3 = document.getElementById("showButton3");
var hiddenContent3 = document.getElementById("hiddenContent3");
showButton3.addEventListener("click", showFunction3);

var showButton4 = document.getElementById("showButton4");
var hiddenContent4 = document.getElementById("hiddenContent4");
showButton4.addEventListener("click", showFunction4);

function showFunction1() {
  hiddenContent1.classList.toggle("hidden-content");
}
function showFunction2() {
  hiddenContent2.classList.toggle("hidden-content");
}
function showFunction3() {
  hiddenContent3.classList.toggle("hidden-content");
}
function showFunction4() {
  hiddenContent4.classList.toggle("hidden-content");
}
