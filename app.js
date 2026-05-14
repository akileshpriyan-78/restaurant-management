/* ════════════════════════════
   DATA
════════════════════════════ */
const MENU = {
  breakfast: [
    { name:"Idli",     tag:"Steamed rice cakes",     img:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&auto=format&fit=crop" },
    { name:"Dosa",     tag:"Crispy rice crepe",       img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop" },
    { name:"Vada",     tag:"Fried lentil doughnut",   img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&auto=format&fit=crop" },
    { name:"Pongal",   tag:"Spiced rice & lentils",   img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop" },
    { name:"Appam",    tag:"Soft lacy rice pancake",  img:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&auto=format&fit=crop" },
    { name:"Upma",     tag:"Semolina breakfast bowl", img:"https://images.unsplash.com/photo-1645177628172-a94c1f96debb?w=400&auto=format&fit=crop" },
  ],
  lunch: [
    { name:"Chicken Biriyani", tag:"Aromatic spiced rice",    img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop" },
    { name:"Veg Biriyani",     tag:"Garden-fresh dum rice",   img:"https://images.unsplash.com/photo-1645177628172-a94c1f96debb?w=400&auto=format&fit=crop" },
    { name:"Curd Rice",        tag:"Cooling yogurt rice",     img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop" },
    { name:"Lemon Rice",       tag:"Tangy tempered rice",     img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop" },
    { name:"Full Meals",       tag:"Traditional thali",       img:"https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&auto=format&fit=crop" },
  ],
  dinner: [
    { name:"Parotta",   tag:"Layered wheat flatbread",  img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop" },
    { name:"Chapathi",  tag:"Soft whole wheat bread",   img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop" },
    { name:"Naan",      tag:"Oven-baked leavened bread",img:"https://images.unsplash.com/photo-1618449840665-9f0caa3f8a5d?w=400&auto=format&fit=crop" },
    { name:"Poori",     tag:"Fluffy puffed bread",      img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&auto=format&fit=crop" },
  ],
  drinks: [
    { name:"Pepsi",      tag:"Chilled carbonated soda", img:"https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&auto=format&fit=crop" },
    { name:"Coca-Cola",  tag:"Classic cola refresher",  img:"https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&auto=format&fit=crop" },
    { name:"Monster",    tag:"Energy boost drink",      img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop" },
    { name:"Maaza",      tag:"Mango fruit drink",       img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&auto=format&fit=crop" },
  ],
  fastfood: [
    { name:"Chicken Rice",   tag:"Wok-tossed fried rice",   img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop" },
    { name:"Egg Rice",       tag:"Scrambled egg fried rice", img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop" },
    { name:"Veg Rice",       tag:"Garden veggie fried rice", img:"https://images.unsplash.com/photo-1512058454905-6b841e7ad132?w=400&auto=format&fit=crop" },
    { name:"Chicken Noodles",tag:"Spicy stir-fried noodles", img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop" },
    { name:"Pani Poori",     tag:"Street-style tangy shells",img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&auto=format&fit=crop" },
  ]
};

/* ════════════════════════════
   BUILD MENU GRIDS
════════════════════════════ */
function buildMenus() {
  Object.entries(MENU).forEach(([key, items]) => {
    const grid = document.getElementById('grid-' + key);
    if (!grid) return;
    grid.innerHTML = items.map(item => `
      <div class="card">
        <img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop'">
        <div class="card-body">
          <h3>${item.name}</h3>
          <p>${item.tag}</p>
        </div>
      </div>
    `).join('');
  });
}

/* ════════════════════════════
   CLOCK
════════════════════════════ */
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', {
    hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true
  });
}
setInterval(updateClock, 1000);
updateClock();

/* ════════════════════════════
   HAMBURGER MENU
════════════════════════════ */
function toggleMenu() {
  const ul   = document.getElementById('nav-links');
  const btn  = document.getElementById('hamburger');
  ul.classList.toggle('open');
  btn.classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('#nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  });
});

/* ════════════════════════════
   TOAST
════════════════════════════ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ════════════════════════════
   AUTH TABS
════════════════════════════ */
function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((b,i) => b.classList.toggle('active', (tab==='login'?i===0:i===1)));
  document.querySelectorAll('.auth-form').forEach(f  => f.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  clearErrors();
}

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.field input').forEach(el => el.classList.remove('error','success'));
  document.querySelectorAll('.gate-msg').forEach(el => { el.textContent=''; el.className='gate-msg'; });
}

/* ════════════════════════════
   PASSWORD TOGGLE
════════════════════════════ */
function togglePass(inputId, eyeId) {
  const inp = document.getElementById(inputId);
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  document.getElementById(eyeId).textContent = show ? '🙈' : '👁';
}

/* ════════════════════════════
   PASSWORD STRENGTH
════════════════════════════ */
const COLORS = ['#e05252','#f0a04b','#e8b84b','#4caf7d'];
const LABELS = ['Weak','Fair','Good','Strong'];

function checkStrength() {
  const val = document.getElementById('s-pass').value;
  let score = 0;
  if (val.length >= 8)  score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^a-zA-Z0-9]/.test(val)) score++;
  for (let i = 1; i <= 4; i++) {
    const seg = document.getElementById('seg'+i);
    seg.style.background = i <= score ? COLORS[score-1] : 'var(--dark4)';
  }
  document.getElementById('strength-label').textContent = val ? LABELS[score-1] || '' : '';
  document.getElementById('strength-label').style.color = val ? COLORS[score-1] : 'transparent';
}

/* ════════════════════════════
   VALIDATION HELPERS
════════════════════════════ */
function setErr(fieldId, msg) {
  const inp = document.getElementById(fieldId);
  const err = document.getElementById(fieldId + '-err');
  if (inp) inp.classList.add('error');
  if (err) err.textContent = msg;
  return false;
}

function setOk(fieldId) {
  const inp = document.getElementById(fieldId);
  if (inp) { inp.classList.remove('error'); inp.classList.add('success'); }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/* ════════════════════════════
   SIGN UP
════════════════════════════ */
function doSignup() {
  clearErrors();
  let valid = true;

  const name  = document.getElementById('s-name').value.trim();
  const email = document.getElementById('s-email').value.trim();
  const pass  = document.getElementById('s-pass').value;
  const pass2 = document.getElementById('s-pass2').value;

  if (!name || name.length < 2) { setErr('s-name','Name must be at least 2 characters'); valid=false; }
  else setOk('s-name');

  if (!validateEmail(email)) { setErr('s-email','Enter a valid email address'); valid=false; }
  else setOk('s-email');

  let score = 0;
  if (pass.length >= 8) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^a-zA-Z0-9]/.test(pass)) score++;
  if (pass.length < 6)  { setErr('s-pass','Password must be at least 6 characters'); valid=false; }
  else if (score < 2)   { setErr('s-pass','Password is too weak'); valid=false; }
  else setOk('s-pass');

  if (pass !== pass2) { setErr('s-pass2','Passwords do not match'); valid=false; }
  else if (pass2)     setOk('s-pass2');

  if (!valid) return;

  const btn = document.getElementById('signup-btn');
  btn.disabled = true;
  btn.innerHTML = 'Creating Account <span class="spinner"></span>';

  setTimeout(() => {
    localStorage.setItem('a2d2_user', JSON.stringify({ name, email, password: pass }));
    const msg = document.getElementById('signup-msg');
    msg.textContent = '✓ Account created! You can now login.';
    msg.className = 'gate-msg ok';
    btn.disabled = false;
    btn.textContent = 'Create Account';
    setTimeout(() => switchTab('login'), 1600);
  }, 900);
}

/* ════════════════════════════
   LOGIN
════════════════════════════ */
function doLogin() {
  clearErrors();
  let valid = true;

  const email = document.getElementById('l-email').value.trim();
  const pass  = document.getElementById('l-pass').value;

  if (!validateEmail(email)) { setErr('l-email','Enter a valid email address'); valid=false; }
  else setOk('l-email');

  if (!pass) { setErr('l-pass','Password is required'); valid=false; }
  else setOk('l-pass');

  if (!valid) return;

  const btn = document.getElementById('login-btn');
  btn.disabled = true;
  btn.innerHTML = 'Logging in <span class="spinner"></span>';

  setTimeout(() => {
    const saved = JSON.parse(localStorage.getItem('a2d2_user') || 'null');

    if (!saved) {
      document.getElementById('login-msg').textContent = 'No account found. Please sign up first.';
      document.getElementById('login-msg').className = 'gate-msg err';
      btn.disabled = false; btn.textContent = 'Login';
      return;
    }

    if (email === saved.email && pass === saved.password) {
      document.getElementById('login-msg').textContent = '✓ Login successful!';
      document.getElementById('login-msg').className = 'gate-msg ok';
      setTimeout(() => enterSite(saved.name), 900);
    } else {
      document.getElementById('login-msg').textContent = 'Incorrect email or password.';
      document.getElementById('login-msg').className = 'gate-msg err';
      document.getElementById('l-pass').classList.add('error');
      btn.disabled = false; btn.textContent = 'Login';
    }
  }, 800);
}

/* ════════════════════════════
   ENTER SITE
════════════════════════════ */
function enterSite(name) {
  document.getElementById('auth-gate').classList.add('hidden');
  const site = document.getElementById('main-site');
  site.classList.add('visible');
  document.getElementById('welcome-pill').textContent = '👋 Welcome back, ' + name;
  buildMenus();
  fetchCustomers();
  showToast('Welcome back, ' + name + '! 🍽');
}

/* ════════════════════════════
   LOGOUT
════════════════════════════ */
function logout(e) {
  e && e.preventDefault();
  document.getElementById('auth-gate').classList.remove('hidden');
  document.getElementById('main-site').classList.remove('visible');
  clearErrors();
  ['l-email','l-pass','s-name','s-email','s-pass','s-pass2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.value=''; el.classList.remove('error','success'); }
  });
  document.querySelectorAll('.gate-msg').forEach(el => { el.textContent=''; el.className='gate-msg'; });
  for (let i=1;i<=4;i++) document.getElementById('seg'+i).style.background='var(--dark4)';
  document.getElementById('strength-label').textContent='';
  switchTab('login');
}

/* ════════════════════════════
   FETCH CUSTOMERS
════════════════════════════ */
async function fetchCustomers() {
  const grid = document.getElementById('customers-grid');
  try {
    const res  = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    grid.innerHTML = data.slice(0,6).map(u => `
      <div class="cust-card">
        <div class="cust-avatar">${u.name[0]}</div>
        <div class="cust-info">
          <h3>${u.name}</h3>
          <p>${u.email}</p>
          <p>${u.phone}</p>
        </div>
      </div>
    `).join('');
  } catch {
    grid.innerHTML = '<p style="color:var(--text-muted)">Could not load customers.</p>';
  }
}

/* ════════════════════════════
   AUTO LOGIN (session check)
════════════════════════════ */
const session = JSON.parse(sessionStorage.getItem('a2d2_session') || 'null');
if (session) enterSite(session.name);

// Enter key support
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const loginActive = document.getElementById('tab-login').classList.contains('active');
  if (loginActive) doLogin();
  else doSignup();
});
