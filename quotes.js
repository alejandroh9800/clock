let quotes = [
  '\“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.\” — Michael Scott',
  '\“I never thought I’d say this, but I think I ate too much bone marrow.\” — Dwight Schrute',
  '\“Everything I have I owe to this job… this stupid, wonderful, boring, amazing job.\” — Jim Halpert',
  '\“And I feel God in this Chili’s tonight.\” — Pam Beesley',
  '\“I normally don’t enjoy making people laugh.\” — Angela Martin',
  '\“I’m glad Michael’s getting help. He has a lot of issues, and he’s stupid.\” — Phyllis Lapin-Vance',
  '\“No, I’m not going to tell them about the downsizing. If a patient has cancer, you don’t tell them.\” — Michael Scott',
  '\“I run a small fake ID company from my car with a laminating machine that I swiped from the Sheriff’s station.\” — Creed Bratton',
  '\“Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.\” — Michael Scott',
  '\“The worst thing about prison was the dementors.\” — Michael Scott'
]

function Quotes(){
  
  let random = Math.floor(Math.random() * (quotes.length))
  
  document.getElementById('quote').innerHTML = quotes[random]
  
}

Quotes()