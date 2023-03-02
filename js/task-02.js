const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

console.log(ingredientsList);
//=========================================================================================================================================

ingredients.forEach((ingredient) => {
  const ingredientsItem = document.createElement("li")

  ingredientsItem.classList.add("item")

  ingredientsList.prepend(ingredientsItem)

  ingredientsItem.textContent = ingredient
});

