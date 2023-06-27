let cont = document.getElementById('container');
let burgur=document.getElementById('burgur');
let line1= document.getElementById('line1');
let line2= document.getElementById('line2');
let line3= document.getElementById('line3');
let box= document.getElementById('box');
let next= document.getElementById('next');
burgur.addEventListener('click', () => {
  if (navbar.style.height == '70px') {
    navbar.style.height = '0px';
    line1.style.transform = `rotate(0deg)`;
    line3.style.transform = `rotate(0deg)`;
    line2.style.visibility = 'visible';
    burgur.style.backgroundColor='rgba(158,170, 188, 1)'
  }
  else {
    navbar.style.height = '70px';
    line1.style.transform = `rotate(35deg)`;
    line3.style.transform = `rotate(-35deg)`;
    line2.style.visibility = 'hidden';
   burgur.style.backgroundColor='#AC1B1B91'
  }
});

let c= cont.addEventListener('click', () => {
  if (navbar.style.height == '70px') {
    navbar.style.height = '0px';
    line1.style.transform = `rotate(0deg)`;
    line3.style.transform = `rotate(0deg)`;
    line2.style.visibility = 'visible';
    burgur.style.backgroundColor='rgba(158,170, 188, 1)'
  }
});


/*--------------------------taking jokes -------------------------*/

let arrey = ["I was going to tell you a joke about boxing, but I forgot the punch line &#129325;.",
"Why do programmers prefer dark mode?<br><br>Because light attracts bugs!&#129714;",
"Why do Java developers wear glasses?<br><br>Because they can't C#.",
"Why did the melon jump into the lake? It wanted to be a water-melon &#128512;.",
"Why was 6 afraid of 7? Because 7 ate 9! &#129327;",
"Why won’t it hurt if you hit your friend with a 2-liter of soda? Because it’s a soft drink! &#129346;",
"Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
"Why was the torch happy? It was lit.",
"Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.",
"What did one ocean say to the other ocean? Nothing, they just waved.",
"What do you call an alligator in a vest? An investigator.",
"I told my doctor that I had broken my arm in two places. He told me to stop going to those places.",
"What’s a plant’s favorite drink? Root beer!",
"What to call a broken pencil &#65039;?? <br>A pointless.",
"April Fools’ Day is canceled this year because everything after March of 2020 has been a prank.",
"Who needs April Fools’ when your whole life is a joke?",
"Let's be honest, I'm not into summer, fall, or winter cleaning either.",
"Why did the egg hide? It was a little chicken.",
"What did the dirt say to the rain? If you keep this up, my name will be mud!",
"Why couldn't the sunflower ride its bike? It lost its petals.",
"What kind of candy do astronauts like? Mars bars.",
"Why was the JavaScript developer sad?<br><br>Because he didn't know how to 'null' his feelings.",
"What month is the shortest of the year? May, it only has three letters.",
"How do you open a banana? With a mon-key.",
"What did one plate say to the other plate? Dinner's on me.",
"Why do oranges wear sunscreen? So they don't peel.",
"My wife told me to stop acting like a flamingo, so I had to put my foot down.",
"Where does Batman go to the bathroom? The batroom.",
"What did the left eye say to the right eye? Between you and me, something smells.",
"What did the mama tomato say to the baby tomato? Catch up!",
"I'm so good at sleeping I can do it with my eyes closed!",
"What happens when a strawberry gets run over crossing the street? Traffic jam.",
"Why don't scientists trust atoms? Because they make up everything!",
"Why don't skeletons fight each other? They don't have the guts!",
"Why don't some couples go to the gym? Because some relationships don't work out! &#128512;",
"Why couldn't the bicycle stand up by itself? It was two-tired!",
"Why don't eggs tell jokes? Because they might crack up!",
"Why don't seagulls fly over the bay? Because then they would be bay-gulls!",
"Why did the tomato turn red? Because it saw the salad dressing!",
"Are you a magician? Because whenever I look at you, everyone else disappears!",
"What do you call a rose &#129344; that want to go the moon &#127773;<br><br>Gulabjamoon!!",
"What is the most shocking city in the world ?<br><br>Electricity &#9889;",
"Chintu to his mother:Amma, can I watch more TV?<br><br>Amma:Only if you don't turn it on &#128070;",
 "How does dry skin affect you at work?<br><br>You don’t have any elbow grease to put into it.",
 "I only know 25 letters of the alphabet. I don't know U.",
 "What do you call someone with no body and no nose? Nobody knows.",
 "This graveyard looks overcrowded. People must be dying to get in.",
 "You think swimming with sharks is expensive? Swimming with sharks cost me an arm and a leg.",
  
]
//console.log(arrey.length);
function display(){
  box.innerHTML = ` ${arrey[Rj]}`;
}

let Rj = Math.floor(Math.random() * (arrey.length));
setTimeout(display, 2000);
box.innerHTML = `<span id="load"></span><span id="ltext">getting jokes for you</span>`;
//console.log(Rj);
let count=0;
let n=next.addEventListener('click', () => {
   Rj = Math.floor(Math.random() * (arrey.length));
  //console.log(Rj);
  setTimeout(display,3000);
  box.innerHTML = `<span id="load"></span><span id="ltext">getting jokes for you</span>`;
});

/*let ic=0;
while(ic<arrey.length)
{
document.write(arrey[ic]+ "<br>");
  ic++
}*/