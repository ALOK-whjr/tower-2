class Block{
    constructor(x, y, width, height) {
        var options = {
            //isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
		this.visibilty = 255;
        this.width = width;
        this.height = height;
		this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
		if(this.body.speed < 3)  {
			var angle = this.body.angle;
			var pos= this.body.position;
			push();
			translate(pos.x, pos.y);
			rotate(angle);
			imageMode(CENTER);
			image(this.image,0,0,this.width, this.height);
			pop();
	    } else{
			var angle = this.body.angle;
			var pos= this.body.position;
			push();
			translate(pos.x, pos.y);
			rotate(angle);
			imageMode(CENTER);
			World.remove(world,this.body);
			this.visibilty = this.visibilty - 5;
			tint(255,this.visibilty);
			image(this.image,0,0,this.width, this.height);
			pop();
		}
	  }
}
