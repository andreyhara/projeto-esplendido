$(function(){
	$(window).scroll(function(){ scroll_menu();	});
	$(window).load(function(){ scroll_menu(); });
	scroll_menu();
});

function scroll_menu()
{
	var offsetfilter = $("#header-wrapper").height() - 25;
	var scrollY = $(window).scrollTop();
	
	var menu = $('#top-container');
	
	if(scrollY > offsetfilter)
	{
		menu
		.css('position','fixed')
		.css('top', '-113px');
	}
	else
	{
		menu
		.css('position','absolute')
		.css('top', '0px');
	}
}