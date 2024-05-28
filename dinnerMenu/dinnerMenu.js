const menu3 = document.querySelectorAll(".menu");
const dinner = document.querySelector("#dinner");
const dinnerOverlay = document.querySelector(".overlay");
const dinnerElement = document.createElement("div");

// Menu
const dinnerMenu = [
  {
    item: "Crab Cakes",
    price: 25,
    description: "Seared crab cakes, yellow rice, garlic butter sauce.",
  },
  {
    item: "Ribeye",
    price: 40,
    description: "Angus beef, brussel sprouts, and red potatoes.",
  },
  {
    item: "Mahi Mahi",
    price: 23,
    description: " yellow rice and seafood slaw.",
  },
  {
    item: "Lobster tail with Mussles",
    price: 35,
    description: "Lobster tail, mussles, pasta.",
  },
  {
    item: "Clams and Lobser bites",
    price: 32,
    description: "Clams, pasta and cube lobster meat.",
  },
];

// Overlay for each menu Item
const dinnerMenuChoices = () => {
  for (let i = 0; i < menu3.length; i++) {
    menu3[i].onclick = function (e) {
      e.preventDefault();
      menu3[i] = document.querySelector(e.target.getAttribute("href"));
      menu3[i].classList.remove("hidden");
      dinnerOverlay.classList.remove("hidden");
    };
  }
};

// overlay for modal to close display
const closeDinnerOverlay = () => {
  dinnerOverlay.classList.add("hidden");
  dinnerElement.remove();
};

// Create an div element after id in html has been selected set that div id to 'break-style'
// Check Css is for styling of break style
const dinnerMenuDisplay = () => {
  dinner.addEventListener("click", () => {
    dinner.after(dinnerElement);
    dinnerElement.setAttribute("id", "break-style");
  });
};

const dinnerMenuCloseModal = () => {
  dinnerOverlay.addEventListener("click", closeDinnerOverlay);
};

// Using innerHtml to render menu from objects on page
const getDinnerItem = () => {
  dinnerElement.innerHTML += `

  <div id="center-pic">

  <img id="menu-pic"  src="https://img.freepik.com/premium-photo/petunia-hand-drawn-black-white-sketch-petunia-flower-isolated-white-background-vector-illustration_555437-202.jpg?w=2000" />

  </div>
  <h1 id="break-h1">Dinner Menu</h1>
  <h3 id="break-h3">MeezVibez</h3>

  <div id="break-obj>
    <div>
      <section>
        <div>
          <div id="break-style"> ${dinnerMenu[0].item}
        <span class="break-span">
          Price: $${dinnerMenu[0].price}
        </span>
        <div class="description">
           ${dinnerMenu[0].description}
        </div>
          <div id="break-style2" > ${dinnerMenu[1].item}
        <span class="break-span">
          Price: $${dinnerMenu[1].price}
        </span>
        <div class="description">
           ${dinnerMenu[1].description}
        </div>
        </div>
          <div id="break-style2" > ${dinnerMenu[2].item}
        <span class="break-span">
          Price: $${dinnerMenu[2].price}
        </span>
        <div class="description">
            ${dinnerMenu[2].description}
        </div>
        </div>
          <div id="break-style2" > ${dinnerMenu[3].item}
        <span class="break-span">
          Price: $${dinnerMenu[3].price}
        </span>
        <div class="description">
          ${dinnerMenu[3].description}
        </div>
        </div>
          <div id="break-style2" > ${dinnerMenu[4].item}
        <span class="break-span">
          Price: $${dinnerMenu[4].price}
        </span>
        <div class="description">
          ${dinnerMenu[4].description}
        </div>
      </section>
      </div>
    </div>
      </div>
    `;
};

closeDinnerOverlay();
dinnerMenuCloseModal();
dinnerMenuDisplay();
getDinnerItem();
dinnerMenuChoices();
