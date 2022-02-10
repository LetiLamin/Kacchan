const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Render = Matter.Render
const Constraint = Matter.Constraint

var treeObj, stoneObj, groundObject
var deku1,
  deku2,
  deku3,
  deku4,
  deku5,
  deku6,
  deku7,
  deku8,
  deku9,
  deku10,
  deku11,
  deku12
var world, bakugou, hurtDeku

var launcherObject
var launcherForce = 100

function preload() {
  bakugou = loadImage('imagens/kacchan.png')
  hurtDeku = loadImage('imagens/hurt deku.png')
}

function setup() {
  createCanvas(1300, 600)
  engine = Engine.create()
  world = engine.world

  stoneObj = new stone(235, 420, 30)

  deku1 = new Midoriya(1100, 100, 30)
  deku2 = new Midoriya(1170, 130, 30)
  deku3 = new Midoriya(1010, 140, 30)
  deku4 = new Midoriya(1000, 70, 30)
  deku5 = new Midoriya(1100, 70, 30)
  deku6 = new Midoriya(1000, 230, 30)
  deku7 = new Midoriya(900, 230, 40)
  deku8 = new Midoriya(1140, 150, 40)
  deku9 = new Midoriya(1100, 230, 40)
  deku10 = new Midoriya(1200, 200, 40)
  deku11 = new Midoriya(1120, 50, 40)
  deku12 = new Midoriya(900, 160, 40)

  treeObj = new tree(1050, 580)
  groundObject = new ground(width / 2, 600, width, 20)
  //create launcherObject here
  launcherObject = new launcher(stoneObj.body, { x: 235, y: 420 })

  Engine.run(engine)
}

function draw() {
  background('white')
  textSize(25)
  fill('black')
  text('Aperte espaço para tentar novamente :)', 50, 100)
  fill('red')
  text('Bem-vindo ao jogo Kacchan e seus Surtos!', 50, 50)
  image(bakugou, 200, 340, 200, 300)

  treeObj.display()
  stoneObj.display()
  deku1.display()
  deku2.display()
  deku3.display()
  deku4.display()
  deku6.display()
  deku7.display()
  deku8.display()
  deku9.display()
  deku10.display()
  deku11.display()
  deku12.display()

  stoneObj.display()
  groundObject.display()
  launcherObject.display()

  if (
    (detectollision(stoneObj, deku1),
    detectollision(stoneObj, deku2),
    detectollision(stoneObj, deku3),
    detectollision(stoneObj, deku4),
    detectollision(stoneObj, deku5),
    detectollision(stoneObj, deku6),
    detectollision(stoneObj, deku7),
    detectollision(stoneObj, deku8),
    detectollision(stoneObj, deku9),
    detectollision(stoneObj, deku10),
    detectollision(stoneObj, deku11),
    detectollision(stoneObj, deku12))
  ) {
    deku1.changeImage(hurtDeku)
    deku2.changeImage(hurtDeku)
    deku3.changeImage(hurtDeku)
    deku4.changeImage(hurtDeku)
    deku5.changeImage(hurtDeku)
    deku6.changeImage(hurtDeku)
    deku7.changeImage(hurtDeku)
    deku8.changeImage(hurtDeku)
    deku9.changeImage(hurtDeku)
    deku10.changeImage(hurtDeku)
    deku11.changeImage(hurtDeku)
    deku12.changeImage(hurtDeku)
  }
}
// Professora eu realmente não sabia como fazer o midoriya mudar de imagem, então fiz assim, mas não tá funcionando. Outra coisa esse projeto eu usei como base o projeto das mangas, só troquei as imagens e queria fazer o midoriya mudar de imagem quando a explosão do bakugou acertasse ele.

function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  launcherObject.fly()
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, { x: 235, y: 420 })
    launcherObject.attach(stoneObj.body)
  }
}

function detectollision(lstone, ldeku) {
  dekuBodyPosition = ldeku.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    dekuBodyPosition.x,
    dekuBodyPosition.y
  )
  if (distance <= ldeku.r + lstone.r) {
    Matter.Body.setStatic(ldeku.body, false)
  }
}
