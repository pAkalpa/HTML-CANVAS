
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Shadow Attributes
    // - shadowColor
    // - shadowOffsetX
    // - shadowOffsetY
    // - shadowBlur

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 20;
    ctx.shadowColor = "blue";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 5;
    ctx.moveTo(100, 60);
    ctx.lineTo(200, 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 20;
    ctx.shadowColor = "green";
    ctx.shadowOffsetX = -10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.moveTo(350, 60);
    ctx.lineTo(450, 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 20;
    ctx.shadowColor = "yellow";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = -10;
    ctx.shadowBlur = 10;
    ctx.moveTo(100, 200);
    ctx.lineTo(200, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 20;
    ctx.shadowColor = "brown";
    ctx.shadowOffsetX = -10;
    ctx.shadowOffsetY = -10;
    ctx.shadowBlur = 10;
    ctx.moveTo(350, 200);
    ctx.lineTo(450, 200);
    ctx.stroke();
}
