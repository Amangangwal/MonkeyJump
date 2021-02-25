
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

  ground=createSprite(300,550,60000,20);
  
  
  monkey=createSprite(180,480,20,20);
  monkey.addAnimation("sprite_0.png",monkey_running)
  monkey.scale=0.2
 
     obstacleGroup=createGroup();
  
}


function draw() {
background("white");
  

  ground.velocityX=-4;
 
  if(World.frameCount%230===0){
    
  obstacle=createSprite(600,500,20,20);
  obstacle.addAnimation("obstacle.png",obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-10;
  obstacleGroup.add(obstacle);
  }
  
  if(keyDown("space")){
  
    monkey.velocityY=-35;
    
  }
  monkey.velocityY=monkey.velocityY+3;
  monkey.collide(ground);
  
  if(World.frameCount%80===0){
    banana=createSprite(660,250,20,20);
    banana.addAnimation("banana.png",bananaImage);
    banana.scale=0.2;
    banana.y=Math.round(random(200,350));
    banana.velocityX=-10;
    banana.lifetime=300;
  }
  textSize(20);
  stroke("black");
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivaltime,50,50);
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityY=0;
    obstacle.velocityX=0;
    banana.velocityX=0;
  }
  
  
  drawSprites();
}






