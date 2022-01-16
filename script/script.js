var topbutton = document.getElementById("topbutton");

    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

const ratio = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('trans-visible');
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="trans-"]').forEach(function (t) {
    observer.observe(t);
})