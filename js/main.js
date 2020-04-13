// скрип который открывает модальное окно
const cartButton = document.querySelector("#cart-button");
// модальное окно
const modal = document.querySelector(".modal");
// закрытие
const close = document.querySelector(".close");
// при нажатии на кнопку откроится окно
cartButton.addEventListener("click", function (event) {
  modal.classList.add("is-open");
});
// закрытие
close.addEventListener("click", function (event) {
  modal.classList.remove("is-open");
});
