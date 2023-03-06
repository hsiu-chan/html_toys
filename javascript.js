
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

var btms=$(".btm");
$(btms).on('click', function() {
    $(btms).removeClass('now');
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

    $("#show").text(`x: ${xPos}, y: ${yPos}, red:${red_points.length} blue:${blue_points.length}`);
  })


const loadSVM = require('./  libsvm-master/src/loadSVM');
const libsvm = require('./  libsvm-master/out/asm/libsvm');

module.exports = loadSVM(libsvm);
async function xor() {
    const SVM = await
    require('./  libsvm-master/out/asm/libsvm');
    const svm = new SVM({
        kernel: SVM.KERNEL_TYPES.RBF, // The type of kernel I want to use
        type: SVM.SVM_TYPES.C_SVC,    // The type of SVM I want to run
        gamma: 1,                     // RBF kernel gamma parameter
        cost: 1                       // C_SVC cost parameter
    });

    // This is the xor problem
    //
    //  1  0
    //  0  1
    const features = [[0, 0], [1, 1], [1, 0], [0, 1]];
    const labels = [0, 0, 1, 1];
    svm.train(features, labels);  // train the model
    const predictedLabel = svm.predictOne([0.7, 0.8]);
    console.log(predictedLabel) // 0
}

xor().then(() => console.log('done!'));
