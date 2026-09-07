// Sticky nav border on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const toggle = document.getElementById('mobileToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile menu on link click
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Signup form (demo only)
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  form.style.display = 'none';
  document.querySelector('.form-note').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
});

// ========== Pricing Calculator ==========
const PRICE_PER_SEAT_MONTHLY = 29;
const ANNUAL_DISCOUNT = 0.20;

const seatsSlider = document.getElementById('seatsSlider');
const seatsDisplay = document.getElementById('seatsDisplay');
const billingMonthlyBtn = document.getElementById('billingMonthly');
const billingAnnualBtn = document.getElementById('billingAnnual');
const calcPlanName = document.getElementById('calcPlanName');
const calcTotal = document.getElementById('calcTotal');
const calcBreakdown = document.getElementById('calcBreakdown');
const calcSavings = document.getElementById('calcSavings');
const calcCta = document.getElementById('calcCta');
const calcNote = document.getElementById('calcNote');
const proPriceAmount = document.getElementById('proPriceAmount');

let billing = 'monthly';

function formatCurrency(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function updateCalculator() {
  const seats = parseInt(seatsSlider.value, 10);
  seatsDisplay.textContent = seats;
  seatsSlider.setAttribute('aria-valuenow', seats);

  let plan = 'Pro';
  let ctaText = 'Start 14-day trial';
  let note = 'No credit card required \u00b7 Cancel anytime';

  if (seats <= 5) {
    plan = 'Starter';
    ctaText = 'Get started free';
    note = 'Free forever for small teams \u00b7 Upgrade anytime';
  } else if (seats >= 50) {
    plan = 'Enterprise';
    ctaText = 'Contact sales';
    note = 'Custom pricing \u00b7 Volume discounts available';
  }

  calcPlanName.textContent = plan + ' Plan';
  calcCta.textContent = ctaText;

  if (plan === 'Starter') {
    calcTotal.innerHTML = '$0 <span>/mo</span>';
    calcBreakdown.textContent = 'Up to 5 seats \u00b7 free forever';
    calcSavings.classList.remove('visible');
    calcNote.textContent = note;
    return;
  }

  if (plan === 'Enterprise') {
    calcTotal.innerHTML = 'Custom';
    calcBreakdown.textContent = seats + '+ seats \u00b7 tailored for your org';
    calcSavings.classList.remove('visible');
    calcNote.textContent = note;
    return;
  }

  const monthlyPerSeat = PRICE_PER_SEAT_MONTHLY;
  const annualPerSeat = monthlyPerSeat * (1 - ANNUAL_DISCOUNT);
  const perSeat = billing === 'annual' ? annualPerSeat : monthlyPerSeat;
  const monthlyTotal = seats * perSeat;

  if (billing === 'annual') {
    const yearlyTotal = monthlyTotal * 12;
    const fullYearly = seats * monthlyPerSeat * 12;
    const savings = fullYearly - yearlyTotal;
    calcTotal.innerHTML = formatCurrency(monthlyTotal) + ' <span>/mo</span>';
    calcBreakdown.textContent = formatCurrency(perSeat) + ' \u00d7 ' + seats + ' seats \u00b7 billed annually (' + formatCurrency(yearlyTotal) + '/yr)';
    calcSavings.textContent = 'You save ' + formatCurrency(savings) + ' / year';
    calcSavings.classList.add('visible');
    proPriceAmount.innerHTML = formatCurrency(perSeat) + ' <span id="proPriceUnit">/user/mo</span>';
    document.getElementById('proPriceUnit').textContent = '/user/mo (billed annually)';
  } else {
    calcTotal.innerHTML = formatCurrency(monthlyTotal) + ' <span>/mo</span>';
    calcBreakdown.textContent = formatCurrency(perSeat) + ' \u00d7 ' + seats + ' seats \u00b7 billed monthly';
    calcSavings.classList.remove('visible');
    proPriceAmount.innerHTML = '$29 <span id="proPriceUnit">/user/mo</span>';
  }

  calcNote.textContent = note;
}

seatsSlider.addEventListener('input', updateCalculator);

billingMonthlyBtn.addEventListener('click', () => {
  billing = 'monthly';
  billingMonthlyBtn.classList.add('active');
  billingAnnualBtn.classList.remove('active');
  updateCalculator();
});

billingAnnualBtn.addEventListener('click', () => {
  billing = 'annual';
  billingAnnualBtn.classList.add('active');
  billingMonthlyBtn.classList.remove('active');
  updateCalculator();
});

updateCalculator();

// ========== Hash-based page routing ==========
const SUBPAGES = ['about', 'blog', 'careers', 'contact', 'changelog', 'privacy', 'terms', 'security'];
const SECTION_IDS = ['features', 'how', 'integrations', 'pricing', 'testimonials', 'signup'];

function showHome() {
  document.body.classList.remove('show-subpage');
  document.querySelectorAll('.subpage-view').forEach(el => el.classList.remove('active'));
  window.scrollTo(0, 0);
}

function showSubpage(name) {
  document.body.classList.add('show-subpage');
  document.querySelectorAll('.subpage-view').forEach(el => el.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) {
    page.classList.add('active');
    window.scrollTo(0, 0);
  } else {
    showHome();
  }
}

function handleRoute() {
  const hash = (window.location.hash || '#home').slice(1).split('?')[0];
  if (!hash || hash === 'home') {
    showHome();
    return;
  }
  if (SUBPAGES.includes(hash)) {
    showSubpage(hash);
    return;
  }
  showHome();
  if (SECTION_IDS.includes(hash)) {
    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

window.addEventListener('hashchange', handleRoute);
handleRoute();

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.querySelector('button').style.display = 'none';
    document.getElementById('contactSuccess').style.display = 'block';
  });
}
