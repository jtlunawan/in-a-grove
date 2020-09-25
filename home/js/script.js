var heading = document.getElementById("heading");
var acknowledgement = document.getElementById("acknowledgement");
var start = document.getElementById("start");
var caption1 = document.getElementById("caption1");
var caption2 = document.getElementById("caption2");
var caption3 = document.getElementById("caption3");
var caption4 = document.getElementById("caption4");
var n = 0;
var dead = document.getElementById("dead");

heading.addEventListener("animationend",function(){show0()});
caption1.addEventListener("animationend",function(){show1()});
caption2.addEventListener("animationend",function(){show2()});
caption3.addEventListener("animationend",function(){show3()});
caption4.addEventListener("animationend",function(){show4()});

function show0(){
  heading.classList.add("vanish");
  heading.style.opacity = "0";
  acknowledgement.classList.add("vanish");
  acknowledgement.style.opacity = "0";
  caption1.classList.add("show");
  caption1.style.opacity = "1";
  dead.classList.add("enlarge");
  dead.style.width = "40%";
  dead.style.top = "60%";
  dead.style.left = "30%";
}
function show1(){
  caption1.classList.add("vanish");
  caption1.style.opacity = "0";
  caption2.classList.add("show");
  caption2.style.opacity = "1";
}
function show2(){
  caption2.classList.add("vanish");
  caption2.style.opacity = "0";
  caption3.classList.add("show");
  caption3.style.opacity = "1";
  n = 1;
}
function show3(){
  caption3.classList.add("vanish");
  caption3.style.opacity = "0";
  caption4.classList.add("show");
  caption4.style.opacity = "1";
}
function show4(){
  caption4.classList.add("vanish");
  caption4.style.opacity = "0";
  start.style.visibility = "visible";
  start.style.opacity = "1";
  start.classList.add("show");
  start.addEventListener("click",function(){nextpage()});
}


function nextpage() {
  window.setTimeout('window.location.replace("../testimony/index.html")',10);
}

"use strict";
var leaves = [];

function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.parent("canvas-holder");
  frameRate(30);
  background(0);
  for(var i=0; i<150; i++){
    var x = random(-width,width);
    var y = random(-height*1.5,-height/6);
    var sx = random(1,2);
    var sy = random(1,2);
    var ax = random(0.2,0.5);
    var ay = random(0.2,0.5);
    var s = random(20,60);
    leaves.push(new Leaf(x,y,sx,sy,ax,ay,s));
  }
}

function draw() {
  var c = "rgba(200,230,160,0.8)";
  background(0);
  noStroke();
  for(var i=0; i<leaves.length; i++){
    var l = leaves[i];
    push();
    l.move();
    if (mouseIsPressed){
      l.speedup();
    }
    translate(l.x,l.y);
    if(i%3===0){
      rotate(sin(PI/3));
    }else if(i%4===0){
      rotate(sin(PI/4));
    }else if(i%5===0){
      rotate(sin(PI/5));
    }else{
      rotate(sin(PI/7));
    }
    if(n === 1){
      c = "rgba(255,50,10,0.6)";
    }
    l.display(c);
    pop();
    if(l.y>height || l.x>width){
      l.x = random(-width,width);
      l.y = random(-height*1.5,-height/10);
      l.sx = random(0.5,2);
      l.sy = random(0.5,2);
    }
  }
}

class Leaf{
  constructor(x,y,sx,sy,ax,ay,s){
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.ax = ax;
    this.ay = ay;
    this.size = s;
  }
  display(c){
    fill(c);
    ellipse(this.x, this.y, this.size, this.size/6);
  }
  // rotate(angle){
  //   translate(this.x,this.y);
  //   rotate(angle);
  // }
  move(){
    this.x += this.sx;
    this.y += this.sy;
  }
  speedup(){
    this.sx += this.ax;
    this.sy += this.ay;
  }
}
