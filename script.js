"use strict";

// Burger menu lytter efter klik
document.querySelector("#burger").addEventListener("click", toggleMenu);

// Funktionen toggleMenu tilføjer og fjerner klassen "show" på menu-list
// Dette gør at menuen vises og skjules
function toggleMenu() {
    console.log("toggleMenu");
      var menuList = document.querySelector(".menu-list");
      menuList.classList.toggle("show");
}

// Her styrer vi vores kurv på mobile, som sidder i nederste højre hjørne og som stopper ved footer
// Vi bruger window.pageYOffset til at finde ud af hvor langt vi er scrollet ned
// Vi bruger window.innerHeight til at finde ud af hvor høj vores vindue er
// Vi bruger offsetTop til at finde ud af hvor langt der er fra toppen af vores kurv til toppen af vores vindue
// Vi bruger offsetHeight til at finde ud af hvor høj vores kurv er
// Vi bruger disse værdier til at finde ud af hvor langt der er fra bunden af vores kurv til toppen af vores vindue
window.addEventListener("scroll", function() {
  var icon = document.querySelector("#kurv");
  var footer = document.querySelector(".footer");

  var iconBottom = icon.offsetTop + icon.offsetHeight;
  var footerTop = footer.offsetTop;

  if (window.pageYOffset + window.innerHeight > footerTop) {
    icon.style.bottom = (window.pageYOffset + window.innerHeight - footerTop + 20) + "px";
  } else {
    icon.style.bottom = "20px";
  }
});

// Her styrer vi vores lottieplayer(mikroanimation) på burgermenuen
// Vi bruger lottie-interactivity til at lave en toggle funktion, som gør at mikroanimationen starter play
LottieInteractivity.create({
player:'#burger',
mode:"cursor",
actions: [
    {
        type: "toggle"
    }
]
});