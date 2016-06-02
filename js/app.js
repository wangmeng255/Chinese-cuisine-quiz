'use strict';
$(document).ready(function() {
	var correct = 0;
	$("#salty").hover( function() {
		$("#Shan_Dong").css({"fill": "#5C6BC0"});
	}, function () {
		$("#Shan_Dong").css({"fill": "#9FA8DA"});
	})
	.click( function () {
		showQues($(".saltyQuestion"), $(".circle .lu circle"), $(this), "#9FA8DA");
	});
	$(".saltyQuestion form").submit(function (event) {
		event.preventDefault();
		if($("#basidigua")[0].checked) {
			correct += 1;
			$("#num").text(correct);
		}
		showMap($(".saltyQuestion"), $("#sweet"));
	});

	$("#sweet").hover( function() {
		$("#Jiang_Su").css({"fill": "#26C6DA"});
		$("#Zhe_Jiang").css({"fill": "#26C6DA"});
		$("#Shang_Hai path").css({"fill": "#26C6DA"});
		$("#Cantonese path").css({"fill": "#26C6DA"});
		$("#g2506 path").css({"fill": "#26C6DA"});
	}, function () {
		$("#Jiang_Su").css({"fill": "#80DEEA"});
		$("#Zhe_Jiang").css({"fill": "#80DEEA"});
		$("#Shang_Hai path").css({"fill": "#80DEEA"});
		$("#Cantonese path").css({"fill": "#80DEEA"});
		$("#g2506 path").css({"fill": "#80DEEA"});
	})
	.click( function () {
		showQues($(".sweetQuestion"), $(".circle .yue circle"), $(this), "#80DEEA");
	});
	$(".sweetQuestion form").submit(function (event) {
		event.preventDefault();
		if($("#yuntunmian")[0].checked) {
			correct += 1;
			$("#num").text(correct);
		}
		showMap($(".sweetQuestion"), $("#wild"));
	});

	$("#wild").hover( function() {
		$("#An_Hui").css("fill", "#9CCC65");
		$("#Fu_Jian path").css("fill", "#9CCC65");
	}, function () {
		$("#An_Hui").css("fill", "#C5E1A5");
		$("#Fu_Jian path").css("fill", "#C5E1A5");
	})
	.click( function () {
		showQues($(".wildQuestion"), $(".circle .min circle"), $(this), "#C5E1A5");
	});
	$(".wildQuestion form").submit(function (event) {
		event.preventDefault();
		if($("#fotiaoqiang")[0].checked) {
			correct += 1;
			$("#num").text(correct);
		}
		showMap($(".wildQuestion"), $("#spicy"));
	});

	$("#spicy").hover( function() {
		$("#Hu_Nan").css("fill", "#AB47BC");
	}, function () {
		$("#Hu_Nan").css("fill", "#CE93D8");
	})
	.click( function () {
		showQues($(".spicyQuestion"), $(".circle .xiang circle"), $(this), "#CE93D8");
	});
	$(".spicyQuestion form").submit(function (event) {
		event.preventDefault();
		if($("#donganziji")[0].checked) {
			correct += 1;
			$("#num").text(correct);
		}
		showMap($(".spicyQuestion"), $("#numbing"));
	});

	$("#numbing").hover( function() {
		$("#Sichan_Chongqing path").css("fill", "#EF5350");
	}, function () {
		$("#Sichan_Chongqing path").css("fill", "#EF9A9A");
	})
	.click( function () {
		showQues($(".numbQuestion"), $(".circle .chuan circle"), $(this), "#EF9A9A");
	});
	$(".numbQuestion form").submit(function (event) {
		event.preventDefault();
		if($("#sichuanhuoguo")[0].checked) {
			correct += 1;
			$("#num").text(correct);
		}
		$(".cd-popup-container").prepend("<p>Congratulation! You've got " + String(correct) + " dishes.</p>");
		$('.cd-popup').addClass('is-visible');
	});

	$(".cd-popup-container .cd-buttons li:first-child a").click(function() {
		correct = 0;
		$("#num").text(correct);
		$('.cd-popup').removeClass('is-visible');
		$("#numbing").css({"opacity": "0.6", "pointer-events": "none"});
		$("#salty").css({"opacity": "1", "pointer-events": "auto"});
		$(".cd-popup-container p").remove();
		$(".numbQuestion").hide();
		$(".map").fadeIn(1600, "linear");
		$(".circle circle").each( function () {
			$(this).css("fill", "white");
		});
	});

	$(".cd-popup-container .cd-popup-close").click(function() {
		$('.cd-popup').removeClass('is-visible');
		$(".numbQuestion").hide();
		$(".map").fadeIn(1600, "linear");
		$("#numbing").css({"opacity": "0.6", "pointer-events": "none"});
	});

	function showQues(showSec, cirId, butt, color) {
		$(".map").hide();
		showSec.fadeIn(1600, "linear");
		butt.css({"opacity": "0.6", "pointer-events": "none"});
		cirId.each( function () {
			$(this).css("fill", color);
		});
	}
	function showMap(hideSec, butt)
	{
		hideSec.hide();
		$(".map").fadeIn(1600, "linear");
		butt.css({"opacity": "1", "pointer-events": "auto"});
	}
});