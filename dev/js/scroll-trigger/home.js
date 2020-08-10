/* ========================
    Hero Pinning
======================== */
//console.log("can it read this file")

gsap.registerPlugin(ScrollTrigger);

gsap.to("#home-hero",{scrollTrigger:{
    trigger:"#home-hero",
    pin: true,
    pinSpacing: false,
    start: "top 50",
    end: "bottom 50",
    //markers:true,
    id:"hero"
}})

/* ========================
    Logos Coming In
======================== */

var logosAnimationTimeLine = gsap.timeline({});

logosAnimationTimeLine.from(".logos",{duration:.25, alpha:0, stagger:0.12, yPercent: 200});

ScrollTrigger.create({
    animation: logosAnimationTimeLine,
    //markers: true,
    trigger: "#home-illustrations",
    toggleActions: "restart none reverse none",
    id: "logos",
    start: "top 50%",
    end: "bottom 50%"
})