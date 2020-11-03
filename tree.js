class tree{

        constructor(x,y)
        {
            var options=
            {
                isStatic:false
            }
            this.x=x;
            thix.y=y;
            this.treeHeight=300;
            this.treeWidth=100;
            this.treethickness=20;
           this.angle=0;
            this.image=loadImage("Plucking mangoes/tree.png");
          
            this.bottomBody=Bodies.rectangle(thix.s, this.y,this.treeWidth, this.treethickness,options);
            this.leftBody=Bodies.rectangle(this.x- this.treeWidth/2, this.y-this.treeHeight/2,this.treethickness, this.treeHeight, options);
            this.rightBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2,this.treethickness, this.treeHeight, options);        

            World.add(world, this.bottomBody);
            World.add(world, this.leftBody);
            World.add(world, this.rightBody);

            
        }
        display()
        {
            var posBottom=this.bottomBody.position;
		//	var posLeft=this.leftBody.position;
		//	var posRight=this.rightBody.position;

			

		/*	push()
			translate(posLeft.x+100, posLeft.y+160);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
            rect(0,0,this.treethickness, this.treeHeight );
			pop()

			push()
			translate(posRight.x+100, posRight.y+160);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
             rect(0,0,this.treethickness, this.treeHeight);
			pop()*/

			push()
			translate(posBottom.x+110, posBottom.y+150);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
           rect(0,0,this.treeWidth, this.treethickness); 
            pop()
      
             image(this.image, this.x, this.y ,this.treeWidth,this.treeHeight);
        }
};