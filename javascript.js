
///////畫布///////////////
let canvas = document.getElementById("myCanvas");
//接著指定繪圖方式
let ctx = canvas.getContext("2d");

//讓canvas的高度和寬度等於整個畫面，讓整個視窗都是你的畫布
canvas.height = window.innerHeight/2;
canvas.width = window.innerHeight/2;
fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//在繪製任何東西之前，我們都要來個開始，像全天下所有的故事一樣
ctx.beginPath();
//我們用moveTo(x,y)來指定線的起點座標
  


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
let red_points=0;
let blue_points=0;
let points=[];
let tp=[];

$("#red").on('click', function() {
    color=1;
});

$("#blue").on('click', function() {
    color=2;
});
$("#reset").on('click', function() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    red_points=0;
    blue_points=0;
    points=[];
    tp=[]
    console.log(`red:${red_points} blue:${blue_points}`);
    $("#num").html(`red:${red_points} blue:${blue_points}`)

});




///////////click//////////////
$("canvas").click(function(e){
    let xPos = e.pageX - $(this).offset().left;
    let yPos = e.pageY - $(this).offset().top;
    switch(color){
        case 1:
            ctx.fillStyle = "#ff0000";
            points.push([xPos,yPos,25]);
            tp.push(1);
            red_points+=1;
            console.log(`red:${red_points} blue:${blue_points}`);
            break;
        case 2:
            ctx.fillStyle = "#0000ff";
            points.push([xPos,yPos,25]);
            tp.push(-1);
            blue_points+=1;
            console.log(`red:${red_points} blue:${blue_points}`);
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
  



/////////////////
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$("#line").click(function(e){
    let p_num=points.length;
    let w=[9,-200,0];
    let correct=0;
    //a_line(w);

    while(correct<p_num*4){
        id=getRandomInt(p_num);


        side=0;
        for (let i=0;i<3;i++){
            side+=points[id][i]*w[i];
        }
        if (side*tp[id]>0){
            correct=correct+1;
            console.log(w,points[id],tp[id],correct);
            continue
        }

        correct=0;
        //upd
        for (let i=0;i<3;i++){
            w[i]+=points[id][i]*tp[id]/10;
        }
    }

    

    console.log(w);
    a_line(w);
    
     
})


function a_point(x,y){
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(x-2, y-2, 4,4);
}

function a_line(w){
    function x_to_y(x){
        return (-w[0]*x-w[2]*25)/w[1];
    }
    ctx.strokeStyle = "#00ff00";
    ctx.beginPath();   
    ctx.moveTo(0,x_to_y(0));
    ctx.lineTo(400,x_to_y(400));  
    ctx.stroke();
 
}
