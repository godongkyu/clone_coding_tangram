'use strict';
$(function(){

  let windowHeight = $(window).innerHeight();
  let direc = 0;

  let maxDirec = $(".wheel-wrap").length - 1;
  let wheelAction = false;
  function wheelMove(){
    console.log("test");
    $("html").animate({scrollTop: direc*windowHeight},{
      duration: 1000,
      start: function(){
        wheelAction = true;
      },
      complete: function(){
        wheelAction = false;
      }
    });
  }
   wheelMove();
  // $(window).on("wheel",function(event){
  //    console.log(event.originalEvent.wheelDelta);
  //     wheelMove();
  //    // let eventDelta = event.originalEvent.wheelDelta;
  //    // if( eventDelta > 0 && wheelAction == false){
  //    //   if( direc <= 0 ){
  //    //     direc = 0
  //    //   }else if( direc >= maxDirec ){
  //    //     direc = maxDirec;
  //    //   }else{
  //    //     direc--;
  //    //     wheelMove();
  //    //   }
  //    // }else if( eventDelta < 0 && wheelAction == false ){
  //    //   if( direc >= maxDirec ){
  //    //     direc = maxDirec;
  //    //   }else{
  //    //     direc++;
  //    //    wheelMove();
  //    //   }
  //    // }
  // });
});
