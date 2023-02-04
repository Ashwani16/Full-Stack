const greeting = document.getElementById("greeting");
const changeMessage = document.getElementById("changeMessage");

changeMessage.addEventListener("click", function() {
  greeting.innerHTML = "I Love You!";
});