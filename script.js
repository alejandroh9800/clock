
 /* 
  butt.addEventListener("click", doStuff)

  function doStuff(){
  
  x += 1  //x = x + 1

  counter.innerHTML = x
  
}
*/

let x = 0


let counter = document.getElementById('counter')
let butt = document.getElementById('butt')
  
butt.addEventListener("click", function(){
  
  x+=1
  counter.innerHTML = x 
  
})

///////////////////////////////////////////////////////



let erase = document.getElementById('Erase')


erase.addEventListener("click", function(){
  
  x = 0
  counter.innerHTML = x
  
})


delete.addEventListener("click", function(){

})



///////////////////////////////////////////////////////




























/*
butt.addEventListener("mouseover", function(){
  
  const colors = ["red", "green", "blue"]
  
  let i = Math.floor(Math.random() * 3);
  
  butt.style.background = colors[i]
  
})

*/