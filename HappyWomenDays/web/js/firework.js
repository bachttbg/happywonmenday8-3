/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(){

    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;

    for(let i=0;i<60;i++){
        particles.push({
            x:x,
            y:y,
            dx:(Math.random()-0.5)*8,
            dy:(Math.random()-0.5)*8,
            life:100
        });
    }
}

function update(){

    ctx.fillStyle="rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let i=0;i<particles.length;i++){

        let p=particles[i];

        p.x+=p.dx;
        p.y+=p.dy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,2,0,Math.PI*2);
        ctx.fillStyle="hsl("+Math.random()*360+",100%,60%)";
        ctx.fill();

        if(p.life<=0){
            particles.splice(i,1);
            i--;
        }
    }

    requestAnimationFrame(update);
}

setInterval(createFirework,900);

update();