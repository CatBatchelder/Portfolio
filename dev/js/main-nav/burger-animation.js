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
                        .to("#right-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")
                        .to("#left-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX");

function animateBurger(){
    // check the  canYouSeeTheMenu bool valus
    if(canYouSeeTheMenu === true){
        // turn the burger into x and play timeline
        burgerAnimationTimeline.play();
    }else{
        // turn the x back into a burger
        burgerAnimationTimeline.reverse();
    }
}

//create function for lines to go back to normal color
// function resetBurgerLineColor(){
//     gsap.to(".lines",{duration:0.25, stroke:"#fff"});
// }