class Mango
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("Plucking mangoes/mango.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world, this.body);
    }

    display()
    {
        var paperpos= this.body.position;
      push()
       translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        fill(255,0,255)
       ellipseMode(CENTER)
     image(this.image,0,0, this.r,this.r);
        pop()
     }
}