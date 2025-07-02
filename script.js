// Menu items data
const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$15.99",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    desc: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: "$13.99",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
    desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb chicharrones gochujang helvetica man braid."
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$6.99",
    img: "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg",
    desc: "Ombucha chillwave fam pack 3 wolf moon street art photo booth before they sold out organic viral."
  },
  {
    id: 4,
    title: "Country Delight",
    category: "lunch",
    price: "$20.99",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut."
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "breakfast",
    price: "$22.99",
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up."
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: "$18.99",
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday."
  }
];

// Render menu items
function displayMenuItems(menuItems) {
  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = menuItems.map(item => `
    <div class="col-12 col-md-6">
      <div class="menu-card">
        <img src="${item.img}" class="menu-img" alt="${item.title}">
        <div class="menu-info">
          <div class="menu-header">
            <span class="menu-title-item">${item.title}</span>
            <span class="menu-price">${item.price}</span>
          </div>
          <div class="menu-desc">${item.desc}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// Handle filter buttons
function setupFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const category = this.getAttribute('data-category');
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menu.filter(item => item.category === category));
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  setupFilterButtons();
});
