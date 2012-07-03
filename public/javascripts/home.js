$(function(){

	var home_pattern = $('#home-intro-pattern');
	var home_wrapper = $('#home-intro-wrapper');
	var top_container = $('#top-container');


	home_pattern.css('height', $(window).height()-top_container.height());

	$(window).bind("resize", resizeWindow);


	$(window).load(function(){

		if(is_old_browser() == 'false'){

			home_wrapper.show().delay(200).animate({opacity: '1'},1500, "easeOutCubic");

			top_container.show().delay(1000).animate({opacity: '1'},1500, "easeOutCubic");

			home_pattern.delay(2000).animate({height: '485'},500, "easeOutCubic",function(){
				$(window).unbind("resize", resizeWindow);
			});

			setTimeout(function(){
				home_wrapper.css('position','absolute');
				$('#home-content').show();
				$('#home-intro').show().animate({opacity: '1'},500, "easeOutCubic", function(){
					$('body').css('overflow','auto');
					$('#footer-wrapper').show();
					$('#photo-wrapper').show();
				});
			},2000);
		}

	});

	if(is_old_browser() == 'true'){
		home_wrapper.show().css('opacity',1);
		top_container.show().css('opacity',1);
		home_wrapper.css('position','absolute');
		home_pattern.show().css('height','485');
		$('#home-content').show().css('opacity',1);
		$('#home-intro').show().css('opacity',1);
		$('body').css('overflow','auto');
		$('#footer-wrapper').show().css('opacity',1);
		$('#photo-wrapper').show().css('opacity',1);
	}


	/*
	home_wrapper.show().css('opacity',1);
	top_container.show().css('opacity',1);
	home_wrapper.css('position','absolute');
	home_pattern.show().css('height','485');
	$('#home-content').show().css('opacity',1);
	$('#home-intro').show().css('opacity',1);
	$('#footer-wrapper').show().css('opacity',1);
	$('body').css('overflow','auto');
	*/

	$('#btn-tour').anchorAnimate();


});

function resizeWindow(e) {
	$('#home-intro-pattern').css('height', $(window).height()-$('#top-container').height());
}

function extractVenueDetails(details) {
  $('#rating').html(details.ratings.average / 10);
}

function is_old_browser(){
	var _browser = 'false';
	if ($.browser.msie && parseInt($.browser.version) <9){_browser = 'true';}
	return _browser;
}

jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 700
	}, settings);

	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = '#photos-holder';


			var destination = ($(""+elementClick+"").offset().top);

			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				//window.location.hash = elementClick
			});
		  	return false;
		})
	})
}

