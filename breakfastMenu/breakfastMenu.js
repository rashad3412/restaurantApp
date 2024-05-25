let menu = document.querySelectorAll(".menu");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const dessert = document.querySelector("#dessert");
const overlay = document.querySelector(".overlay");
const breakfastElement = document.createElement("div");

const menuChoices = () => {
  for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = function (e) {
      e.preventDefault();
      menu[i] = document.querySelector(e.target.getAttribute("href"));
      menu[i].classList.remove("hidden");
      overlay.classList.remove("hidden");
    };
  }
};

const breakfastMenu = [
  {
    item: "Eggs Sandwich",
    price: 7,
    description: "Toasted Bread, with Egg and Cheese",
  },
  {
    item: "Cinnamon Rolls",
    price: 10,
    description: "Dessert",
  },
  {
    item: "Eggs Benny",
    price: 7,
    description: "Toasted Bread, with Egg and Cheese",
  },
  {
    item: "Omelet",
    price: 10,
    description: "Omelet",
  },
];

const getBreakfastItem = () => {
  breakfastElement.innerHTML += `

  <div id="center-pic">

  <img id="menu-pic"  src="https://img.freepik.com/premium-photo/petunia-hand-drawn-black-white-sketch-petunia-flower-isolated-white-background-vector-illustration_555437-202.jpg?w=2000" />

  </div>
  <h1 id="break-h1">BreakFast Menu</h1>
  <h3 id="break-h3">MeezVibez</h3>

  <div id="break-obj>
    <div>
      <section>
        <div>
          <div id="break-style"> ${breakfastMenu[0].item}
        <span class="break-span">
          Price: ${breakfastMenu[0].price}
        </span>
        <div class="description">
          Description: ${breakfastMenu[0].description}
        </div>
          <div id="break-style2" > ${breakfastMenu[1].item}
        <span class="break-span">
          Price: ${breakfastMenu[1].price}
        </span>
        <div class="description">
          Description: ${breakfastMenu[1].description}
        </div>
        </div>
          <div id="break-style2" > ${breakfastMenu[2].item}
        <span class="break-span">
          Price: ${breakfastMenu[2].price}
        </span>
        <div class="description">
          Description: ${breakfastMenu[2].description}
        </div>
        </div>
          <div id="break-style2" > ${breakfastMenu[3].item}
        <span class="break-span">
          Price: ${breakfastMenu[3].price}
        </span>
        <div class="description">
          Description: ${breakfastMenu[3].description}
        </div>
      </section>
      </div>
    </div>
      </div>
    `;
};

const breakfastMenuOpenModal = () => {
  breakfast.addEventListener("click", () => openModal);
};

const breakfastMenuDisplay = () => {
  breakfast.addEventListener("click", () => {
    breakfast.after(breakfastElement);
    breakfastElement.setAttribute("id", "break-style");
  });
};

const openModal = () => {
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
  breakfastElement.remove();
};

const breakfastMenuCloseModal = () => {
  overlay.addEventListener("click", closeModal);
};

breakfastMenuOpenModal();
breakfastMenuCloseModal();
breakfastMenuDisplay();
getBreakfastItem();
menuChoices();
