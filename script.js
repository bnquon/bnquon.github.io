const headers = document.querySelector(".project-title");

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