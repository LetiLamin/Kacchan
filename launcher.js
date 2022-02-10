class launcher {
  constructor(body, pointB) {
    var options = {
      bodyA: body,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    this.bodyA = body
    this.pointB = pointB
    this.launcher = Constraint.create(options)
    World.add(world, this.launcher)
  }

  fly() {
    this.launcher.bodyA = null
  }

  display() {
    if (this.launcher.bodyA) {
      var pointA = this.bodyA.position
      var pointB = this.pointB
      stroke(48, 22, 8)
      strokeWeight(7)
      line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
  }

  attach(body) {
    this.launcher.bodyA = body
  }
}
