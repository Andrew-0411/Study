//mobile hamburger menu
$('.m_vis').click(function(){
  $('.m_menu, body').addClass('on');
})
$('.close').click(function(){
  $('.m_menu, body').removeClass('on')
})

//hot & new slider
var swiper = new Swiper('.swiper-container.a1',{
  slidesPerView:'auto',
  spaceBetween: 30,

  navigation: {
    nextEl: '.a1 .swiper-button-next',
    prevEl: '.a1 .swiper-button-prev',
  },
  pagination: {
    el: 'a1 .swiper-pagination',
    type: 'bullets',
  },

});

//news slider
var swiper = new Swiper('.swiper-container.a2' , {
    slidesPerView: 'auto',
    spaceBetween: 30,

    navigation: {
      nextEl: '.a2 .swiper-button-next',
      prevEl: '.a2 .swiper-button-prev',
    },
    pagination: {
      el: '.a2 .swiper-pagination',
      type: 'bullets',
      clickable : true,
    },
  });

  //chart effect
  $('.chart ul').hover(function(){
    $('.chart ul').removeClass('chart_hover')
    $(this).addClass('chart_hover')
  })

  //theme
  $(".btn_theme").click(function(){
    if($(this).hasClass('on')){
      $($(this)).removeClass('on')
      $(".btn_theme").stop().animate({'height':180}, 500)
    }else{
      $($(this)).addClass('on')
      $(".btn_theme").stop().animate({'height':20}, 500)
    }
  })

  //chart_time
  var today = new Date();   
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate(); 
  var hour = today.getHours();
  
  var time = year +'. ' + month + '. ' + date + '. ' + hour + ':' + '00'
  
  $('.time').text(time);
  


  //main slider tab_menu

  $(".btn_slider01").click(function(){
    if(!$('#slider01').hasClass('on')){
      $('.down').find('.on').attr('class','off')
      $('#slider01').attr('class','on')
      $('.btn_slider').children('.on').removeClass('on')
      $('.btn_on01').addClass('on')
      $('.up').children('.on').removeClass('on')

      $('.btn_slider01').addClass('on')
      $('.down').find('.on_li').removeClass('on_li').addClass('off_li')
      $('.down').find('.on').children('.li01').removeClass('off_li').addClass('on_li')
    }
  })
  
  $(".btn_slider02").click(function(){
    if(!$('#slider02').hasClass('on')){
      $('.down').find('.on').attr('class','off')
      $('#slider02').attr('class','on')
      $('.btn_slider').children('.on').removeClass('on')
      $('.btn_on01').addClass('on')

      $('.up').children('.on').removeClass('on')
      $('.btn_slider02').addClass('on')

      $('.down').find('.on_li').removeClass('on_li').addClass('off_li')
      $('.down').find('.on').children('.li01').removeClass('off_li').addClass('on_li')
    }
  })
  
  $(".btn_slider03").click(function(){
    if(!$('#slider03').hasClass('on')){
      $('.down').find('.on').attr('class','off')
      $('#slider03').attr('class','on')
      $('.btn_slider').children('.on').removeClass('on')
      $('.btn_on01').addClass('on')

      $('.up').children('.on').removeClass('on')
      $('.btn_slider03').addClass('on')

      $('.down').find('.on_li').removeClass('on_li').addClass('off_li')
      $('.down').find('.on').children('.li01').removeClass('off_li').addClass('on_li')
    }
  })

