function preload(){
  nemo_img=loadImage("nemo.png");
  bottle_img=loadImage("waterbottle.jpeg");
  dory_img=loadImage("dory.PNG");
  shark_img=loadImage("shark.png");
  background_img=loadImage("background.jpg");
  turtle_img=loadImage("turtle.PNG");
}

function setup() {
  createCanvas(1200,800);

  //creating nemo
  nemo=createSprite(600,550,30,40);
  nemo.addImage(nemo_img);
  nemo.scale=0.04

  //creating dory
  //dory=createSprite(400,300,30,40);
  //dory.addImage(dory_img);
  //dory.scale=0.03

  //creating turtle
  //turtle=createSprite(800,450,20,40);
  //turtle.addImage(turtle_img);
  //turtle.scale=0.05
}

function draw() {
  background(background_img);  


  drawSprites();
}

function dory(){
  if(World.frameCount %200 === 0){
    var dory = createSprite(400,300,30,40);
    dory.addImage(dory_img);
    dory.y = Math.round(random(500,200));
    dory.velocityX = 5;
    dory.setLifetime = 150;
  }
  }

  function turtle(){
    if(World.frameCount %200 === 0){
      var turtle = createSprite(400,200,20,20);
      turtle.addImage(turtle_img);
      turtle.y = Math.round(random(100,300));
      turtle.velocityX = 3
      turtle.setLifetime = 50;
      
    }
    }

    function shark(){
      if(World.frameCount %200 === 0){
        var shark = createSprite(400,200,20,20);
        shark.addImage(shark_img);
        shark.y = Math.round(random(200,400));
        shark.velocityX = 4;
        shark.setLifetime = 200;
      }
      }

      function bottle(){
        if(World.frameCount %200 === 0){
          var bottle = createSprite(400,200,20,20);
          bottle.addImage(bottle_img);
          bottle.y = 3
          bottle.velocityX = 6;
          bottle.setLifetime = 50;
        }
        }