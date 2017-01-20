//set canvas
var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
var c2 = document.getElementById('canvas2');
var ctx2 = c2.getContext("2d");

resizeWindow();

// Default position
var DefaultPos = {x:0, y:0};

window.addEventListener('resize', resizeWindow);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

window.onload=function(){

}


function setCanvasBG(){
	/*ctx.beginPath();
  ctx.rect(0, 0, c.width, c.height);
  ctx.fillStyle = "#000";
  ctx.fill();*/
  //ctx.drawImage(img,10,10);
}

//initialise canvas items
setCanvasBG();  //bg color



//window resize
function resizeWindow(){
	c.width  = window.innerWidth;
	c.height = window.innerHeight;
	c2.width  = window.innerWidth;
	c2.height = window.innerHeight;

  setCanvasBG();
  $('p').show();
}
//new mouse event position
function setPosition(e){
	DefaultPos.x = e.clientX;
	DefaultPos.y = e.clientY;
}
//drawing canvas object
function draw(e){
  //left click define
  if (e.buttons !== 1) return;

	ctx.beginPath(); //path begin
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = "red";

  ctx.moveTo(DefaultPos.x, DefaultPos.y);
  setPosition(e);
  ctx.lineTo(DefaultPos.x, DefaultPos.y);

  ctx.stroke();
}
$("#start").click(function() {
	var img = new Image();   // Create new img element
	img.addEventListener("load", function() {
    ctx2.drawImage(img,0,0);
	}, false);
	img.src = 'bg.jpg'; // Set source path
});

//save canvas
$("#save").click(function() {

  var html = " ";
  html += "<img src='" + c.toDataURL() + "' alt='from canvas'/>";
  var pageStyle = "<style>body{margin:0; padding: 0;}</style>";
  var tab = window.open();
  tab.document.write(html + pageStyle);
});

$('canvas, p').click(function(){
   $('p').hide();
});
//Clear canvas
$("#clear").click(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.clearRect(0, 0, canvas.width, canvas.height);
	setCanvasBG();
  $('p').show();
});
