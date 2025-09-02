async function loadProducts() {
  const res = await fetch("/api/products");
  const data = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - ${p.price}₺`;
    container.appendChild(div);
  });
}

loadProducts();
