// Lấy id sản phẩm từ URL (ví dụ: productDetail.html?id=25)
const params = new URLSearchParams(window.location.search);
const productId = params.get("id"); // lấy giá trị id

// Nếu có id sản phẩm thì gọi API để lấy chi tiết
if (productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(p => {
      let container = document.getElementById("product-detail");

      // Đổ dữ liệu sản phẩm vào HTML
      container.innerHTML = `
        <div class="product-detail-card">
          <img src="${p.thumbnail}" alt="${p.title}">
          <h1>${p.title}</h1>
          <p>${p.description}</p>
          <div class="price">Price: $${p.price}</div>
          <div class="rating">Rating: ${p.rating} ⭐</div>
          <button id="add-to-cart">Thêm vào giỏ</button>
        </div>
      `;

      document.getElementById("add-to-cart").addEventListener("click", () => {
        alert(`${p.title} Đã thêm vào rỏ hàng!`);
      });
    })};