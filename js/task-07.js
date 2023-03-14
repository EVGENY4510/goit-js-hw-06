const fontSizeControlRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

const fontSizeControlRefInput = fontSizeControlRef.addEventListener(
  "input",
  (event) => {
    spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
  }
);
