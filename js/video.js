$(function(){
    var i = 0;
    var cntGrp = $('.cnt01 .artGroup');
    var cntArt = $('.cnt01 .artGroup .article');
    var player = $('.onPlay');
    var limit = function(i, list){ //목록의 개수와 인덱스를 비교하여 슬라이드가 더 넘어가지 않도록 함.
      if(i >= list.length){ 
        return list.length - 1;
      }else if (i <= 0){
        return 0;
      }else{
        return i;
      }
    }

    $('.cnt01 .right').click(function(){
      i++;
      i = limit(i, cntArt);
      cntGrp.css('marginLeft', -100 * i + '%');
    });
    $('.cnt01 .left').click(function(){
      i--;
      i = limit(i, cntArt);
      cntGrp.css('marginLeft', -100 * i + '%');
    });
 

    //플레이 창 안보이게
    player.css('display', 'none');
    //아티클 클릭 시 아티클 하위의 이미지가 플레이어 창에 띄워지게함
    $('.cnt02 .article').click(function(){ 
      $('.onPlay .image').css('backgroundImage', $(this).children('.image').css('backgroundImage')); 
      player.css('display', 'block');
    });

    //닫힘 버튼
    $('.close').click(function(){ 
      player.css('display','none');
    });

  });
