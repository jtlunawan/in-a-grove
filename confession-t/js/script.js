var starting = document.getElementById("start");
var button = document.getElementById("button");
var tajomaru = document.getElementById("Timg1");
var tmono1 = document.getElementById("Tmono1");
var t10 = document.getElementById("T0-1");
var t11 = document.getElementById("T1-1");
var t12 = document.getElementById("T2-1");
var t13 = document.getElementById("T3-1");
var tbutton1 = document.getElementById("Tbutton1");

var tmono2 = document.getElementById("Tmono2");
var horseback = document.getElementById("Timg2");
var t20 = document.getElementById("T0-2");
var t21 = document.getElementById("T1-2");
var t22 = document.getElementById("T2-2");
var t23 = document.getElementById("T3-2");
var t24 = document.getElementById("T4-2");
var tbutton2 = document.getElementById("Tbutton2");

var tmono3 = document.getElementById("Tmono3");
var tajomaru2 = document.getElementById("Timg3");
var t30 = document.getElementById("T0-3");
var t31 = document.getElementById("T1-3");
var t32 = document.getElementById("T2-3");
var tbutton3 = document.getElementById("Tbutton3");

var tmono4 = document.getElementById("Tmono4");
var masago2 = document.getElementById("Timg4-1");
var kanazawa2 = document.getElementById("Timg4-2");
var t40 = document.getElementById("T0-4");
var t41 = document.getElementById("T1-4");
var t42 = document.getElementById("T2-4");
var tbutton4 = document.getElementById("Tbutton4");

var bg51 = document.getElementById("background51");
var img51 = document.getElementById("Timg51");
var img52 = document.getElementById("Timg52");
var tmono5 = document.getElementById("Tmono5");
var t50 = document.getElementById("T0-5");
var t51 = document.getElementById("T1-5");
var t52 = document.getElementById("T2-5");
var t53 = document.getElementById("T3-5");
var t54 = document.getElementById("T4-5")
var t55 = document.getElementById("T5-5");
var tbutton5 = document.getElementById("Tbutton5");
var tbutton50 = document.getElementById("Tbutton50");

var tmono6 = document.getElementById("Tmono6");
var img61 = document.getElementById("Timg61");
var img62 = document.getElementById("Timg62");
var t60 = document.getElementById("T0-6");
var t61 = document.getElementById("T1-6");
var t62 = document.getElementById("T2-6");
var t63 = document.getElementById("T3-6");
var t64 = document.getElementById("T4-6");
var tbutton6 = document.getElementById("Tbutton6");

var bgm = document.getElementById("bgm");
bgm.addEventListener("play",function(){playLoop(this)});
function playLoop(e){
  e.play();
  e.loop=true;
  console.log(e.played);
}

starting.addEventListener("animationend",function(){start()});
tajomaru.addEventListener("animationend",function(){show10()});
t10.addEventListener("animationend",function(){show11()});
t11.addEventListener("animationend",function(){show12()});
t12.addEventListener("animationend",function(){show13()});
tbutton1.addEventListener("click",function(){showNext1()});

tmono2.addEventListener("animationend",function(){show20()});
t20.addEventListener("animationend",function(){show21()});
t21.addEventListener("animationend",function(){show22()});
t22.addEventListener("animationend",function(){show23()});
t23.addEventListener("animationend",function(){show24()});
tbutton2.addEventListener("click",function(){showNext2()});

tmono3.addEventListener("animationend",function(){show30()});
t30.addEventListener("animationend",function(){show31()});
t31.addEventListener("animationend",function(){show32()});
tbutton3.addEventListener("click",function(){showNext3()});

tmono4.addEventListener("animationend",function(){show40()});
t40.addEventListener("animationend",function(){show41()});
t41.addEventListener("animationend",function(){show42()});
tbutton4.addEventListener("click",function(){showNext4()});

t50.addEventListener("animationend",function(){show51()});
t51.addEventListener("animationend",function(){show52()});
t52.addEventListener("animationend",function(){show53()});
t53.addEventListener("animationend",function(){show54()});
t54.addEventListener("animationend",function(){show55()});
tbutton5.addEventListener("click",function(){showNext5()});

t60.addEventListener("animationend",function(){show61()});
t61.addEventListener("animationend",function(){show62()});
t62.addEventListener("animationend",function(){show63()});
t63.addEventListener("animationend",function(){show64()});
tbutton6.addEventListener("click",function(){showNext6()});

function start() {
  starting.classList.add("slide");
  starting.style.opacity="0";
  starting.style.left="-100%";
  tajomaru.classList.add("showl");
  tajomaru.style.visibility = "visible";
  button.style.visibility = "visible";
}
function show10(){
  t10.classList.add("show");
  t10.style.visibility = "visible";
}
function show11(){
  t10.classList.add("vanish");
  t10.style.opacity = "0";
  t11.classList.add("show");
  t11.style.visibility = "visible";
}
function show12(){
  t11.classList.add("vanish");
  t11.style.opacity = "0";
  t12.classList.add("show");
  t12.style.visibility = "visible";
}
function show13(){
  t12.classList.add("vanish");
  t12.style.opacity = "0";
  t13.classList.add("show");
  t13.style.visibility = "visible";
  tbutton1.classList.add("show");
  tbutton1.style.visibility = "visible";
}
function showNext1(){
  tmono1.classList.add("vanish");
  tmono1.style.opacity = "0";
  tmono2.classList.add("show");
  tmono2.style.visibility= "visible";
}

function show20(){
  horseback.classList.add("showl");
  horseback.style.visibility = "visible";
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
}
function show23(){
  t22.classList.add("vanish");
  t22.style.opacity = "0";
  t23.classList.add("show");
  t23.style.visibility = "visible";
}
function show24(){
  t23.classList.add("vanish");
  t23.style.opacity = "0";
  t24.classList.add("show");
  t24.style.visibility = "visible";
  tbutton2.classList.add("show");
  tbutton2.style.visibility = "visible";
}
function showNext2(){
  tmono2.classList.add("vanish");
  tmono2.style.opacity = "0";
  tmono3.classList.add("show");
  tmono3.style.visibility= "visible";
  tajomaru2.classList.add("showl");
  tajomaru2.style.visibility = "visible";
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
  tbutton3.classList.add("show");
  tbutton3.style.visibility = "visible";
}
function showNext3(){
  tmono3.classList.add("vanish");
  tmono3.style.opacity = "0";
  tmono4.classList.add("show");
  tmono4.style.visibility= "visible";
  masago2.classList.add("showl");
  masago2.style.visibility= "visible";
  kanazawa2.classList.add("showl");
  kanazawa2.style.visibility= "visible";
}

function show40(){
  t40.classList.add("show");
  t40.style.visibility = "visible";
}
function show41(){
  t40.classList.add("vanish");
  t40.style.opacity = "0";
  masago2.classList.add("slide4-1");
  masago2.style.opacity= "0";
  t41.classList.add("show");
  t41.style.visibility = "visible";
}
function show42(){
  t41.classList.add("vanish");
  t41.style.opacity = "0";
  t42.classList.add("show");
  t42.style.visibility = "visible";
  tbutton4.classList.add("show");
  tbutton4.style.visibility = "visible";
}
function showNext4(){
  tmono4.classList.add("vanish");
  tmono4.style.opacity = "0";
  tmono5.classList.add("show");
  tmono5.style.visibility= "visible";
}

function show50(){
  bg51.classList.add("thinner");
  bg51.style.width="180%";
  bg51.style.top="-40%";
  bg51.style.left="-40%";
  tbutton50.style.visibility = "hidden";
  t50.classList.add("show");
  t50.style.visibility = "visible";
}
function show51(){
  t50.classList.add("vanish");
  t50.style.opacity = "0";
  t51.classList.add("show");
  t51.style.visibility = "visible";
  img51.style.visibility = "visible";
  img51.classList.add("pop");
}
function show52(){
  t51.classList.add("vanish");
  t51.style.opacity = "0";
  t52.classList.add("show");
  t52.style.visibility = "visible";
}
function show53(){
  bg51.classList.add("vanishb");
  bg51.style.opacity="0";
  t52.classList.add("vanish");
  t52.style.opacity = "0";
  t53.classList.add("show");
  t53.style.visibility = "visible";
  img51.style.opacity = "0";
  img51.classList.add("vanish");
  img52.classList.add("show");
  img52.style.visibility = "visible";
}
function show54(){
  t53.classList.add("vanish");
  t53.style.opacity = "0";
  t54.classList.add("show");
  t54.style.visibility = "visible";
}
function show55(){
  t54.classList.add("vanish");
  t54.style.opacity = "0";
  t55.classList.add("show");
  t55.style.visibility = "visible";
  tbutton5.classList.add("show");
  tbutton5.style.visibility = "visible";
}
function showNext5(){
  tmono5.classList.add("vanish");
  tmono5.style.opacity = "0";
  tmono6.classList.add("show");
  tmono6.style.visibility= "visible";
  t60.classList.add("show");
  t60.style.visibility = "visible";
}

function show61(){
  t60.classList.add("vanish");
  t60.style.opacity = "0";
  t61.classList.add("show");
  t61.style.visibility = "visible";
  img61.classList.add("show");
  img61.style.visibility = "visible";
}
function show62(){
  t61.classList.add("vanish");
  t61.style.opacity = "0";
  t62.classList.add("show");
  t62.style.visibility = "visible";
}
function show63(){
  t62.classList.add("vanish");
  t62.style.opacity = "0";
  t63.classList.add("show");
  t63.style.visibility = "visible";
  img61.classList.add("vanishc");
  img61.style.opacity = "0";
  img62.classList.add("showc");
  img62.style.visibility = "visible";
}
function show64(){
  t63.classList.add("vanish");
  t63.style.opacity = "0";
  t64.classList.add("show");
  t64.style.visibility = "visible";
  tbutton6.classList.add("show");
  tbutton6.style.visibility = "visible";
}
function showNext6(){
  tmono6.classList.add("vanish");
  tmono6.style.opacity = "0";
  setTimeout(function nextpage(){
    window.setTimeout('window.location.replace("../confession-k/index.html")',10);
  },3000);
}
