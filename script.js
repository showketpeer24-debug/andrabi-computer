// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Keep the copyright year current.
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: replace this with your real business email address.
// This front-end demo opens the visitor's email app; it does not store form submissions.
const BUSINESS_EMAIL = "YOUR_EMAIL@example.com";

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value.trim();
  const formNote = document.getElementById("formNote");

  if (!name || !message) {
    formNote.textContent = "Please enter your name and message.";
    return;
  }

  if (BUSINESS_EMAIL === "YOUR_EMAIL@example.com") {
    formNote.textContent = "Setup needed: open script.js and replace YOUR_EMAIL@example.com with your real business email. Then submit again.";
    return;
  }

  const subject = encodeURIComponent(`Website enquiry: ${topic}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone || "Not provided"}\nEnquiry: ${topic}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  formNote.textContent = "Your email app should open with the message ready. Please review and send it.";
});


// Product category filters
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const productCount = document.getElementById("productCount");

function filterProducts(category) {
  let visible = 0;
  productCards.forEach((card) => {
    const show = category === "all" || card.dataset.category === category;
    card.hidden = !show;
    if (show) visible += 1;
  });
  productCount.textContent = `${visible} ${visible === 1 ? "category" : "categories"}`;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => filterProducts(button.dataset.filter));
});

// Product enquiry dialog. The WhatsApp number is configured in the HTML floating button.
// Change 91XXXXXXXXXX there before publishing.
const enquiryDialog = document.getElementById("enquiryDialog");
const dialogProductText = document.getElementById("dialogProductText");
const enquiryName = document.getElementById("enquiryName");
const enquiryQuestion = document.getElementById("enquiryQuestion");
let selectedProduct = "";

document.querySelectorAll(".enquiry-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedProduct = button.dataset.product;
    dialogProductText.textContent = `You're asking about ${selectedProduct}. Add a name or question if you'd like.`;
    enquiryName.value = "";
    enquiryQuestion.value = "";
    if (typeof enquiryDialog.showModal === "function") {
      enquiryDialog.showModal();
    } else {
      alert("Your browser does not support this enquiry pop-up. Please use the WhatsApp button.");
    }
  });
});

document.getElementById("cancelEnquiry").addEventListener("click", () => enquiryDialog.close());

document.getElementById("sendEnquiry").addEventListener("click", () => {
  const whatsappLink = document.getElementById("whatsappButton").getAttribute("href");
  const numberMatch = whatsappLink.match(/wa\.me\/([^/?]+)/);
  const number = numberMatch ? numberMatch[1] : "";

  if (!number || number.includes("X")) {
    alert("Please set your real WhatsApp number first. In index.html, replace 91XXXXXXXXXX with your country code and phone number.");
    return;
  }

  const name = enquiryName.value.trim();
  const question = enquiryQuestion.value.trim();
  const message = `Hello Indrabi Computer & Electrical Store! I have an enquiry about: ${selectedProduct}.${name ? ` My name is ${name}.` : ""}${question ? ` Question: ${question}` : " Please share availability and price."}`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  enquiryDialog.close();
});
