var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstacle, obstacle1_img, obstacle2_img, obstacle3_img, obstacle4_img, obstacle5_img, obstacle6_img;
var rand


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1_img = loadImage("obstacle1.png");
  obstacle2_img = loadImage("obstacle2.png");
  obstacle3_img = loadImage("obstacle3.png");
  obstacle4_img = loadImage("obstacle4.png");
  obstacle5_img = loadImage("obstacle5.png");
  obstacle6_img = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  spawnObstacles();
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}


function spawnObstacles() {
     
    if(frameCount%60 === 0){
     rand = Math.round(random(1,6));
      obstacle = createSprite(600,160,20,20);
      obstacle.velocityX = -5;
      obstacle.scale = 0.5;
      obstacle.lifetime = 134;
     switch(rand) {
       case 1 : obstacle.addImage(obstacle1_img);
       break;
       case 2 : obstacle.addImage(obstacle2_img);
       break;
       case 3 : obstacle.addImage(obstacle3_img);
       break;
       case 4 : obstacle.addImage(obstacle4_img);
       break;
       case 5 : obstacle.addImage(obstacle5_img);
       break;
       case 6 : obstacle.addImage(obstacle6_img);
       default : break ;
     }
    }


}

