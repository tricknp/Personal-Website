$('a').click(function(event){
    $('a').removeClass('selected');
    $(this).addClass('selected');

    var id = $(this).attr('href');
    var y = $(id).offset().top;
    $('html, body').stop().animate({scrollTop:y}, 1000);
    });
