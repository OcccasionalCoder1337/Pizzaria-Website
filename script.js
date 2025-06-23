// 1) Cart State & Helpers
let cart = [];
let cartOpen = false;
let deliveryInProgress = false;
let activeCoupon = null;

const cartEl       = document.getElementById('cart');
const cartItemsEl  = document.getElementById('cartItems');
const cartTotalEl  = document.getElementById('cartTotal');
const checkoutBtn  = document.getElementById('checkoutBtn');
const orderBtn     = document.querySelector('.btn--order');

function updateCartVisibility() {
  cartEl.classList.toggle('hidden', cart.length === 0 && !cartOpen);
  checkoutBtn.disabled = cart.length === 0;
  checkoutBtn.classList.toggle('disabled', cart.length === 0);
}

function calculateTotals() {
  let total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  let discount = activeCoupon ? total * 0.2 : 0;
  let finalTotal = total - discount;
  return {
    total: total.toFixed(2),
    totalLeva: (total * 1.96).toFixed(2),
    finalTotal: finalTotal.toFixed(2),
    finalLeva: (finalTotal * 1.96).toFixed(2)
  };
}

function renderCart() {
  cartItemsEl.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span style="display:flex;flex-direction:column">
        <strong>${item.name}</strong>
        <small style="opacity:0.7">x${item.qty}</small>
      </span>
      <span>
        ${(item.price * item.qty).toFixed(2)} €<br/>
        <small style="opacity:0.7">${(item.price * item.qty * 1.96).toFixed(2)} лв</small>
      </span>`;
    cartItemsEl.appendChild(li);
  });

  const { finalTotal, finalLeva } = calculateTotals();
  cartTotalEl.innerHTML = `${finalTotal} €<br/><small style="opacity:0.7">${finalLeva} лв</small>`;

  if (activeCoupon && !document.getElementById('couponDisplay')) {
    const couponMsg = document.createElement('p');
    couponMsg.id = 'couponDisplay';
    couponMsg.innerHTML = `<strong>Coupon applied: ${activeCoupon} (-20%)</strong>`;
    couponMsg.style = 'text-align:center; margin-top:1rem; color:#a61d2d';
    cartEl.appendChild(couponMsg);
  }

  updateCartVisibility();
}

function addToCart(product) {
  if (deliveryInProgress) return;
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  cartOpen = true;
  renderCart();
  cartEl.classList.remove('hidden');
}

orderBtn.addEventListener('click', () => {
  if (deliveryInProgress) return;
  cartOpen = !cartOpen;
  cart = [];
  renderCart();
  cartEl.classList.toggle('hidden', !cartOpen);
});

checkoutBtn.addEventListener('click', () => {
  if (!cart.length || deliveryInProgress) return;
  alert('Payment successful! Thank you for your order.');
  cart = [];
  cartOpen = false;
  activeCoupon = null;
  document.getElementById('couponDisplay')?.remove();
  cartEl.classList.add('hidden');
  renderCart();
  startTimer();
});

// 2) Delivery Timer
const timerEl      = document.getElementById('deliveryTimer');
const timerDisplay = document.getElementById('timerDisplay');
let timerInterval;

document.getElementById('skipTimerBtn').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerEl.classList.add('hidden');
  deliveryInProgress = false;
  orderBtn.disabled = false;
  confirmDelivery();
});

function startTimer(seconds = 40 * 60) {
  clearInterval(timerInterval);
  let remaining = seconds;
  deliveryInProgress = true;
  orderBtn.disabled = true;
  timerEl.classList.remove('hidden');
  timerDisplay.textContent = formatTime(remaining);

  timerInterval = setInterval(() => {
    remaining--;
    if (remaining < 0) {
      clearInterval(timerInterval);
      timerEl.classList.add('hidden');
      deliveryInProgress = false;
      orderBtn.disabled = false;
      confirmDelivery();
    } else {
      timerDisplay.textContent = formatTime(remaining);
    }
  }, 1000);
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function confirmDelivery() {
  const gotIt = confirm('Delivery window ended. Did you receive your order?');
  if (!gotIt) {
    const code = 'SAVE' + Math.floor(1000 + Math.random() * 9000);
    activeCoupon = code;
    alert(`Sorry! Use coupon code ${code} for 20% off your next order.`);
    if (!document.getElementById('couponDisplay')) {
      const couponMsg = document.createElement('p');
      couponMsg.id = 'couponDisplay';
      couponMsg.innerHTML = `<strong>Coupon applied: ${code} (-20%)</strong>`;
      couponMsg.style = 'text-align:center; margin-top:1rem; color:#a61d2d';
      cartEl.appendChild(couponMsg);
    }
    renderCart();
  } else {
    alert('Thanks for confirming! Enjoy your meal.');
  }
}

// Filter & Render Logic
const ingredientMap = {
  meat:       ["chicken","beef","pork","fish"],
  vegetables: ["lettuce","tomato","onion","pepper","mushroom"],
  cheese:     ["mozzarella","cheddar","parmesan","feta"],
  sauces:     ["bbq","ketchup","mustard"]
};

let selectedCategory = "all";
let selectedPrimaryIngredients = [];
let selectedSubIngredients = [];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.dataset.category;
      applyFiltersAndRender();
    });
  });
  document.querySelectorAll('.ingredient-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.primary;
      if (selectedPrimaryIngredients.includes(key)) { //collapse logic
        selectedPrimaryIngredients = selectedPrimaryIngredients.filter(x => x !== key);
        removeSubGroupFor(key);
        btn.classList.remove('active');
      } else { //expand logic
        selectedPrimaryIngredients.push(key);
        btn.classList.add('active');
        insertSubButtonsAfter(btn, key);
      }
      applyFiltersAndRender();
    });
  });
  renderProducts(products);
});

function removeSubGroupFor(k) {
  const g = document.querySelector(`.sub-buttons-group[data-parent="${k}"]`);
  if (g) g.remove();
}

function insertSubButtonsAfter(btn, k) {
  removeSubGroupFor(k);
  const subs = ingredientMap[k] || [];
  if (!subs.length) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'sub-buttons-group';
  wrapper.dataset.parent = k;
  subs.forEach(sub => {
    const b = document.createElement('button');
    b.className = 'sub-btn';
    b.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
    b.dataset.sub = sub;
    if (selectedSubIngredients.includes(sub)) b.classList.add('active');
    b.addEventListener('click', () => {
      if (selectedSubIngredients.includes(sub)) {
        selectedSubIngredients = selectedSubIngredients.filter(x => x !== sub);
        b.classList.remove('active');
      } else {
        selectedSubIngredients.push(sub);
        b.classList.add('active');
      }
      applyFiltersAndRender();
    });
    wrapper.appendChild(b);
  });
  btn.parentNode.insertBefore(wrapper, btn.nextSibling);
}

function applyFiltersAndRender() {
  let f = products.filter(p => selectedCategory === 'all' || p.category === selectedCategory);
  if (selectedSubIngredients.length) {
    f = f.filter(p => p.ingredients.some(i => selectedSubIngredients.includes(i)));
  }
  renderProducts(f);
}

function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  if (!Array.isArray(list) || list.length === 0) {
    grid.innerHTML = `
      <p style="font-size:1.1rem; color:#555;">
        No items match your filters.
      </p>`;
    return;
  }

  list.forEach(prod => {
    const c = document.createElement('div');
    c.className = `card ${prod.category}`;

    // image wrapper (only image)
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card-image-wrapper';
    const productImg = document.createElement('img');
    productImg.src = prod.imageURL;
    productImg.alt = prod.name;
    imageWrapper.appendChild(productImg);
    c.appendChild(imageWrapper);

    // sticker as sibling of wrapper
    const sticker = document.createElement('img');
    sticker.className = 'sticker';
    sticker.src = `images/stickers/${prod.category}.png`;
    sticker.alt = prod.category;
    c.appendChild(sticker);

    // the rest of the card body
    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = prod.name;
    body.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'card-desc';
    desc.textContent = prod.desc;
    body.appendChild(desc);

    const footer = document.createElement('div');
    footer.className = 'card-footer';
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = prod.displayPrice;
    footer.appendChild(price);

    const addBtn = document.createElement('button');
    addBtn.className = 'btn btn--primary';
    addBtn.textContent = 'Add';
    addBtn.addEventListener('click', () => addToCart(prod));
    footer.appendChild(addBtn);

    body.appendChild(footer);
    c.appendChild(body);
    grid.appendChild(c);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
