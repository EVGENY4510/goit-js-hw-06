function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const htmlElementsForChange = {
  bodyRef: document.querySelector("body"),
  buttonChangeColorRef: document.querySelector(".change-color"),
  spanColorRef: document.querySelector(".color"),
};

htmlElementsForChange.buttonChangeColorRef.addEventListener('click', (event) => {
  htmlElementsForChange.bodyRef.style.backgroundColor = getRandomHexColor();
  const backgroundColorValue = htmlElementsForChange.bodyRef.style.backgroundColor;
  htmlElementsForChange.spanColorRef.textContent = backgroundColorValue;
  
})

// решил оставить оба варианта,если верхний не понравится из-за громосткости кода ;)

// const bodyRef = document.querySelector("body");
// const buttonChangeColorRef = document.querySelector(".change-color");
// const spanColorRef = document.querySelector(".color");


// buttonChangeColorRef.addEventListener(
//   "click",
//   (event) => {
//     bodyRef.style.backgroundColor = getRandomHexColor();
//     const backgroundColorValue =
//       bodyRef.style.backgroundColor;
//     spanColorRef.textContent = backgroundColorValue;
//   }
// );