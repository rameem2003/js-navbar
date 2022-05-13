const nav = document.querySelector("nav");
const btn = document.getElementById("btn");



btn.addEventListener("click", () => {
    nav.classList.toggle("active");
})