const texts = [
    // Album of the Year
    [
        "Cowboy Carter - Beyoncé Knowles",
        "New Blue Sun - André 3000",
        "Short n' Sweet - Sabrina Carpenter",
        "Brat - Charli XCX",
        "Djesse Vol. 4 - Jacob Collier",
        "HIT ME HARD AND SOFT - Billie Eilish",
        "The Rise and Fall of a Midwest Princess - Chappell Roan",
        "The Tortured Poets Department - Taylor Swift"
    ],
    // Record of the Year
    [
        "Not Like Us - Kendrick Lamar",
        "Espresso - Sabrina Carpenter",
        "360 - Charli XCX",
        "TEXAS HOLD 'EM - Beyoncé",
        "Birds of a Feather - Billie Eilish",
        "Please Please Please - Sabrina Carpenter",
        "Good Luck, Babe! - Chappell Roan",
        "Fortnight (feat. Post Malone) - Taylor Swift"
    ],
    // Song of the Year
    [
        "Fortnight - Taylor Swift",
        "A Bar Song (Tipsy) - Shaboozey",
        "Good Luck, Babe! - Chappell Roan",
        "Die With A Smile - Lady Gaga & Bruno Mars",
        "Birds of a Feather - Billie Eilish",
        "Espresso - Sabrina Carpenter",
        "TEXAS HOLD 'EM - Beyoncé",
        "Not Like Us - Kendrick Lamar"
    ]
];

let isPopupOpen = false;

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
    if (isPopupOpen) return; // prevent opening multiple

    const popup = document.getElementById("text-popup");
    const popupText = document.getElementById("popup-text");

    popupText.innerHTML = texts[carouselIndex][itemIndex];
    popup.style.display = "block";

    isPopupOpen = true;
    document.body.classList.add("popup-active");
}

function hideText() {
    document.getElementById("text-popup").style.display = "none";
    isPopupOpen = false;
    document.body.classList.remove("popup-active");
}

function clearCarousels() {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => carousel.classList.remove("show-carousel"));
    document.getElementById("instruction_2").classList.add("hidden");
}

// On page load
document.addEventListener("DOMContentLoaded", clearCarousels);