// Gọi API lấy danh sách sản phẩm trong category "sports-accessories"
fetch("https://dummyjson.com/products/category/sports-accessories")
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("products"); // nơi chứa danh sách sản phẩm

    // Lặp qua từng sản phẩm
    data.products.forEach(p => {
      // Tạo 1 thẻ card cho sản phẩm
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.thumbnail}" alt="${p.title}">
        <h3>${p.title}</h3>
        <div class="price">$${p.price}</div>
        <div class="rating">Rating: ${p.rating} ⭐</div>
        <button class="go-detail">Xem chi tiết</button>
      `;

      // Khi bấm vào nút "Xem chi tiết" → chuyển sang productDetail.html
      // đồng thời truyền id sản phẩm qua query string (?id=xx)
      card.querySelector(".go-detail").addEventListener("click", () => {
        window.location.href = `productDetail.html?id=${p.id}`;
      });

      // Thêm card vào trang
      container.appendChild(card);
    });
  });
