var reviewsJson = $.getJSON("https://cors-anywhere.herokuapp.com/https://store.steampowered.com/appreviews/105600?json=1&key=95E80E9F4247BA92759FB703C4B16FC2", function(data){
		console.log(data);
		console.log(data.reviews[0].review);
		$("#review1").html(data.reviews[0].review);
	});
var reviewsString; 


$(document).ready(function(){

	console.log("init fired");
	console.log(reviewsString);
      $('.bxslider').bxSlider({
		  made: 'fade',
		  captions: false,
		  slideWidth: 800
	  });
    });