var fimgfum = 1;
var img2 = new Image()
const fcanvas = document.getElementById('face');
const ctx2 = fcanvas.getContext('2d');
ctx2.textAlign ="center"
playSequence2();

img2.src = "../img/poemu/loading_face1.png";

function playSequence2() {
    var timer2 = setInterval(function() {                
        if (fimgfum > 4) {
            fimgfum = 1;
        }
        
        player2(fimgfum);
        fimgfum++;
    }, 200);
}

function player2(fum) {
    //console.log("image num: " + fum);
    img2.src = "../img/poemu/loading_face" + fum + ".png";    
}

img2.addEventListener('load', function(e) {
    if (fcanvas.width !== innerWidth || fcanvas.height !== innerHeight) {
        fcanvas.width = innerWidth;    // resize fcanvas
        fcanvas.height = innerHeight;  // also clears the fcanvas
    } else {
        ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    }
    ctx2.drawImage(img2, 0, 0, innerWidth, innerHeight);
});