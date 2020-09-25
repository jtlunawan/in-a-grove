var qs = document.getElementsByClassName("questionbox");
var ts = document.getElementsByClassName("testi");
var tp = document.getElementsByClassName("testp");
var testibox = document.getElementsByClassName("testibox");
var starting = document.getElementById("start");
var div1 = document.getElementById("interfaceT1");
var div2 = document.getElementById("interfaceT2");
var div3 = document.getElementById("interfaceQ");
var images = document.getElementsByClassName("images");

var o = "0.5";
var n = [0,0,0,0];
var m = 0;
var a = 0;
var preva = 0;

for(var i = 0; i < 4; i++){
  qs[i].addEventListener("click",function(){text(this)});
}
starting.addEventListener("animationend",function(){start()});

function start() {
  starting.classList.add("vanish");
  div1.classList.add("rightwards");
  div2.classList.add("leftwards");
  div3.classList.add("downwards");
  starting.style.opacity="0";
  div1.style.left = "0%";
  div2.style.right = "0%";
  div3.style.top = "0%";
  var homen = document.getElementById("homenDiv");
  var wood = document.getElementById("woodDiv");
  var woman = document.getElementById("womanDiv");
  var monk = document.getElementById("monkDiv");
  for(var i=0; i<4; i++){
    images[i].classList.add("fade");
    images[i].style.opacity = o;
  }
  homen.classList.add("moveHomen");
  monk.classList.add("moveMonk");
  wood.classList.add("moveWood");
  woman.classList.add("moveWoman");
  homen.style.left = "0%";
  monk.style.left = "0%";
  wood.style.right = "0%";
  woman.style.right = "0%";
}

function text(e){
  m++;
  var i;
  // question0
  if(e.id === "q0"){
    i = 0;
  }else if(e.id === "q1"){
    i = 1;
  }else if(e.id === "q2"){
    i = 2;
  }else if(e.id === "q3"){
    i = 3;
  }

  if(n[0]+n[1]+n[2]+n[3]<4){
    n[i] = 1;
    e.style.opacity = o;
    if(i === 0){
      changePos(2);
      a = 2;
      ts[2].innerHTML = "In an out-of-the-way grove of bamboo and cedars in the mountains, about 150 meters off the Yamashina stage road.";
    }else if(i === 1){
      changePos(0);
      preva = a;
      a = 0;
      ts[0].innerHTML = "He is a notorious BRIGAND called TAJOMARU.";
    }else if(i === 2){
      changePos(3);
      preva = a;
      a = 3;
      ts[3].innerHTML = "He was KANAZAWA NO TAKEHIRO, 26 years old. He was of a gentle disposition, so I am sure he did nothing to provoke the anger of others.";
    }else if(i === 3){
      preva = a;
      a = 0;
      ts[0].innerHTML = "He was groaning on the bridge at Awataguchi. He must had fallen off HIS HORSE.";
    }
  }else if(n[0]+n[1]+n[2]+n[3]>=5 && n[0]+n[1]+n[2]+n[3]<40){
    n[i] = 10;
    e.style.opacity = o;
    if(i === 0){
      changePos(1);
      preva = a;
      a = 1;
      ts[1].innerHTML = "He and his wife on the road were going toward Sekiyama ON HORSEBACK about noon yesterday.";
    }else if(i === 1){
      preva = a;
      a = 2;
      ts[2].innerHTML = "It was dressed in a bluish silk kimono and a wrinkle headdress of THE KYOTO STYLE.";
    }else if(i === 2){
      preva = a;
      a = 0;
      ts[0].innerHTML = "I found that SORREL WITH A FINE MANE a little beyond the stone bridge.";
    }else if(i === 3){
      preva = a;
      a = 3;
      ts[3].innerHTML = "He was a SAMURAI from Kokufu in Wakasa NOT FROM KYOTO.";
    }
  }else if(n[0]+n[1]+n[2]+n[3]>=41 && n[0]+n[1]+n[2]+n[3]<400){
    n[i] = 100;
    e.style.opacity = o;
    if(i === 0){
      preva = a;
      a = 3;
      ts[3].innerHTML = "Her name is MASAGO, 19 years old. She is a spirited, fun-loving girl, but I am sure she has never known any man except Takehiro.";
    }else if(i === 1){
      preva = a;
      a = 0;
      ts[0].innerHTML = "Of all the robbers prowling around Kyoto, this Tajomaru has given the most grief to the WOMEN in town.";
    }else if(i === 2){
      preva = a;
      a = 1;
      ts[1].innerHTML = "The man was armed with a sword as well as a bow and SOME TWENTY ODD ARROWS in a quiver.";
    }else if(i === 3){
      preva = a;
      a = 2;
      ts[2].innerHTML = "Nothing except A ROPE at the root of a cedar nearby and A COMB.";
    }
  }else if(n[0]+n[1]+n[2]+n[3]>=401 && n[0]+n[1]+n[2]+n[3]<4000){
    n[i] = 1000;
    e.style.opacity = o;
    if(i === 0){
      preva = a;
      a = 0;
      ts[0].innerHTML = "He was wearing a dark blue silk kimono and a large plain sword and a bow and SEVENTEEN ARROWS LIKE the ones owned by the dead man.";
    }else if(i === 1){
      preva = a;
      a = 1;
      ts[1].innerHTML = "I remember it was a SORREL WITH A FINE MANE.";
    }else if(i === 2){
      preva = a;
      a = 3;
      ts[3].innerHTML = "The fate of my daughter worries me sick. For heaven’s sake leave no stone unturned to FIND HER.";
    }else if(i === 3){
      preva = a;
      a = 2;
      ts[2].innerHTML = "No. It's hard enough for a man to enter, let alone a horse.";
    }
  }else if(n[0]+n[1]+n[2]+n[3]>=4001 && n[0]+n[1]+n[2]+n[3]<40000){
    n[i] = 10000;
    e.style.opacity = o;
    if(i === 0){
      preva = a;
      a = 2;
      ts[2].innerHTML = "The grass and fallen bamboo-blades had been trampled down all around. He must have made a battle of it before being murdered.";
    }else if(i === 1){
      preva = a;
      a = 3;
      ts[3].innerHTML = "I hate that robber Tajomaru. Not only my son-in-law, but my daughter...(words drowned in tears)";
    }else if(i === 2){
      preva = a;
      a = 1;
      ts[1].innerHTML = "Truly human life is as evanescent as the morning dew or a flash of lightning. My words are inadequate to express my sympathy for him.";
    }else if(i === 3){
      preva = a;
      a = 0;
      ts[0].innerHTML = "Tajomaru must be the murderer.";
    }
  }
  changeOpa(a,preva);

  if (n[0]+n[1]+n[2]+n[3]===4){
    setTimeout(function(){changeq4()},1500);
  }else if (n[0]+n[1]+n[2]+n[3]===40){
    setTimeout(function(){changeq40()},1500);
  }else if (n[0]+n[1]+n[2]+n[3]===400){
    setTimeout(function(){changeq400()},1500);
  }else if (n[0]+n[1]+n[2]+n[3]===4000){
    setTimeout(function(){changeq4000()},1500);
  }else if (n[0]+n[1]+n[2]+n[3]===40000){
    setTimeout(function(){nextpage()},1500);
  }
}


function changePos(i){
  testibox[i].style.justifyContent = "flex-start";
  tp[i].style.marginTop = "5%";
  ts[i].style.marginTop = "18%";
  for (var x=0; x<4; x++){
    testibox[x].style.opacity = o;
  }
}
function changeOpa(i, previ){
  testibox[previ].style.opacity = o;
  testibox[i].style.opacity = "1";
  images[previ].style.opacity = o;
  images[i].style.opacity = "1";
}
function changeq4(){
  n[0] = 2;
  for(var i=0; i<4; i++){
    qs[i].style.opacity = "1";
  }
  qs[0].innerHTML = "Where was Kanazawa going?";
  qs[1].innerHTML = "What did the body look like?";
  qs[2].innerHTML = "Did Tajomaru have a horse?";
  qs[3].innerHTML = "Where was Kanazawa from?";
}
function changeq40(){
  n[0] = 11;
  for(var i=0; i<4; i++){
    qs[i].style.opacity = "1";
  }
  qs[0].innerHTML = "Information about Kanazawa’s wife";
  qs[1].innerHTML = "What kind of person is Tajomaru?";
  qs[2].innerHTML = "What did Kanazawa carry with him?";
  qs[3].innerHTML = "Any weapon found on the scene?";
}
function changeq400(){
  n[0] = 101;
  for(var i=0; i<4; i++){
    qs[i].style.opacity = "1";
  }
  qs[0].innerHTML = "What did Tajomaru have with him?";
  qs[1].innerHTML = "What was Kanazawa's horse like?";
  qs[2].innerHTML = "Where is Masago now?";
  qs[3].innerHTML = "Was there a horse on the scene?";
}
function changeq4000(){
  n[0] = 1001;
  for(var i=0; i<4; i++){
    qs[i].style.opacity = "1";
  }
  qs[0].innerHTML = "Comments from the wood cutter";
  qs[1].innerHTML = "Comments from the old woman";
  qs[2].innerHTML = "Comments from the traveling monk";
  qs[3].innerHTML = "Comments from the policeman";
}


function nextpage(){
  qs[2].style.opacity = "1";
  qs[2].innerHTML = "That's what we've got so far.";
  qs[0].innerHTML = "";
  qs[1].innerHTML = "";
  qs[3].innerHTML = "";
  setInterval(function(){go()},1000);
}
function go(){
  document.getElementById("interface").classList.add("vanish");
  interface.style.opacity = "0";
  setInterval(function(){window.location.replace('../confession-t/index.html')},1000);
}
