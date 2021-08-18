//memoria
var trex ,trex_running, edges;



function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}



function setup(){
  createCanvas(600,200)
  
  //Crea el sprite del Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  edges = createEdgeSprites();
  
  
}



function draw(){
  background("yellow");
  
  console.log(trex.y);
  
  if(keyDown ("space")){
    trex.velocityY = -10;
  }
  
  //crear gravedad
  trex.velocityY = trex.velocityY + 0.8;
  
  
  trex.collide(edges[3]); 
  
  
  
  drawSprites();

}