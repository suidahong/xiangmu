var navBarAct = "nav-bar-act";
var navBarVoid = "nav-bar-void";
$(document).ready(function(){
	$(".nav-bar").find(".nav-bar-item").click(function(){
		if (!$(this).hasClass(navBarAct)) {
			$.each($(".nav-bar").find(".nav-bar-item"), function(ind, obj){
				if ($(obj).hasClass(navBarAct)) {
					$(obj).removeClass(navBarAct);
					$(obj).addClass(navBarVoid);
				}
			});
			$(this).removeClass(navBarVoid);
			$(this).addClass(navBarAct);
			var dataInd = $(this).data("ind");
			barSlideToggle(dataInd);
		}
	});
	$.each($(".nav-bar").find(".nav-bar-item"), function(ind, obj) {
		if (ind == 0) {
			$(obj).removeClass(navBarVoid);
			$(obj).addClass(navBarAct);
			var dataInd = $(obj).data("ind");
			barSlideToggle(dataInd);
		}
	});
});
function barSlideToggle(dataInd){
	$.each($(".shortcut-group"), function(ind, obj){
		var shortcutGroupInd = $(obj).data("ind");
		if (dataInd == shortcutGroupInd) {
			$(obj).show(100);
		} else {
			$(obj).hide(400);
		}
	});
}