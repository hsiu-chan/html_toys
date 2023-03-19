
///////畫布///////////////
let canvas = document.getElementById("myCanvas");
//接著指定繪圖方式
let ctx = canvas.getContext("2d");

//讓canvas的高度和寬度等於整個畫面，讓整個視窗都是你的畫布
canvas.height = window.innerHeight/2;
canvas.width = window.innerHeight/2;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//在繪製任何東西之前，我們都要來個開始，像全天下所有的故事一樣
ctx.beginPath();
//我們用moveTo(x,y)來指定線的起點座標
ctx.moveTo(50,50)
//之後使用lineTo(x,y)來指定與前一個座標相連的
/*ctx.fillStyle = "#000000"
ctx.lineTo(250,50)
ctx.lineTo(250,250)
ctx.lineTo(50,250)
ctx.closePath()
ctx.fill()*/

//用stroke()來繪製相連點的線
//ctx.stroke()




///////////btm css/////////////

var rb=$(".rb");
$(rb).on('click', function() {
    $(rb).removeClass('now');
    $(this).addClass('now');
});

///////////btm act/////////////

let color=1;
let red_points=[];
let blue_points=[];
$("#red").on('click', function() {
    color=1;
});

$("#blue").on('click', function() {
    color=2;
});
$("#reset").on('click', function() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    red_points=[];
    blue_points=[];
    console.log(`red:${red_points.length} blue:${blue_points.length}`);
    $("#num").html(`red:${red_points.length} blue:${blue_points.length}`)

});




///////////click//////////////
$("canvas").click(function(e){
    let xPos = e.pageX - $(this).offset().left;
    let yPos = e.pageY - $(this).offset().top;
    switch(color){
        case 1:
            ctx.fillStyle = "#ff0000";
            red_points.push([xPos,yPos]);
            console.log(`red:${red_points.length} blue:${blue_points.length}`);
            break;
        case 2:
            ctx.fillStyle = "#0000ff";
            blue_points.push([xPos,yPos]);
            console.log(`red:${red_points.length} blue:${blue_points.length}`);
            break;

    }
    ctx.fillRect(xPos-2, yPos-2, 4,4);

    $("#show").html(`x: ${xPos}, y: ${yPos}<br>`);
    $("#num").html(`red:${red_points.length} blue:${blue_points.length}`)
  })


//////////////////////////////////

$("#download").click(function(e){
    var points = {
        red:red_points,
        blue:blue_points
    }
    str = JSON.stringify(points, null, 2);
    console.log(str);
    const dataUrl = `data:,${str}`
    Download(dataUrl, 'test.json');
    

})

function Download (url, name) {
    const a = document.createElement('a')
    a.download = name
    a.rel = 'noopener'
    a.href = url
    // 触发模拟点击
    a.dispatchEvent(new MouseEvent('click'))
    // 或者 a.click()
}
  
