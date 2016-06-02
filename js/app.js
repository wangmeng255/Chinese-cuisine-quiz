$(document).ready(function() {
	var answer = 0;
	var correct = 0;
	$("#salty").hover( function() {
		$("#Shan_Dong").css("opacity", "0.75");
	}, function () {
		$("#Shan_Dong").css("opacity", "1");
	})
	.click( function() {
		$(".map").hide();
		$(".saltyQuestion").show();
		$(this).css({"opacity": "0.6", "pointer-events": "none"});
		$("#lu circle").css("fill", "#9FA8DA");
	});
	$(".saltyQuestion .sub").click (function (event) {
		event.preventDefault();
		answer += 1;
		console.log("sub clicked");
	});
});