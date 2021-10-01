
var width = window.innerWidth;

var image = document.getElementsByClassName('image');



function parallaxDown() {
    new simpleParallax(image, {
        scale: 2,
        orientation: "down",
        maxTransition: 75,
        overflow: true,
        delay: 0.3,
    });
    
}
    
function parallaxRight() {
    new simpleParallax(image, {
        scale: 1.3,
        orientation: "right",
        maxTransition: 75,
        overflow: true,
        delay: 0.3,
    });
  
}
let parallax = width < 768 ? true : false;
if (parallax) {
    parallaxRight();
} else {
    parallaxDown();
    }


