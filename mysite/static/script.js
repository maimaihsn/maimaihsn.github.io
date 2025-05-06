$(function(){

  console.log("script.js loaded ✅");
  
  var loader = $('.loader-wrap');

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, speed, "swing");
    return false;
  });

  // メニュー開閉
  $(".menu-trigger").click(function () {
    $(this).toggleClass("active");
    $("nav").fadeToggle();
    $("i").toggleClass("isActive fa-xmark fa-bars");
  });

  // ローディング非表示
  $(window).on('load', function(){
    loader.fadeOut();
  });

  // ローディング強制非表示（3秒後）
  setTimeout(function(){
    loader.fadeOut();
  }, 3000);

  // .top-wrapper スクロール（セレクタ修正）
  $('.top-wrapper a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({ scrollTop: position }, 500);
    return false;
  });

  // モーダル
  // モーダル表示
  $(document).on('click', '.modal-trigger', function(){
    console.log("Image clicked ✅");
    const src = $(this).attr('src');
    $('#modal-image').attr('src', src);
    $('#modal').fadeIn();
  });

  // モーダル閉じる（背景 or ×）
  $(document).on('click', '.close, #modal', function(e){
    if (e.target.id === 'modal' || $(e.target).hasClass('close')) {
      $('#modal').fadeOut();
    }
  });
});
