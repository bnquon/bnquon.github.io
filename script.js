const headers = document.querySelectorAll(".a") 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
}, {
    threshold: 0.25,
})

headers.forEach(header => {
    observer.observe(header)
})
