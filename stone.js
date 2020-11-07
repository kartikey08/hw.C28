class Stone {
    constructor(x,y,r){
        var options={
            restitution: 0,
            density: 1.2,
            friction: 1,
            isStatic: false
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x =x;
        this.y =y;
        this.r =r;
        this.image=loadImage("images/stone.png");
        World.add(world, this.body);
    }

    display(){
        var stonepos= this.body.position;
        ellipseMode(CENTER);
        imageMode(CENTER);
        ellipse(stonepos.x, stonepos.y, this.r/2);
        image(this.image, stonepos.x, stonepos.y, 3*this.r, 3*this.r);
    }
}