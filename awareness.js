// awareness.js

document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("userRole");
  const email = localStorage.getItem("userEmail");

  // Block direct access without login
  if (!role || !email) {
    alert("Please login to access this page");
    window.location.href = "login.html";
    return;
  }

  // Inject user info in navbar
  addUserInfo(role, email);

  // Create scroll-to-top button
  createScrollTopButton();
});

// ---------------- FUNCTIONS ----------------

function addUserInfo(role, email) {
  const nav = document.querySelector("nav");

  const userBox = document.createElement("div");
  userBox.style.fontSize = "14px";
  userBox.style.color = "#2e7d32";
  userBox.style.fontWeight = "600";
  userBox.style.cursor = "pointer";
  userBox.textContent = `${role.toUpperCase()} | Logout`;

  userBox.onclick = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.clear();
      window.location.href = "login.html";
    }
  };

  nav.appendChild(userBox);
}

function createScrollTopButton() {
  const btn = document.createElement("button");
  btn.innerHTML = "⬆";
  btn.title = "Back to top";

  btn.style.position = "fixed";
  btn.style.bottom = "30px";
  btn.style.right = "30px";
  btn.style.padding = "12px 14px";
  btn.style.borderRadius = "50%";
  btn.style.border = "none";
  btn.style.backgroundColor = "#2e7d32";
  btn.style.color = "#fff";
  btn.style.fontSize = "18px";
  btn.style.cursor = "pointer";
  btn.style.display = "none";
  btn.style.zIndex = "1000";

  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
