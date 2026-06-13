/* ═══════════════════════════════════════════
   <footer style="text-align:center; padding:20px;">

  <h2>Web Wizarrd</h2>

  <a href="https://www.instagram.com/web_wizarrd?igsh=N2tucjRlenE1Nm1u" target="_blank">
    <img 
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      width="40"
      style="border-radius:10px;"
      alt="Instagram">
  </a>

</footer>s Solutions — main.js
═══════════════════════════════════════════ */

/* ── NAV: solid on scroll ── */
window.addEventListener('scroll', function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  nav.style.background = window.scrollY > 10
    ? 'rgba(255,255,255,0.95)'
    : 'rgba(255,255,255,0.85)';
}, { passive: true });

/* ── MOBILE NAV ── */
var hamBtn = document.querySelector('.nav-ham');
var navMob = document.getElementById('navMob');

function openMob()  { if (navMob) navMob.classList.add('open'); }
function closeMob() { if (navMob) navMob.classList.remove('open'); }

if (hamBtn) {
  hamBtn.addEventListener('click', function () {
    navMob && navMob.classList.toggle('open');
  });
}
document.addEventListener('click', function (e) {
  if (navMob && navMob.classList.contains('open') &&
      !navMob.contains(e.target) &&
      hamBtn && !hamBtn.contains(e.target)) {
    closeMob();
  }
});

/* ── FADE IN ON SCROLL ── */
function initFades() {
  var fades = document.querySelectorAll('.fade');
  if (!fades.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  fades.forEach(function (el) { observer.observe(el); });
}
document.addEventListener('DOMContentLoaded', initFades);

/* ── COUNTER ANIMATION ── */
function animateCount(el) {
  var target = parseInt(el.getAttribute('data-count'), 10);
  var suffix = el.getAttribute('data-suffix') || '';
  var duration = 1400;
  var start = null;
  function step(ts) {
    if (!start) start = ts;
    var progress = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
document.addEventListener('DOMContentLoaded', function () {
  var countEls = document.querySelectorAll('[data-count]');
  if (!countEls.length) return;
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        animateCount(e.target);
        co.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  countEls.forEach(function (el) { co.observe(el); });
});

/* ── FAQ ACCORDION ── */
document.addEventListener('click', function (e) {
  var q = e.target.closest('.faq-q');
  if (!q) return;
  var item = q.closest('.faq-it');
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-it.open').forEach(function (i) {
    i.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
});

/* ── WHATSAPP CONTACT FORM ── */
function sendWA() {
  var name    = (document.getElementById('fn')  || {}).value || '';
  var phone   = (document.getElementById('fp')  || {}).value || '';
  var email   = (document.getElementById('fe')  || {}).value || '';
  var service = (document.getElementById('fs')  || {}).value || '';
  var budget  = (document.getElementById('fb')  || {}).value || '';
  var msg     = (document.getElementById('fm')  || {}).value || '';

  name  = name.trim();
  phone = phone.trim();
  msg   = msg.trim();

  if (!name || !phone || !msg) {
    alert('Please fill in Name, Phone and Message.');
    return;
  }

  var text = 'Hi WEBMITRA! 👋\n\n'
    + 'Name: '    + name  + '\n'
    + 'Phone: '   + phone + '\n'
    + (email   ? 'Email: '   + email   + '\n' : '')
    + (service ? 'Service: ' + service + '\n' : '')
    + (budget  ? 'Budget: '  + budget  + '\n' : '')
    + '\nMessage: ' + msg;

  window.open('https://wa.me/919918289106?text=' + encodeURIComponent(text), '_blank');
}
const modal = document.getElementById("noticeModal");
const closeBtn = document.getElementById("closeNotice");

const endDate = new Date("May 3, 2026 23:59:59").getTime();
const now = new Date().getTime();

if (modal && closeBtn) {
  if (!localStorage.getItem("noticeClosed") && now < endDate) {
    setTimeout(() => {
      modal.classList.add("show");
    }, 300);
  }

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    localStorage.setItem("noticeClosed", "true");
  });
}

/* ── WHATSAPP CAREERS APPLICATION FORM ── */
function sendApplicationWA() {
  var name    = (document.getElementById('an')  || {}).value || '';
  var phone   = (document.getElementById('ap')  || {}).value || '';
  var email   = (document.getElementById('ae')  || {}).value || '';
  var role    = (document.getElementById('ar')  || {}).value || '';
  var link    = (document.getElementById('al')  || {}).value || '';
  var msg     = (document.getElementById('am')  || {}).value || '';

  name  = name.trim();
  phone = phone.trim();
  role  = role.trim();
  link  = link.trim();
  msg   = msg.trim();

  if (!name || !phone || !role || !link) {
    alert('Please fill in Name, Phone, Role and Resume/Portfolio link.');
    return;
  }

  var text = 'Hi WEBMITRA! 💼\n\n'
    + 'I would like to apply for a position:\n'
    + 'Name: '    + name  + '\n'
    + 'Phone: '   + phone + '\n'
    + (email   ? 'Email: '   + email   + '\n' : '')
    + 'Applied Role: ' + role + '\n'
    + 'Portfolio/Resume: ' + link + '\n'
    + (msg     ? '\nCover Letter / Pitch:\n' + msg : '');

  window.open('https://wa.me/919918289106?text=' + encodeURIComponent(text), '_blank');
}


