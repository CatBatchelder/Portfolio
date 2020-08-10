var contactSliderTimeline = gsap.timeline();

gsap.set("#contact-name",{transformOrigin: "right center"});
gsap.set("#contact-email",{transformOrigin: "left center"});
//gsap.set("#contact-submit",{transformOrigin: "center top"});

contactSliderTimeline.from("#contact-name",{duration:.5, alpha:0, scaleX:0}, "start")
            .from("#contact-email",{duration:.5, alpha: 0, scaleX:0}, "start")
            .from("#contact-comments",{duration:.5, alpha: 0, scaleX:0}, "start");
            //.from("#contact-sumbit",{duration:.5, alpha: 0, xPercent:100}, "start");

ScrollTrigger.create({
    animation: contactSliderTimeline,
    trigger: "#Contact-form",
    //markers: true,
    start: "top 75%",
    end: "bottom 75%",
    toggleActions: "restart none none none"
})

