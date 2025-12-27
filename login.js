document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!role) {
      alert("Please select your role");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!password) {
      alert("Please enter your password");
      return;
    }

    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    alert("Login successful!");

    window.location.href = "projectintro.html";
  });
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
