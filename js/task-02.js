const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const createNewElements = ingredients.map((elementTextContent) => {
  const createElLi = document.createElement("Li");
  createElLi.textContent = elementTextContent;
  createElLi.classList.add("item");
  return createElLi;
});

ingredientsRef.append(...createNewElements);
