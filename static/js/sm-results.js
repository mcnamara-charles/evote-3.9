console.log("File Attached");

const resultHolder = document.getElementsByClassName("question-holder");

let winners = [];
let losers = [];

for (let i = 0; i < resultHolder.length; i++) {
  let radioControls = resultHolder[i].childNodes;
  let highestVal = 0;
  let currentWinner = [];
  for (let i = 0; i < radioControls.length; i++) {
    let cValue = parseInt(radioControls[i].childNodes[0].innerHTML);
    if (cValue > currentWinner) {
      for (let i = 0; i < currentWinner.length; i++) {
        losers.push(currentWinner[i]);
      }
      currentWinner = [];
      currentWinner.push(radioControls[i]);
      let highestVal = cValue;
    } else if (cValue == currentWinner && cValue > 0) {
      currentWinner.push(radioControls[i]);
    } else {
      losers.push(radioControls[i]);
    }
  }
  for (let i = 0; i < currentWinner.length; i++) {
    winners.push(currentWinner[i]);
  }
}

for (let i = 0; i < winners.length; i++) {
  winners[i].classList.add("radiowinner");
}

for (let i = 0; i < losers.length; i++) {
  losers[i].classList.add("radioloser");
}
