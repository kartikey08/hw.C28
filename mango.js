class Mango {
    constructor(x,y,r){
        var options={
            restitution: 0,
            friction: 1,
            isStatic: true
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x =x;
        this.y =y;
        this.r =r;
        this.image=loadImage("images/mango.png");
        World.add(world, this.body);
    }

    display(){
        var mangopos= this.body.position;
        ellipseMode(CENTER);
        imageMode(CENTER);
        ellipse(mangopos.x, mangopos.y, this.r/2);
        image(this.image, mangopos.x, mangopos.y, 3*this.r, 3*this.r);
    }
}