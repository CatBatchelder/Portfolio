

//setting a universal speed for the burger animation
var burgerAnimationSpeed = .25;

// making the rotation come from the center
gsap.set(".lines",{transformOrigin:"center"});

var burgerAnimationTimeline = gsap.timeline({paused:true});

burgerAnimationTimeline.addLabel("burgerToDownArrow")
                        .to("#burger",{duration:burgerAnimationSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerAnimationSpeed, y:-10}, "animateBurger")
                        .to("#top-line",{duration:burgerAnimationSpeed, y:10}, "animateBurger")
                        .to("#down-left-arrow",{duration:burgerAnimationSpeed, rotation:55}, "createArrow")
                        .to("#down-right-arrow",{duration:burgerAnimationSpeed, rotation:-55}, "createArrow")
                        .addLabel("burgerToDownArrowReverse")
                        .addPause()
                        .addLabel("downArrowToX")
                        .to("#top-line",{duration:burgerAnimationSpeed, rotation:45}, "burgerToX")
                        .to("#bottom-line",{duration:burgerAnimationSpeed, rotation:-45}, "burgerToX")
                        .to("#middle-line",{duration:burgerAnimationSpeed, alpha:0}, "burgerToX")
                        .to("#down-right-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")
                        .to("#down-left-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerToX")
                        .to("#up-right-arrow",{duration:burgerAnimationSpeed, alpha:0}, "burgerToX")
                        .to("#up-left-arrow",{duration:burgerAnimationSpeed, alpha:0}, "burgerToX")
                        .addLabel("downArrowToXReverse")
                        .addPause()
                        .addLabel("xToUpArrow")
                        .to("#top-line",{duration:burgerAnimationSpeed, rotation:0},"createArrowUp")
                        .to("#bottom-line",{duration:burgerAnimationSpeed, rotation:0},"createArrowUp")
                        .to("#up-left-arrow",{duration:burgerAnimationSpeed, rotation:55, alpha:1},"createArrowUp2")
                        .to("#up-right-arrow",{duration:burgerAnimationSpeed, rotation:-55, alpha:1},"createArrowUp2")
                        .addLabel("xToUpArrowReverse")
                        .addPause()
                        .addLabel("upArrowToBurger")
                        .to("#top-line",{duration:burgerAnimationSpeed, y:0, rotation:0},"backToBurger")
                        .to("#bottom-line",{duration:burgerAnimationSpeed, y:0, rotation:0},"backToBurger")
                        .to("#middle-line",{duration:burgerAnimationSpeed, alpha:1},"backToBurger")
                        .to("#burger",{duration:burgerAnimationSpeed, rotation:0},"backToBurger")
                        .to("#up-right-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0},"backToBurger")
                        .to("#up-left-arrow",{duration:burgerAnimationSpeed, alpha:0, rotation:0},"backToBurger")
                        .to("#down-right-arrow",{duration:burgerAnimationSpeed, alpha:1},"backToBurger")
                        .to("#down-left-arrow",{duration:burgerAnimationSpeed, alpha:1},"backToBurger")
                        .addPause();
