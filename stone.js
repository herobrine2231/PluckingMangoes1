class Stone{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("Plucking mangoes/stone.png");
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        World.add(world, this.body);
    }
   
    display()
    {
        var stonepos =this.body.position;		
		push()
		translate(stonepos.x, stonepos.y);
		rectMode(CENTER)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		pop()
    }

}