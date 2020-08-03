var burgerAnimationTimeline = gsap.timeline({paused:true});

//setting a universal speed for the burger animation
var burgerAnimationSpeed = .25;

// making the rotation come from the center
gsap.set(".lines",{transformOrigin:"center"});

// animate the middle line out, rotate top and bottom lines
// burgerAnimationTimeline.to("#middle-line",{duration:burgerAnimationSpeed, alpha:0},"burgerStart")
//                         .to("#top-line",{duration:burgerAnimationSpeed, rotation:45, y:10, stroke:"#6A8AA7"},"burgerStart")
//                         .to("#bottom-line",{duration:burgerAnimationSpeed, rotation:-45, y:-10, stroke:"#6A8AA7", onReverseComplete:resetBurgerLineColor},"burgerStart");

// make the burger into an x
burgerAnimationTimeline.to("#top-line",{duration:burgerAnimationSpeed, rotation:45}, "burgerToX")
                        .to("#bottom-line",{duration:burgerAnimationSpeed, rotation:-45}, "burgerToX")
                        .to("#middle-line",{duration:burgerAnimationSpeed, alpha:0}, "burgerToX")
                        .to("#down-right-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")
                        .to("#down-left-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX");

var upArrowToBurger = gsap.timeline({paused:true});
upArrowToBurger.to("#top-line",{y:0},"backToBurger")
                .to("#bottom-line",{y:0},"backToBurger")
                .to("#middle-line",{alpha:1},"backToBurger")
                .to("#burger",{rotation:0},"backToBurger")
                .to("#up-right-arrow",{alpha:0},"backToBurger")
                .to("#up-left-arrow",{alpha:0},"backToBurger")
                .to("#down-right-arrow",{alpha:1},"backToBurger")
                .to("#down-left-arrow",{alpha:1},"backToBurger");

function animateBurger(){
    // check the  canYouSeeTheMenu bool valus
    if(canYouSeeTheMenu === true){
        // turn the burger into x and play timeline
        burgerAnimationTimeline.play();
    }else{
        // turn the x back into a burger
        upArrowToBurger.play();
    }
}

//create function for lines to go back to normal color
// function resetBurgerLineColor(){
//     gsap.to(".lines",{duration:0.25, stroke:"#fff"});
// }