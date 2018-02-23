document.addEventListener("DOMContentLoaded", function() {
    var front = 200;
    var middle = 100;
    var back = 50;
    var elements = document.getElementsByClassName("animate");
    var frontElements = document.getElementsByClassName("front");
    var middleElements = document.getElementsByClassName("middle");
    var backElements = document.getElementsByClassName("back");
    var lastScrollTop = 0;
    var sliders = document.getElementsByClassName("sliderUp");
    for (var i = 0; i < 4; i++) {
        var margin = (i * 300) + 400;
        sliders[i].style.top = margin + 'px';
        console.log(margin);
    }
    // should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
            // downscroll code
            front -= 4;
            middle -= 2;
            // think of a way to control the scope
            // if (middle < -55) middle = -55;
            // console.log(middle);
            back -= 1;
        } else {
            // upscroll code
            front += 4;
            middle += 2;
            // if (middle > 1) middle = 1;
            // console.log(middle);
            back += 1;
        }
        for (var i = 0; i < 3; i++) {
            frontElements[i].style.top = front + 'px';
            middleElements[i].style.top = middle + 'px';
            backElements[i].style.top = back + 'px';
        }
        lastScrollTop = st;
    }, false);
    var header = document.querySelector("header");
    header.addEventListener("click", function() {
        console.log('header clicked');
        //var sliders = document.getElementsByClassName("sliderUp");
        for (var i = 0; i < 4; i++) {
            sliders[i].style.display = "list-item";
            sliders[i].style.top = "0px";
        }
    });
});

function resetAnimations() {
    sliders = document.getElementsByClassName("sliderUp");
    for (var i = 0; i < 4; i++) {
        front = 200;
        middle = 100;
        back = 50;
        margin = (i * 300) + 400;
        sliders[i].style.top = margin + 'px';
        console.log("reset");
    }
};