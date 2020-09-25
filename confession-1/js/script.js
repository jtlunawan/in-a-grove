var t = document.getElementById("timg1");
var k = document.getElementById("kimg1");
var m = document.getElementById("mimg1");
var tscene1 = document.getElementById("Tscene1");
var t0 = document.getElementById("t0-1");
var t1 = document.getElementById("t1-1");
var t2 = document.getElementById("t2-1");
var t3 = document.getElementById("t3-1");
var t4 = document.getElementById("t4-1");
var tbutton1 = document.getElementById("tbutton1");
var kscene1 = document.getElementById("Kscene1");
var k0 = document.getElementById("k0-1");
var k1 = document.getElementById("k1-1");
var k2 = document.getElementById("k2-1");
var k3 = document.getElementById("k3-1");
var kbutton1 = document.getElementById("kbutton1");
var mscene1 = document.getElementById("Mscene1");
var m0 = document.getElementById("m0-1");
var m1 = document.getElementById("m1-1");
var m2 = document.getElementById("m2-1");
var m3 = document.getElementById("m3-1");
var mbutton1 = document.getElementById("mbutton1");
var n1=0;
var n2=0;
var n3=0;
var btn1 = document.getElementById("button1");
var scene1 = document.getElementById("Scene1");
var title = document.getElementsByClassName("title");
var tc01 = document.getElementById("tc01");
var mc01 = document.getElementById("mc01");
var kc01 = document.getElementById("kc01");
var kc02 = document.getElementById("kc02");
var bg = document.getElementById("bg");

t.addEventListener("click",function(){show1()});
tbutton1.addEventListener("click",function(){back1()});
k.addEventListener("click",function(){show2()});
kbutton1.addEventListener("click",function(){back2()});
m.addEventListener("click",function(){show3()});
mbutton1.addEventListener("click",function(){back3()});
btn1.addEventListener("click",function(){next1()});

function show1(){
  if(n1 === 0){
    k.style.visibility = 'hidden';
    m.style.visibility = 'hidden';
    t.style.opacity = "0.6";
    t.style.top = "1%";
    t.style.left = "1%";
    t.style.width = "6%";
    t.style.cursor = "auto";
    for(var i=0; i<2; i++){
      title[i].style.visibility = "hidden";
    }
    bg.src="image/bg_tie.png";
    show10();
    n1 = 1;
  }
}
function show10(){
  tscene1.style.visibility = "visible";
  t0.classList.add("show");
  t0.style.visibility = "visible";
  setTimeout(function(){show11()},4000);
}
function show11(){
  t0.classList.add("vanish");
  t0.style.opacity = "0";
  t1.classList.add("show");
  t1.style.visibility = "visible";
  tc01.classList.add("show");
  tc01.style.visibility = "visible";
  tc01.style.opacity = "1";
  setTimeout(function(){show12()},4000);
}
function show12(){
  t1.classList.add("vanish");
  t1.style.opacity = "0";
  t2.classList.add("show");
  t2.style.visibility = "visible";
  setTimeout(function(){show13()},4000);
}
function show13(){
  t2.classList.add("vanish");
  t2.style.opacity = "0";
  t3.classList.add("show");
  t3.style.visibility = "visible";
  setTimeout(function(){show14()},4000);
}
function show14(){
  t3.classList.add("vanish");
  t3.style.opacity = "0";
  t4.classList.add("show");
  t4.style.visibility = "visible";
  tbutton1.classList.add("show");
  tbutton1.style.visibility = "visible";
}
function back1(){
  t4.style.visibility = "hidden";
  tbutton1.style.visibility = "hidden";
  tscene1.style.visibility = "hidden";
  k.style.visibility = 'visible';
  m.style.visibility = 'visible';
  for(var i=0; i<2; i++){
    title[i].style.visibility = "visible";
  }
  t.style.top = "30%";
  t.style.left = "12%";
  t.style.width = "20%";
  tc01.style.opacity = "0";
  bg.src="image/bg_cedar.png";
}

function show2(){
  if(n2 === 0){
    for(var i=0; i<2; i++){
      title[i].style.visibility = "hidden";
    }
    bg.src="image/bg_tie.png";
    show20();
    n2 = 1;
    t.style.visibility = 'hidden';
    m.style.visibility = 'hidden';
    k.style.opacity = "0.6";
    k.style.top = "1%";
    k.style.left = "1%";
    k.style.width = "6%";
    k.style.cursor = "auto";
  }
}
function show20(){
  kscene1.style.visibility = "visible";
  k0.classList.add("show");
  k0.style.visibility = "visible";
  kc01.classList.add("show");
  kc01.style.visibility = "visible";
  kc01.style.opacity = "1";
  setTimeout(function(){show21()},4000);
}
function show21(){
  k0.classList.add("vanish");
  k0.style.opacity = "0";
  k1.classList.add("show");
  k1.style.visibility = "visible";
  setTimeout(function(){show22()},4000);
}
function show22(){
  k1.classList.add("vanish");
  k1.style.opacity = "0";
  k2.classList.add("show");
  k2.style.visibility = "visible";
  kc01.classList.add("vanish");
  kc01.style.opacity = "0";
  setTimeout(function(){show23()},4000);
}
function show23(){
  k2.classList.add("vanish");
  k2.style.opacity = "0";
  k3.classList.add("show");
  k3.style.visibility = "visible";
  kc02.classList.add("show");
  kc02.style.visibility = "visible";
  kc02.style.opacity = "1";
  kbutton1.classList.add("show");
  kbutton1.style.visibility = "visible";
}
function back2(){
  k3.style.visibility = "hidden";
  kbutton1.style.visibility = "hidden";
  kscene1.style.visibility = "hidden";
  t.style.visibility = 'visible';
  m.style.visibility = 'visible';
  for(var i=0; i<2; i++){
    title[i].style.visibility = "visible";
  }
  k.style.top = "30%";
  k.style.left = "68%";
  k.style.width = "20%";
  kc02.style.opacity = "0";
  bg.src="image/bg_cedar.png";
}

function show3(){
  if(n3 === 0){
    for(var i=0; i<2; i++){
      title[i].style.visibility = "hidden";
    }
    bg.src="image/bg_tie.png";
    show30();
    n3 = 1;
    t.style.visibility = 'hidden';
    k.style.visibility = 'hidden';
    m.style.opacity = "0.6";
    m.style.top = "1%";
    m.style.left = "1%";
    m.style.width = "6%";
    m.style.cursor = "auto";
  }
}
function show30(){
  mscene1.style.visibility = "visible";
  m0.classList.add("show");
  m0.style.visibility = "visible";
  setTimeout(function(){show31()},4000);
}
function show31(){
  m0.classList.add("vanish");
  m0.style.opacity = "0";
  m1.classList.add("show");
  m1.style.visibility = "visible";
  mc01.classList.add("show");
  mc01.style.visibility = "visible";
  mc01.style.opacity = "1";
  setTimeout(function(){show32()},4000);
}
function show32(){
  m1.classList.add("vanish");
  m1.style.opacity = "0";
  m2.classList.add("show");
  m2.style.visibility = "visible";
  setTimeout(function(){show33()},4000);
}
function show33(){
  m2.classList.add("vanish");
  m2.style.opacity = "0";
  m3.classList.add("show");
  m3.style.visibility = "visible";
  mbutton1.classList.add("show");
  mbutton1.style.visibility = "visible";
}
function back3(){
  t.style.visibility = 'visible';
  k.style.visibility = 'visible';
  mbutton1.style.visibility = "hidden";
  m3.style.visibility = "hidden";
  mscene1.style.visibility = "hidden";
  for(var i=0; i<2; i++){
    title[i].style.visibility = "visible";
  }
  m.style.top = "56%";
  m.style.left = "41%";
  m.style.width = "20%";
  mc01.style.opacity = "0";
  bg.src="image/bg_cedar.png";
}

function next1(){
  scene1.classList.add("vanish");
  scene1.style.opacity = "0";
  setTimeout(function(){go()},2000);
}

function go(){
  window.setTimeout('window.location.replace("../confession-2/index.html")',10);
}
