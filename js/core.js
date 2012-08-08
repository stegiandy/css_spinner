function wrapper_click(){
	$(".wrapper").click(function() {
		$(this).toggleClass("big");
	});
}
jQuery(document).ready(function() {
	wrapper_click();
});
