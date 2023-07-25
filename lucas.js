this.stop();
//alert("Frame 45")



console.log("this", this) //returns > > > lib.MyFirstLinkageProject ???

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

//stage.canvas.height = 500 
//stage.canvas.width = 400
//canvas.width = 800
//both above are valid

//var stageHeight = stage.canvas.height;
//var stageWidth  = stage.canvas.width;


// "let" is same as "var"  but not hoisted (methinks)

//= = = create myContainer = = =
let myContainer = new createjs.Container();
//myContainer.regX = stageWidth/2;
//myContainer.regY = stageHeight/2;
//myContainer.regX = -000;
//myContainer.regY = -000;

stage.addChild(myContainer);

//= = = create mySquare and herSquare = = =
var mySquareRed = new lib.LNK_SquareRed();
var herSquareRed = new lib.LNK_SquareRed();

mySquareRed.x = 40;
mySquareRed.y = 50;

herSquareRed.x = 40
herSquareRed.y = 120
herSquareRed.scaleX = 1
herSquareRed.scaleY = 1.5

//add squares to myContainer
myContainer.addChild(mySquareRed);
myContainer.addChild(herSquareRed);


//= = =  create (initial) countDown text to be displayed = = =
let countDownA = 999
let myTextA = new createjs.Text("CountDownA  >>> " + countDownA, "bold italic 13px Arial", "blue");
myTextA.x = 16;
myTextA.y = 13;
myTextA.textBaseline = "alphabetic";

let myRotation = new createjs.Text("Rotation  >>> " + mySquareRed.rotation, "bold italic 13px Arial", "blue");
myRotation.x = 16;
myRotation.y = 100;
myRotation.textBaseline = "alphabetic";

//add texxts to myContainer
myContainer.addChild(myTextA);
myContainer.addChild(myRotation);

//add myTextB directly to stage
/*	
	stage.canvas.font="15px Courier New";
	stage.canvas.fillText("MyTextInTheCanvas!",10,50);
	stage.canvas.font="20px Verdana";
	myContainer.fillText("MYTEXT150,100!",150,100);	*/
/*
	from createjs IS WORKING OK
	var myText = new createjs.Text("count down " + countDown, "bold italic 20px Arial", "blue");
	myText.x = 150;
	myText.y = 150;
    myText.textBaseline = "alphabetic";
	*/
	

//from createjs API	
var graphics = new createjs.Graphics().beginFill("blue").drawRect(0, 0, 150, 200);
var shapeA = new createjs.Shape(graphics);

//Alternatively use can also use the graphics property of the Shape class to renderer the same as above.
var ctx1 = canvas.getContext(`2d`);
var ctx2 = canvas.getContext(`2d`);

var shapeA = new createjs.Shape();
/*with (ctx1){

shapeA.graphics.beginFill("#ff00ff").drawCircle(0, 0, 100, 50);
}*/

//stage.addChild(shapeA);
/*with (ctx1);
	var shapeB  = new createjs.Shape();
	shapeB.graphics.beginFill("#ffccff").drawCircle(20, 20, 30, 50);*/



let xDisplacement = 1
let rotation_1 = 1
let rotation_2 = -10

//= = = listener added to ???  stage??  canvas ?? = = =
createjs.Ticker.addEventListener("tick", handleTick);
function handleTick() {
	
	////rotation and displacement of squares
	//if (herSquareRed.x > 520) {
	//	xDisplacement = -xDisplacement
	//	rotation_1 = -rotation_1
	//	rotation_2 = -rotation_2
	//} else {
	//	if (herSquareRed.x < 150) {
	//		xDisplacement = -xDisplacement
	//		rotation_1 = -rotation_1
	//		rotation_2 = -rotation_2
	//	}
	//}

	rotation_1 += 2
	herSquareRed.x += xDisplacement;
	mySquareRed.rotation += rotation_1
	
	herSquareRed.scaleY -= .02

	console.log ("mySquareRed.rotation",mySquareRed.rotation)

	//toggle squares clockwise vs counter-clockwise rotation
	//mySquareRed.rotation += rotation_1
	//herSquareRed.rotation += rotation_2

	ctx2.fillStyle="blue";
	ctx2.fillRect(300,150,120,60);
	ctx2.fillStyle="yellow";
	ctx2.fillRect(310,160,100,40);
	
	//update countDown text
	countDownA--;
	
		//alert(">>> " + countDownA);	
	
	//console.log(countDownA);
	// twenty hours to discover one must not write just the object myText
	//but refer to its property  myText.text
	myTextA.text = "CountDownA  " + countDownA;   // .text    is what what missing...
	

	myRotation.text = "Rotation  >>>  " + mySquareRed.rotation;



/*	console.log(myTextA);
	console.log(myTextB);	*/
	//myContainer.addChild(myText);
	//stage.update();
	
//alert("222 " + myText);	
	
	//myText = countDown
/*	myText.x = 150
	myText.y = 150*/
//alert("333 " + myText);
	//stage.addChild(countDown);
//alert("444 " + myText);
//update.stage();
}


// ths would deepend on HTML //and therefore throws errors

//var canvas = document.getElementById('meuCanvas'); // em seu HTML esse elemento se parece com <canvas id="meuCanvas"></canvas>
//var ctx = canvas.getContext('2d');
//ctx.fillStyle = "rgb(200,0,0)";
//ctx.fillRect(50, 50, 55, 50);





