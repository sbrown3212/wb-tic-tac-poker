console.log('Hello, world!');

let player = 'X';

function play(e) {
    e.target.innerText = player;
    
    // if (player === 'X') {
    //     player = 'O';
    // } else {
    //     player = 'X';
    // }
    player === 'X' ? player = 'O' : player = 'X';
    
    console.log('player:', player)
    document.querySelector('span#current-player').innerText = player

}

const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('click', play);
}