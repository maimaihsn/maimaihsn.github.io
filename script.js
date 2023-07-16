

$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);

  //スクロール、クリックイベント
  $('top-wrapper a').click(function(){
   var id = $(this).attr('href');
   var position = $(id).offset().top;
    $('html,body').animate({
     'scrollTop': position
   }, 500);
  });

  var topBtn = $('.go-to-top');
      //ボタンを非表示にする
      topBtn.hide();
      //スクロールしてページトップから100に達したらボタンを表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
  　　　　　　　//フェードインで表示
              topBtn.fadeIn();
          } else {
  　　　　　　　//フェードアウトで非表示
              topBtn.fadeOut();
          }
      });

//トップに戻る
  $('.go-to-top').click(function(){
    $('html,body').animate({
     'scrollTop': 0
   }, 500);
  });


});
