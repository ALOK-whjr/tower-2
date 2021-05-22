class Rope
{
	constructor(bodyA,pointB)
	{
		var options={
			bodyA:bodyA,
			pointB:pointB,
			length : 30,
			stiffness : 0.01
		}
		this.launcher = Matter.Constraint.create(options)
		World.add(world, this.launcher);

	}
	display(){
		if(this.launcher.bodyA){
		line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y);
		}
	}
	fly(){
		this.launcher.bodyA = null;
	}
	
	attach(polyObj){
		
		this.launcher.bodyA = polyObj;
	}
}