// the loading listener.
document.addEventListener("DOMContentLoaded", function() {
    var h = window.innerHeight;
    console.log(h);
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

    // set an id to each animatable element od the damn document.
    var elements = document.querySelectorAll(".animate");

    for (var l = 0; l < elements.length; l++) {
        elements[l].id = l;
    };

    window.addEventListener("scroll", function() {



        for (var i = 0; i < elements.length; i++) {
            var bounding = elements[i].getBoundingClientRect();
            if (isInViewport(elements[i])) {
                var style = window.getComputedStyle(elements[i]);
                var top = numerize(style.getPropertyValue('top'));
                if (elements[i].className == 'front') {
                    top -= 4;
                }
                if (elements[i].className == 'middle') {
                    top -= 4;
                }
                if (elements[i].className == 'back') {
                    top -= 4;
                }
                elements[i].style.top = top + 'px';

                // elements[i].innerHTML = "scrolled";
                console.log("element " + i + " animated");
                // animation here.
                // elements[i].animated = true;
                // here animate!!!
            }
        }

    });

    var isInViewport = function(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };














    front = frontOrigin = 400;
    middle = middleOrigin = 100;
    back = backOrigin = 50;
    for (var i = 0; i < frontElements.length; i++) {

        frontElements[i].style.top = front + 'px';
        middleElements[i].style.top = middle + 'px';
        backElements[i].style.top = back + 'px';
    }


    console.log("front: " + front);
    console.log("middle: " + middle);
    console.log("back: " + back);
    console.log("front origin: " + frontOrigin);
    console.log("middle origin: " + middleOrigin);
    console.log("back origin: " + backOrigin);
    // the lastScroolTop will keep track of the position in pixels of the top of the client's sceen
    var lastScrollTop = 0;


    function numerize(str) {
        var output = Number(str.match(/\d+/)[0]);
        return output;

    }
    // add a event listener: when scrolled
    // window.addEventListener("scroll", function() {
    //     //This var stocks the position of the client's screen AFTER scrolling
    //     // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //     var st = window.pageYOffset || document.documentElement.scrollTop;
    //     // here we compare the nex position with the old position.
    //     // if more, meaning that it's been scrolled down
    //     if (st > lastScrollTop) {
    //         // downscroll code
    //         // We change the top pixels.
    //         // Here, we'll need some checks to see thet the elements don't go off-body.
    //         front -= 4;
    //         middle -= 2;
    //         back -= 1;
    //         // if (st >= docHeight) {
    //         //     front = (0 - frontOrigin);
    //         //     middle = (0 - middleOrigin);
    //         //     back = (0 - backOrigin);
    //         // }
    //         if (front <= (0 - frontOrigin)) front = (0 - frontOrigin);
    //         if (middle <= (0 - middleOrigin)) middle = (0 - middleOrigin);
    //         if (back <= (0 - backOrigin)) back = (0 - backOrigin);

    //     } else {
    //         // upscroll code
    //         // Here, we'll need some checks to see thet the elements don't go off-body.
    //         front += 4;
    //         middle += 2;
    //         back += 1;
    //         // if (st <= 0) {
    //         //     front = frontOrigin;
    //         //     middle = middleOrigin;
    //         //     back = backOrigin;
    //         // }
    //         if (front >= frontOrigin) front = frontOrigin;
    //         if (middle >= middleOrigin) middle = middleOrigin;
    //         if (back >= backOrigin) back = backOrigin;
    //     }
    //     // then here we set all the front, middle, and back elements' positions
    //     for (var i = 0; i < frontElements.length; i++) {
    //         frontElements[i].style.top = front + 'px';
    //         middleElements[i].style.top = middle + 'px';
    //         backElements[i].style.top = back + 'px';
    //     }
    //     console.log("front: " + front);
    //     console.log("middle: " + middle);
    //     console.log("back: " + back);
    //     console.log("scroll value: " + st);
    //     // And finally we're setting the old position with the new
    //     lastScrollTop = st;
    //     // false is about the Event listener.
    // }, true);


    // First draft for a reset function that will be used to set the position
    // of the front, middle, and back objects.
    // problem is that it depends, if:
    // 1 - we reset the position because the 'bottom' link is clicked
    // 2 - we reset the position because the 'top' ling is clicked
    // 3 - the orientation of the screen has been switched.

    //var topButton = document.getElementById("topButton");
    var bottomButton = document.getElementById("bottomButton");

    // topButton.addEventListener("click", function() {
    //     // elements!!! not sliders. Sliders are the sliderUp
    //     console.log("reset top");
    //     front = frontOrigin;
    //     middle = middleOrigin;
    //     back = backOrigin;
    //     console.log("front origin: " + frontOrigin);
    //     console.log("middle origin: " + middleOrigin);
    //     console.log("back origin: " + backOrigin);
    //     for (var i = 0; i < frontElements.length; i++) {
    //         frontElements[i].style.top = front + 'px';
    //         middleElements[i].style.top = middle + 'px';
    //         backElements[i].style.top = back + 'px';
    //     }
    //     console.log("front: " + front);
    //     console.log("middle: " + middle);
    //     console.log("back: " + back);
    // });

    bottomButton.addEventListener("click", function() {
        console.log("reset Bottom");
        front = (0 - frontOrigin);
        middle = (0 - middleOrigin);
        back = (0 - backOrigin);
        // front = 0;
        // middle = 0;
        // back = 0;
        for (var i = 0; i < frontElements.length; i++) {
            frontElements[i].style.top = front + 'px';
            middleElements[i].style.top = middle + 'px';
            backElements[i].style.top = back + 'px';
        }
        console.log("front: " + front);
        console.log("middle: " + middle);
        console.log("back: " + back);
    });

});

// // speaking of whitch, we'll aslo need a onResize function here
// // to handle more precisely what happens when the screen orientation is switched.
// // just like 'refresh'