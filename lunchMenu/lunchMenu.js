const menu2 = document.querySelectorAll(".menu");
const lunch = document.querySelector("#lunch");
const lunchOverlay = document.querySelector(".overlay");
const lunchElement = document.createElement("div");

//  Menu
const lunchMenu = [
  {
    item: "Salmon Salad",
    price: 16,
    description: "Seared Salmon, fresh romaine, eggs, house dressing.",
  },
  {
    item: "Fat Burger",
    price: 15,
    description: "Angus beef, Bacon, cheddar cheese, spicy mayo, brioche bun.",
  },
  {
    item: "Chicken Wings",
    price: 18,
    description: " Fried Whole Wings, top with sauce of choosing.",
  },
  {
    item: "Lunch Nachos",
    price: 20,
    description:
      "Nacho chips, seafood blend, top with salsa, and melted cheese.",
  },
  {
    item: "Pepper Steak and Rice",
    price: 16,
    description: "Tender cut steak, with fried rice, with Homemade demi gravy.",
  },
];

// Overlay for each menu Item
const lunchMenuChoices = () => {
  for (let i = 0; i < menu2.length; i++) {
    menu2[i].onclick = function (e) {
      e.preventDefault();
      menu2[i] = document.querySelector(e.target.getAttribute("href"));
      menu2[i].classList.remove("hidden");
      lunchOverlay.classList.remove("hidden");
    };
  }
};

// overlay for modal to close display
const closeLunchOverlay = () => {
  lunchOverlay.classList.add("hidden");
  lunchElement.remove();
};

// Create an div element after  Id in html has been selected set that div id to 'break-style'
// Check Css is for styling of break style
const lunchMenuDisplay = () => {
  lunch.addEventListener("click", () => {
    lunch.after(lunchElement);
    lunchElement.setAttribute("id", "break-style");
  });
};

const lunchMenuCloseModal = () => {
  lunchOverlay.addEventListener("click", closeLunchOverlay);
};

// Using innerHtml to render menu from objects on page
const getlunchItem = () => {
  lunchElement.innerHTML += `

  <div id="center-pic">

  <img id="menu-pic"  src="https://img.freepik.com/premium-photo/petunia-hand-drawn-black-white-sketch-petunia-flower-isolated-white-background-vector-illustration_555437-202.jpg?w=2000" />

  </div>
  <h1 id="break-h1">Lunch Menu</h1>
  <h3 id="break-h3">MeezVibez</h3>

  <div id="break-obj>
    <div>
      <section>
        <div>
          <div id="break-style"> ${lunchMenu[0].item}
        <span class="break-span">
          Price: $${lunchMenu[0].price}
        </span>
        <div class="description">
           ${lunchMenu[0].description}
        </div>
          <div id="break-style2" > ${lunchMenu[1].item}
        <span class="break-span">
          Price: $${lunchMenu[1].price}
        </span>
        <div class="description">
           ${lunchMenu[1].description}
        </div>
        </div>
          <div id="break-style2" > ${lunchMenu[2].item}
        <span class="break-span">
          Price: $${lunchMenu[2].price}
        </span>
        <div class="description">
            ${lunchMenu[2].description}
        </div>
        </div>
          <div id="break-style2" > ${lunchMenu[3].item}
        <span class="break-span">
          Price: $${lunchMenu[3].price}
        </span>
        <div class="description">
          ${lunchMenu[3].description}
        </div>
        </div>
          <div id="break-style2" > ${lunchMenu[4].item}
        <span class="break-span">
          Price: $${lunchMenu[4].price}
        </span>
        <div class="description">
          ${lunchMenu[4].description}
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
getlunchItem();
