console.log('Hello, world!');

let player = 'X';

function play(e) {
  // QUESTION: why do alerts show up before square innerText and current-player innerText are updated?
  // TODO: prevent square from being reassigned once previously selected.
  e.target.innerText = player;

  player === 'X' ? player = 'O' : player = 'X';
    
  document.querySelector('span#current-player').innerText = player

  let winner = calculateWinner();
  if (winner) {
    alert(`${winner} is the winner!`);
  } else if (isTie()) {
    alert(`Tie game!`);
  }
}

const squares = document.querySelectorAll('.square');

for (const square of squares) {
  square.addEventListener('click', play);
}

function calculateWinner() {
  const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    const aText = squares[a].innerText;
    const bText = squares[b].innerText;
    const cText = squares[c].innerText;

    if (aText !== '' && aText === bText && aText === cText) {
      return aText;
    }
  }
}

function isTie() {
  for (const square of squares) {
    if (square.innerText === '') {
      return false;
    }
  }
  return true;
}