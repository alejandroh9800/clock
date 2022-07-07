  let counter = document.getElementById('counter')
  let butt = document.getElementById('butt')
  
  let x = 0
  
  butt.addEventListener("click", doStuff)

function doStuff(){
  
  x += 1  //x = x + 1
 
  counter.innerHTML = x
}

