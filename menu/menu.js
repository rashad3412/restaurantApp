let menu = document.querySelectorAll(".menu");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const dessert = document.querySelector("#dessert");
const overlay = document.querySelector(".overlay");
const breakfastElement = document.createElement("div");
const breakfastElementPosition = document.createElement("div");

const openModal = () => {
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
};

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function (e) {
    e.preventDefault();
    menu[i] = document.querySelector(e.target.getAttribute("href"));
    menu[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
}

// const breakfastMenu = [
//   {
//     item: "egg sandwich",
//     price: 7.0,
//     description: "Toasted Bread, with Egg and Cheese",
//   },
// ];

const breakfastMenuOpenModal = () => {
  breakfast.addEventListener("click", () => openModal);
};

const breakfastMenuCloseModal = () => {
  overlay.addEventListener("click", closeModal);
};

const breakfastMenuDisplay = () => {
  breakfast.addEventListener("click", () => {
    breakfast.after(breakfastElement);
    breakfastElement.style.width = "500px";
    breakfastElement.style.height = "500px";
    breakfastElement.style.border = "solid 1px white";
    breakfastElement.style.backgroundClip = "white";
    breakfastElement.style.zIndex = "2";
    breakfastElement.style.position = "fixed";
    breakfastElement.style.top = "150px";
    breakfastElement.style.justifyContent = "center";
    breakfastElement.appendChild(breakfastElementPosition);
    breakfastElementPosition.style.display = "flex";
    breakfastElementPosition.style.justifyContent = "center";
    breakfastElementPosition.textContent = "hello world";
  });
};

breakfastMenuOpenModal();
breakfastMenuCloseModal();
breakfastMenuDisplay();
