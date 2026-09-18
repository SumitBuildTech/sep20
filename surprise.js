const heart = document.getElementById("heart");

const heartScreen = document.getElementById("heartScreen");

const surpriseContent =
    document.getElementById("surpriseContent");

const music =
    document.getElementById("birthdayMusic");


let currentSlide = 0;

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");


heart.addEventListener("click", function () {

    // Start music from user's click
    music.play();

    // Heart animation
    heart.classList.add("clicked");


    // Wait for heartbeat animation
    setTimeout(function () {

        // Hide heart
        heartScreen.style.opacity = "0";

        setTimeout(function () {

            heartScreen.style.display = "none";

            // Show surprise
            surpriseContent.classList.add("show");

        }, 1000);

    }, 800);

});


function showSlide(index) {

    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function(dot) {

        dot.classList.remove("active-dot");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active-dot");

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


setInterval(nextSlide, 3000);