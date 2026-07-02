// Jimbo's Munchies Website
console.log("Welcome to Jimbo's Munchies!");

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});