var bird;
var pipes = [];

function setup() {
  canvas = createCanvas(440,500);
  canvas.position(200,50);
  canvas.class("lemon");
  bird = new Bird();
  pipes.push(new Pipe());

}

function draw(){
  background(220, 180, 200);
  bird.update();
  bird.show();

  if (frameCount % 120 == 0){
    pipes.push(new Pipe());
  }

  for(var i = pipes.length-1; i >=  0; i--){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){
      noLoop();
    }

    if(pipes[i].offscreen()) {
      pipes.splice(0, 1);
    }

  }
}


function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
