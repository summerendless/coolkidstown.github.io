$(function () {
    var controller = new ScrollMagic.Controller();
    
    var ch = new ScrollMagic.Scene({triggerElement: "#con10 .img_101", offset:30}).setClassToggle("#icon_fx", "on__active5").addTo(controller);
    
    $(window).on("load", function (e) { 
        var con1_1 = new ScrollMagic.Scene({triggerElement: "#con1"}).setClassToggle("#con1 .con1_inner .flower01", "on__active1").addTo(controller);
        var con1_2 = new ScrollMagic.Scene({triggerElement: "#con1"}).setClassToggle("#con1 .con1_inner .flower02", "on__active1").addTo(controller);
        var con1_3 = new ScrollMagic.Scene({triggerElement: "#con1"}).setClassToggle("#con1 .con1_inner .flower03", "on__active1").addTo(controller);
        var con1_4 = new ScrollMagic.Scene({triggerElement: "#con1"}).setClassToggle(".c1f4", "on__active7").addTo(controller);
        var con1_5 = new ScrollMagic.Scene({triggerElement: "#con1"}).setClassToggle(".c1f5", "on__active8").addTo(controller);            
    })

    //var c1m1 = new ScrollMagic.Scene({triggerElement: "#con1",offset:600, duration:2000}).setPin("#con1").addIndicators({name: "1921"}).addTo(controller);

    var c1m1 = new ScrollMagic.Scene({triggerElement: "#con1",offset:"470%", duration:"250%"}).setPin("#con1").addTo(controller);
    var c1m2 = new ScrollMagic.Scene({triggerElement: "#con1",offset:900}).setClassToggle(".skybar1", "on__active9").addTo(controller);
    var c1m3 = new ScrollMagic.Scene({triggerElement: "#con1",offset:900}).setClassToggle(".skybar2", "on__active9").addTo(controller);
    var c1m4 = new ScrollMagic.Scene({triggerElement: "#con1",offset:900}).setClassToggle(".skybar3", "on__active9").addTo(controller);
    var c1m5 = new ScrollMagic.Scene({triggerElement: "#con1",offset:900}).setClassToggle(".skybar4", "on__active9").addTo(controller);
    var c1m6 = new ScrollMagic.Scene({triggerElement: "#con1",offset:920}).setTween(".skybg", {left: "0"}).addTo(controller);
    var c1m7 = new ScrollMagic.Scene({triggerElement: "#con1",offset:1800, duration:700}).setClassToggle(".blackbg", "fade").addTo(controller);
    var c1m8 = new ScrollMagic.Scene({triggerElement: "#con1",offset:1800}).setClassToggle("#con1", "por").addTo(controller);    
    var c1m9 = new ScrollMagic.Scene({triggerElement: "#con1",offset:1800, duration:700}).setClassToggle(".contentp_01", "on__active10").addTo(controller);
    //var c1m10 = new ScrollMagic.Scene({triggerElement: "#con1",offset:2200}).setClassToggle(".blackbg", "fadeout").addTo(controller);
    //var c1m11 = new ScrollMagic.Scene({triggerElement: "#con1",offset:2200}).setClassToggle(".contentp_01", "fadeout").addTo(controller);

    // function open_chatroom(){
    //     var windowWidth = $( window ).width();
    //     if(windowWidth < 1921) {
    //     //창 가로 크기가 500 미만일 경우
    //     } else {
    //         console.log("2580");
    //     }
    // }
        

    var con2_1 = new ScrollMagic.Scene({triggerElement: "#con2", offset:10}).setTween("#con2 .con2_inner .flower01", {top: "335px", left: "124px", opacity: "1"}).addTo(controller);
    var con2_2 = new ScrollMagic.Scene({triggerElement: "#con2", offset:200}).setTween("#con2 .con2_inner .flower02", {top: "500px", right: "620px", opacity: "1"}).addTo(controller);
    var con2_3 = new ScrollMagic.Scene({triggerElement: "#con2", offset:250}).setTween("#con2 .con2_inner .flower03", {top: "910px", left: "620px", opacity: "1"}).addTo(controller);
    var con2_4 = new ScrollMagic.Scene({triggerElement: "#con2", offset:350}).setTween("#con2 .con2_inner .flower04", {bottom: "-20px", right: "500px", opacity: "1"}).addTo(controller);
    var con2_5 = new ScrollMagic.Scene({triggerElement: "#con2", offset:0}).setTween(".left__contentp1", {margin: "73px 0 0 0", opacity: "1"}).addTo(controller);
    var con2_5 = new ScrollMagic.Scene({triggerElement: "#con2", offset:500}).setTween(".left__contentp2", {left: "0", opacity: "1"}).addTo(controller);
    var con2_5 = new ScrollMagic.Scene({triggerElement: "#con2", offset:550}).setTween(".left__contentp3", {left: "0", opacity: "1"}).addTo(controller);
    var con2_5 = new ScrollMagic.Scene({triggerElement: "#con2", offset:550}).setTween(".left__contentp4", {margin: "976px 0 0 0", opacity: "1"}).addTo(controller);
    var con2_6 = new ScrollMagic.Scene({triggerElement: "#con2", offset:300}).setTween(".right__contentp1", {margin: "73px 0 0 0", opacity: "1"}).addTo(controller);
    var con2_6 = new ScrollMagic.Scene({triggerElement: "#con2", offset:650}).setTween(".right__contentp2", {right: "0", opacity: "1"}).addTo(controller);
    var con2_6 = new ScrollMagic.Scene({triggerElement: "#con2", offset:700}).setTween(".right__contentp3", {right: "0", opacity: "1"}).addTo(controller);
    var con2_6 = new ScrollMagic.Scene({triggerElement: "#con2", offset:700}).setTween(".right__contentp4", {margin: "1248px 35px 50px 0", opacity: "1"}).addTo(controller);

    var con3_1 = new ScrollMagic.Scene({triggerElement: "#con3", offset:700,}).setTween("#con3 .con3_inner .flower01", {top: "900px", left: "700px", opacity: "1"}).addTo(controller);
    var con3_2 = new ScrollMagic.Scene({triggerElement: "#con3", offset:700}).setClassToggle(".con3_fx1", "on__active").addTo(controller);
    var con3_2 = new ScrollMagic.Scene({triggerElement: "#con3", offset:1250}).setClassToggle(".con3_fx2", "on__active1").addTo(controller);
    var con3_2 = new ScrollMagic.Scene({triggerElement: "#con3", offset:950}).setTween(".con3_fx3", {margin: "-129px 0 0 0 ",  opacity: "1"}).addTo(controller);
    var con3_2 = new ScrollMagic.Scene({triggerElement: "#con3", offset:1250}).setTween(".con3_fx4", {margin: "0px 0 0 0", opacity: "1"}).addTo(controller);

    var con4_1 = new ScrollMagic.Scene({triggerElement: "#con4", offset:50}).setTween(".con4imgbox1", {margin: "116px 0 0 0", opacity: "1"}).addTo(controller);
    var con4_2 = new ScrollMagic.Scene({triggerElement: "#con4", offset:50}).setTween(".con4imgbox2", {left: "1310px", opacity: "1"}).addTo(controller);
    var con4_3 = new ScrollMagic.Scene({triggerElement: "#con4", offset:500}).setTween(".con4imgbox3", {opacity: "1"}).setClassToggle(".con4imgbox3", "on__active").addTo(controller);
    var con4_4 = new ScrollMagic.Scene({triggerElement: "#con4", offset:500}).setTween(".con4imgbox4", {bottom: "-15px", opacity: "1"}).setClassToggle(".con4imgbox4", "on__active").addTo(controller);
        


    var con5_1 = new ScrollMagic.Scene({triggerElement: "#con5", offset:0}).setTween("#con5 .con5_inner .flower01", {top: "410px", right: "340px", opacity: "1"}).addTo(controller);
    var con5_2 = new ScrollMagic.Scene({triggerElement: "#con5", offset:10}).setTween("#con5 .con5_inner .flower02", {bottom: "100px", left: "506px", opacity: "1"}).addTo(controller);
    var con5_3 = new ScrollMagic.Scene({triggerElement: "#con5", offset:10, duration:1800}).setTween("#con5 .con5_inner .flower03", {bottom: "-350px", right: "510px", opacity: "1"}).addTo(controller);
    var con5_4 = new ScrollMagic.Scene({triggerElement: "#con5", offset:0}).setClassToggle(".con5_tx1", "b0").addTo(controller);
    var con5_5 = new ScrollMagic.Scene({triggerElement: "#con5", offset:0}).setClassToggle(".con5_tx2", "b0").addTo(controller);
    var con5_6 = new ScrollMagic.Scene({triggerElement: "#con5", offset:0}).setClassToggle(".con5_tx3", "b0").addTo(controller);
    var con5_7 = new ScrollMagic.Scene({triggerElement: "#con5", offset:0}).setClassToggle(".con5_tx4", "b0").addTo(controller);
    var con5_9 = new ScrollMagic.Scene({triggerElement: "#con5", offset:1000}).setTween(".con5_tx5", {left: "50%", opacity: "1"}).addTo(controller);
    var con5_8 = new ScrollMagic.Scene({triggerElement: "#con5", offset:300}).setTween(".con5_im1", {margin: "0px 0 0 0", opacity: "1"}).addTo(controller);
    var con5_8 = new ScrollMagic.Scene({triggerElement: "#con5", offset:700}).setTween(".con5_im2", {margin: "130px 0 0 0", opacity: "1"}).addTo(controller);
    var con5_8 = new ScrollMagic.Scene({triggerElement: "#con5", offset:1000}).setTween(".con5_flow", {opacity: "1"}).setClassToggle(".con5_flow", "on__active").addTo(controller);



    var con6_1 = new ScrollMagic.Scene({triggerElement: "#con6", offset:10}).setTween("#con6 .con6_inner .flower01", {bottom: "344px", left: "202px", opacity: "1"}).addTo(controller);        
    var con6_6 = new ScrollMagic.Scene({triggerElement: "#con6", offset:1000}).setTween(".con6_inner .flower02", {bottom: "0", opacity: "1"}).setClassToggle(".con6_inner .flower02", "on__active").addTo(controller);
    var con6_2 = new ScrollMagic.Scene({triggerElement: "#con6", offset:10}).setTween("#con6 .con6_inner .flower03", {bottom: "-20px", left: "380px", opacity: "1"}).addTo(controller);
    var con6_3 = new ScrollMagic.Scene({triggerElement: "#con6", offset:1000, duration:1500}).setTween(".menu--item .marquee_marquee__Fuq1c", {right: "300px"}).addTo(controller);
    var con6_4 = new ScrollMagic.Scene({triggerElement: "#con6"}).setTween(".img_61", {margin: "0px 0 0 0",opacity: "1"}).addTo(controller);
    var con6_5 = new ScrollMagic.Scene({triggerElement: "#con6"}).setTween(".img_62", {margin: "70px 0 0 0",opacity: "1"}).addTo(controller);

    var con7_1 = new ScrollMagic.Scene({triggerElement: "#con7"}).setTween("#con7 .con7_inner .flower01", {bottom: "344px", left: "135px", opacity: "1"}).addTo(controller);
    var con7_2 = new ScrollMagic.Scene({triggerElement: "#con7", offset:10, duration:1500}).setTween("#con7 .con7_inner .flower02", {bottom: "-200px", right: "700px", opacity: "1"}).addTo(controller);
    var con7_3 = new ScrollMagic.Scene({triggerElement: "#con7"}).setTween(".scon1", {opacity: "1"}).addTo(controller);
    var con7_4 = new ScrollMagic.Scene({triggerElement: "#con7", offset:400}).setTween(".any7_1", {left:"0px",opacity: "1"}).addTo(controller);
    var con7_5 = new ScrollMagic.Scene({triggerElement: "#con7", offset:800}).setTween(".any7_2", {right:"175px",opacity: "1"}).addTo(controller);
    var con7_6 = new ScrollMagic.Scene({triggerElement: "#con7", offset:800}).setTween(".any7_3", {bottom:"-250px",opacity: "1"}).addTo(controller);
    var con7_7 = new ScrollMagic.Scene({triggerElement: "#con7", offset:500}).setTween(".scon3", {opacity: "1"}).setClassToggle(".scon3", "on__active").addTo(controller);
    var con7_8 = new ScrollMagic.Scene({triggerElement: "#con7", offset:1100}).setTween(".any7_4", {opacity: "1"}).setClassToggle(".any7_4", "on__active2").addTo(controller);
    var con7_8 = new ScrollMagic.Scene({triggerElement: "#con7", offset:1100}).setTween(".any7_5", {opacity: "1"}).setClassToggle(".any7_5", "on__active").addTo(controller);
            
            
    var con8_1 = new ScrollMagic.Scene({triggerElement: "#con8", offset:10, duration:1500}).setTween("#con8 .con8_inner .flower01", {top: "220px", left: "10px", opacity: "1"}).addTo(controller);
    var con8_2 = new ScrollMagic.Scene({triggerElement: "#con8", offset:10, duration:1500}).setTween("#con8 .con8_inner .flower02", {top: "464px", right: "0px", opacity: "1"}).addTo(controller);
    var con8_3 = new ScrollMagic.Scene({triggerElement: "#con8", offset:10, duration:1500}).setTween("#con8 .con8_inner .flower03", {top: "830px", left: "280px", opacity: "1"}).addTo(controller);
    var con8_4 = new ScrollMagic.Scene({triggerElement: "#con8", offset:10, duration:1500}).setTween("#con8 .con8_inner .flower04", {top: "1500px", right: "100px", opacity: "1"}).addTo(controller);
    var con8_5 = new ScrollMagic.Scene({triggerElement: "#con8", offset:1800}).setTween("#con8 .con8_inner .flower05", {bottom: "250px", left: "480px", opacity: "1"}).addTo(controller);
    var con8_6 = new ScrollMagic.Scene({triggerElement: "#con8", offset:220}).setClassToggle(".text-top1", "activated").addTo(controller);
    var con8_7 = new ScrollMagic.Scene({triggerElement: "#con8", offset:600}).setClassToggle(".text-top4", "activated").addTo(controller);
    var con8_8 = new ScrollMagic.Scene({triggerElement: "#con8", offset:800}).setClassToggle(".text-top2", "activated").addTo(controller);
    var con8_9 = new ScrollMagic.Scene({triggerElement: "#con8", offset:1000}).setClassToggle(".text-top5", "activated").addTo(controller);
    var con8_10 = new ScrollMagic.Scene({triggerElement: "#con8", offset:1200}).setClassToggle(".text-top3", "activated").addTo(controller);
    var con8_11 = new ScrollMagic.Scene({triggerElement: "#con8", offset:1400}).setClassToggle(".text-top6", "activated").addTo(controller);
    var con8_12 = new ScrollMagic.Scene({triggerElement: "#con8", offset:1800}).setTween(".con8_flower", {bottom: "-300px", opacity: "1"}).setClassToggle(".con8_flower", "on__active2").addTo(controller);
    var con8_13 = new ScrollMagic.Scene({triggerElement: "#con8", offset:2200}).setTween("#con8 .con8_inner .flower06", {opacity: "1"}).setClassToggle("#con8 .con8_inner .flower06", "on__active").addTo(controller);


    var con9_1 = new ScrollMagic.Scene({triggerElement: "#con9"}).setTween("#con9 .con9_inner .flower01", {top: "346px", right: "600px", opacity: "1"}).addTo(controller);
    var con9_2 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:1500}).setTween("#con9 .con9_inner .flower02", {top: "585px", left: "100px", opacity: "1"}).addTo(controller);
    var con9_3 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:1500}).setTween("#con9 .con9_inner .flower03", {top: "600px", left: "600px", opacity: "1"}).addTo(controller);
    var con9_4 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:1500}).setTween("#con9 .con9_inner .flower04", {top: "838px", right: "208px", opacity: "1"}).addTo(controller);
    var con9_5 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:2500}).setTween("#con9 .con9_inner .flower05", {top: "850px", opacity: "1"}).addTo(controller);
    var con9_6 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:2500}).setTween("#con9 .con9_inner .flower06", {top: "1095px", left: "613px", opacity: "1"}).addTo(controller);
    var con9_7 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:2500}).setTween("#con9 .con9_inner .flower07", {top: "1150px", right: "672px", opacity: "1"}).addTo(controller);
    var con9_8 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:2500}).setTween("#con9 .con9_inner .flower08", {top: "1700px", left: "154px", opacity: "1"}).addTo(controller);
    var con9_9 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:2500}).setTween(".PoemU1", {right: "300px"}).addTo(controller);
    var con9_10 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:2500}).setTween(".PoemU2", {right: "500px"}).addTo(controller);
    var con9_11 = new ScrollMagic.Scene({triggerElement: "#con9", offset:10, duration:2500}).setTween(".PoemU3", {right: "700px"}).addTo(controller);
    var con8_12 = new ScrollMagic.Scene({triggerElement: "#con9", offset:300}).setTween(".img_91", {opacity: "1"}).setClassToggle(".img_91", "on__active").addTo(controller);
    var con8_12 = new ScrollMagic.Scene({triggerElement: "#con9", offset:400}).setTween(".img_103", {top:"800px", opacity: "1"}).setClassToggle(".img_103", "on__active").addTo(controller);
        
    var con10_1 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:1500}).setTween("#con10 .con10_inner .flower01", {top: "346px", left: "684px", opacity: "1"}).addTo(controller);
    var con10_2 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:1500}).setTween("#con10 .con10_inner .flower02", {top: "585px", left: "100px", opacity: "1"}).addTo(controller);
    var con10_3 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:1500}).setTween("#con10 .con10_inner .flower03", {top: "560px", left: "605px", opacity: "1"}).addTo(controller);
    var con10_4 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:1500}).setTween("#con10 .con10_inner .flower04", {top: "838px", right: "208px", opacity: "1"}).addTo(controller);
    var con10_5 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:2500}).setTween("#con10 .con10_inner .flower05", {top: "850px", opacity: "1"}).addTo(controller);
    var con10_6 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:2500}).setTween("#con10 .con10_inner .flower06", {top: "1202px", left: "330px", opacity: "1"}).addTo(controller);
    var con10_7 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:2500}).setTween("#con10 .con10_inner .flower07", {top: "1250px", right: "672px", opacity: "1"}).addTo(controller);
    var con10_8 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:2500}).setTween("#con10 .con10_inner .flower08", {top: "1500px", left: "154px", opacity: "1"}).addTo(controller);
    var con10_9 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:2500}).setTween("#con10 .con10_inner .flower09", {top: "1700px", right: "154px", opacity: "1"}).addTo(controller);
    var con10_10 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:2500}).setTween("#con10 .con10_inner .flower10", {top: "1750px", left: "554px", opacity: "1"}).addTo(controller);
    var con10_11 = new ScrollMagic.Scene({triggerElement: "#con10", offset:10, duration:2500}).setTween("#con10 .con10_inner .flower11", {top: "1700px", left: "154px", opacity: "1"}).addTo(controller);

    var con10_f1 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower1", "active__f1").addTo(controller);
    var con10_f2 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower2", "active__f2").addTo(controller);
    var con10_f3 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower3", "active__f3").addTo(controller);
    var con10_f4 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower4", "active__f4").addTo(controller);
    var con10_f5 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower5", "active__f5").addTo(controller);
    var con10_f6 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower6", "active__f6").addTo(controller);
    var con10_f7 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower7", "active__f7").addTo(controller);
    var con10_f8 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower8", "active__f8").addTo(controller);
    var con10_f9 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower9", "active__f9").addTo(controller);
    var con10_f10 = new ScrollMagic.Scene({triggerElement: "#con10", offset:1800}).setClassToggle("#con_flower10", "active__f10").addTo(controller);

/*
    var tween = new TimelineMax()
    .to(".PU_txt", 1, {
            onStart: 
                function timeCounter() {                    
                    var count0 = 100;
                    id0 = setInterval(count0Fn, 0.1);
                    function count0Fn() {
                        count0++;                        
                        if (count0 > 999) {
                            clearInterval(id0);
                        } else {
                            $(".PoemU_txt.number").eq(0).text(count0);
                        }
                    }
                }
            
        }
    )
    var scene = new ScrollMagic.Scene({triggerElement: ".PoemU_txt", offset:0}).setTween(tween).addTo(controller);
    */

    var count = new ScrollMagic.Scene({triggerElement: ".PoemU_txt",offset:-200})
    .on('enter', function(){
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    })
    //.setTween(tween)
    //.addIndicators()
    .addTo(controller);
});