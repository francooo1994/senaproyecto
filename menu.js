let encendido = false;

function OpenNav() {
  if (encendido == false) {
    document.getElementById("img-menu").style.transform = "scale(1.1)";
    document.getElementById("menu-icon").style.height = "360px";
    document.getElementById("menu-icon").style.width = "280px";
    document.getElementById("menu-icon").style.padding = "5px 10px";
    setTimeout(prueba, 300);

    encendido = true;
  } else {
    document.getElementById("img-menu").style.transform = "scale(1.0)";
    document.getElementById("menu-icon").style.height = "0px";
    document.getElementById("menu-icon").style.width = "0px";
    document.getElementById("menu-icon").style.padding = "0px";
    document.getElementById("lista").style.display = "none";

    encendido = false;
  }
  function prueba() {
    document.getElementById("lista").style.display = "block";
  }
}

$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});
