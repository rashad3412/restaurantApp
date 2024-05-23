let menu = document.querySelectorAll(".menu");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const dessert = document.querySelector("#dessert");
const overlay = document.querySelector(".overlay");
const breakfastElement = document.createElement("div");

const breakfastMenu = [
  {
    item: "Egg Sandwich",
    price: 7.0,
    description: "Toasted Bread, with Egg and Cheese",
  },
  {
    item: "egg sandwich2",
    price: 7.0,
    description: "Toasted Bread, with Egg and Cheese",
  },
];

const getBreakfastItem = () => {
  breakfastElement.innerHTML += `
  <h1>MeezVibez</h1>
  <div id="break-obj">
    <section>Title: ${breakfastMenu[0].item}
    <span>
    Price: ${breakfastMenu[0].price}
    </span>
    <div>
    Description: ${breakfastMenu[0].description}
    </div>
    </section>
    <div><strong>Title:</strong> ${breakfastMenu[1].item}</div>
    </div>`;
};

const openModal = () => {
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
  breakfastElement.remove();
};

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function (e) {
    e.preventDefault();
    menu[i] = document.querySelector(e.target.getAttribute("href"));
    menu[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
}

const breakfastMenuOpenModal = () => {
  breakfast.addEventListener("click", () => openModal);
};

const breakfastMenuCloseModal = () => {
  overlay.addEventListener("click", closeModal);
};

const breakfastMenuDisplay = () => {
  breakfast.addEventListener("click", () => {
    breakfast.after(breakfastElement);
    breakfastElement.setAttribute("id", "break-style");
  });
};

breakfastMenuOpenModal();
breakfastMenuCloseModal();
breakfastMenuDisplay();
getBreakfastItem();
