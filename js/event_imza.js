

{
    let a = document.getElementsByClassName("sw"),
      b = [
        // 10x
        {
          top: "-75px",
          left: "155px",
          size: "20px;"
        },
        {
          top: "85px",
          left: "95px",
          size: "18px"
        },
        {
          top: "10px",
          left: "195px",
          size: "18px"
        },
        {
          top: "85px",
          left: "-45px",
          size: "16px"
        },
        {
          top: "-35px",
          left: "-10px",
          size: "10px"
        },
        {
          top: "75px",
          left: "155px",
          size: "9px"
        },
        {
          top: "65px",
          left: "170px",
          size: "11px"
        },
        {
          top: "85px",
          left: "175px",
          size: "8px"
        },
        {
          top: "95px",
          left: "195px",
          size: "12px"
        },
        {
          top: "105px",
          left: "210px",
          size: "20px"
        },
        {
          top: "-175px",
          left: "55px",
          size: "20px;"
        },
        {
          top: "35px",
          left: "192px",
          size: "18px"
        },
        {
          top: "110px",
          left: "295px",
          size: "28px"
        },
        {
          top: "120px",
          left: "-155px",
          size: "26px"
        },
        {
          top: "-135px",
          left: "-310px",
          size: "23px"
        },
        {
          top: "120px",
          left: "200px",
          size: "25px"
        },
        {
          top: "15px",
          left: "120px",
          size: "60px"
        },
        {
          top: "55px",
          left: "15px",
          size: "50px"
        },
        {
          top: "45px",
          left: "95px",
          size: "22px"
        },
        {
          top: "135px",
          left: "110px",
          size: "50px"
        }
      ];
    for (let ka = 0; ka < a.length; ka++) {
      let c = b[ka];
      a[ka].style.left = c.left;
      a[ka].style.top = c.top;
      a[ka].style.fontSize = c.size;
    }
  }
  
  {
    let a = null; // XXX
    $('.button').on("click", function () {
        if (a !== null) return false;
        let b = parseFloat(
          getComputedStyle(document.body).getPropertyValue("--btn-animation-time")
        );
        
        if( !$('.button_Wrap').hasClass('active')){
          $('.button_Wrap').removeClass("dead");
        a = setTimeout(() => {
          $('.button_Wrap').addClass("dead");
          a = null;
        }, b * 1000);
  
        }
        
        $('.button_Wrap').toggleClass('active');
      });
  }
            
$(function(){
    $(document).on('click', '.section2_2 .box', function(){
        let num =  $(this).attr('data-num');
        
        // if(num == 4){
        //     num = 6;
        // }else if(num == 1){
        //     num = 4;
        // }
        $(this).addClass('active').siblings().removeClass('active')
        $('.ch2 img').removeClass('active_1 active_2 active_3 active_4 active_5 active_6');
        console.log($(window).width())
        if($(window).width() <= 768){
          $('.ch2 img').addClass('active_'+ num).attr('src', '../img/imza/ch2_'+num+'.png');
        }else{
          $('.ch2 img').addClass('active_'+ num).attr('src', './img/ch2_'+num+'.png');
        }
        
    })



      

});






  

// const heart = '<svg viewBox="0 0 100.1 86.8"> <image href="../img/imza/icon_heart.png" height="75" width="75"/></svg>';
// const logo = '<svg viewBox="0 0 100.1 100"> <image href="../img/imza/icon_heart.png" height="75" width="75"/></svg>';

// const star = '<svg viewBox="0 0 100.1 99.2"> <image href="../img/imza/icon_heart.png" height="75" width="75"/> </svg>';
// const cloud = '<svg viewBox="0 0 100.1 65.1"> <image href="../img/imza/icon_heart.png" height="75" width="75"/></svg>';


// const data = [heart, logo, star, cloud];

// const max = 20;

// let particles = [];

// class Ball {
//   constructor(shape) {
// 	let $this = this;
//     this.shape = $(shape);
//     this.speed = 2 + Math.random() * 8;
//     this.vx = Math.random() * this.speed - Math.random() * this.speed;
//     this.vy = Math.random() * this.speed - Math.random() * this.speed;
//     this.radius = 10 + Math.round(Math.random() * 80);
//     this.w = $(window).width();
//     this.h = $(window).height();
//     this.x = (this.w - this.radius) / 2;
//     this.y = (this.h - this.radius) / 2;
//     //  console.log(this)
//     update();
    
    
// 	$(window).on("resize", this.resize.bind(this));
	
// 	this.render();
		
    
//   }

//   render() {
//     $(this.shape).css({
//       width: this.radius,
//       height: this.radius });

//     $(".sc7_particle").append(this.shape);
//   }

//   resize() {
//     this.w = $(window).width();
//     this.h = $(window).height();
//   }

//   move() {
//     this.x = this.x + this.vx;
//     this.y = this.y + this.vy;


//     this.shape.css({
//       left: this.x,
//       top: this.y,
//       transform: "rotate(" + this.y + "deg)" });


//     if (this.x < 0 || this.x > this.w - this.radius) {
//       this.vx = -this.vx;
//       $(this.shape).toggleClass("highlight");
//     }
//     if (this.y < 0 || this.y > this.h - this.radius) {
//       this.vy = -this.vy;
//       $(this.shape).toggleClass("highlight");
//     }
//     return this;
//   }}



// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


// for (let i = 0; i < 10; i++) {
//   particles.push(
//   new Ball(data[randomInt(0, data.length - 1)]));

// }

// function update() {
//   particles = particles.filter(function (p) {
//     return p.move();
//   });
//   requestAnimationFrame(update.bind(this));
// }



// $(window).scroll(function() { 
// 	if ($(window).scrollTop() == $(document).height() - $(window).height()) {
// 		console.log('1')
// 		// update();
// 	} 
// })