// map
const openMap = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map")
const btnClose = mapPopup.querySelector(".modal-close");
// write-us
const writeUsBtn = document.querySelector(".contacts-button");
const writeUsModal = document.querySelector(".modal-write-us");
const btnCloseUs = writeUsModal.querySelector(".modal-close");
// buy-button
const buy = document.querySelectorAll(".buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");
// service-slider
const slider = document.querySelectorAll(".service-item-button");
const slide = document.querySelectorAll(".service-slider");
// map
openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
// write us
writeUsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.add("modal-show");
});
btnCloseUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsModal.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsModal.classList.remove("modal-show");
    }
  }
});
// buy button
buy.forEach(item => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
// service-slider


