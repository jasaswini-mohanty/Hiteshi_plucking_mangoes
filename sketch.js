
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyimg, boysprite, treesprite, treeimg, stonefly;
//var gamestate =  stable;

function preload()
{
	//boyimg = loadImage('Plucking mangoes/boy.png');
	//treeimg = loadImage('plucking mangoes/tree.png');
}

function setup() {
	createCanvas(850, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	base = new Ground(425,385,850,8);

	boysprite = createSprite(150,300,20,200)

	treesprite = createSprite(672,200,20,100)
	//treesprite.addImage(treeimg)
	//boysprite.addImage (boyimg);
	boysprite.scale=0.14;
	//treesprite.scale=0.3;

	rock = new Stone(70,210)
	mango1 = new Mango(620,180,70,50)
	mango2 = new Mango(750,190,60,50)
	mango3 = new Mango(720,140,50,50) 
	mango4 = new Mango(660,110,60,60)
	mango5 = new Mango(630,70,50,60)
	mango6 = new Mango(790,150,50,50)
	mango7 = new Mango(750,100,60,50)
	mango8 = new Mango(700,50,60,50)
	mango9 = new Mango(560,150,60,50)
	chain = new Chain(rock.body,{x:70,y:210});
 
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  base.display();
  drawSprites();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  chain.display();

 /* detectCollison(mango1)
  detectCollison(mango2)
  detectCollison(mango3)
  detectCollison(mango4)

  detectCollison(mango5)
  detectCollison(mango6)
  detectCollison(mango7)
  detectCollison(mango8)

  detectCollison(mango9)

  */
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}


/*
function  detectCollison(mango){
   
   }

   */

