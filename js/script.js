const headerBtn = document.querySelector(".header__btn");

if (window.matchMedia("(min-width: 400px)").matches) {
  btn(headerBtn, "Вход и регистрация");
} else {
  btn(headerBtn, "text");
}

function btn(node, text) {
  node.textContent = text;
}
