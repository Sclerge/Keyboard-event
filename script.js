const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function pickRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

let secretLetter = pickRandomLetter();

document.body.addEventListener('keydown', function(event) {

    if (event.key === secretLetter) {
        const listItem = document.createElement('li');
        listItem.textContent = `SECRET KEY PRESSED: ${secretLetter}`;
        document.getElementById('events').appendChild(listItem);

        secretLetter = pickRandomLetter();
    }
});
