const buttonLeft = document.getElementById("btn_left");
const buttonRight = document.getElementById("btn_right");
const containerDocument = document.getElementById("container_documentales");

console.log(buttonLeft, buttonRight, containerDocument);

buttonLeft.addEventListener("click", () => changeSlide("left"));
buttonRight.addEventListener("click", () => changeSlide("right"));

function changeSlide(move) {
  if (move === "left") {
    containerDocument.scrollTo({ left: 0 - 800, behavior: "smooth" });
  } else {
    containerDocument.scrollTo({ left: 0 + 800, behavior: "smooth" });
  }
}
