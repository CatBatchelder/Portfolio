var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;


burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerArrowSpeed, y:-10}, "animateBurger")
                        .to("#top-line",{duration:burgerArrowSpeed, y:10}, "animateBurger")
                        .to("#left-arrow",{duration:burgerArrowSpeed, rotation:55}, "createArrow")
                        .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-55}, "createArrow");

// var ArrowToBurgerTimeling = gsap.timeline({paused:true});

// timeline to animate the x into a arrow
// ArrowToBurgerTimeling.to("#burger", {duration:burgerArrowSpeed, rotation:90})
//                     .to("#bottom-line",{duration:burgerArrowSpeed, rotation:-45, y:-10, alpha:0}, "reanimateBurger")
//                     .to("#top-line",{duration:burgerArrowSpeed, rotation:45, y:10, alpha:0}, "reanimateBurger")
//                     .to("#middle-line",{duration:burgerArrowSpeed, alpha:1}, "reanimateBurger");
//                     .to("#left-arrow",{duration:burgerArrowSpeed, rotation:-55, alpha:1}, "recreateArrow")
//                     .to("#right-arrow",{duration:burgerArrowSpeed, rotation:55, alpha:1}, "recreateArrow");
                    

// function arrowDirection(){
//     if(canYouSeeTheMenu === false){
//         $("#burger").on("mouseenter", function(){
//             console.log("mouse enter");
//             burgerToArrowTimeline.play();
//         })
        
//         $("#burger").on("mouseleave", function(){
//             console.log("mouse leave");
//             burgerToArrowTimeline.reverse();
//         })
//     }else{
//         $("#burger").on("mouseenter", function(){
//             console.log("mouse enter");
//             ArrowToBurgerTimeling.play();
//         })
        
//         $("#burger").on("mouseleave", function(){
//             console.log("mouse leave");
//             ArrowToBurgerTimeling.reverse();
//         })
//     }
// }


$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    burgerToArrowTimeline.play();
})

$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    burgerToArrowTimeline.reverse();
})

// $("#burger").on("mouseenter", function(){
//     console.log("mouse enter");
//     ArrowToBurgerTimeling.play();
// })

// $("#burger").on("mouseleave", function(){
//     console.log("mouse leave");
//     ArrowToBurgerTimeling.reverse();
// })

// function animateArrow(){
//     // check the  canYouSeeTheMenu bool valus
//     if(canYouSeeTheMenu === false){
        
//         // play the timeline for the down arrow
//         burgerToArrowTimeline.play();
//     }else{
//         // play the timeline for the up arrow
//         ArrowToBurgerTimeling.play();
//     }
// }


