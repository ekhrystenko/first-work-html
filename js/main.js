$(function(){
		// Слайдер
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        },
        1100:{
            items:5
        }
    },
    autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:false
	});

		// Тест name
	/*$('#testJs').click(function(){
		var name = prompt('Введи ваше имя!');
		if(name == 'Eugene'){
				alert('Welcome Eugene!');
	} 	else if(name == 'Zhanna'){
			alert('Welcome Zhanna!');
	} 	else {
			alert('Invalid Name Access Denied');
			location.reload();
		};
	});*/

		// Меню < 900px
	$('#icon').click (function(){
		$('.menu').slideToggle(700);
	});

		// Кнопка наверх
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 20 ){
			$('.btn-top').fadeIn();
			$('.body').fadeOut();
		} else {
			$('.btn-top').fadeOut();
		};
	});

	$('.btn-top').on('click', function(){
		$('html, body').animate({scrollTop:0}, 700);
	
	});

		// Меню випад (Half-Life 2)
	$('.body').hide();
	$('#hl2').mouseover(function(){
		$('.body').slideToggle();
		$('.body').css('opacity', '1');
	});

		// Плавная прокрутка
	$("#hl1, #hl2, #hlA").click(function () {
    	var elementClick = $(this).attr("href");
    	var destination = $(elementClick).offset().top;
    	$('html, body').animate({ scrollTop: destination }, 600);
    return false;
	});

	$("#btn-e2, #btn-e1").click(function (){
		$('html, body').animate({ scrollTop:1700}, 600);
	});

		// Всплывающее окно
	$('#play_icon').click(function(){
		$('#exampleModal').arcticmodal();
	});

	$('#testPhp').click(function(){
		$('#exampleModalForm').arcticmodal();
	});

		// Тест
	$('#test').click(function(){
		$('h1, h2, p').toggleClass('selected');
		$('header').toggleClass('fon');
	});
	
	$('#icon').click(function(){
		$('#burgOne, #burgThree').toggleClass('hide');
		$('#burgTwo').toggleClass('centerTwo');
		$('#burgTwoW').toggleClass('centerTwoW');
	});

});
