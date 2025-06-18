// 🔝 Back to Top Button Functionality
const topBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 🧠 Form Validation + Toast
const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Message
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // If valid, show toast
  if (isValid) {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
    form.reset(); // Optional: clear form
  }
});

// 💫 Hide Loader on Page Load
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });

  const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const faqForm = document.getElementById('questionForm');
const faqMessage = document.getElementById('submitMessage');

faqForm.addEventListener('submit', function (e) {
  e.preventDefault();
  faqMessage.textContent = "✅ Thank you! Your question has been submitted.";
  faqForm.reset();
});
window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("scrollProgressBar").style.width = scrolled + "%";
};

function copyPageLink() {
  const shareURL = "https://cybersecure-lavanya.netlify.app/";
  navigator.clipboard.writeText(shareURL);
  alert("🔗 Link copied: " + shareURL);
}


window.onload = function () {
  // Scroll to top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // Hide intro screen after 5 seconds
  setTimeout(() => {
    const splash = document.getElementById("intro-screen");
    splash.style.opacity = 0;
    splash.style.visibility = "hidden";
  }, 5000);
};

