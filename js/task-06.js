const inputRef = document.querySelector("#validation-input");
const attributeValue = Number(inputRef.getAttribute("data-length"));

const inputRefInput = inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === attributeValue) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
    return;
  }
  inputRef.classList.remove("valid");
  inputRef.classList.add("invalid");
  return;
});
