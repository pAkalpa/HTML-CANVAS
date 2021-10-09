
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Line Joins -> ctx.lineJoin = ""
    // - miter
    // - round
    // - bevel

    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.lineJoin = "miter";
    ctx.moveTo(30, 30);
    ctx.lineTo(130, 30);
    ctx.lineTo(130, 130);
    ctx.lineTo(30, 130);
    ctx.lineTo(30, 230);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.strokeStyle = "red";
    ctx.lineJoin = "bevel";
    ctx.moveTo(60, 60);
    ctx.lineTo(160, 60);
    ctx.lineTo(160, 160);
    ctx.lineTo(60, 160);
    ctx.lineTo(60, 260);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.strokeStyle = "blue";
    ctx.lineJoin = "round";
    ctx.moveTo(90, 90);
    ctx.lineTo(190, 90);
    ctx.lineTo(190, 190);
    ctx.lineTo(90, 190);
    ctx.lineTo(90, 290);
    ctx.stroke();
}