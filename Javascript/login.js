document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  // Lấy danh sách user đã đăng ký
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm user có email và password khớp
  let validUser = users.find(user => user.email === email && user.password === password);

  if(validUser){
    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
  } else {
    // Điều kiện 3: nếu nhập sai thì báo lỗi
    alert("Sai email hoặc mật khẩu! Vui lòng nhập lại.");
  }
});
