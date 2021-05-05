const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var rain =[];

function preload(){
    
}

function setup(){
    createCanvas(800,500)

engine=Engine.create();
world=engine.world;

if (frameCount%150===0){
for(i=0;i<=100;i++){
   rain.push(new Drop(random(0,780),random(0,100)))}
   }

umbrella=new Umbrella(400,400);

}


function draw(){
    background("black")
    Engine.update(engine);
   for(i=0;i<=100;i++){
       rain[i].display();
       rain[i].updateY();
   } 
   umbrella.display();
}   

