$(document).ready(function() {

	// popup
	$(".fancybox").fancybox();
	// popup end

	$.stellar({
		responsive       : true,
		horizontalOffset : 60
	});

	// слайдер отзывов
	$(".carousel").owlCarousel({
		items              : 1,
		loop               : true,
		autoplay           : true,
		autoplayTimeout    : 5000,
		autoplayHoverPause : true,
		mouseDrag          : false,
		responsive : {
			0 : {
				items : 1,
				nav   : true
			}
		},
		navText: ""
	});

	//$('.owl-prev, .owl-next').html("");

	// tabs top phone
	$(".top-phone .wrapper .tab").click(function(){
		$(".top-phone .wrapper .tab").removeClass('active').eq( $(this).index() ).addClass('active');
		$('.top-phone .tab_item').hide().eq( $(this).index() ).fadeIn()
	}).eq(0).addClass('active');

	// tabs top phone
	$(".tabs-header .wrapper .tab").click(function(){
		$(".tabs-header .wrapper .tab").removeClass('active').eq( $(this).index() ).addClass('active');
		$('.tabs-header .tab_item').hide().eq( $(this).index() ).fadeIn()
	}).eq(0).addClass('active');

	// tabs contacts city
	$(".contacs-top .tab").click(function(){
		$(".contacs-top .tab").removeClass('active').eq( $(this).index() ).addClass('active');
		$('.contacs-top .tab_item').hide().eq( $(this).index() ).fadeIn()
	}).eq(0).addClass('active');

	// tabs footer
	$("footer .wrapper .tab").click(function(){
		$("footer .wrapper .tab").removeClass('active').eq( $(this).index() ).addClass('active');
		$('footer .tab_item').hide().eq( $(this).index() ).fadeIn()
	}).eq(0).addClass('active');


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});

});