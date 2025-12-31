const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function handleSubmit(e) {
  e.preventDefault();
  alert("Messaggio inviato (demo)");
  e.target.reset();
}
