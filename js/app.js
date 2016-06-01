$(document).ready(function() {
	var answer = 0;
	var correct = 0;
	$("#salty").click( function() {
		console.log("salty click");
		$(".map").hide();
		$(".saltyQuestion").show();
	});
});