/* ========================
    Story Animation
======================== */

var storyTimeline = gsap.timeline();

storyTimeline.from("#about-story",{duration:.5, alpha:0, xPercent:100})
            .from("#about-story h1",{duration:.5, alpha: 0, rotation:180},"-=0.25")
            .from("#about-story p",{duration:.5, alpha: 0, yPercent: 100},"-=0.25");

ScrollTrigger.create({
    animation: storyTimeline,
    trigger: "#about-story",
    //markers: true,
    start: "top 90%",
    end: "bottom 90%",
    toggleActions: "restart none reverse none"
})

/* ========================
    stars Animation
======================== */

var starsTimeline = gsap.timeline();

starsTimeline.from(".about-stars",{duration:1, alpha:0, rotation:360});

ScrollTrigger.create({
    animation: starsTimeline,
    trigger: "#about-bullets",
    //markers: true,
    start: "top 90%",
    end: "bottom 90%",
    toggleActions: "restart none restart none"
})