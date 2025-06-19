// Responsive Navbar Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Modal Contact Form
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const contactModal = document.getElementById('contactModal');

openModalBtn.addEventListener('click', () => {
  contactModal.setAttribute('aria-hidden', 'false');
});
closeModalBtn.addEventListener('click', () => {
  contactModal.setAttribute('aria-hidden', 'true');
});
window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.setAttribute('aria-hidden', 'true');
  }
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener('submit', function(e) {
  let valid = true;
  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  } else {
    nameError.textContent = '';
  }
  // Email validation
  if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email.';
    valid = false;
  } else {
    emailError.textContent = '';
  }
  // Message validation
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    valid = false;
  } else {
    messageError.textContent = '';
  }
  if (!valid) {
    e.preventDefault();
  } else {
    // Optionally, show a success message or clear the form
    alert('Thank you for your message!');
    contactModal.setAttribute('aria-hidden', 'true');
    contactForm.reset();
    e.preventDefault();
  }
});
