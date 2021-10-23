//Test to see if scripts load
console.log("Javascript has loaded.")

//Swap logos when going to mobile
function SwapLogo(x) {
    if (x.matches) { // If media query matches
        document.getElementById('logo').src="./images/xsdw-logo-mobile.png";
        console.log("Now on mobile screen.")
    } else {
        document.getElementById('logo').src="./images/xsdw-logo.png";
        console.log("On larger screen.")
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  SwapLogo(x) // Call listener function at run time
  x.addListener(SwapLogo) // Attach listener function on state changes

  //Modal JS 
$(".open").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
    console.log("Clicked the read more button.")
 });

$(".close, .popup").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
    console.log("Clicked the close button.")
});

//Loading bar for resume
function clickme(){
    console.log("Initialized progress bar animation.")
  $('.progress-bar').animate(
      {width:'100%'}, 
      {
          duration:3000      
      }        
  );

function hideBar(){
    $(".pp").css("visibility","hidden");
    console.log("Progress bar automatically left.")
  };
};

$("#add").on("click", function(){
    $(".pp").css("visibility","visible");
    console.log("Clicked the Resume button.");
    clickme();
    setTimeout(function(){
        console.log("Hide bar.");
        $(".pp").hide();
    }, 10000);
    //$(".pp").delay(6000).hide();
    //console.log("Progress bar automatically left.")

});

function reveal(){
    $(".pp").css("visibility","visible");
    console.log("Clicked the Resume button.");
    clickme();
    //setTimeout(console.log("Hide bar."), 5000);
    $(".pp").delay(6000).css("visibility","hidden");
    //console.log("Progress bar automatically left.")

}
