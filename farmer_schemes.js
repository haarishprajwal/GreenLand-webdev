// farmerschemes.js

document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("userRole");
  const email = localStorage.getItem("userEmail");

  // Protect page
  if (!role || !email) {
    alert("Please login to view farmer schemes");
    window.location.href = "login.html";
    return;
  }

  // Show user info & logout
  addUserInfo(role);

  // Scroll to top feature
  addScrollToTop();

  // Interactive highlight for schemes
  enableSchemeHighlight();
});

// ---------------- FUNCTIONS ----------------

function addUserInfo(role) {
  const header = document.querySelector("header");

  const userBox = document.createElement("div");
  userBox.style.marginTop = "10px";
  userBox.style.fontSize = "14px";
  userBox.style.fontWeight = "600";
  userBox.style.cursor = "pointer";
  userBox.textContent = `${role.toUpperCase()} | Logout`;

  userBox.onclick = () => {
    if (confirm("Logout from Greenland?")) {
      localStorage.clear();
      window.location.href = "login.html";
    }
  };

  header.appendChild(userBox);
}

function addScrollToTop() {
  const btn = document.createElement("button");
  btn.textContent = "↑";

  btn.style.position = "fixed";
  btn.style.bottom = "25px";
  btn.style.right = "25px";
  btn.style.padding = "10px 14px";
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

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

function enableSchemeHighlight() {
  const items = document.querySelectorAll("ul li");

  items.forEach(item => {
    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
      items.forEach(i => i.style.background = "none");
      item.style.background = "#e8f5e9";
      item.style.borderRadius = "6px";
      item.style.padding = "8px";
    });
  });
}
