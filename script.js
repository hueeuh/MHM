
alert("Hey there!")
alert("Can I have a moment of your time?")
alert("I have a little something for you.")
alert("Click at your own risk. This might involve cake. (Or not!)")

document.getElementById('invisible-checkbox').addEventListener('change', function() {
  if (this.checked) {
    confetti({
      particleCount: 750,
      spread: 75,
      origin: { y: 0.5}
    });

    setTimeout(startTyping, 1000);
  }
});

const wordList = ["Happy Birthday!",
    " ",
    "Your music has a way of moving me, and your voice... There's just something incredibly powerful and genuine about it. It resonates with me deeply. I honestly believe you are special, and it makes me happy to think of all the people your songs will touch. Wishing you a year where your talent finds its way onto every stage and into every heart it deserves. I truly hope I get to witness it all someday. <3",
    " ",
   "- Hue",
];
let currentSentence = ""; 
const element = document.getElementById("main-background-code");
const typeSpeed = 90; 
let wordIndex = 0;
let listIndex = 0;

function startTyping() {
  document.getElementById('wish-display').style.display = 'block'; 

  function updateText() {
    const currentWord = wordList[listIndex];

    if (wordIndex < currentWord.length) {
      currentSentence += currentWord.charAt(wordIndex); 
      element.innerText = currentSentence;
      wordIndex++;
      setTimeout(updateText, typeSpeed);
    } else {
      currentSentence += "\n";  
      listIndex = (listIndex + 1) % wordList.length;
      wordIndex = 0;

      if (listIndex === 0) { 
        return; 
      }

      setTimeout(updateText, 500); 
    }
  }

  updateText(); 
}