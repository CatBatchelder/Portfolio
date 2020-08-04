gsap.set("#up-left-arrow",{transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow",{transformOrigin:"right center", alpha:0});


$("#burger").on("mouseenter", function(){
    //console.log("mouse enter");

    
    if(canYouSeeTheMenu === false){
        burgerAnimationTimeline.play("burgerToDownArrow");
    }else{
        burgerAnimationTimeline.play("xToUpArrow");
    }
})



$("#burger").on("mouseleave", function(){
    //console.log("mouse leave");
 

    if(canYouSeeTheMenu === false){
        burgerAnimationTimeline.reverse("burgerToDownArrowReverse");
    }else{
        burgerAnimationTimeline.reverse("xToUpArrowReverse");
    }
    
})