var road,roadImg
var car,carImg
var person1,person1Img,person2,person2Img,person3,person3Img,person4,person4Img
var alien1,alien1Img,alien2,alien2Img,alien3,alien3Img,alien4,alien4Img
var personGroup,alienGroup
var gameover,gameoverImg
var restart,restartImg
var survivors = 0

var PLAY = 1
var END = 0


function preload(){
  roadImg = loadImage("Road.png");
  carImg = loadImage("car.png");
  person1Img = loadImage("person1.png");
  person2Img = loadImage("person2.png");
  person3Img = loadImage("person3.png");
  person4Img = loadImage("person4.png");
  alien1Img =loadAnimation("alien1.png");
  alien2Img =loadAnimation("alien2.png");
  alien3Img =loadAnimation("alien3.png");
  alien4Img =loadAnimation("alien4.png");
  gameoverImg =loadAnimation("gameover.png");
  restartImg =loadAnimation("restart.png");
}

function setup(){
  createCanvas(800,800)


  road = createSprite(200,200);
  road.addImage(roadImg) 
  road.velocityY = 4;
  road.scale=1.2;

  alien1 = createSprite(50,640,30,30);
  alien1.addImage(alien1Img) 
  alien1.velocityY = 4; 

  alien2 = createSprite(50,600,30,30);
  alien2.addImage(alien2Img) 
  alien2.velocityY = 4;
  
  alien3 = createSprite(50,550,30,30);
  alien3.addImage(alien3Img) 
  alien3.velocityY = 4;

  alien4 = createSprite(50,500,30,30);
  alien4.addImage(alien4Img) 
  alien4.velocityY = 4;

  person1 = createSprite(90,500,30,30);
  person1.addImage(person1Img) 
  person1.velocityY = 4;

  person2 = createSprite(90,550,30,30);
  person2.addImage(person2Img) 
  person2.velocityY = 4;

  person3 = createSprite(90,580,30,30);
  person3.addImage(person3Img) 
  person3.velocityY = 4;

  person4 = createSprite(110,500,30,30);
  person4.addImage(person4Img) 
  person4.velocityY = 4;
  
  car = createSprite(70,580,40,60)
  car.addImage(carImg) 

 personGroup = newGroup()
 alienGroup = newGroup()

}


function draw() {
drawSprites()
}

function spawnSurvivors(){
if(frameCount % 60===0){
var survivors = createSprite(180,100,20,20)
survivors.velocityY=-5 
var r = Math.round(random(1,4))
switch(r){
  case 1 : person1.addImage(person1Img) 
  break
  case 2 : person2.addImage(person2Img) 
  break
  case 3 : person3.addImage(person3Img) 
  break
  case 4 : person4.addImage(person4Img) 
  default:break
}
survivors.lifetme = 125
personGroup.add(survivors)
}
}

function spawnAliens(){
   if(frameCount % 60===0){
   var aliens = createSprite(180,100,20,20)
   aliens.velocityY=-5 
   var w = Math.round(random(1,4))
   switch(w){
    case 1 : alien1.addImage(alien1Img) 
     break
    case 2 : alien2.addImage(alien2Img) 
   break
    case 3 : alien3.addImage(alien3Img) 
    break
   case 4 : alien4.addImage(alien4Img) 
    default:break
    }
    aliens.lifetme = 125
    alienGroup.add(aliens)
    }
}