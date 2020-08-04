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
       // console.log("show me the menu")
        canYouSeeTheMenu = true;

        //play the annimation to make the down arrow an x
        burgerAnimationTimeline.play("downArrowToX");
       
        //play the drop in navigation
        mainNavTimeline.play()

        //play the animation to make the text and logo slide in
        customNavTimeline.play()
    } else {
        //console.log("hide the menu")
        canYouSeeTheMenu = false;

        //play the annimation to make the down arrow a burger
        burgerAnimationTimeline.play("upArrowToBurger");

        //get rid of drop in navigation
        mainNavTimeline.reverse()

        //make the animation reverse so it can play again
        customNavTimeline.reverse()
    }
}

var menuBackground = document.querySelector('#main-nav');

window.onclick = function(event){

    if(event.target == menuBackground){
        
        hideShowMainNav();
    }
}

function reportWindowSize() {
    console.log("test");
    if (canYouSeeTheMenu === false) {
        console.log("can't see the main nav");
        console.log($("#main-nav").outerHeight());
        navHeight = $("#main-nav").outerHeight();
        gsap.set("#main-nav", {
            y: -navHeight
        });
    }
}


// add a listener to the window for everytime it's resized
window.addEventListener('resize', reportWindowSize);