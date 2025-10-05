// Lấy id sản phẩm từ URL, ví dụ: productDetail.html?id=25
const params = new URLSearchParams(window.location.search);
const productId = params.get("id"); // lấy giá trị id từ URL

// Nếu có id sản phẩm thì gọi API để lấy thông tin chi tiết
if (productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(p => {
      // Lấy phần tử HTML nơi sẽ hiển thị chi tiết sản phẩm
      let container = document.getElementById("product-detail");

      // Đổ dữ liệu sản phẩm ra giao diện
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

      // Khi người dùng ấn "Thêm vào giỏ"
      document.getElementById("add-to-cart").addEventListener("click", () => {
        // 1️⃣ Lấy giỏ hàng hiện tại từ localStorage (nếu chưa có thì là mảng rỗng)
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // 2️⃣ Kiểm tra xem sản phẩm đã có trong giỏ chưa
        let existing = cart.find(item => item.id === p.id);

        if (existing) {
          // Nếu đã có thì tăng số lượng thêm 1
          existing.quantity += 1;
        } else {
          // Nếu chưa có thì thêm sản phẩm mới vào giỏ
          cart.push({
            id: p.id,
            title: p.title,
            price: p.price,
            thumbnail: p.thumbnail,
            quantity: 1
          });
        }

        // 3️⃣ Lưu lại giỏ hàng vào localStorage (chuyển mảng sang JSON)
        localStorage.setItem("cart", JSON.stringify(cart));

        // 4️⃣ Thông báo đã thêm sản phẩm
        alert(`${p.title} đã thêm vào giỏ hàng!`);
      });
    })
}
