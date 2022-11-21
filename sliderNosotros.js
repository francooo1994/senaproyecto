const containerCard = document.getElementById("container_card");
const buttonIzquierda = document.getElementById("btn_izq");
const buttonDerecha = document.getElementById("btn_der");

console.log(buttonIzquierda, buttonIzquierda, containerCard);

buttonIzquierda.addEventListener("click", () => cambiarNosotros("left"));
buttonDerecha.addEventListener("click", () => cambiarNosotros("right"));

function cambiarNosotros(move) {
  if (move === "left") {
    containerCard.scrollTo({ left: 0 - 2000, behavior: "smooth" });
  } else {
    containerCard.scrollTo({ left: 0 + 2000, behavior: "smooth" });
  }
}
