//Draw the bird and Pipes for every 120 frames.
//Check if bird hits pipe when it passes through x threshold


var bird;
var pipes = [];

function setup() {
  canvas = createCanvas(440,500);
  canvas.position(200,50);
  canvas.class("lemon");
  bird = new Bird();
  pipes.push(new Pipe());
  check = false;

}

function draw(){
  background(220, 180, 200);
  bird.update();
  bird.show();

  if(frameCount % 120 == 0){
    if(check != true){pipes.push(new Pipe());}

  }







  for(var i = pipes.length-1; i >=  0; i--){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){
      check = true;

      noLoop();



    }

    if(pipes[i].offscreen()) {
      pipes.splice(0, 1);
    }

  }//end for

}//end draw

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
