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
        // animateBurger();

        //console.log(burgerToArrowTimeline.progress() + "is the progress for the gsap timeline larger than 0 then its been played");

        //alert(burgerToArrowTimeline.progress() + "is the progress for the gsap timeline larger than 0 then its been played");

        if(burgerToArrowTimeline.progress() > 0){
            //turn the burger into an X
            //alert("dekstop animation");
            animateBurger();
        }else{
            //alert("mobile animation");
            mobileburgerAnimation();
        }
        //play the drop in navigation
        mainNavTimeline.play()
    } else {
        console.log("hide the menu")
        canYouSeeTheMenu = false;
        //trigger the arrow
        // arrowDirection();
        //turn the x into burger
        // animateBurger();

        if(burgerToArrowTimeline.progress() > 0){
            //turn the burger into an X
           // alert("dekstop animation");
            animateBurger();
        }else{
           // alert("mobile animation");
           mobileburgerAnimation();
        }

        //get rid of drop in navigation
        mainNavTimeline.reverse()
    }
}

var menuBackground = document.querySelector('#main-nav');

window.onclick = function(event){

    if(event.target == menuBackground){
        
        hideShowMainNav();
    }
}