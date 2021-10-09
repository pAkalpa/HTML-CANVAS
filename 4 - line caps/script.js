
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // line caps -> ctx.lineCap = "";
    //  - butt
    //  - round
    //  - square

    ctx.beginPath();
    ctx.lineCap = "butt";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.moveTo(100 , 100);
    ctx.lineTo(300, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.moveTo(100 , 125);
    ctx.lineTo(300, 125);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap = "square"
    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.moveTo(100 , 150);
    ctx.lineTo(300, 150);
    ctx.stroke();
}