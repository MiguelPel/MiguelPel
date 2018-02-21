document.addEventListener("DOMContentLoaded", function() {
    var front = 200;
    var middle = 100;
    var back = 50;
    var elements = document.getElementsByClassName("animate");
    var frontElements = document.getElementsByClassName("front");
    var middleElements = document.getElementsByClassName("middle");
    var backElements = document.getElementsByClassName("back");
    var lastScrollTop = 0;
    // should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
            // downscroll code
            front -= 3;
            middle -= 2;
            back -= 1;
        } else {
            // upscroll code
            front += 3;
            middle += 2;
            back += 1;
        }
        for (var i = 0; i < 3; i++) {
            frontElements[i].style.top = front + 'px';
            middleElements[i].style.top = middle + 'px';
            backElements[i].style.top = back + 'px';
        }
        lastScrollTop = st;
    }, false);
});