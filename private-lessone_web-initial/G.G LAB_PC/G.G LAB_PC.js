$(window).scroll(function (){
    if($(this).scrollTop()>200){
        $('.fixbtn').fadeIn();
    } else{
        $('.fixbtn').fadeOut();
    }
})

$('.fixbtn').click(function(){
    $('html, body').animate( {scrollTop : 0 }, 400);
    return false;
})