const watcher = new Watch(".container.image");

watcher.inView(function () {
    const container = document.querySelector(".container.image.can_stick")
    if (container) {
        container.classList.remove("sticky");
    }
    
}).outView(function () {
    const container = document.querySelector(".container.image.can_stick")
    if (container) {
        container.classList.add("sticky");
    }
})

const close_button = document.querySelector(".stick .fa-close");

close_button.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(".sticky").classList.remove("sticky");
    document.querySelector(".can_stick").classList.remove("can_stick");
});