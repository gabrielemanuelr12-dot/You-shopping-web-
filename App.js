const products = [
  { id: 1, name: 'Tricou', price: 59, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Blugi', price: 120, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Adidași', price: 200, image: 'https://via.placeholder.com/150' },
];

const cart = [];

function renderProducts() {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  products.forEach(product => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}"/>
        <h3>${product.name}</h3>
        <p>${product.price} lei</p>
        <button onclick="addToCart(${product.id})">Adaugă în coș</button>
      </div>
    `;
  });
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    cartList.innerHTML += `<li>${item.name} - ${item.price} lei</li>`;
    total += item.price;
  });
  document.getElementById('total').textContent = `Total: ${total} lei`;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// Initial render
renderProducts();
renderCart();