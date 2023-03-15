function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const htmlElements = {
  bodyRef: document.querySelector("body"),
  buttonChangeColorRef: document.querySelector(".change-color"),
  spanColorRef: document.querySelector(".color"),
};

htmlElements.buttonChangeColorRef.addEventListener("click", (event) => {
  const randomStyleColor = (htmlElements.bodyRef.style.backgroundColor =
    getRandomHexColor());
  const backgroundColorValue = randomStyleColor;
  htmlElements.spanColorRef.textContent = backgroundColorValue;
});

// решил оставить оба варианта,если верхний не понравится из-за громосткости кода ;)

// const bodyRef = document.querySelector("body");
// const buttonChangeColorRef = document.querySelector(".change-color");
// const spanColorRef = document.querySelector(".color");

// buttonChangeColorRef.addEventListener(
//   "click",
//   (event) => {
//    const randomStyleColor = bodyRef.style.backgroundColor = getRandomHexColor();
//     const backgroundColorValue = randomStyleColor;
//     spanColorRef.textContent = backgroundColorValue;
//   }
// );
