document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});