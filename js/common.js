'use strict';
$(function(){
  //상단 색 바꾸기
  $(window).scroll(function(){
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop();
    console.log(thisScrollTop);
    let banner = $("#header").height();
    let navBar = $("#header");
    $("#header").each(function(){
      let thisOffset = $(this).offset();
      console.log(thisOffset);
    if( thisScrollTop > banner){
      $("#header").css("color","black");
    };
    // else{
    //   // navBar.removeClass("fixed");
    //   // $(".head-inside").css("color","#ffffff");
    //   // $(".head-inside-text").css("background-color","#4c3b2a");
    //   // $(".change").attr("src","./img/logo.png");
    //   // $(".head-text-btn").css("border","1px solid white");
    // }
    // if ( thisScrollTop > 350 ) {
    //  $(".section2").css("opacity","1").css("transition","2.5s");
    // }else{
    //  $(".section2").css("opacity","0");
    // }

  });
 });
  // let windowHeight = $(window).innerHeight();
  // let direc = 0;
  //
  // let maxDirec = $(".wheel-wrap").length - 1;
  // let wheelAction = false;
  // function wheelMove(){
  //   console.log("test");
  //   $("html").animate({scrollTop: direc*windowHeight},{
  //     duration: 1000,
  //     start: function(){
  //       wheelAction = true;
  //     },
  //     complete: function(){
  //       wheelAction = false;
  //     }
  //   });
  // }
  //  wheelMove();
  // $(window).on("wheel",function(event){
  //    console.log(event.originalEvent.wheelDelta);
  //     wheelMove();
     // let eventDelta = event.originalEvent.wheelDelta;
     // if( eventDelta > 0 && wheelAction == false){
     //   if( direc <= 0 ){
     //     direc = 0
     //   }else if( direc >= maxDirec ){
     //     direc = maxDirec;
     //   }else{
     //     direc--;
     //     wheelMove();
     //   }
     // }else if( eventDelta < 0 && wheelAction == false ){
     //   if( direc >= maxDirec ){
     //     direc = maxDirec;
     //   }else{
     //     direc++;
     //    wheelMove();
     //   }
     // }
  });
});
