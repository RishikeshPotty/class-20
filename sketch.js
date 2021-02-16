var fr,mr;


function setup() {
  createCanvas(800,400);
 fr =  createSprite(200, 200, 30, 80);
 fr.shapeColor = "green";
 mr =  createSprite(300, 200, 80, 30);
 mr.shapeColor = "green";
}

function draw() {
  background(0);  

mr.x = mouseX;
mr.y = mouseY;

if (mr.x - fr.x < fr.width/2 + mr.width/2 && 
    fr.x - mr.x < fr.width/2 + mr.width/2 &&
    mr.y - fr.y < fr.height/2+ mr.height/2 &&
    fr.y - mr.y < fr.height/2+ mr.height/2){
mr.shapeColor = "red";
fr.shapeColor = "red";
}
else{
  mr.shapeColor = "green";
fr.shapeColor = "green";
}

  drawSprites();
}