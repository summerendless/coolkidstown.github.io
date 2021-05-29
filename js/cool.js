
//이미지(png)로 다운로드
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

$( '.bg-wrap .word' ).draggable();
