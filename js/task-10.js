function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

let width = 30;
let height = 30;

function createDivElement() {
  const div = document.createElement("div");
  div.style.width = `${(width += 10)}px`;
  div.style.height = `${(height += 10)}px`;
  div.style.backgroundColor = `${getRandomHexColor()}`;
  boxesRef.append(div);
}
let amount = 0;
function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    createDivElement();
  }
}

buttonCreateRef.addEventListener("click", () => {
  boxesRef.innerHTML = "";
  amount = inputRef.value;
    createBoxes(amount);
  });



buttonDestroyRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesRef.innerHTML = "";
  width = 30;
  height = 30;
  
}
 

