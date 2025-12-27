document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("userRole");
  const email = localStorage.getItem("userEmail");

  if (!role || !email) {
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  const header = document.querySelector("header h1");
  const subText = document.querySelector("header p");

  header.textContent = "Welcome to Greenland 🌱";
  subText.textContent = `Logged in as ${role.toUpperCase()} (${email})`;

  restrictAccess(role);
});

function restrictAccess(role) {
  const cards = document.querySelectorAll(".card");


  if (role === "public") {
    cards[1].style.display = "none";
  }

  if (role === "expert") {
    cards[0].style.display = "block";
    cards[1].style.display = "block";
  }

}
