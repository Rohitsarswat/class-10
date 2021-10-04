var ghost, ghostmoving 
function preload() {
    ghostmoving = loadAnimation("ghost1.png", "ghost2.png", "ghost3.png")
}

function setup(){
    createCanvas(512,512)
    ghost = createSprite(200,200,10,10)
    ghost.addAnimation("move", ghostmoving)
}

function draw(){
    background(0)
    drawSprites()
  
}