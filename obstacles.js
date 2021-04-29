function obstacles() {
  if (frameCount % 100 === 0) {
    door = createSprite(Math.round(random(1, 500)), -50, 20, 20);
    door.addImage(doorimage);
    climber = createSprite(200, 20, 20, 20);
    climber.addImage(climberimage);
    //to make sure the climber and door are created together
    climber.x = door.x

    door.velocityY = 4;
    climber.velocityY = 4;
    
    doorgroup.add(door);
    climbergroup.add(climber);
  }
}