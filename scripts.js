const pigLatin = document.getElementById('pigLatinForm');
pigLatin.addEventListener("submit", e => {
    e.preventDefault()
    const pigWord = document.getElementById('user-input').value.toLowerCase().trim();
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let pig = '';
    let cutOff = 0;
    for (let i = pigWord.length; i >= 0; i--) {
      if (vowels.indexOf(pigWord[i]) > -1) {
        cutOff = i;
      }
    }
    if (cutOff == 0) {
      pig = pigWord + 'yay';
    } else {
      pig = pigWord.slice(cutOff) + pigWord.slice(0, cutOff) + 'ay';
    }
    document.getElementById('display-element').innerHTML = `${pig}          🐷`;
  });