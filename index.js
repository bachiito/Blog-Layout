const tipOpenButtons = document.querySelectorAll(".open-tip");

tipOpenButtons.forEach(tipButton =>
  tipButton.addEventListener("click", openTip)
);

function openTip({ target }) {
  const tipBody = target.parentElement.querySelector(".tip__body");
  tipBody.classList.toggle("d-none");
}
