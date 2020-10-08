class Ball{
    constructor(x,y,radius){
        var options={isStatic: false}
        this.body = Bodies.circle(x, y, radius, options);
        radius=radius
        World.add(world,this.body)
       
    }
    display(){
        push()
        fill("pink")
        circle(0,0,20)
      pop()
    }
}