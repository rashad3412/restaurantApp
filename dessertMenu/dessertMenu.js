const menu4 = document.querySelectorAll(".menu");
const dessert = document.querySelector("#dessert");
const dessertOverlay = document.querySelector(".overlay");
const dessertElement = document.createElement("div");

//  Menu
const dessertMenu = [
  {
    item: "Ice Cream",
    price: 10,
    description:
      "Different flavor ice creams, vanilla, strawberry, chocolate chip.",
  },
  {
    item: "Strawberry Crunch Cheese Cakes",
    price: 12,
    description:
      "Strawberry Moose, gram craker crust, topped with strawberry glaze.",
  },
  {
    item: "Churros",
    price: 8,
    description: " Cinnamon Sugar churros.",
  },
  {
    item: "Cookies",
    price: 5,
    description: "Caramel butter cookies.",
  },
  {
    item: "Carrot Cake",
    price: 13,
    description: "Savory cake, with carrots and cream cheese toppings.",
  },
];

// Overlay for each menu Item
const dessertMenuChoices = () => {
  for (let i = 0; i < menu4.length; i++) {
    menu4[i].onclick = function (e) {
      e.preventDefault();
      menu4[i] = document.querySelector(e.target.getAttribute("href"));
      menu4[i].classList.remove("hidden");
      dessertOverlay.classList.remove("hidden");
    };
  }
};

// overlay for modal to close display
const closeDessertOverlay = () => {
  dessertOverlay.classList.add("hidden");
  dessertElement.remove();
};

// Create an div element after Id in html has been selected set that div id to 'break-style'
// Check Css is for styling of break style
const dessertMenuDisplay = () => {
  dessert.addEventListener("click", () => {
    dessert.after(dessertElement);
    dessertElement.setAttribute("id", "break-style");
  });
};

const dessertMenuCloseModal = () => {
  dessertOverlay.addEventListener("click", closeDessertOverlay);
};

// Using innerHtml to render  menu from objects on page
const getDessertItem = () => {
  dessertElement.innerHTML += `

  <div id="center-pic">

  <img id="menu-pic"  src="https://img.freepik.com/premium-photo/petunia-hand-drawn-black-white-sketch-petunia-flower-isolated-white-background-vector-illustration_555437-202.jpg?w=2000" />

  </div>
  <h1 id="break-h1">Dessert Menu</h1>
  <h3 id="break-h3">MeezVibez</h3>

  <div id="break-obj>
    <div>
      <section>
        <div>
          <div id="break-style"> ${dessertMenu[0].item}
        <span class="break-span">
          Price: $${dessertMenu[0].price}
        </span>
        <div class="description">
           ${dessertMenu[0].description}
        </div>
          <div id="break-style2" > ${dessertMenu[1].item}
        <span class="break-span">
          Price: $${dessertMenu[1].price}
        </span>
        <div class="description">
           ${dessertMenu[1].description}
        </div>
        </div>
          <div id="break-style2" > ${dessertMenu[2].item}
        <span class="break-span">
          Price: $${dessertMenu[2].price}
        </span>
        <div class="description">
            ${dessertMenu[2].description}
        </div>
        </div>
          <div id="break-style2" > ${dessertMenu[3].item}
        <span class="break-span">
          Price: $${dessertMenu[3].price}
        </span>
        <div class="description">
          ${dessertMenu[3].description}
        </div>
        </div>
          <div id="break-style2" > ${dessertMenu[4].item}
        <span class="break-span">
          Price: $${dessertMenu[4].price}
        </span>
        <div class="description">
          ${dessertMenu[4].description}
        </div>
      </section>
      </div>
    </div>
      </div>
    `;
};

closeDessertOverlay();
dessertMenuCloseModal();
dessertMenuDisplay();
getDessertItem();
dessertMenuChoices();
