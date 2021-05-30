var bg,bg2,form,system,code,security,gamestate,bgw,bgl
var score=0;

function preload() {
 bgw=loadImage("wi.gif")
 bgl=loadImage("li.png") 
  bg= loadImage("aladdin_cave.jpg")
 
  
}

function setup() {
  createCanvas(1000,600);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  if(gamestate==4){
    clear()
    
    image(bgl,0,0,1000,600)
   
    fill("#e0af3e")
    stroke("black")
    strokeWeight(5)
    textSize(40);
    text("'YOU LOST'",350, 200);
    text("'TREASURE REMAINS LOCKED'",160, 300);
  }

  if(score === 3) {
    clear()
    image(bgw,0,0,1000,600)
    fill("#e0af3e")
    stroke("black")
    strokeWeight(5)
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}