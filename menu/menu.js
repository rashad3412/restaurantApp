const menu = document.querySelectorAll(".menu");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const dessert = document.querySelector("#dessert");
const menu1 = document.querySelector(".menu-1");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  menu1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  menu1.classList.add("hidden");
  overlay.classList.add("hidden");
};

const breakfastMenu = [
  {
    item: "egg sandwich",
    price: 7.0,
    description: "Toasted Bread, with Egg and Cheese",
  },
];

const breakfastMenuDisplay = () => {
  breakfast.addEventListener("click", () => openModal());
};

const breakfastMenuDisplayClose = () => {
  overlay.addEventListener("click", closeModal);
};

const lunchMenuDisplay = () => {
  lunch.addEventListener("click", () => openModal());
};

breakfastMenuDisplay();
breakfastMenuDisplayClose();
