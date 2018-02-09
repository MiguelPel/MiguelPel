document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByClassName("front");
    window.onscroll = function() { myFunction(elements) };
});

var myFunction = function(elements) {
    for (var i = 0; i < elements.length; i++) {
        var bounding = elements[i].getBoundingClientRect();
        if (isInViewport(elements[i]) && !elements[i].animated) {
            elements[i].innerHTML = "scrolled";
            console.log("element " + i + " animated");
            // animation here.
            elements[i].animated = true;
            // here animate!!!
        }
    }
};

var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};