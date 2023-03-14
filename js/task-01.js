const categoriesEl = document.querySelector("#categories");
const itemEl = document.querySelector(".item");

console.log("Number of categories:", categoriesEl.children.length);

const categoriesArray = document.querySelectorAll(".item");

categoriesArray.forEach((categori) => {
  console.log("Category:", categori.firstElementChild.textContent),
    console.log("Elements:", categori.lastElementChild.children.length);
});



