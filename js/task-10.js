function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  blockEl: document.querySelector("#boxes"),
  btnCreate: document.querySelector("[data-create]"),
  btnDelite: document.querySelector("[data-destroy]"),
  input: document.querySelector('[type="number"]'),
};

let inputData = 0;

const createBoxes = (amount) => {
  const arrayNewTag = [];
  const initialSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const newTag = document.createElement("div");
    newTag.style.width = `${initialSize + i * 10}px`;
    newTag.style.height = `${initialSize + i * 10}px`;
    newTag.style.backgroundColor = getRandomHexColor();
    arrayNewTag.push(newTag);
  }
  refs.blockEl.append(...arrayNewTag);
};

refs.btnDelite.addEventListener("click", () => (refs.blockEl.innerHTML = ""));
refs.input.addEventListener("input", () => (inputData = refs.input.value));
refs.btnCreate.addEventListener("click", () => (createBoxes(inputData)));
