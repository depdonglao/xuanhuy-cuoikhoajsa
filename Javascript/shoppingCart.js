// Lấy giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Lấy phần tử HTML
const cartContainer = document.querySelector(".cart-items");
const totalPriceEl = document.querySelector(".total-price");
const orderBtn = document.getElementById("order-btn");

// Hàm hiển thị giỏ hàng ra giao diện
function renderCart() {
  cartContainer.innerHTML = ""; // Xóa nội dung cũ
  let total = 0; // Tổng giá

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Giỏ hàng trống 😢</p>";
    totalPriceEl.textContent = "$0";
    return;
  }

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    // Hiển thị sản phẩm
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.thumbnail}" alt="${item.title}" class="cart-item-img">
        <div class="cart-info">
          <h3>${item.title}</h3>
          <p>Giá: $${item.price}</p>
          <p>Số lượng: ${item.quantity}</p>
          <p>Tổng: $${itemTotal}</p>
          <button class="remove-btn" data-index="${index}">Xóa</button>
        </div>
      </div>
    `;
  });

  // Hiển thị tổng tiền
  totalPriceEl.textContent = "$" + total.toFixed(2);

  // Thêm sự kiện nút Xóa
  addRemoveEvents();
}

// Hàm thêm sự kiện xóa sản phẩm
function addRemoveEvents() {
  const removeBtns = document.querySelectorAll(".remove-btn");
  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      cart.splice(index, 1); // Xóa sản phẩm khỏi mảng
      localStorage.setItem("cart", JSON.stringify(cart)); // Lưu lại
      renderCart(); // Render lại giỏ hàng
    });
  });
}

// Sự kiện đặt mua
if (orderBtn) {
  orderBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Giỏ hàng trống, không thể đặt mua!");
      return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Đặt mua thành công!\nTổng đơn hàng: $${total.toFixed(2)}\nCảm ơn bạn đã mua hàng ❤️`);

    // Xóa giỏ hàng sau khi đặt mua
    cart = [];
    localStorage.removeItem("cart");
    renderCart();
  });
}

// Hiển thị giỏ hàng khi tải trang
renderCart();
