const refs = {
  input: document.querySelector("#name-input"),
  nameInput: document.querySelector("#name-output"),
};

const changeValue = (event) => {
  refs.nameInput.textContent = event.currentTarget.value;
  if (refs.nameInput.textContent.length <= 0) {
    refs.nameInput.textContent = "Anonymous";
  }
};

refs.input.addEventListener("input", changeValue);
