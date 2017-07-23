var bird;
var pipes = [];

function setup() {
  createCanvas(440,600);
  bird = new Bird();
  pipes.push(new Pipe());

}

function draw(){
  background(0);
  bird.update();
  bird.show();

  if (frameCount % 120 == 0){
    pipes.push(new Pipe());
  }

  for(var i = pipes.length-1; i >=  0; i--){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){
      pipes.splice(pipes.length-1,0);
      i=0;

      console.log(pipes.length);
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
