var ground, ground2, realg, cactus, cactus1,cactus2,cactus3,cactus4,cactus5,obstacle
var trex ,trex_running;
var rand,rand1, cloud, cloudimg;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground2=loadImage("ground2.png")
cloudimg=loadImage("cloud.png")
cactus=loadImage("obstacle1.png")
cactus1=loadImage("obstacle2.png")
cactus2=loadImage("obstacle3.png")
cactus3=loadImage("obstacle4.png")
cactus4=loadImage("obstacle5.png")
cactus5=loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(80,160,20,50)
  trex.scale = 0.5
  trex.addAnimation("running",trex_running)
  ground=createSprite(300,180,600,20)
  ground.addImage(ground2)
  realg=createSprite(300,190,600,10)
  realg.visible=false
}
 function clouds(){  
 if (frameCount%75==0){
  cloud=createSprite(600,50,10,40)
  cloud.lifetime = 305
  rand=Math.round(random(5,100))
  cloud.y=rand
  cloud.addImage(cloudimg)
  cloud.scale=0.5
  cloud.velocityX = -2
  cloud.depth=trex.depth
  trex.depth=trex.depth+1
 }
}
 function spawncactus(){
   if (frameCount%60==0){
    obstacle=createSprite(600,165,15,40)
    obstacle.lifetime = 305
    obstacle.scale=0.5
    obstacle.velocityX= -5
    rand1=Math.round(random(1,6))
    switch(rand1){
      case 1 : obstacle.addImage(cactus);
              break;
      case 2 : obstacle.addImage(cactus1);
              break;
      case 3: obstacle.addImage(cactus2);
              break;
      case 4: obstacle.addImage(cactus3);
              break; 
      case 5: obstacle.addImage(cactus4);
              break;   
      case 6: obstacle.addImage(cactus5);
              break;     
      default: break;
    }
   }
 }



 
function draw(){
  background("pink")
  if(keyDown("space")){
    if(trex.y>149){
      trex.velocityY = -9
    }
 }

  
trex.collide(realg)
trex.velocityY= trex.velocityY+0.5
ground.velocityX=-5

if (ground.x<0){
  ground.x=700
}
  clouds()
  spawncactus()
  drawSprites()


}
