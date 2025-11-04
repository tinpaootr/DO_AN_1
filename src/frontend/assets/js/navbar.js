// components/navbar.js
fetch("../../components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // ✅ Đặt toàn bộ code xử lý trong đây, sau khi navbar đã được render
    const loginBtn = document.querySelector(".btn-login");
    const logoutBtn = document.querySelector(".btn-logout");
    const profileItem = document.querySelector('a[href="xemhoso.html"]');

    const isLoggedIn = localStorage.getItem("loggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn === "true" && loginBtn) {
      // --- Đã đăng nhập ---
      loginBtn.innerHTML = `<i class="fas fa-user me-1"></i> ${username || "Tài khoản"}`;
      loginBtn.removeAttribute("href");
      loginBtn.setAttribute("data-bs-toggle", "dropdown");

      if (profileItem) profileItem.style.display = "block";
      if (logoutBtn) logoutBtn.style.display = "block";
    } else {
      // --- Chưa đăng nhập ---
      loginBtn.innerHTML = `<i class="fas fa-sign-in-alt me-1"></i> Đăng nhập`;
      loginBtn.removeAttribute("data-bs-toggle");
      loginBtn.href = "dangnhap.html";

      if (profileItem) profileItem.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "none";
    }

    // --- Đăng xuất ---
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        window.location.reload();
      });
    }
  });
