class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 5
        }
        this.pointB=pointB;
    this.rope=Constraint.create(options);
    World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA=null;
    }

display(){
    if (this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB; 
        strokeWeight(2);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
/*
attach(bodyM){
    var bodyM, ropeM;
    ropeM = new Rope(bodyM.body,{x: 97, y:590});
}*/

}