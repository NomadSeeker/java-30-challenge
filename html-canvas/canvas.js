const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let coord = {x: 0, y: 0};
let hue = 0;

function draw(e) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.moveTo(coord.x, coord.y);
    reposition(e);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();

    hue++;
    if(hue >= 360) {
        hue = 0; 
    }
}

function start(e) {
    document.addEventListener('mousemove', draw)
    reposition(e);
};

function stop(e) {
   document.removeEventListener('mousemove', draw);
}

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function reposition(e) {
    coord.x = e.clientX - canvas.offsetLeft;
    coord.y = e.clientY - canvas.offsetTop;
}

document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
window.addEventListener('resize', resize);
