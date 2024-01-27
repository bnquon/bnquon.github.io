const headers = document.querySelectorAll(".project-title") 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
}, {
    threshold: 1
})

headers.forEach(header => {
    observer.observe(header)
})
