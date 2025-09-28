if (localStorage.getItem("user")){
    window.location.href = "/QN-JSA/D%E1%BB%B1%20%C3%A1n%20demo%202/home.html"
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    document.addEventListener("submit", (e) => {
        e.preventDefault()

        const email = document.getElementById("email").value.trim()
        const password = document.getElementById("password").value.trim()
        console.log(email, password)
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        console.log(users)
        const found = users.find(u => u.email === email && u.password === password)
        console.log("found:", found)

        if (!found){
            alert("Tài khoản hoặc mật khẩu không chính xác!")
            return;
        }

        localStorage.setItem("user", JSON.stringify(found))

        alert("Đăng nhập thành công!")
        window.location.href = "/QN-JSA/D%E1%BB%B1%20%C3%A1n%20demo%202/home.html"
    })
})