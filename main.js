// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');

function handleScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav on outside click
document.addEventListener('click', function (e) {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// --- Form submit handler (demo) ---
function handleFormSubmit(event) {
  event.preventDefault();
  var btn = event.target.querySelector('button[type="submit"]');
  var originalText = btn.textContent;

  btn.disabled = true;
  btn.textContent = 'Sending...';

  setTimeout(function () {
    btn.textContent = 'Request Sent!';
    btn.style.backgroundColor = '#16a34a';
    btn.style.borderColor = '#16a34a';

    setTimeout(function () {
      btn.disabled = false;
      btn.textContent = originalText;
      btn.style.backgroundColor = '';
      btn.style.borderColor = '';
      event.target.reset();
    }, 2000);
  }, 1000);
}
