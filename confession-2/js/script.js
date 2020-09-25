var t = document.getElementById("timg1");
var k = document.getElementById("kimg1");
var m = document.getElementById("mimg1");
var tscene1 = document.getElementById("Tscene1");
var t0 = document.getElementById("t0-1");
var t1 = document.getElementById("t1-1");
var t2 = document.getElementById("t2-1");
var t3 = document.getElementById("t3-1");
var t4 = document.getElementById("t4-1");
var t5 = document.getElementById("t5-1");
var t6 = document.getElementById("t6-1");
var tbutton1 = document.getElementById("tbutton1");
var kscene1 = document.getElementById("Kscene1");
var k0 = document.getElementById("k0-1");
var k1 = document.getElementById("k1-1");
var k2 = document.getElementById("k2-1");
var k3 = document.getElementById("k3-1");
var k4 = document.getElementById("k4-1");
var k5 = document.getElementById("k5-1");
var kbutton1 = document.getElementById("kbutton1");
var mscene1 = document.getElementById("Mscene1");
var m0 = document.getElementById("m0-1");
var m1 = document.getElementById("m1-1");
var m2 = document.getElementById("m2-1");
var m3 = document.getElementById("m3-1");
var m4 = document.getElementById("m4-1");
var m5 = document.getElementById("m5-1");
var m6 = document.getElementById("m6-1");
var m7 = document.getElementById("m7-1");
var m8 = document.getElementById("m8-1");
var mbutton1 = document.getElementById("mbutton1");
var n1=0;
var n2=0;
var n3=0;
var btn1 = document.getElementById("button1");
var scene1 = document.getElementById("Scene1");
var title = document.getElementsByClassName("title");
var tc01 = document.getElementById("tc01");
var tc02 = document.getElementById("tc02");
var tc03 = document.getElementById("tc03");
var tc04 = document.getElementById("tc04");
var mc01 = document.getElementById("mc01");
var mc02 = document.getElementById("mc02");
var mc03 = document.getElementById("mc03");
var mc04 = document.getElementById("mc04");
var kc01 = document.getElementById("kc01");
var kc02 = document.getElementById("kc02");
var kc03 = document.getElementById("kc03");
var kc04 = document.getElementById("kc04");
var kc05 = document.getElementById("kc05");
var kc06 = document.getElementById("kc06");
var bg = document.getElementById("bg");
var ri = document.getElementById("ri");

t.addEventListener("click",function(){show1()});
tbutton1.addEventListener("click",function(){back1()});
k.addEventListener("click",function(){show2()});
kbutton1.addEventListener("click",function(){back2()});
m.addEventListener("click",function(){show3()});
mbutton1.addEventListener("click",function(){back3()});
btn1.addEventListener("click",function(){next1()});

function show1(){
  console.log(n1);
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
    show10();
    n1 = 1;
  }
}
function show10(){
  tscene1.style.visibility = "visible";
  t0.classList.add("show");
  t0.style.visibility = "visible";
  tc01.classList.add("show");
  tc01.style.visibility = "visible";
  tc01.style.opacity = "1";
  setTimeout(function(){show11()},4500);
}
function show11(){
  t0.classList.add("vanish");
  t0.style.opacity = "0";
  t1.classList.add("show");
  t1.style.visibility = "visible";
  tc02.classList.add("show");
  tc02.style.visibility = "visible";
  tc02.style.opacity = "1";
  setTimeout(function(){show12()},4500);
}
function show12(){
  t1.classList.add("vanish");
  t1.style.opacity = "0";
  t2.classList.add("show");
  t2.style.visibility = "visible";
  setTimeout(function(){show13()},4500);
}
function show13(){
  t2.classList.add("vanish");
  t2.style.opacity = "0";
  t3.classList.add("show");
  t3.style.visibility = "visible";
  setTimeout(function(){show14()},4500);
}
function show14(){
  t3.classList.add("vanish");
  t3.style.opacity = "0";
  t4.classList.add("show");
  t4.style.visibility = "visible";
  tc02.classList.add("vanish");
  tc02.style.opacity = "0";
  tc03.classList.add("show");
  tc03.style.visibility = "visible";
  tc03.style.opacity = "1";
  ri.classList.add("show");
  ri.style.opacity = "0.4";
  tc04.classList.add("show");
  tc04.style.visibility = "visible";
  tc04.style.opacity = "1";
  setTimeout(function(){show15()},4500);
}
function show15(){
  t4.classList.add("vanish");
  t4.style.opacity = "0";
  t5.classList.add("show");
  t5.style.visibility = "visible";
  tc04.classList.add("vanish");
  tc04.style.opacity = "0";
  setTimeout(function(){show16()},4500);
}
function show16(){
  t5.classList.add("vanish");
  t5.style.opacity = "0";
  t6.classList.add("show");
  t6.style.visibility = "visible";
  tbutton1.classList.add("show");
  tbutton1.style.visibility = "visible";
}
function back1(){
  t6.style.visibility = "hidden";
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
  tc03.style.opacity = "0";
  ri.style.opacity = "0";
  ri.classList.remove("show");
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
  kc02.classList.add("show");
  kc02.style.visibility = "visible";
  kc02.style.opacity = "1";
  setTimeout(function(){show21()},4500);
}
function show21(){
  k0.classList.add("vanish");
  k0.style.opacity = "0";
  k1.classList.add("show");
  k1.style.visibility = "visible";
  kc01.src="image/tescape1.png";
  kc02.classList.add("vanish");
  kc02.style.opacity = "0";
  setTimeout(function(){show22()},4500);
}
function show22(){
  k1.classList.add("vanish");
  k1.style.opacity = "0";
  k2.classList.add("show");
  k2.style.visibility = "visible";
  setTimeout(function(){kc01.classList.add("vanish");
    kc01.style.opacity = "0";},2000);

  kc03.classList.add("show");
  kc03.style.visibility = "visible";
  kc03.style.opacity = "1";
  bg.src = "image/bg_cedar2.png";
  setTimeout(function(){show23()},4500);
}
function show23(){
  k2.classList.add("vanish");
  k2.style.opacity = "0";
  k3.classList.add("show");
  k3.style.visibility = "visible";
  kc03.classList.add("vanish");
  kc03.style.opacity = "0";
  kc04.classList.add("show");
  kc04.style.visibility = "visible";
  kc04.style.opacity = "1";
  setTimeout(function(){show24()},4500);
}
function show24(){
  k3.classList.add("vanish");
  k3.style.opacity = "0";
  k4.classList.add("show");
  k4.style.visibility = "visible";
  kc04.classList.add("vanish");
  kc04.style.opacity = "0";
  kc05.classList.add("show");
  kc05.style.visibility = "visible";
  kc05.style.opacity = "1";
  ri.classList.add("show");
  ri.style.opacity = "0.4";
  kc06.classList.add("show");
  kc06.style.visibility = "visible";
  kc06.style.opacity = "1";
  setTimeout(function(){show25()},4500);
}
function show25(){
  k4.classList.add("vanish");
  k4.style.opacity = "0";
  k5.classList.add("show");
  k5.style.visibility = "visible";
  kc05.classList.add("vanish");
  kc05.style.opacity = "0";
  kbutton1.classList.add("show");
  kbutton1.style.visibility = "visible";
}
function back2(){
  k5.style.visibility = "hidden";
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
  kc06.style.opacity = "0";
  bg.src="image/bg_cedar.png";
  ri.style.opacity = "0";
  ri.classList.remove("show");
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
  setTimeout(function(){show31()},4500);
}
function show31(){
  m0.classList.add("vanish");
  m0.style.opacity = "0";
  m1.classList.add("show");
  m1.style.visibility = "visible";
  setTimeout(function(){show32()},4500);
}
function show32(){
  m1.classList.add("vanish");
  m1.style.opacity = "0";
  m2.classList.add("show");
  m2.style.visibility = "visible";
  mc01.classList.add("show");
  mc01.style.visibility = "visible";
  mc01.style.opacity = "1";
  mc02.classList.add("show");
  mc02.style.visibility = "visible";
  mc02.style.opacity = "1";
  setTimeout(function(){show33()},4500);
}
function show33(){
  m2.classList.add("vanish");
  m2.style.opacity = "0";
  m3.classList.add("show");
  m3.style.visibility = "visible";
  setTimeout(function(){show34()},4500);
}
function show34(){
  m3.classList.add("vanish");
  m3.style.opacity = "0";
  m4.classList.add("show");
  m4.style.visibility = "visible";
  setTimeout(function(){show35()},4500);
}
function show35(){
  m4.classList.add("vanish");
  m4.style.opacity = "0";
  m5.classList.add("show");
  m5.style.visibility = "visible";
  mc01.classList.add("vanish");
  mc01.style.opacity = "0";
  mc02.classList.add("vanish");
  mc02.style.opacity = "0";
  mc03.classList.add("show");
  mc03.style.visibility = "visible";
  mc03.style.opacity = "1";
  setTimeout(function(){show36()},4500);
}
function show36(){
  m5.classList.add("vanish");
  m5.style.opacity = "0";
  m6.classList.add("show");
  m6.style.visibility = "visible";
  mc03.classList.add("vanish");
  mc03.style.opacity = "0";
  mc04.classList.add("show");
  mc04.style.visibility = "visible";
  mc04.style.opacity = "1";
  ri.classList.add("show");
  ri.style.opacity = "0.4";
  bg.src = "image/bg_cedar2.png";
  setTimeout(function(){show37()},4500);
}
function show37(){
  m6.classList.add("vanish");
  m6.style.opacity = "0";
  m7.classList.add("show");
  m7.style.visibility = "visible";
  setTimeout(function(){show38()},4500);
}
function show38(){
  m7.classList.add("vanish");
  m7.style.opacity = "0";
  m8.classList.add("show");
  m8.style.visibility = "visible";
  mbutton1.classList.add("show");
  mbutton1.style.visibility = "visible";
}
function back3(){
  t.style.visibility = 'visible';
  k.style.visibility = 'visible';
  mbutton1.style.visibility = "hidden";
  m8.style.visibility = "hidden";
  mscene1.style.visibility = "hidden";
  for(var i=0; i<2; i++){
    title[i].style.visibility = "visible";
  }
  m.style.top = "56%";
  m.style.left = "41%";
  m.style.width = "20%";
  mc04.style.opacity = "0";
  bg.src="image/bg_cedar.png";
  ri.style.opacity = "0";
  ri.classList.remove("show");
}

function next1(){
  scene1.classList.add("vanish");
  scene1.style.opacity = "0";
  setTimeout(function(){go()},2000);
}

function go(){
  window.setTimeout('window.location.replace("../ending/index.html")',10);
}
