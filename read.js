const slidesContainer = document.getElementById("books-container");
const slide = document.querySelector(".book");
const prevButton = document.getElementById("book-arrow-prev");
const nextButton = document.getElementById("book-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
