window.onload = function() {
  var text1 = "Artificial";
  var characters1 = text1.split("");

  for (var i = 0; i < characters1.length; i++) {
    (function(i) {
      setTimeout(function() {
        document.getElementById("typedText1").innerHTML += characters1[i];
      }, 200 * i);
    })(i);
  }

  var text2 = "Intelligence";
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
