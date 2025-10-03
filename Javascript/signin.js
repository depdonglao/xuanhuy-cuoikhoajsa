// Lắng nghe khi DOM đã load xong để chắc chắn các thẻ input tồn tại
document.addEventListener("DOMContentLoaded", () => {

    // Lấy form đăng ký
    const form = document.getElementById("signinForm");

    // Bắt sự kiện submit form
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Ngăn load lại trang

        // Lấy giá trị từ các ô nhập
        const email = document.getElementById("signinEmail").value;
        const password = document.getElementById("signinPassword").value;
        const confirm = document.getElementById("signinConfirm").value;

        // 1. Kiểm tra mật khẩu phải >= 8 ký tự
        if (password.length < 8) {
            alert("Mật khẩu phải có ít nhất 8 ký tự");
            return; // Dừng lại
        }

        // 2. Kiểm tra mật khẩu nhập lại có khớp không
        if (password !== confirm) {
            alert("Mật khẩu nhập lại không khớp");
            return;
        }

        // 3. Lấy danh sách user từ localStorage (nếu chưa có thì mảng rỗng)
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // 4. Kiểm tra trùng email
        const isExist = users.some(u => u.email === email);
        if (isExist) {
            alert("Email đã tồn tại, vui lòng dùng email khác");
            return;
        }

        // 5. Thêm user mới vào danh sách
        users.push({ email, password });

        // 6. Lưu lại vào localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // 7. Thông báo và chuyển về login
        alert("Đăng ký thành công! Hãy đăng nhập.");
        window.location.href = "login.html";
    });

});
