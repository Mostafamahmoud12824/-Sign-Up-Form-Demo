const inputs = document.querySelectorAll(".input-group input");
inputs.forEach((input) => {
  input.addEventListener("change", () => {
    console.log(input.value);
    if (input.value) {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  });
});

const password = document.getElementById("password");
const eye = document.querySelector(".eye");
const closeEye = document.querySelector(".close-eye");

eye.addEventListener("click", () => {
  password.setAttribute("type", "text");
  eye.style.display = "none";
  closeEye.style.display = "block";
});

closeEye.addEventListener("click", () => {
  password.setAttribute("type", "password");
  closeEye.style.display = "none";
  eye.style.display = "block";
});