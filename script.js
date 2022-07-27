function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;

  let hour;

  if (h < 13) {
    hour = h;
  } else {
    hour = h % 12;
  }

  let hourHand = document.getElementById("hourHand");
  let minute = m;
  let minuteHand = document.getElementById("minuteHand");

  moveBigHands(hour, hourHand);
  moveSmallHand(minute, minuteHand);

  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function moveBigHandV1(x,y){
 y.style.transition = "all 4s linear";
  
  if(x === 1){
  
     y.style.transform = "rotate(30deg)";
  }
  else if(x === 2){
    
     y.style.transform = "rotate(30deg)";
    
  }
  else if(x === 3){
    
  }
  else if(x === 4){
    
  }
  else if(x === 5){
    
  }
  else if(x === 6){
    
  }
  else if(x === 7){
    
  }
  else if(x === 8){
    
  }
  else if(x === 9){
    
  }  
  
  else if(x === 10){
    
  }
  else if(x === 11){
    
  }
  else if(x === 12){
    
  }
}

function moveBigHandV2(x, y) {
  y.style.transition = "all 4s linear";

  switch (x) {
    case 1:
      y.style.transform = "rotate(30deg)";
      break;
    case 2:
      y.style.transform = "rotate(60deg)";
      break;
    case 3:
      y.style.transform = "rotate(90deg)";
      break;
    case 4:
      y.style.transform = "rotate(120deg)";
      break;
    case 5:
      y.style.transform = "rotate(150deg)";
      break;
    case 6:
      y.style.transform = "rotate(180deg)";
      break;
    case 7:
      y.style.transform = "rotate(210deg)";
      break;
    case 8:
      y.style.transform = "rotate(240deg)";
      break;
    case 9:
      y.style.transform = "rotate(270deg)";
      break;
    case 10:
      y.style.transform = "rotate(300deg)";
      break;
    case 11:
      y.style.transform = "rotate(330deg)";
      break;
  }
}

function moveBigHands(x, y){
  y.style.transition = "all 4s linear";
  
  let degrees = x * 30;
  let deg = degrees + "deg";
  y.style.transform = `rotate(${deg})`;
}

function moveSmallHand(x, y) {
  y.style.transition = "all 1s linear";

  let degrees = x * 6;
  let deg = degrees + "deg";
  y.style.transform = `rotate(${deg})`;
}