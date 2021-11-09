//Containes the code for carousel

const carouselData = {};
carouselData.previousArrowId = "previous-arrow"; //Stores the ID of the element which shifts the carousel Image to preious image
carouselData.nextArrowId = "next-arrow"; //Stores the ID of the element which shifts the carousel Image to next image
carouselData.carouselWindowId = "carousel-window"; //The ID of the window i.e the id of element which holds the window that displays the current image.
carouselData.carouselContainerId = "carousel-container"; //The ID of the window i.e the id of element which holds the window that displays the current image.
carouselData.miniPicContainer = "carousel-min-pics"; // The ID for the root container of the carousel mini pics
carouselData.window = document.getElementById(carouselData.carouselWindowId); // The ID of the window that holds all the images.
carouselData.container = document.getElementById(
  carouselData.carouselContainerId
);
carouselData.windowWidth = parseInt(
  getComputedStyle(carouselData?.window).width || "0"
);
carouselData.maxImages =
  (carouselData.container.getElementsByTagName("img")?.length || 0) - 1;
/**
 *
 * @param {CSSStyleDeclaration} elementStyle
 * Get the transform matrix parsed in Javascript
 */
carouselData.getTransformNumbers = (elementStyle) => {
  var transform = elementStyle.transform;
  numberPattern = /-?\d+\.?\d*/g;

  return transform.match(numberPattern);
};
/**
 * Function that shifts to previous image
 */
carouselData.shiftPrevious = () => {
  const transformX =
    parseInt(
      carouselData.getTransformNumbers(carouselData.container.style)?.[0]
    ) ?? 0;
  if (transformX < 0) {
    const currentTransform = transformX + carouselData.windowWidth;
    carouselData.container.style.transform = `translateX(${currentTransform}px)`;
  }
};
/**
 * Function that shifts to next image
 */
carouselData.shiftNext = () => {
  const transformX = parseInt(
    carouselData.getTransformNumbers(carouselData.container.style)?.[0] || "0"
  );
  const abstransformX = Math.abs(transformX);
  const maxWidth = carouselData.windowWidth * carouselData.maxImages;
  if (abstransformX < maxWidth) {
    const currentTransform = abstransformX + carouselData.windowWidth;
    carouselData.container.style.transform = `translateX(-${currentTransform}px)`;
  }
};

carouselData.shifttoImage = (count) => {
  count--;

  const currentTransform = count * -1 * carouselData.windowWidth;

  carouselData.container.style.transform = `translateX(${currentTransform}px)`;
  console.log(currentTransform);
};

document
  .getElementById(carouselData.nextArrowId)
  .addEventListener("click", (e) => {
    carouselData.shiftNext();
  });
document
  .getElementById(carouselData.previousArrowId)
  .addEventListener("click", (e) => {
    carouselData.shiftPrevious();
  });
Array.from(
  document
    .getElementById(carouselData.miniPicContainer)
    .getElementsByTagName("img")
).forEach((element) => {
  element.addEventListener("click", (e) => {
    carouselData.shifttoImage(parseInt(element.getAttribute("data-image")));
  });
});
