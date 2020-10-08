class Chain{
    constructor(body1,body2,offsetx,offsety){
this.offsetX=offsetx
this.offsetY=offsety
var options={
    bodyA: body1,
    bodyB: body2,
pointB:{x:this.offsetX,y:this.offsetY}
}
this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
}
display(){
    var bodyA=this.chain.bodyA.position
    var bodyB=this.chain.bodyB.position
    strokeWeight(4)
    line(bodyA.x,bodyA.y,bodyB.x,bodyB.y)
}
}