
var monkey , monkey_running
var b ,bananaImage, ob, obstacleImage
var FoodGroup, obstacleGroup
var score
var path
var gamameState="play"
var play
var end
var mg


function preload(){
  
  
               monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup = new Group();
obstacleGroup = new Group();
mg= new Group();




}
  


function setup() {
  createCanvas(400,400)
 monkey=createSprite(100,200,20,20);
 monkey.addAnimation("running",monkey_running)
 monkey.scale=0.12;
  
score=0

 



}


function draw() {

  background("white")
if( gamameState==="play"){

 if(keyDown("space")&& monkey.y >= 250) {
  monkey.velocityY = -14;
}
  path=createSprite(200,300,400,10);
  monkey.velocityY = monkey.velocityY + 0.8
  monkey. collide(path)
  mg.add(monkey)
if (frameCount % 80 === 0){
  ob =createSprite(400,280,20,40)
  ob .velocityX=-8;
  ob. addImage(obstaceImage)
  ob.scale=0.11
  ob.lifetime = 80;   
  obstacleGroup.add(ob)
}
 
  
if (frameCount % 120 === 0){
  ba  =createSprite(400,170,20,40)
  ba .velocityX=-8;
  ba.addImage(bananaImage)
  ba.scale=0.13
  ba.lifetime = 80; 
  FoodGroup.add(ba)
}
if (mg.isTouching(obstacleGroup)){
  gamameState="end"
}
  text("Score: "+ score, 200,40); 
  score = score + Math.round(getFrameRate()/60);
  

  
if(gamameState=="end"){
  monkey.velocityY = 0;
  ob.lifetime = -1;   
  ob .velocityX=0;
}
}

  
drawSprites();
}






