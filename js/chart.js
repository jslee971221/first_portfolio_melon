$(function(){
    $('.btn .xi-heart-o').click(function(){
      var className = $(this).attr('class');
      if(className == 'xi-heart-o'){
        $(this).removeClass('xi-heart-o');
        $(this).addClass('xi-heart');
      }else{
        $(this).removeClass('xi-heart');
        $(this).addClass('xi-heart-o');
      }        
    }); 
  $('.xi-close-square-o').click(function(){
    $('.playerWrap').css('display', 'none');
  });
  $('.xi-play').click(function(){
    $('.playerWrap').css('display', 'block');
  });
  $('.xi-play-circle-o').click(function(){
    $('.playerWrap').css('display', 'block');
  });
  
});
