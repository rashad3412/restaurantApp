let menu = document.querySelectorAll(".menu");
const breakfast = document.querySelector("#breakfast");
const overlay = document.querySelector(".overlay");
const breakfastElement = document.createElement("div");

// Breakfast Menu
const breakfastMenu = [
  {
    item: "Eggs Sandwich",
    price: 12,
    description: "Two over easy fried eggs, between two buttered toast.",
  },
  {
    item: "Eggs Benedict",
    price: 13,
    description:
      "English Muffin cut in half, bacon, poached egg, and hollandaise sauce.",
  },
  {
    item: "Omelet",
    price: 15,
    description: "Folded eggs, tossed with veggies, salsa, meat of choice.",
  },
  {
    item: "Breakfast Tacos",
    price: 14,
    description: "Eggs, bacon, diced potatoes, with salsa.",
  },
];

// Overlay for each menu Item
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

// overlay for modal to close display
const closeOverlay = () => {
  overlay.classList.add("hidden");
  breakfastElement.remove();
};

// Create an div element after breakfast Id in html has been selected set that div id to 'break-style'
// Check Css is for styling of break style
const breakfastMenuDisplay = () => {
  breakfast.addEventListener("click", () => {
    breakfast.after(breakfastElement);
    breakfastElement.setAttribute("id", "break-style");
  });
};

const breakfastMenuCloseModal = () => {
  overlay.addEventListener("click", closeOverlay);
};

// Using innerHtml to render breakfast menu from objects on page
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
          Price: $${breakfastMenu[0].price}
        </span>
        <div class="description">
           ${breakfastMenu[0].description}
        </div>
          <div id="break-style2" > ${breakfastMenu[1].item}
        <span class="break-span">
          Price: $${breakfastMenu[1].price}
        </span>
        <div class="description">
           ${breakfastMenu[1].description}
        </div>
        </div>
          <div id="break-style2" > ${breakfastMenu[2].item}
        <span class="break-span">
          Price: $${breakfastMenu[2].price}
        </span>
        <div class="description">
            ${breakfastMenu[2].description}
        </div>
        </div>
          <div id="break-style2" > ${breakfastMenu[3].item}
        <span class="break-span">
          Price: $${breakfastMenu[3].price}
        </span>
        <div class="description">
          ${breakfastMenu[3].description}
        </div>
      </section>
      </div>
    </div>
      </div>
    `;
};

breakfastMenuCloseModal();
breakfastMenuDisplay();
getBreakfastItem();
menuChoices();
