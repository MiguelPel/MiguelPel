document.addEventListener("DOMContentLoaded", function() {
    // Variables
    // all the elements with .animate
    var elements = document.querySelectorAll(".animate");
    var lastScrollTop = 0;
    var direction;

    window.addEventListener("scroll", function() {
        // checks:
        // The scrolling is up, or down (1 or -1);
        var st = window.pageYOffset || document.documentElement.scrollTop;
        // here we compare the nex position with the old position.
        // if more, meaning that it's been scrolled down
        if (st > lastScrollTop) {
            // downscroll code
            console.log('scroll down');
            direction = 1;
        } else {
            // upscroll code
            console.log('scroll up');
            direction = -1;
        }
        lastScrollTop = st;
        // for loop
        var i;
        for (i = 0; i < elements.length; i++) {
            // The element is is the view port (or just below, actually.)
            var element = elements[i];
            var top = numerize(element.style.top);
            console.log(top);
            if (isInViewport(element)) {
                // Works.
                // console.log('element ' + i + ' in viewPort');
                console.log(typeof element);
                // var style = window.getComputedStyle(element);
                var top = numerize(element.style.top);
                console.log(top);
                if (element.className == 'front') {
                    if (direction < 0) top += 2;
                    else top -= 2;
                    console.log('sth');
                }
                if (element.className == 'middle') {
                    if (direction < 0) top += 2;
                    else top -= 2;
                    console.log(top);
                }
                if (element.className == 'back') {
                    if (direction < 0) top += 1;
                    else top -= 1;
                    console.log(top);
                }
                element.style.top = top + 'px';
            };
        }
    });

    function isInViewport(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= ((window.innerHeight + 150) || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    function numerize(str) {
        var output = Number(str.match(/\d+/)); //[0]);
        return output;

    };

});