const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(capital)
}


function capital(sentence) {
  let newSentence = sentence.split(' ');
  let finalSentence = []
  for (let word of newSentence) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    finalSentence.push(word);
  }

  finalSentence = finalSentence.join(' ')
  return finalSentence;
}

