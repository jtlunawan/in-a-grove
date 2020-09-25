var flex = document.getElementById("home");
var heading = document.getElementById("heading");
// var restart = document.getElementById("restart");
var caption1 = document.getElementById("caption1");
var caption2 = document.getElementById("caption2");
var caption3 = document.getElementById("caption3");
var restart = document.getElementById("restart");
var n = 0;

caption1.addEventListener("animationend",function(){show1()});
caption2.addEventListener("animationend",function(){show2()});
caption3.addEventListener("animationend",function(){show3()});

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
}
function show3(){
  caption3.classList.add("vanish");
  caption3.style.opacity = "0";
  restart.classList.add("show");
  restart.style.visibility = "visible";
}

"use strict";
var leaves = [];
var input, button, button2;
function setup() {
  canvas =  createCanvas(1440,900);
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
  input = document.getElementById("input");
  button = document.getElementById("button");
  button2 = document.getElementById("button2");
  button.addEventListener("click",function(){ending()});
  button2.addEventListener("click",function(){ending2()});
  textAlign(CENTER);
  textSize(50);

}
function ending(){
  var name = input.value;
  if (name!="type the name in lowercase"){
    if(name === "masago"||name === "kanazawa"||name === "kanazawa no takehiro"||name === "takehiro"||name === "tajomaru"){
      show0();
    }else if(name === "the old woman"||name === "old woman"||name === "masago's mother"||name === "kanazawa's mother-in-law"||
    name === "the wood cutter"||name === "wood cutter"||name === "woodcutter"||name === "the wood cutter"||
    name === "the policeman"||name === "policeman"|| name === "police"||name === "the police"||
    name === "the traveling monk"||name === "the monk"||name === "traveling monk"||name === "monk"){
      show00(name);
    }else{
      show000(name);
    }
  }
}
function ending2(){
  shownoidea();
}
function show0(){
  heading.style.visibility = "hidden";
  input.style.visibility = "hidden";
  button.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  caption1.classList.add("show");
  caption1.style.opacity = "1";
}
function show00(name){
  heading.style.visibility = "hidden";
  input.style.visibility = "hidden";
  button.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  caption1.classList.add("show");
  caption1.style.opacity = "1";
  document.getElementById("caption1").innerHTML = "·We know that "+name+" might be lying"
  document.getElementById("caption2").innerHTML = "·But whether "+name+" killed Kanazawa remains a question"
  document.getElementById("caption3").innerHTML = "·'We know in part, and we prophesy in part'"
}

function show000(name){
  heading.style.visibility = "hidden";
  input.style.visibility = "hidden";
  button.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  caption1.classList.add("show");
  caption1.style.opacity = "1";
  document.getElementById("caption1").innerHTML = "·We have never seen anyone named '" + name +"'"
  document.getElementById("caption2").innerHTML = "·You might want to read it again"
  document.getElementById("caption3").innerHTML = "·Yet the truth might lie beyond the contents"
}


function shownoidea(){
  heading.style.visibility = "hidden";
  input.style.visibility = "hidden";
  button.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  caption1.classList.add("show");
  caption1.style.opacity = "1";
  document.getElementById("caption1").innerHTML = "·'For now we see through a glass, darkly'"
  document.getElementById("caption2").innerHTML = "·No one can uncover the truth"
  document.getElementById("caption3").innerHTML = "·Truth is distorted in the words"
}


function draw() {
  var c = "rgba(200,230,160,0.8)";
  background(0);
  noStroke();
  for(var i=0; i<leaves.length; i++){
    var l = leaves[i];
    push();
    l.move();
    if (keyIsPressed||mouseIsPressed){
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
