function toggleMenu() {
    const dropDown = document.getElementById("dropDown");
    dropDown.classList.toggle("show");
}

function closeMenuOnOutsideClick(event) {
    const header = document.querySelector("header");
    const dropDown = document.getElementById("dropDown");
    if (!header.contains(event.target)) {
        dropDown.classList.remove("show");
    }
}

document.getElementById("menuIcon").addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenuOnOutsideClick);