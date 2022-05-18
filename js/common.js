'use strict';
const intervalNum = 150;
$(function(){
  //script 입력 영역
  $("nav ul li a,.back-to-top a,a.button, #footer ul li a").click(function(){
    // console.log(this.hash);
    // console.log($(this.hash).offset().top);
    let thisHash = $(this.hash);
    // console.log(thisHash);
    // 1번 애니메이션이 작동 될때 여러번 클릭을 방지
    // let isAni = $("html,body").is(":animated");
    // if( !isAni ){
    //     $("html,body").animate({scrollTop: thisHash.offset().top},1500);
    // }
    // 2번 즉시 scroll 대상 변경
    $("html,body").stop();
    $("html,body").animate({scrollTop: thisHash.offset().top},1500);
    return false;
  });
  /*실습 2:
  back-to-top요소(scroll 상단 이동버튼)가
  window scroll top 값이 0이 아닐때 on class를
  추가하여 노출 시키시오.
  (window scroll top 값이 0일때는 on class 삭제)
  */
  $(window).scroll(function(){ // window 스크롤을 가져옴
    let thisScrollTop = $(this).scrollTop(); // 스크롤 숫자로 가져옴
    let backToTop = $(".back-to-top");
    if( thisScrollTop == 0 ){
      backToTop.removeClass("on");
    }else{
      backToTop.addClass("on");
    }
  });
  /*
  실습 3:
  section offset method를 사용하여 window가 스크롤될때
  해당 section의 offset top window scrollTop이 같고
  section의 높이와 동일한 영역 안 일때 해당 section에
  active class를 추가하시오
  */
  let wHeight = $(window).height();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      let thisElem = $(this);
      let thisOffset = $(this).offset();
    if( thisOffset.top <= thisScrollTop + intervalNum && thisScrollTop <= thisOffset.top + wHeight ){
      thisElem.addClass("active");
    };
  });
});
});
