const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

let counterValue = 0;

buttonIncrementRef.addEventListener("click", () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
});

buttonDecrementRef.addEventListener("click", () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
});
