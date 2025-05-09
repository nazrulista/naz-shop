function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " telah ditambah ke troli!");
}

if (window.location.pathname.includes('cart.html')) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const list = document.getElementById('cart-list');
  const totalDisplay = document.getElementById('total');
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - RM ${item.price.toFixed(2)}`;
    list.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = "Jumlah: RM " + total.toFixed(2);
}