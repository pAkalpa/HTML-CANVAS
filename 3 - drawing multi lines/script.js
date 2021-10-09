
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // draw a line steps
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(80, 80);
    ctx.lineTo(130, 30);
    ctx.lineTo(180, 80);
    ctx.lineTo(230, 30);
    ctx.stroke();
}