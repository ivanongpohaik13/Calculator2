var val=document.getElementById("interface");

function fequal() { 
  var answer = eval(val.innerHTML);
  val.innerHTML = answer;
}

function f1() { 
  val.innerHTML= val.innerHTML + "1";
  //console.log();
}
function f2() { 
  val.innerHTML= val.innerHTML + "2";
}
function f3() { 
  val.innerHTML= val.innerHTML + "3";
}
function f4() { 
  val.innerHTML= val.innerHTML + "4";
}
function f5() { 
  val.innerHTML= val.innerHTML + "5";
}
function f6() { 
  val.innerHTML= val.innerHTML + "6";
}
function f7() { 
  val.innerHTML= val.innerHTML + "7";
}
function f8() { 
  val.innerHTML= val.innerHTML + "8";
}
function f9() { 
  val.innerHTML= val.innerHTML + "9";
}
function f0() { 
  val.innerHTML= val.innerHTML + "0";
}
function fdecimal() { 
  val.innerHTML= val.innerHTML + ".";
}
function fplus() { 
  val.innerHTML= val.innerHTML + "+";
}
function fminus() { 
  val.innerHTML= val.innerHTML + "-";
}
function fmultiply() { 
  val.innerHTML= val.innerHTML + "*";
}
function fdivide() { 
  val.innerHTML= val.innerHTML + "/";
}
function clean() {
  val.innerHTML= "";
}
function backspace(){
  val.innerHTML = val.innerHTML.substr(0,val.innerHTML.length -1);
}

var sv=[];//slot value
var slot=document.querySelectorAll(".slot-value");
var i;
function add2slot(){
  if (val.innerHTML===""){  
  }else{
  sv.push(val.innerHTML); 
  for(i=0; i<sv.length; i++) {
    slot[i].innerHTML = sv[i];
  }
  console.log(sv);
  }
}

function delslot(){
  var num = document.activeElement.tabIndex;
  //console.log(document.activeElement.tabIndex);
  slot[num].innerHTML = "";
  sv.splice(num,1);
  for(i=0; i<sv.length; i++) {
    slot[i].innerHTML = sv[i];
  }
  var r= sv.length;
  slot[r].innerHTML = "";
  console.log(sv);
}


function copy(){
  var num = document.activeElement.tabIndex;
  var copy = slot[num].innerHTML;
  val.innerHTML= val.innerHTML + copy;
}

function clear_all_slot(){
  for(i=0; i<6; i++){//   6=sv.length
    slot[i].innerHTML = "";
    sv.shift();
  }
  console.log(sv);
}
document.addEventListener("keydown",key_in)
function key_in(event){
  //console.log(event.which);
  var input = event.which || event.keyCode;    
  switch (input){
    case 48:
      f0();
      break;
    case 49:
      f1();
      break;
    case 50:
      f2();
      break;
    case 51:
      f3();
      break;
    case 52:
      f4();
      break;
    case 53:
      f5();
      break;
    case 54:
      f6();
      break;
    case 55:
      f7();
      break;
    case 56:
      f8();
      break;
    case 57:
      f9();
      break;
    case 43:
      fplus();
      break;
    case 46:
      fdecimal();
      break;
    case 45:
      fminus();
      break;
    case 42:
      fmultiply();
      break;
    case 47:
      fdivide();
      break;
    case 13:
    case 61:
      fequal();
      break;
    case 8:
      backspace();
      break;
    /*case :
      clean();
      break;*/
    case 16:
      add2slot();
      break;
    default:
      break;
  }
}
