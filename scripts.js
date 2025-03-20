const texts = [
    ["🎵 Cowboy Carter - Beyoncé Knowles", "🎵 HIT ME HARD AND SOFT - Billie Eilish", "🎵 Djesse Vol. 4 - Jacob Collier"],
    ["🔥 Not Like Us - Kendrick Lamar", "☕ Espresso - Sabrina Carpenter", "🚀 360 - Charli XCX"],
    ["🎤 Fortnight - Taylor Swift", "🍺 A Bar Song (Tipsy) - Shaboozey", "🍀 Good Luck, Babe! - Chappell Roan"]
];

function showCarousel(index) {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => carousel.classList.remove("show-carousel"));

    const selectedCarousel = document.getElementById(`carousel-${index}`);
    if (selectedCarousel) {
        selectedCarousel.classList.add("show-carousel");
    }
    document.getElementById("instruction_2").classList.remove("hidden");
}

function showText(carouselIndex, itemIndex) {
    document.getElementById("popup-text").innerText = texts[carouselIndex][itemIndex];
    document.getElementById("text-popup").style.display = "block";
}

function hideText() {
    document.getElementById("text-popup").style.display = "none";
}

function clearCarousels() {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => carousel.classList.remove("show-carousel"));
}


document.addEventListener("DOMContentLoaded", clearCarousels);