let quotes = [
  '\“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.\” — Michael Scott',
  '\“I never thought I’d say this, but I think I ate too much bone marrow.\” — Dwight Schrute',
  '\"Time. To Die.\"'
]

function Quotes(){
  
  let random = Math.floor(Math.random() * (quotes.length))
  
  document.getElementById('quote').innerHTML = quotes[random]
  
}

Quotes()