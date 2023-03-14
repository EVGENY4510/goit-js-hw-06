const inputRef = document.querySelector("#validation-input");

const inputRefInput = inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
    return;
  }
  inputRef.classList.remove("valid");
  inputRef.classList.add("invalid");
  return;
});
