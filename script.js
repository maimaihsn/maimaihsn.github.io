

$(function(){
	var loader = $('.loader-wrap');

  //スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


   //MENU
   $(".menu-trigger").click(function () {
    $(this).toggleClass("active");
    $("nav").fadeToggle();
    $("i").toggleClass("isActive fa-xmark fa-bars");
    });

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);

  //スクロール
  $('top-wrapper a').click(function(){
   var id = $(this).attr('href');
   var position = $(id).offset().top;
    $('html,body').animate({
     'scrollTop': position
   }, 500);
  });


});
