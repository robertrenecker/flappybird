function Bird() {
  this.y = height/2;
  this.x = width/2;

  this.gravity = .4;
  this.lift = -12;
  this.velocity = 0;

  this.show = function (){
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }

  this.up = function() {
    this.velocity += -this.velocity-7;
    }



  this.update = function(){


    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height){
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0){
      this.y = height;
      this.velocity = 0;
    }
  }


}
