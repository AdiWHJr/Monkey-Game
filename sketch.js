var monkey, monkey_running
var ground
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4
  ground.x = ground.width / 2

  foodGroup = new Group()
  obstacleGroup = new Group()
}

function draw() {
  createCanvas(400, 400)
  background('white')
  if (keyDown("space") && monkey.y >=300) {
    monkey.velocityY = -15;
  }
   monkey.velocityY = monkey.velocityY + 0.6
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  food()
  obstacles()
  monkey.collide(ground)
  
  stroke('black')
  textSize(20)
  fill('black')
  survivalTime = Math.ceil(frameCount/60)
  text("Survival Time:"+ survivalTime,120,50)
  drawSprites()
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 200, 40, 10)
    banana.y = Math.round(random(120, 200))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -5
    banana.lifetime = 80

    foodGroup.add(banana)
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 320, 10, 40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -4
    obstacle.lifetime = 100
    obstacle.scale = 0.15

    obstacleGroup.add(obstacle)
  }
}