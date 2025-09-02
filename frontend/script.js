async function loadProducts() {
  const res = await fetch("https://YOUR_BACKEND_URL/api/products");
  const data = await res.json();
  const container = document.getElementById("products");
  container.innerHTML = "";
  data.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>Fiyat: ${p.price} ₺</p>
        <p>Market: ${p.market}</p>
      </div>
    `;
  });
}
loadProducts();
