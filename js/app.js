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
		onSwipeEnd: function(){
		},
		afterInitialize: function(){
			this.container.style.visibility = "visible";
		},
	});



}
