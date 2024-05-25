const lucnhmenu = document.querySelectorAll(".menu");
const b = document.querySelector("#lunch");
const o = document.querySelector(".overlay");
const bElement = document.createElement("div");

// Breakfast Menu
const bMenu = [
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
const lunchMenuChoices = () => {
  for (let i = 0; i < lucnhmenu.length; i++) {
    lucnhmenu[i].onclick = function (e) {
      e.preventDefault();
      lucnhmenu[i] = document.querySelector(e.target.getAttribute("href"));
      lucnhmenu[i].classList.remove("hidden");
      o.classList.remove("hidden");
    };
  }
};

// overlay for modal to close display
const closeLunchOverlay = () => {
  o.classList.add("hidden");
  bElement.remove();
};

// Create an div element after breakfast Id in html has been selected set that div id to 'break-style'
// Check Css is for styling of break style
const lunchMenuDisplay = () => {
  b.addEventListener("click", () => {
    b.after(bElement);
    bElement.setAttribute("id", "break-style");
  });
};

const lunchMenuCloseModal = () => {
  o.addEventListener("click", closeLunchOverlay);
};

// Using innerHtml to render breakfast menu from objects on page
const getluchItem = () => {
  bElement.innerHTML += `

  <div id="center-pic">

  <img id="menu-pic"  src="https://img.freepik.com/premium-photo/petunia-hand-drawn-black-white-sketch-petunia-flower-isolated-white-background-vector-illustration_555437-202.jpg?w=2000" />

  </div>
  <h1 id="break-h1">BreakFast Menu</h1>
  <h3 id="break-h3">MeezVibez</h3>

  <div id="break-obj>
    <div>
      <section>
        <div>
          <div id="break-style"> ${bMenu[0].item}
        <span class="break-span">
          Price: $${bMenu[0].price}
        </span>
        <div class="description">
           ${bMenu[0].description}
        </div>
          <div id="break-style2" > ${bMenu[1].item}
        <span class="break-span">
          Price: $${bMenu[1].price}
        </span>
        <div class="description">
           ${bMenu[1].description}
        </div>
        </div>
          <div id="break-style2" > ${bMenu[2].item}
        <span class="break-span">
          Price: $${bMenu[2].price}
        </span>
        <div class="description">
            ${bMenu[2].description}
        </div>
        </div>
          <div id="break-style2" > ${bMenu[3].item}
        <span class="break-span">
          Price: $${bMenu[3].price}
        </span>
        <div class="description">
          ${bMenu[3].description}
        </div>
      </section>
      </div>
    </div>
      </div>
    `;
};

closeLunchOverlay();
lunchMenuCloseModal();
lunchMenuDisplay();
getluchItem();
// lunchMenuChoices();
