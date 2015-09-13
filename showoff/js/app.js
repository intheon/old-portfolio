$(document).ready(function(){
	// assuming page has loaded...

	// hide all our content initially

	// show home because of hamburgers
	showPanel("#home-content");

	// event listeners
	$(".nav-link").each(function()
	{
		// register listener on each nav item
		$("#" + this.id).click(function()
		{
			// what is the id
			var panel = this.id.split("-");

			panel = "#" + panel[0] + "-content";

			// do something
			showPanel(panel)
		});

	});

	// make the portfolio 'dragend' functional
	startDragend();

});

function showPanel(panel)
{
	console.log(panel);
	if ($(panel + " div").hasClass("anim"))
	{
		console.log("yup");
	}
	else
	{
		// only show that one	
		// hide all others again
		$(".content-wrapper div div").removeClass("anim");
		$(panel).fadeIn("fast", function(){

			$("#" + this.id + " div").fadeIn("fast", function(){
				$(this).show();
				$(this).addClass("anim");
			});

		});
	}
}

function startDragend()
{

	$(".portfolio-slides-container").dragend({
		onSwipe: function(event)
		{
			/*
			$(".dragend-page h1").css("margin-top", $(".dragend-page").position().left);
			$(".dragend-page h2").css("margin-right", $(".dragend-page").position().left - 16);
			$(".dragend-page h3").css("margin-left", $(".dragend-page").position().left - 30);
				console.log($(".dragend-page").position().left);
				*/
		},
		onDrag: function(event)
		{
			/*
			$(".dragend-page h1").css("margin-top", $(".dragend-page").position().left);
			$(".dragend-page h2").css("margin-right", $(".dragend-page").position().left - 16);
			$(".dragend-page h3").css("margin-left", $(".dragend-page").position().left - 30);
				console.log($(".dragend-page").position().left);
				*/
		},
		onDragEnd: function(event){
/*
			$(".dragend-page h1").removeAttr("style");
			$(".dragend-page h2").removeAttr("style");
			$(".dragend-page h3").removeAttr("style");
			*/
		},
		onSwipeEnd: function(event){
/*
			$(".dragend-page h1").removeAttr("style");
			$(".dragend-page h2").removeAttr("style");
			$(".dragend-page h3").removeAttr("style");
			*/
		},
		afterInitialize: function(event){
			console.log(this.page);
			console.log("init");
			this.container.style.visibility = "visible";
		},
	});



}
