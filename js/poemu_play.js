var imgNum = 1;
var img = new Image()
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
ctx.textAlign ="center"

var interval = setInterval(function() {    
    imgNum = 1;    
    clearInterval(timer);
    playSequence()
}, 3000);    

function player(num) {
    img.src = "../img/poemu/icon" + num + ".png";
}

img.addEventListener('load', function(e) {
    /*
    console.log(innerWidth);
    console.log(innerHeight);
    */
    
    if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
        canvas.width = innerWidth;    // resize canvas
        canvas.height = innerHeight;  // also clears the canvas
    } else {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    ctx.drawImage(img, 0, 0, innerWidth, innerHeight);
});

img.src = "../img/poemu/icon1.png";
var timer;
function playSequence() {
    
    timer = setInterval(function() {   
        player(imgNum); 
        if (imgNum <= 4) {
            imgNum++;
        }
    }, 100);
}

