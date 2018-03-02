// the loading listener.
document.addEventListener("DOMContentLoaded", function() {
    // Numbers of pixels from the top. The sams numbers are
    // hard coded in the CSS file
    // We'll set those numbers in the css file, and change them with
    // Media queries. The values here will then GET the values FROM
    // the CSS
    // the nuber of pixels from the top for front elements.
    var front = 300;
    // number of pixels from the top fro the middle elements
    var middle = 100;
    // number of pixels from the top for the back elements
    var back = 50;
    // get the elements "animate" it's a class the elements have along with front/middle/back
    var elements = document.getElementsByClassName("animate");
    // get the front elements
    var frontElements = document.getElementsByClassName("front");
    // get the middle elements
    var middleElements = document.getElementsByClassName("middle");
    // get the back elements
    var backElements = document.getElementsByClassName("back");
    // the lastScroolTop will keep track of the position in pixels of the top of the client's sceen
    var lastScrollTop = 0;
    // get the sliderUp, the 4 slide-in menu element (onClick)
    var sliders = document.getElementsByClassName("sliderUp");
    // function that set the animated objects AND the sliderUp elements even further down
    for (var i = 0; i < 4; i++) {
        var margin = (i * 100) + 200;
        elements[i].style.top = margin + 'px';
        sliders[i].style.top = margin + 'px';
        console.log(margin);
    }
    // add a event listener: when scrolled
    window.addEventListener("scroll", function() {
        //This var stocks the position of the client's screen AFTER scrolling
        // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        var st = window.pageYOffset || document.documentElement.scrollTop;
        // here we compare the nex position with the old position.
        // if more, meaning that it's been scrolled down
        if (st > lastScrollTop) {
            // downscroll code
            // We change the top pixels.
            // Here, we'll need some checks to see thet the elements don't go off-body.
            front -= 4;
            middle -= 2;
            back -= 1;
        } else {
            // upscroll code
            // Here, we'll need some checks to see thet the elements don't go off-body.
            front += 4;
            middle += 2;
            back += 1;
        }
        // then here we set all the front, middle, and back elements' positions
        for (var i = 0; i < 3; i++) {
            frontElements[i].style.top = front + 'px';
            middleElements[i].style.top = middle + 'px';
            backElements[i].style.top = back + 'px';
        }
        // And finally we're setting the old position with the new
        lastScrollTop = st;
        // false is bout the Event listener.
    }, false);
    //
    // Here we're working on the header manu animation.
    // Get the header
    var header = document.querySelector("header");
    // add event listener 'OnClick';
    header.addEventListener("click", function() {
        // the i is set here for scope
        var i;
        // for control
        console.log('header clicked');
        // set all the sliderUp's opacity to 1 (on),
        // and the top pixels at their actual position in CSS
        for (i = 0; i < 4; i++) {
            sliders[i].style.opacity = "1";
            sliders[i].style.top = "0px";
        }
    });
});

// First draft for a reset function that will be used to set the position
// of the front, middle, and back objects.
// problem is that it depends, if:
// 1 - we reset the position because the 'bottom' link is clicked
// 2 - we reset the position because the 'top' ling is clicked
// 3 - the orientation of the screen has been switched.

function resetAnimations() {
    // elements!!! not sliders. Sliders are the sliderUp
    for (var i = 0; i < 4; i++) {
        front = 200;
        middle = 100;
        back = 50;
        margin = (i * 300) + 400;
        elements[i].style.top = margin + 'px';
        console.log("reset");
    }
};

// speakiing of whitch, we'll aslo need a onResize function here
// to handle more precisely what happens when the screen orientation is switched.