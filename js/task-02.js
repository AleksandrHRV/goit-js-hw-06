const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

console.log(ingredientsList);
//=========================================================================================================================================

ingredients.map((ingredient) => {
  const ingredientsItem = document.createElement("li");

  ingredientsItem.classList.add("item");

  ingredientsList.append(ingredientsItem);

  ingredientsItem.textContent = ingredient;
});
