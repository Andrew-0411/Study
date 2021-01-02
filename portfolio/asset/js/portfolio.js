$(window).scroll(function(){
    var height = $(document).scrollTop();
    if (height > 50) {
        $('.header').addClass('on');
    }else if (height > 800) {
        $('.header ul li').find('.orange').removeClass('orange')
        $('.li02').addClass('orange');
    }else if (height > $(document).height()){
    }else{
        $('.header').removeClass('on');
    }
})


$('.header li').click(function(){
off = $(this).data('link');
offsetop = $('.'+off).offset().top - 69;
$('html, body').animate( {scrollTop: offsetop},800 )
$('.header li').removeClass('orange')
$(this).addClass('orange')
})

$(window).scroll(function(){
var height = $(document).scrollTop();

if(height >= $('.link01').offset().top - 70 && height <= $('.link02').offset().top - 70){
    $('.header li').removeClass('orange')
    $('.li01').addClass('orange')
}else if(height >= $('.link02').offset().top - 70 && height <= $('.link03').offset().top - 70){
    $('.header li').removeClass('orange')
    $('.li02').addClass('orange')
}else if(height >= $('.link03').offset().top - 70 && height <= $('.link04').offset().top - 70){
    $('.header li').removeClass('orange')
    $('.li03').addClass('orange')
}else if(height >= $('.link04').offset().top - 70 && height <= $('.link04').offset().top + 50){
    $('.header li').removeClass('orange')
    $('.li04').addClass('orange')    
}else if(height >= $('.link04').offset().top + 100){
    $('.header li').removeClass('orange')
    $('.li05').addClass('orange')    
}

})
