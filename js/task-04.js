let value = document.querySelector("#value");
let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

const addOnClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const removeOnClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

incrementEl.addEventListener("click", addOnClick);
decrementEl.addEventListener("click", removeOnClick);
