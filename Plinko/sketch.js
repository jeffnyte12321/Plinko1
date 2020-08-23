const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var divisons = [];
var plinkos = [];
var particles = [];


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for(var k =0;k<=width;k=k+80){
    divisons.push(new Divison(k,height-150,10,300));
  }
  for(var j =75;j<=width;j=j+50){
 plinkos.push( new Plinko(j,75,10));
  }
  for(var g =50;g<=width-10;g=g+50){
    plinkos.push( new Plinko(g,175,10));
     }
     for(var y =75;y<=width;y=y+50){
      plinkos.push( new Plinko(y,275,10));
       }
       for(var s =50;s<=width-10;s=s+50){
        plinkos.push( new Plinko(s,375,10));
         }
}

function draw() {
  background(0);
  Engine.update(engine);  
ground.display();
for(var k=0;k<divisons.length;k++){
  divisons[k].display();
}
for(var i  = 0;i<plinkos.length;i++){
plinkos[i].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
for(var p = 0;p<particles.length;p++){
  particles[p].display();
}
}