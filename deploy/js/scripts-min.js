var burgerAnimationTimeline=gsap.timeline({paused:!0}),burgerAnimationSpeed=.25;gsap.set(".lines",{transformOrigin:"center"}),burgerAnimationTimeline.to("#top-line",{duration:burgerAnimationSpeed,rotation:45},"burgerToX").to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45},"burgerToX").to("#middle-line",{duration:burgerAnimationSpeed,alpha:0},"burgerToX").to("#down-right-arrow",{duration:burgerAnimationSpeed,alpha:0,rotation:0},"burgerToX").to("#down-left-arrow",{duration:burgerAnimationSpeed,alpha:0,rotation:0},"burgerToX");var upArrowToBurger=gsap.timeline({paused:!0});function animateBurger(){!0===canYouSeeTheMenu?burgerAnimationTimeline.play():upArrowToBurger.play()}upArrowToBurger.to("#top-line",{y:0},"backToBurger").to("#bottom-line",{y:0},"backToBurger").to("#middle-line",{alpha:1},"backToBurger").to("#burger",{rotation:0},"backToBurger").to("#up-right-arrow",{alpha:0},"backToBurger").to("#up-left-arrow",{alpha:0},"backToBurger").to("#down-right-arrow",{alpha:1},"backToBurger").to("#down-left-arrow",{alpha:1},"backToBurger");var burgerToXTimeline=gsap.timeline({paused:!0});function mobileburgerAnimation(){!0===canYouSeeTheMenu?burgerToXTimeline.play():burgerToXTimeline.reverse()}burgerToXTimeline.to("#middle-line",{duration:.25,alpha:0},"iOSburgerAnimation").to("#top-line",{duration:.25,rotation:45,y:10,stroke:"#ECC5C4"},"iOSburgerAnimation").to("#bottom-line",{duration:.25,rotation:-45,y:-10,stroke:"#ECC5C4"},"iOSburgerAnimation").to("#down-left-arrow",{duration:.01,alpha:0},"iOSburgerAnimation").to("#down-right-arrow",{duration:.01,alpha:0},"iOSburgerAnimation").to("#up-left-arrow",{duration:.01,alpha:0},"iOSburgerAnimation").to("#up-right-arrow",{duration:.01,alpha:0},"iOSburgerAnimation");var burgerToArrowTimeline=gsap.timeline({paused:!0}),burgerArrowSpeed=.25;burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed,rotation:-90},"animateBurger").to("#bottom-line",{duration:burgerArrowSpeed,y:-10},"animateBurger").to("#top-line",{duration:burgerArrowSpeed,y:10},"animateBurger").to("#down-left-arrow",{duration:burgerArrowSpeed,rotation:55},"createArrow").to("#down-right-arrow",{duration:burgerArrowSpeed,rotation:-55},"createArrow"),gsap.set("#up-left-arrow",{transformOrigin:"right center",alpha:0}),gsap.set("#up-right-arrow",{transformOrigin:"right center",alpha:0});var xToUpArrowTimeline=gsap.timeline({paused:!0});xToUpArrowTimeline.to("#top-line",{duration:burgerArrowSpeed,rotation:0},"createArrowUp").to("#bottom-line",{duration:burgerArrowSpeed,rotation:0},"createArrowUp").to("#up-left-arrow",{duration:burgerArrowSpeed,rotation:55,alpha:1},"createArrowUp2").to("#up-right-arrow",{duration:burgerArrowSpeed,rotation:-55,alpha:1},"createArrowUp2"),$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?burgerToArrowTimeline.play():xToUpArrowTimeline.play()})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?burgerToArrowTimeline.reverse():xToUpArrowTimeline.reverse()}));var customNavTimeline=gsap.timeline();customNavTimeline.from("#about-nav",{duration:2,x:500},"start").from("#portfolio-nav",{duration:2,x:500},"-=1.5").from("#instagram-nav",{duration:2,x:500},"-=1.5").from("#contact-nav",{duration:2,x:500},"-=1.5").from("#nav-logo",{duration:4,x:-500,alpha:0},"start");var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(console.log("show me the menu"),canYouSeeTheMenu=!0,burgerToArrowTimeline.progress()>0?animateBurger():mobileburgerAnimation(),mainNavTimeline.play(),customNavTimeline.play()):(console.log("hide the menu"),canYouSeeTheMenu=!1,burgerToArrowTimeline.progress()>0?animateBurger():mobileburgerAnimation(),mainNavTimeline.reverse())}mainNavTimeline.to("#main-nav",{duration:1,y:0});var menuBackground=document.querySelector("#main-nav");window.onclick=function(r){r.target==menuBackground&&hideShowMainNav()},$("#burger").on("click",hideShowMainNav),$('[data-fancybox="ronjon"]').fancybox({}),tns({container:".my-slider",gutter:20,edgePadding:50,controlsPosition:"bottom",navPosition:"bottom"}),tns({container:".my-slider-2",gutter:20,edgePadding:50,controlsPosition:"bottom",navPosition:"bottom"}),$(document).ready((function(){$("#show-form-btn").on("click",(function(){$("#contact-button-section").hide(),$("#form-container").show()}))}));
//# sourceMappingURL=scripts-min.js.map