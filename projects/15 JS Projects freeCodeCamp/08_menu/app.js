// items
const menu = [
  {
    id: 1,
    title: "Macha Pancake",
    category: "pancake",
    price: 15.99,
    img: "./assets/pancake_macha.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    title: "Oreo Pancake",
    category: "pancake",
    price: 15.99,
    img: "./assets/pancake_oreo.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    title: "Ice Cream",
    category: "ice-cream",
    price: 15.99,
    img: "./assets/ice_cream_mix.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    title: "Red Velvet Cake",
    category: "cake",
    price: 15.99,
    img: "./assets/cake_red_velvet.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },{
    id: 5,
    title: "Chocolate Cake",
    category: "cake",
    price: 15.99,
    img: "./assets/cake_chocolate.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});




function displayMenuItems(menuItem){
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo">
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item">${item.desc}</p>
              </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns(){
  const categories = menu.reduce(function(values, item) {
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },  ["all"]);
  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-category=${category}>
              ${category}
            </button>`
  }).join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // filter items
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.category;
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        // select items with same category
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        console.log(menuCategory);
        displayMenuItems(menuCategory)
      }
    });
  });
}

