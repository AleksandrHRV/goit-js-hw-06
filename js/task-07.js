const inputEl = document.querySelector("#font-size-control");

const inputTextEl = document.querySelector("#text");
inputTextEl.style.fontSize = "16px";

const changeFontSize = (event) => {
  inputTextEl.style.fontSize = event.currentTarget.value + "px";
};
inputEl.addEventListener("change", changeFontSize);


