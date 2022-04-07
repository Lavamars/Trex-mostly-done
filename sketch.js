var ground, ground2, realg
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground2=loadImage("ground2.png")
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

function draw(){
  background("lightblue")
 
  if(keyDown("space")){
    if(trex.y>149){
      trex.velocityY = -9
    }
 }
console.log(trex.y)
  
  trex.collide(realg)
 
trex.velocityY= trex.velocityY+0.5
ground.velocityX=-5

if (ground.x<0){
  ground.x=700
}

  drawSprites()
  

}
