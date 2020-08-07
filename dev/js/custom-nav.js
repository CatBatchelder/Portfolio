var customNavTimeline = gsap.timeline();

// console.log("does the custom nav work")

customNavTimeline.from("#about-nav", {duration: 1, x:500}, "start")
                .from("#portfolio-nav", {duration: 1, x:500}, "-=.5")
                .from("#instagram-nav", {duration: 1, x:500}, "-=.5")
                .from("#contact-nav", {duration: 1, x:500}, "-=.5")
                .from("#nav-logo", {duration: 2, x:-500, alpha:0}, "start");
                