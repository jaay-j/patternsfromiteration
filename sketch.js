var circlex = 100;
var circley = 100; // for 10th line

var circlexdirection = 1;
var circleydirection = 1;

function setup(){
    createCanvas(720, 480);
}

function draw(){
    background(100);

    fill(255, 204, 0);
    circle(30,30,100);
    
    strokeWeight(3);
    stroke(300, 2, 100);
    rect(circlex,circley,100,30,20);


 //   if(circlex < 0){
 //       // put it back on the screen
 //       circlex = 100;
 //   }
 //   if(circley < 0){
 //       // put it back on the screen
 //       circley = 100;
 //   }

    circlex = circlex + circlexdirection;
    if(circlex < 0){
        // change direction
        circlexdirection = 1;
    }
    if(circlex > 620){
        //
        circlexdirection = -1;
    }

    circley += circleydirection;
    if(circley < 0){
       circleydirection = 1;
    }

    circley += circleydirection;
    // if(circley > 450){
        if (circley < 0 || circley > 450){ // if less than zero OR greater than 450
        // circleydirection = -1;
        circleydirection *= -1;
    }


}