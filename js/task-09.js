function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btn: document.querySelector(".change-color"),
  bgColor: document.querySelector(".color"),
  body: document.querySelector("body"),
};

const makeBackground = (event) => {
  const bodyColor = refs.body.style.backgroundColor = getRandomHexColor();
  refs.bgColor.textContent = bodyColor;

};
refs.btn.addEventListener("click", makeBackground);
