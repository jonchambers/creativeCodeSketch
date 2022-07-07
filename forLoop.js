
let furby
let baby

function preload(){
  furby = loadImage('furby.png')
  baby = loadImage('dancingbaby2.gif')
}

function setup(){
  createCanvas(windowWidth, windowHeight)

  background(30, 160, 200)

 //Draw a grid with for loops
  for(let i=0; i < windowWidth; i = i + 20 ){
    line(i, 0, i, height)
    print(i)
  }

  for(let i = 0; i< windowHeight; i= i+20){
    line(0, i, windowWidth, i)
  }

  for(let i = 0; i < 10000; i++){
    //  ellipse(random(windowWidth), random(windowHeight), 20, 20)
    image(baby,random(-5,windowWidth), random(-5, windowHeight), 40, 40)
  }

  ellipse(200, 200, 100, 100)
}

function draw(){

}
