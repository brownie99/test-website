
var reviewsString; 


$(document).ready(function(){
	var reviewsJson = $.getJSON("https://cors-anywhere.herokuapp.com/https://store.steampowered.com/appreviews/105600?json=1&key=95E80E9F4247BA92759FB703C4B16FC2", function(data){
	var htmlString = "";
	$.each(reviewsJson.responseJSON.reviews, function(index, element){
		htmlString += "<div class=\"reviewDiv\"><p>" + element.review + "</p></div>";
	});
	$('.bxslider').html(htmlString);
	var maxHeight = 20;
	console.log("init fired");
	var sliderWidth = $(window).width()*0.95;
	$('.bxslider p').each(function(){
		console.log($(this).height());
		if ($(this).height() > maxHeight){
			maxHeight = $(this).height();
		}
	});
    $('.bxslider').bxSlider({
			made: 'fade',
			captions: false,
			slideWidth: sliderWidth
		});
	console.log(maxHeight);
	$('.bx-viewport').height(maxHeight);
	maxHeight = 20;
	$('.bxslider p').each(function(){
		console.log($(this).height());
		if ($(this).height() > maxHeight){
			maxHeight = $(this).height();
		}
	});
	console.log(maxHeight);
	$('.bx-viewport').height(maxHeight + 40);
	
	
	
		
	});
	

		
    });