$(function (){
    //menu
    $('.nav').hover(function(){
        $('.nav_nonfix').addClass('active');
    },function(){
        $('.nav_nonfix').removeClass('active');
    })

    //menu fix
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if(height > 50){
            $('.header').removeClass('nav_fix')
            $('.nav_nonfix').addClass('nav_fix');
        }else{
            $('.nav_fix').removeClass('nav_fix')
        }
    })

    //fix_banner_close
    $('.close_btn').click(function(){
        $('.banner_fix').css('display','none')
        $(this).css('display','none')
    })

    //card change
    $('.lotto ul li').click(function(){
        $('.lotto ul').find('.active').removeClass('active');
        $(this).addClass('active');
    })
    
    //bx Slider
    $('#slider').bxSlider({
        auto: true, 
        speed: 500, 
        pause: 3000
    });
    //sns
    $('.sns li').click(function(){
        var con_index = $(this).index()
        $('#content').removeAttr('class')
        $('#content').addClass('con'+con_index)
    })

    $('.sns_close').click(function(){
        $('#content').removeAttr('class');
        $('#content').addClass('rental')
    })
})

    //main animation
    AOS.init();

    let scrollRef = 0;

window.addEventListener('scroll', function() {
  // increase value up to 10, then refresh AOS
  scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});