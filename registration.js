document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const role = document.getElementById("role").value;

    if (!name || !email || !password || !confirm || !role) {
      alert("Please fill all the fields");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
      role: role
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration successful! Please login.");

    window.location.href = "login.html";
  });
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
