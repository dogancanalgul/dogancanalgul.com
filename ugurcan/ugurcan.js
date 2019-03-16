var y = -100;
function CircleCreator(xCor, yCor){
    this.x = xCor;
    this.y = yCor;
    this.draw = function(){
        fill(255, 255, 255);
        noStroke();
        circle(this.x, this.y, 40);
    }
}
var Circles = [];
var pressing = false;
function setup(){
    createCanvas(800, 800);
    frameRate(500);
}
function draw(){

    background(255, 0, 0);
    for(i in Circles)
    Circles[i].draw();
    if(pressing)
        Circles[Circles.length] = new CircleCreator(mouseX, mouseY);

    //solgoz();
   //saggoz();
    //agiz();
    
    if(y < 200)
        y = y + 1;
    



}
function mousePressed(){
    pressing = true;
}
function mouseReleased(){
    pressing = false;
}