var customNavTimeline = gsap.timeline();

// console.log("does the custom nav work")

customNavTimeline.from("#about-nav", {duration: 2, x:500}, "start")
                .from("#portfolio-nav", {duration: 2, x:500}, "-=1.5")
                .from("#instagram-nav", {duration: 2, x:500}, "-=1.5")
                .from("#contact-nav", {duration: 2, x:500}, "-=1.5")
                .from("#nav-logo", {duration: 4, x:-500, alpha:0}, "start");
                