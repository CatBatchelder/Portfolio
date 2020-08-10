/* ========================
    sliding in
======================== */
  

gsap.from("#portfolio-branding", {duration:1, alpha:0, xPercent:100,

scrollTrigger:{
    trigger:"#portfolio-branding",
    start: "top 80%",
    end: "bottom 80%"
    //markers:true,
    //id:"portfolio"
}})
gsap.from("#portfolio-photo", {duration:1, alpha:0, xPercent:-100,

    scrollTrigger:{
        trigger:"#portfolio-photo",
        start: "top 80%",
        end: "bottom 80%"
        //markers:true
    }})
gsap.from("#portfolio-illustration", {duration:1, alpha:0, xPercent:100,

     scrollTrigger:{
            trigger:"#portfolio-illustration",
            start: "top 80%",
            end: "bottom 80%"
            //markers:true
        }})
gsap.from("#portfolio-web", {duration:1, alpha:0, xPercent:-100,

    scrollTrigger:{
        trigger:"#portfolio-web",
        start: "top 80%",
        end: "bottom 80%"
        //markers:true
    }})
gsap.from("#portfolio-print", {duration:1, alpha:0, xPercent:100,

    scrollTrigger:{
        trigger:"#portfolio-print",
        start: "top 80%",
        end: "bottom 80%"
        //markers:true
    }})
gsap.from("#portfolio-type", {duration:1, alpha:0, xPercent:-100,

    scrollTrigger:{
        trigger:"#portfolio-type",
        start: "top 80%",
        end: "bottom 80%"
        //markers:true
    }})