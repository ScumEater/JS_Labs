let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;


ctx.beginPath();
ctx.strokeStyle = '#0A0B12';
ctx.lineWidth = 5;
ctx.moveTo(canvas.width / 2, canvas.height / 2);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.height / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.lineTo(Math.round(Math.random()) * (canvas.width / 2) + 150, Math.round(Math.random()) * (canvas.width / 2) + 150);
ctx.closePath();



ctx.fillStyle = "#" + Math.round(Math.random() * 16777215).toString(16);
ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.fill();
ctx.stroke()

console.log(canvas.width,canvas.height);
