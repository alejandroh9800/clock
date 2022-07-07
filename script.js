  let counter = document.getElementById('counter')
  let butt = document.getElementById('butt')
  
  let x = 0
 /* 
  butt.addEventListener("click", doStuff)

function doStuff(){
  
  x += 1  //x = x + 1

  counter.innerHTML = x
  
}
*/


butt.addEventListener("click", function(){
  
  x+=1
  counter.innerHTML = x 
  
  
})


butt.addEventListener("mouseover", function(){
  
  const colors = ["red", "green", "blue"]
  
  let i = Math.floor(Math.random() * 3);
  
  butt.style.background = colors[i]
  
})