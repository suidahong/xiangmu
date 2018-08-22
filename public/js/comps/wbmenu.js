$(document).ready(function(){
	$(".level2").hide();
	$("body").delegate(".level1", "click", function(obj){
		var mindValue = $(this).data("mind");
		if ($(".mind"+mindValue).is(":hidden")) {
			$(".level2").hide(0);
		}
		$(".mind"+mindValue).slideToggle(0);
	});
	$(".level1").hover(function(){
		$(this).css("backgroundColor", "#23566E");
		$(this).css("color", "white");
		$(this).find("img").slideToggle(0);
	}, function(){
		$(this).css("backgroundColor", "#CFD5DA");
		$(this).css("color", "black");
		$(this).find("img").slideToggle(0);
	});
	$(".level2").hover(function(){
		$(this).css("backgroundColor", "#23566E");
		$(this).css("color", "white");
		$(this).find("img").slideToggle(0);
	}, function(){
		$(this).css("backgroundColor", "#E2E6E9");
		$(this).css("color", "black");
		$(this).find("img").slideToggle(0);
	});
});