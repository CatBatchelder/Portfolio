var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the main nav off screen 
gsap.set("#main-nav", {
    y: -navHeight
})

//define the drop in nav variable
var mainNavTimeline = gsap.timeline({
    paused: true
})

//make the nav play
mainNavTimeline.to("#main-nav", {
    duration: 1,
    y: 0
})

function hideShowMainNav() {
    //console.log("hide or show nav");
    //toggles the css display property
    //$("#main-nav").toggle();

    if (canYouSeeTheMenu === false) {
        console.log("show me the menu")
        canYouSeeTheMenu = true;
        //turn the burger into x
        animateBurger();
        //play the drop in navigation
        mainNavTimeline.play()
    } else {
        console.log("hide the menu")
        canYouSeeTheMenu = false;
        //turn the x into burger
        animateBurger();
        //get rid of drop in navigation
        mainNavTimeline.reverse()
    }
}