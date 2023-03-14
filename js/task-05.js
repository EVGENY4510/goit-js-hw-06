const textInputRef = document.querySelector("#name-input");
const textOutputRef = document.querySelector("#name-output");

textInputRef.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? (textOutputRef.textContent = "Anonymous")
    : (textOutputRef.textContent = event.currentTarget.value);
});
