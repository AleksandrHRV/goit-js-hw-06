const inputEl = document.querySelector("#validation-input");

const doFocus = (event) => {
  inputEl.classList.add("invalid");
  if (event.currentTarget.value.length >= inputEl.attributes[2].value) {
    inputEl.classList.replace("invalid", "valid");
  }
};
const deFocus = (event) => {
  inputEl.classList.remove("invalid", "valid");
};

inputEl.addEventListener("input", doFocus);
inputEl.addEventListener("focus", doFocus);
inputEl.addEventListener("blur", deFocus);
