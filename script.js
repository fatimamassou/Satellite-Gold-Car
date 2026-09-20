/* =========================================================
   SATELLITE GOLD CAR — SCRIPT.JS
========================================================= */

/* =========================================================
   1. COMPANY CONFIGURATION
   Edit this object to update business info across the whole site.
========================================================= */
const company = {
  name: "Satellite Gold Car",
  phone: "0633044534",          // used for tel: links
  displayPhone: "+212 633 044 534", // used for visible text
  whatsapp: "212633044534",         // used for wa.me links (no + or spaces)
  instagram: "https://www.instagram.com/auto_abderrezak/",
  tiktok: "https://www.tiktok.com/@abdobennajari",
  maps: "https://maps.app.goo.gl/pDUPNMShXNpDhmyU9?g_st=ic",
  address: "Hay Al Wafa 155, IMM Oumkaltouma Nº2 EL, Mohammedia 28810"
};

/* =========================================================
   2. VEHICLES DATA
   Add, remove or edit cars here. Each car needs a unique "id".
   - "image" should point to a real photo in images/cars/
   - "price" is a number (MAD per day)
   - "available" controls the badge shown on the card
========================================================= */
const cars = [
   {
    id: "peugeot-208-2",
    name: "Peugeot 208",
    category: "Citadine",
    description: "Une citadine moderne au style affirmé, confortable et économique au quotidien.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car11.jpeg",
    available: true        // TODO: confirmer oui/non
  },
  {
    id: "vw-suv-1",
    name: "Renault Austral",   // TODO: Touareg ou Tiguan ?
    category: "SUV",
    description: "Un SUV élégant et robuste, idéal pour les longs trajets et les familles.",
    price: "Prix sur demande",                  // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",      // Manuelle ou Automatique
    fuel: "Diesel",              // Essence ou Diesel
    image: "images/cars/car12.jpeg",
    available: true            // TODO: confirmer oui/non
  },
  {
    id: "opel-corsa",
    name: "Opel Corsa",
    category: "Citadine",
    description: "Une citadine dynamique et bien équipée, agréable à conduire en ville.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car13.jpeg",
    available: true        // TODO: confirmer oui/non
  },
  {
    id: "hyundai-accent-2",
    name: "Hyundai Accent",
    category: "Berline",
    description: "Une berline confortable et fiable pour vos déplacements quotidiens.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car14.jpeg",
    available: true        // TODO: confirmer oui/non
  },
  {
    id: "opel-corsa-2",
    name: "Hyundai Accent",
    category: "Berline",
    description: "Une berline dynamique et bien équipée, agréable à conduire en ville.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car15.jpeg",
    available: true        // TODO: confirmer oui/non
  },
  {
    id: "renault-clio-2",
    name: "Renault Clio",
    category: "Citadine",
    description: "Confortable, moderne et agréable à conduire en ville comme sur route.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car16.jpeg",
    available: true        // TODO: confirmer oui/non
  },
  {
    id: "car8",
    name: "Dacia Logan",
    category: "SUV",
    description: "Un SUV confortable avec plus d'espace pour vos voyages et déplacements.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car17.jpeg",
    available: true        // TODO: confirmer oui/non
  },
  {
    id: "vw-golf",
    name: "T-roc",
    category: "Citadine",
    description: "Une compacte allemande soignée, confortable et agréable à conduire au quotidien.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car18.jpeg",
    available: true        // TODO: confirmer oui/non
  },
  {
    id: "car19",
    name: "seat ibiza",
    category: "Citadine",
    description: "Une compacte allemande soignée, confortable et agréable à conduire au quotidien.",
    price: "Prix sur demande",              // TODO: prix en MAD / jour
    priceUnit: "jour",
    seats: 5,
    transmission: "Automatique",  // Manuelle ou Automatique
    fuel: "Diesel",          // Essence ou Diesel
    image: "images/cars/car19.jpeg",
    available: true        // TODO: confirmer oui/non
  }
];

/* =========================================================
   3. HELPERS
========================================================= */

// Builds a wa.me link with a pre-filled, encoded message
function buildWhatsappUrl(message){
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

function defaultWhatsappMessage(){
  return `Bonjour ${company.name}, je souhaite avoir des informations sur vos véhicules et vos conditions de location.`;
}

function carWhatsappMessage(carName){
  return `Bonjour ${company.name}, je souhaite réserver la ${carName}. Pouvez-vous me communiquer les disponibilités et les conditions de location ?`;
}

/* =========================================================
   4. INJECT COMPANY DATA INTO STATIC LINKS
========================================================= */
function applyCompanyInfo(){
  const generalWaLinks = [
    "navWhatsapp", "heroWhatsapp", "locationWhatsapp",
    "ctaWhatsapp", "footerWhatsapp", "floatingWhatsapp"
  ];
  generalWaLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = buildWhatsappUrl(defaultWhatsappMessage());
  });

  const mapsBtn = document.getElementById("mapsBtn");
  if (mapsBtn) mapsBtn.href = company.maps;
}

/* =========================================================
   5. RENDER VEHICLE CARDS
========================================================= */
const carsGrid = document.getElementById("carsGrid");
const filtersEl = document.getElementById("filters");

function getCategories(){
  return ["Tous", ...new Set(cars.map(c => c.category))];
}

function renderFilters(activeCategory){
  filtersEl.innerHTML = "";
  getCategories().forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCategory ? " is-active" : "");
    btn.type = "button";
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      renderFilters(cat);
      renderCars(cat);
    });
    filtersEl.appendChild(btn);
  });
}

function carCardTemplate(car){
  const availabilityBadge = car.available
    ? `<span class="badge badge--available">Disponible</span>`
    : `<span class="badge badge--unavailable">Indisponible</span>`;

  return `
    <article class="car-card" data-id="${car.id}">
      <div class="car-card__media">
        ${availabilityBadge}
        <img src="${car.image}" alt="${car.name}" loading="lazy"
             onerror="handleImageError(this)">
      </div>
      <div class="car-card__body">
        <p class="car-card__category">${car.category}</p>
        <h3>${car.name}</h3>
        <p class="car-card__desc">${car.description}</p>
        <ul class="car-card__specs">
          <li><i class="fa-solid fa-user-group"></i> ${car.seats} places</li>
          <li><i class="fa-solid fa-gears"></i> ${car.transmission}</li>
          <li><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</li>
        </ul>
        <p class="car-card__price"><strong>${car.price}</strong> à partir de / ${car.priceUnit}</p>
        <div class="car-card__actions">
          <button class="btn btn--outline" type="button" data-details="${car.id}">Voir les détails</button>
          <a class="btn btn--gold" href="${buildWhatsappUrl(carWhatsappMessage(car.name))}" target="_blank" rel="noopener">Réserver</a>
        </div>
      </div>
    </article>
  `;
}

function renderCars(category = "Tous"){
  const list = category === "Tous" ? cars : cars.filter(c => c.category === category);
  carsGrid.innerHTML = list.map(carCardTemplate).join("");

  // Attach "Voir les détails" listeners after render
  carsGrid.querySelectorAll("[data-details]").forEach(btn => {
    btn.addEventListener("click", () => {
      const car = cars.find(c => c.id === btn.getAttribute("data-details"));
      if (car) openCarModal(car);
    });
  });
}

// Updates the hero "X véhicules disponibles" counter from the cars array
function renderCarsCount(){
  const countEl = document.getElementById("carsCount");
  if (!countEl) return;
  const availableCount = cars.filter(c => c.available).length;
  countEl.textContent = availableCount;
}

/* =========================================================
   6. IMAGE FALLBACK
   Replaces a broken <img> with a styled placeholder instead
   of showing a broken image icon.
========================================================= */
function handleImageError(imgEl){
  imgEl.onerror = null;
  const wrapper = document.createElement("div");
  wrapper.className = "img-fallback";
  wrapper.style.width = "100%";
  wrapper.style.height = "100%";
  wrapper.innerHTML = `<i class="fa-solid fa-car-side"></i>`;
  imgEl.replaceWith(wrapper);
}
window.handleImageError = handleImageError;

/* =========================================================
   7. VEHICLE DETAILS MODAL
========================================================= */
const modal = document.getElementById("carModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalImg = document.getElementById("modalImg");
const modalBadge = document.getElementById("modalBadge");
const modalCategory = document.getElementById("modalCategory");
const modalCarName = document.getElementById("modalCarName");
const modalDesc = document.getElementById("modalDesc");
const modalSeats = document.getElementById("modalSeats");
const modalTransmission = document.getElementById("modalTransmission");
const modalFuel = document.getElementById("modalFuel");
const modalPrice = document.getElementById("modalPrice");
const modalPriceUnit = document.getElementById("modalPriceUnit");
const modalWhatsapp = document.getElementById("modalWhatsapp");

let lastFocusedEl = null;

function openCarModal(car){
  lastFocusedEl = document.activeElement;

  modalImg.src = car.image;
  modalImg.alt = car.name;
  modalImg.onerror = () => handleImageError(modalImg);

  modalBadge.textContent = car.available ? "Disponible" : "Indisponible";
  modalBadge.className = "badge modal__badge " + (car.available ? "badge--available" : "badge--unavailable");

  modalCategory.textContent = car.category;
  modalCarName.textContent = car.name;
  modalDesc.textContent = car.description;
  modalSeats.textContent = `${car.seats} places`;
  modalTransmission.textContent = car.transmission;
  modalFuel.textContent = car.fuel;
  modalPrice.textContent = `${car.price}`;
  modalPriceUnit.textContent = `/ ${car.priceUnit}`;
  modalWhatsapp.href = buildWhatsappUrl(carWhatsappMessage(car.name));

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeCarModal(){
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

modalClose.addEventListener("click", closeCarModal);
modalOverlay.addEventListener("click", closeCarModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeCarModal();
});

/* =========================================================
   8. NAVBAR: STICKY SHRINK + SCROLL EFFECT
========================================================= */
const navbar = document.getElementById("navbar");
function handleNavbarScroll(){
  if (window.scrollY > 12) {
    navbar.classList.add("is-scrolled");
  } else {
    navbar.classList.remove("is-scrolled");
  }
}
window.addEventListener("scroll", handleNavbarScroll, { passive: true });

/* =========================================================
   9. MOBILE HAMBURGER MENU
========================================================= */
const burgerBtn = document.getElementById("burgerBtn");
const navbarNav = document.getElementById("navbarNav");

function toggleMenu(forceClose = false){
  const isOpen = navbarNav.classList.contains("is-open");
  const nextState = forceClose ? false : !isOpen;

  navbarNav.classList.toggle("is-open", nextState);
  burgerBtn.classList.toggle("is-open", nextState);
  burgerBtn.setAttribute("aria-expanded", String(nextState));
}

burgerBtn.addEventListener("click", () => toggleMenu());

// Close mobile menu after clicking a nav link
document.querySelectorAll(".navlink").forEach(link => {
  link.addEventListener("click", () => toggleMenu(true));
});

/* =========================================================
   10. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   (CSS handles this too, but this ensures older browsers work
   and accounts for the sticky navbar height.)
========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    const targetId = this.getAttribute("href");
    if (targetId.length <= 1) return;
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    const offset = navbar.offsetHeight + 10;
    const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

/* =========================================================
   11. ACTIVE NAV LINK ON SCROLL
========================================================= */
const sections = ["accueil", "voitures", "pourquoi", "localisation", "contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

const navLinksById = {};
document.querySelectorAll(".navlink").forEach(link => {
  navLinksById[link.getAttribute("href")] = link;
});

function handleActiveSection(){
  const scrollPos = window.scrollY + navbar.offsetHeight + 40;
  let currentId = "#accueil";

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      currentId = "#" + section.id;
    }
  });

  Object.values(navLinksById).forEach(link => link.classList.remove("is-active"));
  if (navLinksById[currentId]) navLinksById[currentId].classList.add("is-active");
}
window.addEventListener("scroll", handleActiveSection, { passive: true });

/* =========================================================
   12. INIT
========================================================= */
function init(){
  applyCompanyInfo();
  renderFilters("Tous");
  renderCars("Tous");
  renderCarsCount();   
  handleNavbarScroll();
  handleActiveSection();
}

document.addEventListener("DOMContentLoaded", init);
