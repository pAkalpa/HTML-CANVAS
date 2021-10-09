
window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Draw line steps
    ctx.beginPath(); // reset the context state
    ctx.strokeStyle = "red"; // color of the line
    ctx.lineWidth = 10; // width of the line
    ctx.moveTo(30, 70); // move to the starting point
    ctx.lineTo(130, 70); // move to the ending point
    ctx.stroke(); // draw the line


}