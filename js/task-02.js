const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const createEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  // console.log(itemEl);
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  console.log(itemEl);
 return itemEl;
});
ingredientsList.append(...createEl);
//  console.log(ingredientsList);
