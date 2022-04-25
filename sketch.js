var ground, ground2, realg, cactus, cactus1,cactus2,cactus3,cactus4,cactus5,obstacle, gameover, restart, gameoversprite, restartsprite
var trex ,trex_running, tend;
var rand,rand1, cloud, cloudimg, score=0, cloudGrp, obstacleGrp;
var PLAY=1, END=0, gameState=PLAY;

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
gameover=loadImage("gameOver.png")
restart=loadImage("restart.png")
tend=loadAnimation("trex_collided.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(80,160,20,50)
  trex.scale = 0.5
  trex.addAnimation("running",trex_running)
  trex.addAnimation("end", tend)
  ground=createSprite(300,180,600,20)
  ground.addImage(ground2)
  realg=createSprite(300,190,600,10)
  realg.visible=false
  cloudGrp=new Group()
  obstacleGrp=new Group()
  trex.debug=false
  gameoversprite=createSprite(300,95,50,50)
  gameoversprite.addImage(gameover)
  gameoversprite.scale=0.8
  restartsprite=createSprite(300,130,50,50)
  restartsprite.addImage(restart)
  restartsprite.scale=0.5
  gameoversprite.visible=false
  restartsprite.visible=false

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
  cloudGrp.add(cloud)
 }
}
 function spawncactus(){
   if (frameCount%60==0){
    obstacle=createSprite(600,165,15,40)
    obstacleGrp.add(obstacle)
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
  text("Score: "+score, 490,20)
  if(gameState===PLAY){

    score=score+Math.round(frameCount/60)
    if(keyDown("space")){
      if(trex.y>149){
        trex.velocityY = -9
      }
   }
    trex.velocityY= trex.velocityY+0.5
    ground.velocityX=-5
    if (ground.x<0){
      ground.x=700
    }
    clouds()
    spawncactus()

    if(trex.isTouching(obstacleGrp)){
      gameState=END
    }    
  }

  else if(gameState===END){
  
    gameoversprite.visible=true
    restartsprite.visible=true
    trex.changeAnimation("end",tend)
    obstacleGrp.setVelocityXEach(0)
    cloudGrp.setVelocityXEach(0)
    ground.velocityX=0
    trex.velocityY=0
    obstacleGrp.setLifetimeEach(2)
    cloudGrp.setLifetimeEach(2)
  }


  
trex.collide(realg)

  drawSprites()


}

