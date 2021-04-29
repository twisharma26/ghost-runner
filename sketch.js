var ghostjumping, ghoststanding, ghost, doorimage, door, climberimage, climber, towerimage, tower, doorgroup, climbergroup, gamestate

function preload() {
  ghostjumping = loadImage("ghost-jumping.png");
  ghoststanding = loadImage("ghost-standing.png");
  doorimage = loadImage("door.png");
  climberimage = loadImage("climber.png");
  towerimage = loadImage("tower.png");
}

function setup() {
  createCanvas(500, 500);
  
  tower = createSprite(250, 250, 600, 600);
  tower.addImage(towerimage);
  tower.velocityY = 2;
  
  ghost = createSprite(250, 250, 20, 20);
  ghost.addImage(ghoststanding);
  ghost.scale = 0.4;
  
  doorgroup = new Group();
  climbergroup = new Group();
  
  gamestate = "play";
}

function draw() {
  background(0);
  
  if (gamestate === "play") {
    
    //to create an infinite background
    if (tower.y > 500) {
      tower.y = 250;
    }
    
    //to make the ghost move upwards when space is pressed
    if (keyDown("space")) {
      ghost.velocityY = -8;
    }

    //to make the ghost come back down (gravity)
    ghost.velocityY = ghost.velocityY + 1

    //to navigate/move the ghost
    if (keyDown("right")) {
      ghost.x = ghost.x + 5;
    }
    if (keyDown("left")) {
      ghost.x = ghost.x - 5;
    }

    obstacles();
    
    if (ghost.y > 500 || doorgroup.isTouching(ghost) || climbergroup.isTouching(ghost)) {
      gamestate = "end";
      ghost.destroy();
    }
    
    drawSprites();
  }
  
  else if (gamestate === "end") {
    //tower.velocityY = 0;
    fill("white")
    textSize(25);
    text ("GAME OVER", 180, 250);
  }
  
}