var kanazawa = document.getElementById("Timg1");
var tmono1 = document.getElementById("Tmono1");
var t10 = document.getElementById("T0-1");
var t11 = document.getElementById("T1-1");
var tbutton1 = document.getElementById("Tbutton1");
var tmono2 = document.getElementById("Tmono2");
var m1 = document.getElementById("Timg21");
var t1 = document.getElementById("Timg22");
var t20 = document.getElementById("T0-2");
var t21 = document.getElementById("T1-2");
var t22 = document.getElementById("T2-2");
var tbutton2 = document.getElementById("Tbutton2");

var m2 = document.getElementById("Timg31");
var t2 = document.getElementById("Timg32");
var m3 = document.getElementById("Timg33");
var tmono3 = document.getElementById("Tmono3");
var t30 = document.getElementById("T0-3");
var t31 = document.getElementById("T1-3");
var t32 = document.getElementById("T2-3");
var t33 = document.getElementById("T3-3");
var t34 = document.getElementById("T4-3");
var t35 = document.getElementById("T5-3");
var tbutton3 = document.getElementById("Tbutton3");

t10.addEventListener("animationend",function(){show11()});
tbutton1.addEventListener("click",function(){showNext1()});

tmono2.addEventListener("animationend",function(){show20()});
t20.addEventListener("animationend",function(){show21()});
t21.addEventListener("animationend",function(){show22()});
tbutton2.addEventListener("click",function(){showNext2()});

tmono3.addEventListener("animationend",function(){show30()});
t30.addEventListener("animationend",function(){show31()});
t31.addEventListener("animationend",function(){show32()});
t32.addEventListener("animationend",function(){show33()});
t33.addEventListener("animationend",function(){show34()});
t34.addEventListener("animationend",function(){show35()});
tbutton3.addEventListener("click",function(){showNext3()});


function show11(){
  t10.classList.add("vanish");
  t10.style.opacity = "0";
  t11.classList.add("show");
  t11.style.visibility = "visible";
  tbutton1.classList.add("show");
  tbutton1.style.visibility = "visible";
}
function showNext1(){
  tmono1.classList.add("vanish");
  tmono1.style.opacity = "0";
  tmono2.classList.add("show");
  tmono2.style.visibility= "visible";
  m1.classList.add("show");
  m1.style.visibility = "visible";
  t1.classList.add("show");
  t1.style.visibility = "visible";
}

function show20(){
  t20.classList.add("show");
  t20.style.visibility = "visible";
}
function show21(){
  t20.classList.add("vanish");
  t20.style.opacity = "0";
  t21.classList.add("show");
  t21.style.visibility = "visible";
}
function show22(){
  t21.classList.add("vanish");
  t21.style.opacity = "0";
  t22.classList.add("show");
  t22.style.visibility = "visible";
  tbutton2.classList.add("show");
  tbutton2.style.visibility = "visible";
}
function showNext2(){
  tmono2.classList.add("vanish");
  tmono2.style.opacity = "0";
  tmono3.classList.add("show");
  tmono3.style.visibility= "visible";
  m2.classList.add("show");
  m2.classList.add("enlarge");
  m2.style.visibility = "visible";
  m2.style.bottom= "-48%";
  m2.style.left = "0%";
  m2.style.width = "40%";
  t2.classList.add("show");
  t2.classList.add("enlarge");
  t2.style.visibility = "visible";
  t2.style.bottom= "-46%";
  t2.style.left = "20%";
  t2.style.width = "56%";
}

function show30(){
  t30.classList.add("show");
  t30.style.visibility = "visible";
}
function show31(){
  t30.classList.add("vanish");
  t30.style.opacity = "0";
  t31.classList.add("show");
  t31.style.visibility = "visible";
}
function show32(){
  t31.classList.add("vanish");
  t31.style.opacity = "0";
  t32.classList.add("show");
  t32.style.visibility = "visible";
}
function show33(){
  t32.classList.add("vanish");
  t32.style.opacity = "0";
  t33.classList.add("show");
  t33.style.visibility = "visible";
  m2.classList.toggle("enlarge");
  m2.classList.add("vanish");
  m2.style.opacity="0";
  m3.classList.add("show");
  m3.style.visibility = "visible";
}

function show34(){
  t33.classList.add("vanish");
  t33.style.opacity = "0";
  t34.classList.add("show");
  t34.style.visibility = "visible";
}

function show35(){
  t34.classList.add("vanish");
  t34.style.opacity = "0";
  t35.classList.add("show");
  t35.style.visibility = "visible";
  tbutton3.classList.add("show");
  tbutton3.style.visibility = "visible";
}

function showNext3(){
  tmono3.classList.add("vanish");
  tmono3.style.opacity = "0";
}
