$(function(){
    //컨텐츠2
    //버튼을 클릭할때마다 보여지고 사라지는 효과를 줄 함수 (대상버튼, 색 빼줄 버튼, 올라올 아티클그룹, 내려갈 아티클 그룹, 카운터)
    function clickAndShow(btnThis, btnBro, groupThis, groupBro, counter){
        if(counter == 1){
          groupThis.css('zIndex', '6');
          btnThis.css('backgroundColor', '#41734d');
          groupBro.css('zIndex', '0');
          btnBro.css('backgroundColor', '#d4e0c0');
          counter *= -1;
          return counter;
        }else{
          groupThis.css('zIndex', '0');
          btnThis.css('backgroundColor', '#d4e0c0');
          counter *= -1;
          return counter;
        }
    }
    var count1 = 1; //버튼1번 카운터
    var count2 = 1; //버튼2번 카운터
    $('.g1>div.btn>div').first().click(function(){
      count1 = clickAndShow($(this), $(this).next(), $('.g2'), $('.g3'), count1); //함수 실행 후 카운터에 현재 상태 업데이트
    });
    $('.g1>div.btn>div').last().click(function(){
      count2 = clickAndShow($(this), $(this).prev(), $('.g3'), $('.g2'), count2); //위와 동일
    });
    //닫기 버튼, 모든 변화 제거
    $('.cbtn').click(function(){
      $('.g2').css('zIndex', '0');
      $('.g3').css('zIndex', '0');
      $('.g1>div.btn>div').css('backgroundColor', '#d4e0c0');
    });
    var counter = 1;
    $('.btn .xi-heart-o').click(function(){
      if(counter == 1){
        $(this).removeClass('xi-heart-o');
        $(this).addClass('xi-heart');
        $(this).css({
          'color' : 'red',
        });
        counter *= -1;
      }else{
        $(this).removeClass('xi-heart');
        $(this).addClass('xi-heart-o');
        $(this).css({
          'color' : '#000',
        });
        counter *= -1;
      }
    });
    //컨텐츠2 끝
  });
