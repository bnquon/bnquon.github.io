const headers = document.querySelector(".section-title");

const options = { 
    threshold: 0.25,
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        console.log(entry)
    })
}, options);


observer.observe(headers);

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            card.classList.toggle('is-flipped');
        });
    });
});