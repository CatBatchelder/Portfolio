
// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "custom-nav.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";

// @codekit-prepend "scroll-trigger/home.js";
// @codekit-prepend "scroll-trigger/about.js";
// @codekit-prepend "scroll-trigger/portfolio.js";
// @codekit-prepend "scroll-trigger/contact.js";

// @codekit-prepend "fancybox.js";
// @codekit-prepend "tinyslider.js";



// A $( document ).ready() block.
$( document ).ready(function() {

    $("#show-form-btn").on("click", function(){
       //console.log("button clicked");
 
       // hide contact-button-section
       $("#contact-button-section").hide();
 
       // show form container
       $("#form-container").show();
 
    });
 
 });