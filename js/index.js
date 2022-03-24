$(function(){
    //선언
    var iMain = 0;
    var ibnr = 0;
    var iCnt04 = 0;
    var limit = function(i, list){ //목록의 개수와 인덱스를 비교하여 슬라이드가 더 넘어가지 않도록 함.
      if(i >= list.length){ 
        return list.length - 1;
      }else if (i <= 0){
        return 0;
      }else{
        return i;
      }
    }
    var mainSlide = function(i){
      $('.mainL .images').css('marginLeft', -100 * i + '%');
      $('.mainM .mBtm').css('marginLeft', -100 * i + '%');
      $('.mainM .mTop .images').css('marginLeft', -100 * i + '%');
    }
    //메인 슬라이드
    $('.mainL .xi-angle-right').click(function(){
      iMain++;
      iMain = limit(iMain, $('.mainL .images .image'));
      mainSlide(iMain);
    });
    $('.mainL .xi-angle-left').click(function(){
      iMain--;
      iMain = limit(iMain, $('.mainL .images .image'));
      mainSlide(iMain);
    });
    //슬라이드 끝
    //배너 곡 바꾸기 
    //컨텐츠2 좋아요 클릭
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
    //좋아요 클릭 끝
    //컨텐츠4 슬라이드
    $('.cnt04 .xi-angle-right').click(function(){
      iCnt04++;
      if(iCnt04 >= 3){
        iCnt04 = 3;
      }
      $('.cnt04 .artGroup').css('marginLeft', -33.33 * iCnt04 + '%');
    });
    $('.cnt04 .xi-angle-left').click(function(){
      iCnt04--;
      if(iCnt04 <= 0){
        iCnt04 = 0;
      }
      $('.cnt04 .artGroup').css('marginLeft', -33.33 * iCnt04 + '%');
    });
    //
  });