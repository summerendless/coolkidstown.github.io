var RENDERER = {
	PARTICLE_COUNT : 1500,
	PARTICLE_RADIUS : 1,
	MAX_ROTATION_ANGLE : Math.PI / 60,
	TRANSLATION_COUNT : false,
	
	init : function(strategy){
		this.setParameters(strategy);
		this.createParticles();
		this.setupFigure();
		this.reconstructMethod();
		this.bindEvent();
		this.drawFigure();
	},
	setParameters : function(strategy){
		this.$window = $(window);
		
		this.$container = $('#jsi-particle-container');
		this.width = this.$container.width()*0.7;
		this.height = this.$container.height()*0.7;
		
		this.$canvas = $('<canvas />').attr({width : this.width, height : this.height}).appendTo(this.$container);
		this.context = this.$canvas.get(0).getContext('2d');
		
		this.center = {x : this.width / 2, y : this.height / 2};
		
		this.rotationX = this.MAX_ROTATION_ANGLE;
		this.rotationY = this.MAX_ROTATION_ANGLE;
		this.strategyIndex = 0;
		this.translationCount = 0;
		this.theta = 0;
		
		this.strategies = strategy.getStrategies();
		this.particles = [];
	},
	createParticles : function(){
		for(var i = 0; i < this.PARTICLE_COUNT; i ++){
			this.particles.push(new PARTICLE(this.center));
		}
	},
	reconstructMethod : function(){
		this.setupFigure = this.setupFigure.bind(this);
		this.drawFigure = this.drawFigure.bind(this);
		this.changeAngle = this.changeAngle.bind(this);
	},
	bindEvent : function(){
		$('.section1 .box').on('click', this.setupFigure); //this.$container
		this.$container.on('mousemove', this.changeAngle);
	},
	changeAngle : function(event){
		var offset = this.$container.offset(),
			x = event.clientX - offset.left + this.$window.scrollLeft(),
			y = event.clientY - offset.top + this.$window.scrollTop();
		
		this.rotationX = (this.center.y - y) / this.center.y * this.MAX_ROTATION_ANGLE;
		this.rotationY = (this.center.x - x) / this.center.x * this.MAX_ROTATION_ANGLE;
	},
	setupFigure : function(){
		for(var i = 0, length = this.particles.length; i < length; i++){
			this.particles[i].setAxis(this.strategies[this.strategyIndex]());
		}
		if(++this.strategyIndex == this.strategies.length){
			this.strategyIndex = 0;
		}
		this.translationCount = 0;
	},
	drawFigure : function(){
		requestAnimationFrame(this.drawFigure);
		
		this.context.fillStyle = 'rgba(0, 0, 28, 0.2)';
		this.context.fillRect(0, 0, this.width, this.height);
		
		for(var i = 0, length = this.particles.length; i < length; i++){
			var axis = this.particles[i].getAxis2D(this.theta);
			
			this.context.beginPath();
			this.context.fillStyle = axis.color;
			this.context.arc(axis.x, axis.y, this.PARTICLE_RADIUS, 0, Math.PI * 2, false);
			this.context.fill();
		}
		this.theta++;
		this.theta %= 360;
		
		for(var i = 0, length = this.particles.length; i < length; i++){
			this.particles[i].rotateX(this.rotationX);
			this.particles[i].rotateY(this.rotationY);
		}
		this.translationCount++;
		this.translationCount %= this.TRANSLATION_COUNT;
		
		if(this.translationCount == 0){
			this.setupFigure();
		}
	}
};
var STRATEGY = {
	SCATTER_RADIUS :150,
	CONE_ASPECT_RATIO : 1.5,
	RING_COUNT : 5,
	
	getStrategies : function(){
		var strategies = [];
		
		for(var i in this){
			if(this[i] == arguments.callee || typeof this[i] != 'function'){
				continue;
			}
			strategies.push(this[i].bind(this));
		}
		return strategies;
	},
	createSphere : function(){
		var cosTheta = Math.random() * 2 - 1,
			sinTheta = Math.sqrt(1 - cosTheta * cosTheta),
			phi = Math.random() * 2 * Math.PI;
			
		return {
			x : this.SCATTER_RADIUS * sinTheta * Math.cos(phi),
			y : this.SCATTER_RADIUS * sinTheta * Math.sin(phi),
			z : this.SCATTER_RADIUS * cosTheta,
			hue : Math.round(phi / Math.PI * 30)
		};
	},
	createTorus : function(){
		var theta = Math.random() * Math.PI * 2,
			x = this.SCATTER_RADIUS + this.SCATTER_RADIUS / 6 * Math.cos(theta),
			y = this.SCATTER_RADIUS / 6 * Math.sin(theta),
			phi = Math.random() * Math.PI * 2;
		
		return {
			x : x * Math.cos(phi),
			y : y,
			z : x * Math.sin(phi),
			hue : Math.round(phi / Math.PI * 30)
		};
	},
	createCone : function(){
		var status = Math.random() > 1 / 3,
			x,
			y,
			phi = Math.random() * Math.PI * 2,
			rate = Math.tan(30 / 180 * Math.PI) / this.CONE_ASPECT_RATIO;
		
		if(status){
			y = this.SCATTER_RADIUS * (1 - Math.random() * 2);
			x = (this.SCATTER_RADIUS - y) * rate;
		}else{
			y = -this.SCATTER_RADIUS;
			x = this.SCATTER_RADIUS * 2 * rate * Math.random();
		}
		return {
			x : x * Math.cos(phi),
			y : y,
			z : x * Math.sin(phi),
			hue : Math.round(phi / Math.PI * 30)
		};
	},
	createVase : function(){
		var theta = Math.random() * Math.PI,
			x = Math.abs(this.SCATTER_RADIUS * Math.cos(theta) / 2) + this.SCATTER_RADIUS / 8,
			y = this.SCATTER_RADIUS * Math.cos(theta) * 1.2,
			phi = Math.random() * Math.PI * 2;
		
		return {
			x : x * Math.cos(phi),
			y : y,
			z : x * Math.sin(phi),
			hue : Math.round(phi / Math.PI * 30)
		};
	}
};
var PARTICLE = function(center){
	this.center = center;
	this.init();
};
PARTICLE.prototype = {
	SPRING : 0.01,
	FRICTION : 0.9,
	FOCUS_POSITION : 300,
	COLOR : 'hsl(%hue, 100%, 70%)',
	
	init : function(){
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.vx = 0;
		this.vy = 0;
		this.vz = 0;
		this.color;
	},
	setAxis : function(axis){
		this.translating = true;
		this.nextX = axis.x;
		this.nextY = axis.y;
		this.nextZ = axis.z;
		this.hue = axis.hue;
	},
	rotateX : function(angle){
		var sin = Math.sin(angle),
			cos = Math.cos(angle),
			nextY = this.nextY * cos - this.nextZ * sin,
			nextZ = this.nextZ * cos + this.nextY * sin,
			y = this.y * cos - this.z * sin,
			z = this.z * cos + this.y * sin;
			
		this.nextY = nextY;
		this.nextZ = nextZ;
		this.y = y;
		this.z = z;
	},
	rotateY : function(angle){
		var sin = Math.sin(angle),
			cos = Math.cos(angle),
			nextX = this.nextX * cos - this.nextZ * sin,
			nextZ = this.nextZ * cos + this.nextX * sin,
			x = this.x * cos - this.z * sin,
			z = this.z * cos + this.x * sin;
			
		this.nextX = nextX;
		this.nextZ = nextZ;
		this.x = x;
		this.z = z;
	},
	rotateZ : function(angle){
		var sin = Math.sin(angle),
			cos = Math.cos(angle),
			nextX = this.nextX * cos - this.nextY * sin,
			nextY = this.nextY * cos + this.nextX * sin,
			x = this.x * cos - this.y * sin,
			y = this.y * cos + this.x * sin;
			
		this.nextX = nextX;
		this.nextY = nextY;
		this.x = x;
		this.y = y;
	},
	getAxis3D : function(){
		this.vx += (this.nextX - this.x) * this.SPRING;
		this.vy += (this.nextY - this.y) * this.SPRING;
		this.vz += (this.nextZ - this.z) * this.SPRING;
		
		this.vx *= this.FRICTION;
		this.vy *= this.FRICTION;
		this.vz *= this.FRICTION;
		
		this.x += this.vx;
		this.y += this.vy;
		this.z += this.vz;
		
		return {x : this.x, y : this.y, z : this.z};
	},
	getAxis2D : function(theta){
		var axis = this.getAxis3D(),
			scale = this.FOCUS_POSITION / (this.FOCUS_POSITION + axis.z);
			
		return {x : this.center.x + axis.x * scale, y : this.center.y - axis.y * scale, color : this.COLOR.replace('%hue', this.hue + theta)};
	}
};
$(function(){
	// RENDERER.init(STRATEGY);
	let chk = true;
    // $(window).on('scroll', function(){
	// 	if( $('.section2').hasClass('active')){
	// 		if(chk){
	// 			chk = false;
	// 			RENDERER.init(STRATEGY);
	// 		}
			
	// 	}else{
	// 		chk = true;
	// 		$('#jsi-particle-container').html('')
	// 	}
	// })
    // $('.section1 .box').on('click', function(){
        

    // })
});




const heart = '<svg viewBox="0 0 100.1 86.8"> <image href="../img/imza/icon_heart.png" height="75" width="75"/></svg>';
const logo = '<svg viewBox="0 0 100.1 100"> <image href="../img/imza/icon_heart.png" height="75" width="75"/></svg>';

const star = '<svg viewBox="0 0 100.1 99.2"> <image href="../img/imza/icon_heart.png" height="75" width="75"/> </svg>';
const cloud = '<svg viewBox="0 0 100.1 65.1"> <image href="../img/imza/icon_heart.png" height="75" width="75"/></svg>';


const data = [heart, logo, star, cloud];

const max = 50;




let particles = [];
let id0 ;

class Ball {
	constructor(shape) {
	  let $this = this;
	  this.shape = $(shape);
	  this.speed = 2 + Math.random() * 12;
	  this.vx = Math.random() * this.speed - Math.random() * this.speed;
	  this.vy = Math.random() * this.speed - Math.random() * this.speed;
	  this.radius = 10 + Math.round(Math.random() * 80);
	  this.w = $(window).width();
	  this.h = $(window).height();
	  this.x = (this.w - this.radius) / 2;
	  this.y = (this.h - this.radius) / 2;
	  //  console.log(this)
	  $(window).on("resize", this.resize.bind(this));
  
	  
	  this.render();
		  
	  
	}
  
  
	render() {
	  $(this.shape).css({
		width: this.radius,
		height: this.radius });
  
	  $(".sc7_particle").append(this.shape);
	}
  
	resize() {
	  this.w = $(window).width();
	  this.h = $(window).height();
	}
  
	move() {
	  this.x = this.x + this.vx;
	  this.y = this.y + this.vy;
  
	  this.shape.css({
		left: this.x,
		top: this.y,
		transform: "rotate(" + this.y + "deg)" });
  
  
	  if (this.x < 0 || this.x > this.w - this.radius) {
		this.vx = -this.vx;
		$(this.shape).toggleClass("highlight");
	  }
	  if (this.y < 0 || this.y > this.h - this.radius) {
		this.vy = -this.vy;
		$(this.shape).toggleClass("highlight");
	  }
  
	  return this;
	}}
  
  
	

	


$(window).on('scroll', function(){
    $('.ch img').removeClass('active_1 active_2 active_3 active_4 active_5 active_6');
	if ($(window).scrollTop() == $(document).height() - $(window).height()) {
		function randomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		  }
		
		  for (let i = 0; i < 20; i++) {
			particles.push(new Ball(data[randomInt(0, data.length - 1)]));
		}
		
		function update() {
			particles = particles.filter(function (p) {
				return p.move();
			});
			requestAnimationFrame(update.bind(this));
		}
  
		
		update();
		  
		 
let countF = false;


let count0 = 0;

function timeCounter() {
	clearInterval(id0);
	if(!countF){
		countF = true;
		id0 = setInterval(count0Fn, 1.738853);
	}
	function count0Fn() {
		count0++;
		if (count0 > 785) {
			countF = false;
			count0 = 0;
			clearInterval(id0);
		} else {
			$(".section7 .likeBox .bottom h3 span").eq(0).text(count0);
		}
	}
}

timeCounter();
}else{
	clearInterval(id0);
	$(".section7 .likeBox .bottom h3 span").eq(0).text('0');


	$(".sc7_particle").html("")
}
})
// $(window).scroll(function() { 
// 	if ($(window).scrollTop() == $(document).height() - $(window).height()) {
// 		console.log('1')
// 		// update();
// 	} 
// })