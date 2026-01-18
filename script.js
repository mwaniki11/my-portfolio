/* LOADER */
window.onload = () => {
  document.getElementById("loader").style.display="none";
};

/* FADE IN */
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
});
document.querySelectorAll(".fade").forEach(el=>obs.observe(el));

/* DARK / LIGHT */
const toggle = document.getElementById("themeToggle");
toggle.onclick = ()=>{
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

/* GAME */
let score=0;
const box=document.getElementById("gameBox");
const scoreText=document.getElementById("score");

box.onclick=()=>{
  score++;
  scoreText.textContent="Score: "+score;
  box.style.marginLeft=Math.random()*200+"px";
};

/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];
for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:Math.random()*1,
    dy:Math.random()*1
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="#4facfe";
    ctx.fill();
    p.x+=p.dx;
    p.y+=p.dy;
    if(p.x>canvas.width||p.y>canvas.height) {
      p.x=0; p.y=0;
    }
  });
  requestAnimationFrame(animate);
}
animate();
