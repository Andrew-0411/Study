//fix top button
function goTop(){
	$('html').animate({
    scrollTop:0
  }, 1000) 
}

$(function(){

  //햄버거 메뉴
  $('#line-wrapper').click(function(){
      $('#line-top').toggleClass('line-top');
      $('#line-mid').toggleClass('line-mid');
      $('#line-bot').toggleClass('line-bot');
  })
  $('#line-wrapper').click(function(){
    h = $('.sub_menu_wrap').height();
  
    if(h === 0){
      $('.sub_menu_wrap, body').addClass('on')
    }else{
      $('.sub_menu_wrap, body').removeClass('on')
    }
  
  })

  //header 고정
  $(window).scroll(function(){
    var height = $(document).scrollTop();
  
    if(height > 50){
      $('.header').addClass('header_fix')
    }else{
      $('.header').removeClass('header_fix')
    }
  })

  //header 아래 slider
  $('.main_slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
  });

  //comment 아래 slider
  $('.sub_slider').slick({
    centerMode: false,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:2000,
  });


  //body 최하단 tab menu
  $('.tab_menu ul > li').click(function(){
    h = $(this).find('ul').height()

  if($(this).hasClass('on')){
      $('.tab_menu ul > li').removeClass('on')
      $('.tab_menu ul > li').find('div').stop().animate({'height':0}, 500)
  }else{
      $('.tab_menu ul > li').removeClass('on')
      $(this).addClass('on')

      $('.tab_menu ul > li').find('div').stop().animate({'height':0}, 500)
      $(this).find('div').stop().animate({'height':h}, 500)
  }
})

  //footer tab button
  $('.btn_hide button').click(function(){
    h = $('.foot_hide').height();
    
    if(h === 0){
    $('.foot_hide').animate({'height':450}, 500)
    $('.btn_hide button').addClass('on')
    }else{
    $('.foot_hide').animate({'height':0}, 500)
    $('.btn_hide button').removeClass('on')
    }
  })

})