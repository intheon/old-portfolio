$(document).ready(function(){
	// assuming page has loaded...

	// hide all our content initially
	var dom = $(".panel");
	var htm = [];
	
	$(".panel").remove();

	_.each(dom, function(obj){

		var o = {
			label: obj.id,
			content: obj
		};

		htm.push(o)
	});


	// on page load, show home
	showPanel("home", htm);

	/*

	// event listeners
	$(".nav-link").each(function()
	{
		// register listener on each nav item
		$("#" + this.id).click(function()
		{
			// what is the id
			var panel = this.id.split("-");

			panel = "#" + panel[0] + "-content";
			$(".nav-link").removeClass("active-link");
			$("#" + this.id).addClass("active-link");
			// do something
			showPanel(panel)
		});
	});

	// make the portfolio 'dragend' functional
	startDragend();

	// make the contact us form interactive
	$("#contact-form-send").click(function(){
		parseContactForm();
	});

*/

});

function showPanel(panelLabel, htm)
{
	switch (panelLabel)
	{
		case "home":
			var html = getHTML("home-content", htm);
			console.log(html);
		break;

		default:
		break;
	}
}

function getHTML(id, htm)
{
	_.find(htm, function(obj){
		if (obj.label == id) return obj
	});
}

function showPanel2(panel)
{
	if ($(panel + " div").hasClass("anim"))
	{
		return;
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
			this.container.style.visibility = "visible";
		},
	});
}

function parseContactForm()
{
	var tName = $("#contact-form-name").val();
	var tEmail = $("#contact-form-email").val();
	var tMessage = $("#contact-form-message").val();

	if (tName == false || tEmail == false || tMessage == false)
	{
		console.log("one is blank");
	}
	else
	{
		$.ajax({
			type				: "POST",
			url                 : "../showoff/php/email.php",
			data 				: 
			{
				nameFrom   		: tName,
				emailFrom  		: tEmail,
				messageFrom  	: tMessage  
			},
			success				: function(response)
			{
				console.log(response);
			}
		});
	}

}