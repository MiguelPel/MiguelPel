// the loading listener.
document.addEventListener("DOMContentLoaded", function() {
    var h = window.innerHeight;
    console.log(h);
    var elements = document.getElementsByClassName("animate");
    // get the front elements from CSS
    var frontElements = document.getElementsByClassName("front");
    var frontstyle = window.getComputedStyle(frontElements[0]);
    var frontOrigin;
    var front = frontOrigin = numerize(frontstyle.getPropertyValue('top'));
    console.log("front: " + front);
    // get the middle elements from CSS
    var middleElements = document.getElementsByClassName("middle");
    var middlestyle = window.getComputedStyle(middleElements[0]);
    var middleOrigin;
    var middle = middleOrigin = numerize(middlestyle.getPropertyValue('top'));

    // get the back elements from CSS
    var backElements = document.getElementsByClassName("back");
    var backstyle = window.getComputedStyle(backElements[0]);
    var backOrigin;
    var back = backOrigin = numerize(backstyle.getPropertyValue('top'));

    var body = document.body,
        html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var docHeight = height - h;

    console.log(docHeight);

    // for (var i = 0; i < frontElements.length; i++) {
    //     frontElements[i].style.position = 'ralative';
    //     middleElements[i].style.position = 'ralative';
    //     backElements[i].style.position = 'ralative';
    // }

    console.log("front: " + front);
    console.log("middle: " + middle);
    console.log("back: " + back);
    console.log("front origin: " + frontOrigin);
    console.log("middle origin: " + middleOrigin);
    console.log("back origin: " + backOrigin);
    // the lastScroolTop will keep track of the position in pixels of the top of the client's sceen
    var lastScrollTop = 0;
    // get the sliderUp, the 4 slide-in menu element (onClick)
    var sliders = document.getElementsByClassName("sliderUp");
    // function that set the animated objects AND the sliderUp elements even further down
    if (sliders[0]) {
        for (var i = 0; i < 4; i++) {
            var margin = (i * 100) + 200;
            // elements[i].style.top = margin + 'px';
            sliders[i].style.top = margin + 'px';
            // console.log(margin);
        }
    };

    function numerize(str) {
        var output = Number(str.match(/\d+/)[0]);
        return output;

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
            // if (st >= docHeight) {
            //     front = (0 - frontOrigin);
            //     middle = (0 - middleOrigin);
            //     back = (0 - backOrigin);
            // }
            if (front <= (0 - frontOrigin)) front = (0 - frontOrigin);
            if (middle <= (0 - middleOrigin)) middle = (0 - middleOrigin);
            if (back <= (0 - backOrigin)) back = (0 - backOrigin);

        } else {
            // upscroll code
            // Here, we'll need some checks to see thet the elements don't go off-body.
            front += 4;
            middle += 2;
            back += 1;
            // if (st <= 0) {
            //     front = frontOrigin;
            //     middle = middleOrigin;
            //     back = backOrigin;
            // }
            if (front >= frontOrigin) front = frontOrigin;
            if (middle >= middleOrigin) middle = middleOrigin;
            if (back >= backOrigin) back = backOrigin;
        }
        // then here we set all the front, middle, and back elements' positions
        for (var i = 0; i < frontElements.length; i++) {
            frontElements[i].style.top = front + 'px';
            middleElements[i].style.top = middle + 'px';
            backElements[i].style.top = back + 'px';
        }
        console.log("front: " + front);
        console.log("middle: " + middle);
        console.log("back: " + back);
        console.log("scroll value: " + st);
        // And finally we're setting the old position with the new
        lastScrollTop = st;
        // false is about the Event listener.
    }, true);
    //
    // Here we're working on the header manu animation.
    // Get the header
    if (sliders[0]) {
        var header = document.querySelector("header");
        // add event listener 'OnClick';
        header.addEventListener("click", function() {
            // the j is set here for scope
            var j;
            // set all the sliderUp's opacity to 1 (on),
            // and the top pixels at their actual position in CSS

            for (j = 0; j < 4; j++) {
                sliders[j].style.opacity = "1";
                sliders[j].style.top = "0px";
            }

        });
    }

    // First draft for a reset function that will be used to set the position
    // of the front, middle, and back objects.
    // problem is that it depends, if:
    // 1 - we reset the position because the 'bottom' link is clicked
    // 2 - we reset the position because the 'top' ling is clicked
    // 3 - the orientation of the screen has been switched.

    var topButton = document.getElementById("topButton");
    var bottomButton = document.getElementById("bottomButton");

    topButton.addEventListener("click", function() {
        // elements!!! not sliders. Sliders are the sliderUp
        console.log("reset top");
        front = frontOrigin;
        middle = middleOrigin;
        back = backOrigin;
        console.log("front origin: " + frontOrigin);
        console.log("middle origin: " + middleOrigin);
        console.log("back origin: " + backOrigin);
        for (var i = 0; i < 3; i++) {
            frontElements[i].style.top = front + 'px';
            middleElements[i].style.top = middle + 'px';
            backElements[i].style.top = back + 'px';
        }
        for (var i = 0; i < 4; i++) {
            var margin = (i * 100) + 200;
            sliders[i].style.opacity = "0";
            sliders[i].style.top = margin + 'px';
            // console.log(margin);
        }
        console.log("front: " + front);
        console.log("middle: " + middle);
        console.log("back: " + back);
    });

    bottomButton.addEventListener("click", function resetAnimations(direction) {
        console.log("reset Bottom");
        front = (0 - frontOrigin);
        middle = (0 - middleOrigin);
        back = (0 - backOrigin);
        // front = 0;
        // middle = 0;
        // back = 0;
        for (var i = 0; i < 3; i++) {
            frontElements[i].style.top = front + 'px';
            middleElements[i].style.top = middle + 'px';
            backElements[i].style.top = back + 'px';
        }
        console.log("front: " + front);
        console.log("middle: " + middle);
        console.log("back: " + back);
    });

});

// speaking of whitch, we'll aslo need a onResize function here
// to handle more precisely what happens when the screen orientation is switched.
// just like 'refresh'