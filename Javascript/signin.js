if (localStorage.getItem("user")){
    window.location.href = "/QN-JSA/Project2/home.html"
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        const username = document.getElementById("username").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        console.log(username, email, password)

        if (!username || !email || !password){
            alert("Vui lòng nhập đầy đủ thông tin!")
            return;
        }

        if (password.length < 6){
            alert("Vui lòng nhập mật khẩu dài hơn 6 ký tự!")
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]")

        // Lọc trùng email
        if (users.some(u => u.email === email)){
            alert("Email bạn bạn nhập đã được liên kết với một tài khoản khác, vui lòng nhập email khác!")
            return;
        }

        const newUser = {
            id: Date.now(),
            username,
            email,
            password
        }

        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))

        alert("Đăng ký tài khoản thành công, vui nhấn OK để đăng nhập lại!")
        window.location.href = "/QN-JSA/Project2/login.html"
    })
})