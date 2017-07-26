function Pipe(){
  this.top = random(height-150);//Limit it from being too close to bottom
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 3;

  this.hits = function(bird) {
    if(this.top < 100){
      if (bird.y < this.top+100 || bird.y > this.top+250 ){
        if(bird.x > this.x && bird.x < (this.x+this.w)){
          print("first");
          return true;

        }
      }
    }
    else{
      if (bird.y < this.top || bird.y > this.top+150){
        if(bird.x > this.x && bird.x < (this.x+this.w)){
          print("second");
          return true;

        }


      }



    }
  }

  this.show = function(){
    fill(255);
    //if top was too close to top, have this.top + 100
    if(this.top < 100){
      rect(this.x, 0, this.w, this.top+100);
      rect(this.x, this.top+250, this.w, height-this.top-250);
    }else{
      rect(this.x, 0, this.w, this.top);
      rect(this.x, this.top+150, this.w, height-this.top-150);
    }

  }

  this.update = function(){
    this.x -= this.speed;

  }

  this.offscreen = function() {
    if( this.x < -this.w){
      return true;
    }else{return false;}

  }

}
