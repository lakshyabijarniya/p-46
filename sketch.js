var ballon, ballonImg;
var food, foodImg;
var obstacle, obstacleImg;
var score = 0;
var life = 3;
var obGroup;
var foodGroup;

function preload() {
    ballonImg = loadImage("ballon.png");
    foodImg = loadImage("food.png");
    obstacleImg = loadImage("obstacle.png");
}

function setup() {
    createCanvas(800, 800);
    ballon = createSprite(400, 400);
    ballon.addImage("balllon", ballonImg);
    obGroup=new Group();
    foodGroup = new Group();
}

function draw() {
    background(0, 0, 255);
    ballon.scale = 0.3;
    if (keyDown("LEFT_ARROW")) {
        ballon.x = ballon.x-2;
    }

    if (keyDown("RIGHT_ARROW")) {
        ballon.x = ballon.x+2;
    }

    drawSprites();
    strokeWeight(4);
    stroke("blue");
    fill("green");
    textSize(20)
    text("Score : " + score, 700, 20);
    text("Life : " + life, 700, 40);
    spawnFood();
    spawnOb();
}


    //spawning obstacles
    function spawnOb(){
    if (frameCount % 60 === 0) {
        var rand = Math.round(random(0, 800));
        obstacle = createSprite(rand, -50);
        obstacle.addImage("ob", obstacleImg);
        obstacle.velocityY = 2;
        obGroup.add(obstacle);
        obstacle.debug=true;
        obstacle.setCollider("rectangle",0,-18,200,40)
}
       if (obGroup.isTouching(ballon)) {
    life--;
    obGroup.destroyEach();
}}

    //spawning food
    function spawnFood(){

    
    if (frameCount % 30 === 0) {
        var randd = Math.round(random(0, 800));
        food = createSprite(randd, -50);
        food.addImage("food", foodImg);
        food.scale = 0.1;
        food.velocityY = 3;
        foodGroup.add(food);
        food.debug=true;
    }        if (foodGroup.isTouching(ballon)) {
        score++;
        foodGroup.destroyEach();
    }
}

