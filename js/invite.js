$(document).ready(function () {
    $( '.bg-wrap .word' ).draggable();
    //initialize the quiz options
    var answersLeft = [];
    $(".bg-wrap")
      .find(".word")
      .each(function (i) {
        var $this = $(this);
        var answerValue = $this.data("target");
        var $target = $('.answers .target[data-accept="' + answerValue + '"]');
        var labelText = $this.html();
        $this.draggable({
          revert: "invalid",
          containment: ".bg-wrap"
        });

        if ($target.length > 0) {
          $target.droppable({
            accept: '.word[data-target="' + answerValue + '"]',
            drop: function (event, ui) {
              $this.draggable("destroy");
              $target.droppable("destroy");
              $this.html("&nbsp;");
              $target.html(labelText);
              answersLeft.splice(answersLeft.indexOf(answerValue), 1);
            }
          });
          answersLeft.push(answerValue);
        } else {
        }
      });
    $('.bg-wrap + button[type="submit"]').click(function () {
      location.href = "index2.html";
    });
  });

function downImg(){
    html2canvas($(".bg-wrap")[0]).then(function(canvas){
        var myImage = canvas.toDataURL();
        downloadURI(myImage, "저장할 파일명.png") 
    });
}

function downloadURI(uri, name){
    var link = document.createElement("a")
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
}