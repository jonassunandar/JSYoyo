// $(function(){
//     var curPos = 0;
//     var slider = $('.slider');
//     var cntImage = slider.length;
//     var sliderWidth = slider.Width;

//     $('#sliderWrapperTutorial').css('width', sliderWidth * cntImage);


//     function SlideImage(){
//         if (curPos==cntImage-1) curPos = 0;
//         else curPos++;
//         $('#sliderWrapperTutorial').animate({
//             'marginLeft': sliderWidth * (-curPos)
//         });
        
//     }
// });



$(document).ready(function(){
    var slideWidth = $('.slide').width();
    var slideHeight = $('.slide').height();
    var totalSlide = $('.slide').length;
 
    $('.slider').css({
        width:slideWidth,
        height:slideHeight
    });
 
    $('.slides').css({
        marginRight:slideWidth,
        width:totalSlide*slideWidth
    });
 
    setInterval(function(){
    $('.slides').animate(
        {
            right:slideWidth
        }, 
        2000,
        function(){
            $('.slide:first-child').appendTo($('.slides'));
            $('.slides').css('right','');
        }
    );},1000);
});


$(document).ready(function(){
    var slideWidth = $('.slide2').width();
    var slideHeight = $('.slide2').height();
    var totalSlide = $('.slide2').length;
 
    $('.slider2').css({
        width:slideWidth,
        height:slideHeight
    });
 
    $('.slides2').css({
        marginRight:slideWidth,
        width:totalSlide*slideWidth
    });
 
    setInterval(function(){
    $('.slides2').animate(
        {
            right:slideWidth
        }, 
        2000,
        function(){
            $('.slide2:first-child').appendTo($('.slides2'));
            $('.slides2').css('right','');
        }
    );},1000);
});


$(document).ready(function(){
    var slideWidth = $('.slide3').width();
    var slideHeight = $('.slide3').height();
    var totalSlide = $('.slide3').length;
 
    $('.slider3').css({
        width:slideWidth,
        height:slideHeight
    });
 
    $('.slides3').css({
        marginRight:slideWidth,
        width:totalSlide*slideWidth
    });
 
    setInterval(function(){
    $('.slides3').animate(
        {
            right:slideWidth
        }, 
        2000,
        function(){
            $('.slide3:first-child').appendTo($('.slides3'));
            $('.slides3').css('right','');
        }
    );},1000);
});



