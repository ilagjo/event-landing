// const container = document.querySelector('.container');
// const wordContainer = document.querySelector('.word-artificial');

// const letters = ['r', 't', 'f', 'i', 'c', 'i', 'a', 'l'];

// letters.forEach((letter, index) => {
//   const span = document.createElement('span');
//   span.textContent = letter;
//   span.classList.add('letter');
//   span.style.animationDelay = `${2.5 + index * 0.1}s`; // Aggiungi un ritardo crescente per ogni lettera
//   wordContainer.appendChild(span);
// });

// // Aggiungi classe per l'animazione della lettera "A"
// const letterA = document.querySelector('.letter-a');
// letterA.classList.add('animated');

// // Aggiungi classe per l'animazione della lettera "I"
// const letterI = document.querySelector('.letter-i');
// letterI.classList.add('animated');


// const container = document.getElementById('text-animation');
// const letters = container.getElementsByTagName('span');
// const word1 = 'Artificial';
// const word2 = 'Intelligence';

// // Nascondi le lettere dopo la prima
// for (let i = 1; i < letters.length; i++) {
//   letters[i].style.opacity = '0';
// }

// // Crea l'animazione
// const timeline = gsap.timeline();
// timeline.to(letters[0], { x: -20, duration: 1 })
//   .to(letters[1], { opacity: 1, duration: 1 })
//   .to(letters[1], { x: -20, duration: 1 }, `+=${word1.length - 1}`)
//   .to(letters[2], { opacity: 1, duration: 1 })
//   .to(letters[3], { opacity: 1, duration: 1 })
//   .to(letters[4], { opacity: 1, duration: 1 })
//   .to(letters[5], { opacity: 1, duration: 1 })
//   .to(letters[6], { opacity: 1, duration: 1 });

// timeline.play();

window.onload = function() {
  var text1 = "rtificial";
  var characters1 = text1.split("");

  for (var i = 0; i < characters1.length; i++) {
    (function(i) {
      setTimeout(function() {
        document.getElementById("typedText1").innerHTML += characters1[i];
      }, 200 * i);
    })(i);
  }

  var text2 = "ntelligence";
  var characters2 = text2.split("");

  for (var j = 0; j < characters2.length; j++) {
    (function(j) {
      setTimeout(function() {
        document.getElementById("typedText2").innerHTML += characters2[j];
      }, 100 * j);
    })(j);
  }
}


function updateCountdown() {
  const eventDate = new Date('September 15, 2023 14:30:00').getTime();
  const currentDate = new Date().getTime();
  const difference = eventDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const countdown = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  document.getElementById("countdown").innerHTML = countdown;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();
