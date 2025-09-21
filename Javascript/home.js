fetch("https://dummyjson.com/products/category/sports-accessories")
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("products");

    data.products.forEach(p => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.thumbnail}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="price">$${p.price}</div>
      `;
      container.appendChild(card);
    });
  });
