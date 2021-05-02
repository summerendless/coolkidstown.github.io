// ;(function($, window, document, undefined) {
//   var animation = 'spotlight';
//   var options = {};
//   var lastChecked;

//   function animate()
//   {
//     $('.lightwrap').animate(animation, {
//       "stopX": 50,
//       "stopY": 50
//     });
//   }

//   $(document).ready(function() {
//     animate();

//   });
// })(jQuery, window, document);


$(document).ready(function() {
  Splitting();




  class ShapeFollower {
    constructor() {
      this.shapeW = 25
      this.shapeH = 70
      this.shapeCenterCollection = []
      
      // selectors
      this.$container = $('.section1 .light')
      this.$window = $(window)
      this.$document = $(document)
    }
    
    init() {
      this.makeGrid()
      this.bindEvents()
    }
    
    makeGrid() {
      this.$container.empty()
      
      let windowW = this.$window.innerWidth()
      let windowH = this.$window.innerHeight()
      
      let numContainers = Math.floor(windowH / (this.shapeH + 55))
      let numShapes = Math.floor((windowW / this.shapeW) / 13)
      let gutter = ((windowW - (this.shapeW * numShapes)) / numShapes)
      let totalWidthShape = this.shapeW + gutter
      
      for (let j = 0; j < 1; j++) {
        let template = `<div class="shape__row">`
        for (let i = 1; i < 4; i++) {
          template += `<div class="shape" style="left: ${(totalWidthShape * i) + gutter / 2}px;"><img src="../img/imza/light6.png" /></div>`
        }
        template += `</div>`
        
        this.$container.append(template)
      }
      
      this.makeAnimation()
    }
    
    makeAnimation() {
      let $shapes = $(".shape")
      
      this.getShapesCenterPosition($shapes)
      this.bindMouseMoveEvent($shapes)
    }
    
    getShapesCenterPosition(shapes) {
      this.shapeCenterCollection = []
      shapes.each((index, shape) => {
        let $shape = $(shape);
        this.shapeCenterCollection.push([
          $shape.offset().left + $shape.width() / 2, $shape.offset().top + $shape.height() / 2
        ]);
      });
    }
    
    bindMouseMoveEvent(shapes) {
      this.$document.off('mousemove')
      
      this.$document.mousemove((e) => {
        this.followMouseRotation(e, shapes)
      });
    }
    
    bindEvents() {
      // let resizeDebounce = _.debounce(this.makeGrid.bind(this), 500)
      // this.$window.on('resize', () => {
      //   $('.shape').fadeOut('fast')
      //   resizeDebounce()
      // })
    }
    
    followMouseRotation(e, shapes) {
      shapes.each((index, shape) => {
        let $shape = $(shape)
        let angle = Math.atan2(e.pageX - this.shapeCenterCollection[index][0], - (e.pageY- this.shapeCenterCollection[index][1]) )*(180/Math.PI)
  
        $shape.css({ '-webkit-transform': 'rotate(' + angle + 'deg)'})
        $shape.css({ '-moz-transform': 'rotate(' + angle + 'deg)'})
        $shape.css({ 'transform': 'rotate(' + angle + 'deg)'})
      });
    }
  }
  
  // var shapeFollower = new ShapeFollower()
  // shapeFollower.init()
  $(window).scroll(function(){
    let winScroll = $(window).scrollTop();
    if( winScroll <= 300){
        $('.spotlight').fadeIn();
        $(document).on('mousemove', function(e){
                $('.spotlight').css("top", e.pageY);
                $('.spotlight').css("left", e.pageX);
        });

    }else{
        $('.spotlight').fadeOut();
        // $(document).off('mousemove');
    }
}).scroll();

  $('.clouds').removeClass('active').css('display','none');
  setTimeout(function(){
    //$('.lightwrap').hide();
    $('.clouds').addClass('active').show();
    $('.section1 .scrollmagic-pin-spacer').show();
  }, 4000)
});



document.addEventListener("DOMContentLoaded", function() {
  // let demo1 = new BVAmbient({
  //     selector: "#ambient",
  //     fps: 60,
  //     max_transition_speed: 18000,
  //     min_transition_speed: 100,
  //     particle_number: 50,
  //     particle_maxwidth: 15,
  //     particle_minwidth: 5,
  //     particle_radius: 15,
  //     particle_opacity: true,
  //     particle_colision_change: true,
  //     particle_background: "random",
  //     particle_image: {
  //         image: false,
  //         src: ""
  //     },
  // responsive: [
  //   {
  //   breakpoint: 768,
  //   settings: {
  //     particle_number: "15"
  //   }
  //   },
  //   {
  //   breakpoint: 480,
  //     settings: {
  //       particle_number: "10"
  //     }
  //   }
  // ]
  // });

  
// function hello(){
// 	const Acolor = new Array('red', 'orange', 'green'); 
	 
// 	let Bcolor = Math.floor(Math.random() * Acolor.length);
// 	let Ccolor = Acolor[Bcolor]; 
//   //document.bgColor=Ccolor;
//   demo1.Change({
//     type: "particle_background",
//     value: Ccolor
//   });
	    
// }  

// setInterval(() => {
  
//   hello();
//   console.log('1')
// }, 6000);




$(document).on('click', '.section1 .box', function(){
  let num =  $(this).attr('data-num');
    if(num == 4){
        num = 6;
    }else if(num == 1){
        num = 4;
    }
    $('.ch img').removeClass('active_1 active_2 active_3 active_4 active_5 active_6');
    $('.ch img').addClass('active_'+ num).attr('src', '../img/imza/ch'+num+'.png');

    })


});

$(document).on({
    mouseenter:function(){
        var img = $(this).find('img')
        if( img.hasClass('active_2')){
            $('.ch img').attr('src', '../img/imza/ch2_2.png');
        }else if(img.hasClass('active_3')){
            $('.ch img').attr('src', '../img/imza/ch3_2.png');
        }else if(img.hasClass('active_4')){
            $('.ch img').attr('src', '../img/imza/ch4_2.png');
        }else if(img.hasClass('active_6')){
            $('.ch img').attr('src', '../img/imza/ch6_2.png');

        }

    },
    mouseleave:function(){
        var img = $(this).find('img')
        if( img.hasClass('active_2')){
            $('.ch img').attr('src', '../img/imza/ch2.png');
        }else if(img.hasClass('active_3')){
            $('.ch img').attr('src', '../img/imza/ch3.png');
        }else if(img.hasClass('active_4')){
            $('.ch img').attr('src', '../img/imza/ch4.png');
        }else if(img.hasClass('active_6')){
            $('.ch img').attr('src', '../img/imza/ch6.png');
        }
    }

}, '.ch');


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



// window["tmripple"] =
// /******/ (function(modules) { // webpackBootstrap
// /******/ 	// The module cache
// /******/ 	var installedModules = {};
// /******/
// /******/ 	// The require function
// /******/ 	function __webpack_require__(moduleId) {
// /******/
// /******/ 		// Check if module is in cache
// /******/ 		if(installedModules[moduleId]) {
// /******/ 			return installedModules[moduleId].exports;
// /******/ 		}
// /******/ 		// Create a new module (and put it into the cache)
// /******/ 		var module = installedModules[moduleId] = {
// /******/ 			i: moduleId,
// /******/ 			l: false,
// /******/ 			exports: {}
// /******/ 		};
// /******/
// /******/ 		// Execute the module function
// /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
// /******/
// /******/ 		// Flag the module as loaded
// /******/ 		module.l = true;
// /******/
// /******/ 		// Return the exports of the module
// /******/ 		return module.exports;
// /******/ 	}
// /******/
// /******/
// /******/ 	// expose the modules object (__webpack_modules__)
// /******/ 	__webpack_require__.m = modules;
// /******/
// /******/ 	// expose the module cache
// /******/ 	__webpack_require__.c = installedModules;
// /******/
// /******/ 	// define getter function for harmony exports
// /******/ 	__webpack_require__.d = function(exports, name, getter) {
// /******/ 		if(!__webpack_require__.o(exports, name)) {
// /******/ 			Object.defineProperty(exports, name, {
// /******/ 				configurable: false,
// /******/ 				enumerable: true,
// /******/ 				get: getter
// /******/ 			});
// /******/ 		}
// /******/ 	};
// /******/
// /******/ 	// getDefaultExport function for compatibility with non-harmony modules
// /******/ 	__webpack_require__.n = function(module) {
// /******/ 		var getter = module && module.__esModule ?
// /******/ 			function getDefault() { return module['default']; } :
// /******/ 			function getModuleExports() { return module; };
// /******/ 		__webpack_require__.d(getter, 'a', getter);
// /******/ 		return getter;
// /******/ 	};
// /******/
// /******/ 	// Object.prototype.hasOwnProperty.call
// /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
// /******/
// /******/ 	// __webpack_public_path__
// /******/ 	__webpack_require__.p = "";
// /******/
// /******/ 	// Load entry module and return exports
// /******/ 	return __webpack_require__(__webpack_require__.s = 0);
// /******/ })
// /************************************************************************/
// /******/ ([
// /* 0 */
// /***/ (function(module, exports, __webpack_require__) {

// "use strict";


// // Default Settings
// var settings = {
//     area: "",
//     color: "rgba(255, 255, 255, 1)",
//     offsetEl: null,
//     eventListener: "click",
//     mouseMove: false
// };

// /**
//  * @description Where the magic happens
//  * @param {object} e
//  * @param {string} rippleColor
//  * @param {string} eventListener
//  */
// function ripple(e, rippleColor, eventListener) {
//     var clickedEl = e.currentTarget;
//     var PageX = eventListener.match(/touch/) ? e.changedTouches[0].pageX : e.clientX;
//     var PageY = eventListener.match(/touch/) ? e.changedTouches[0].pageY : e.clientY;
//     var btnWidth = clickedEl.clientWidth;
//     var el = clickedEl.getBoundingClientRect();
//     var rippleOffset = settings.offsetEl ? settings.offsetEl.clientHeight : 0;
//     var btnOffsetTop = el.top + rippleOffset;
//     var btnOffsetLeft = el.left;
//     var posMouseX = PageX;
//     var posMouseY = PageY + rippleOffset;
//     var rippleX = posMouseX - btnOffsetLeft;
//     var rippleY = posMouseY - btnOffsetTop;

//     var baseCSS = "\n          position: absolute;\n          width: " + btnWidth * 2 + "px;\n          height: " + btnWidth * 2 + "px;\n          border-radius: 50%;\n          transition: transform 700ms, opacity 700ms;\n          transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);\n          background: " + rippleColor + ";\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: 100%;\n          left: " + (rippleX - btnWidth) + "px;\n          top: " + (rippleY - btnWidth) + "px;\n          transform: scale(0);\n          pointer-events: none;\n      ";

//     // Prepare the dom
//     var rippleEffect = document.createElement("span");
//     rippleEffect.style.cssText = baseCSS;

//     // Add some css for prevent overflow errors
//     clickedEl.style.overflow = "hidden";

//     // Check if the element is not static because the ripple is in absolute
//     if (window.getComputedStyle(clickedEl).position === "static") {
//         clickedEl.style.position = "relative";
//     }

//     // Check for the mousemove event
//     if (settings.mouseMove) {
//         settings.mouseMove = false;
//         return;
//     }

//     clickedEl.appendChild(rippleEffect);

//     // start animation
//     requestAnimationFrame(function () {
//         rippleEffect.style.cssText = baseCSS + " transform: scale(1); opacity: 0;";
//     });

//     setTimeout(function () {
//         rippleEffect.remove();
//     }, 700);
// }

// /**
//  * @description Prevent ripple when scrolling (Mobile Only)
//  * @param {string} eventListener
//  */
// function onDrag(eventListener) {
//     if (eventListener === "touchend") {
//         document.getElementsByTagName("body")[0].addEventListener("touchmove", function () {
//             settings.mouseMove = true;
//         });
//     }
// }

// function attachRipple(els, rippleColor, eventListener) {
//     for (var i = 0; i < els.length; i += 1) {
//         var currentBtn = els[i];
//         currentBtn.addEventListener(eventListener, function (e) {
//             return ripple(e, rippleColor, eventListener);
//         });
//     }
// }

// function attachRippleToAttribute(area, rippleColor, eventListener) {
//     var attributeEl = document.querySelectorAll(area + " [data-animation='ripple']");

//     if (attributeEl.length > 0) {
//         attachRipple(attributeEl, rippleColor, eventListener);
//     } else {
//         throw new Error('not found any element with data-animation="ripple"');
//     }
// }

// function attachRippleToSelectors(selectors, rippleColor, eventListener) {
//     if (selectors) {
//         var selectorsEl = document.querySelectorAll(selectors);
//     } else {
//         throw new Error("You have to enter at least 1 selector");
//     }

//     if (selectorsEl.length > 0) {
//         attachRipple(selectorsEl, rippleColor, eventListener);
//     } else {
//         console.warn("No element found with this selector: ", selectors);
//     }
// }

// module.exports = {
//     init: function init() {
//         var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

//         try {
//             var area = settings.area,
//                 color = settings.color,
//                 offsetEl = settings.offsetEl,
//                 eventListener = settings.eventListener;


//             area = data.area || area;
//             color = data.color || color;
//             offsetEl = data.offsetEl ? this.setOffsetEl(data.offsetEl) : offsetEl;
//             eventListener = data.eventListener || eventListener;

//             onDrag(eventListener);
//             attachRippleToAttribute(area, color, eventListener);
//         } catch (e) {
//             console.warn(e.message);
//         }
//     },
//     attachToSelectors: function attachToSelectors() {
//         var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

//         try {
//             var elSetting = {
//                 color: data.color || settings.color,
//                 eventListener: data.eventListener || settings.eventListener
//             };
//             var color = elSetting.color,
//                 eventListener = elSetting.eventListener;


//             attachRippleToSelectors(data.selectors, color, eventListener);
//         } catch (e) {
//             console.warn(e.message);
//         }
//     },
//     setOffsetEl: function setOffsetEl(el) {
//         settings.offsetEl = document.querySelector(el);
//     },

//     ripple: ripple
// };

// /***/ })
// /******/ ]);

// tmripple.init()




// $("a.btn2").hover(function(e){ 
//   var btn2Top = $(this).offset().top;
//   var btn2Left = $(this).offset().left;
//   var currentX = e.pageX;
//   var currentY = e.pageY;
//   var topVal = currentY-btn2Top;
//   if(topVal > btn2Top + $(this).innerHeight()){topVal=$(this).innerHeight();}
//   var leftVal = currentX-btn2Left;
//   if(leftVal > btn2Left + $(this).innerWidth()){leftVal=$(this).innerWidth();}
//   $(this).find('span').fadeIn(300).css({
//       "display":"block",
//       "top":topVal+"px",
//       "left":leftVal+"px"
//   });

//   setTimeout(function(){
//      $("a.btn2 span").addClass('btn2Ani')
//   },100);
// },function(){
//   $("a.btn2 span").hide().removeClass('btn2Ani');
// });