export const createLetterPool = () => {
  const LETTERPOOL = {
      "A":9,"B":2,"C":2,"D":4,
      "E":12,"F":2,"G":3,"H":2,
      "I":9,"J":1,"K":1,"L":4,"M":2,
      "N":6,"O":8,"P":2,"Q":1,
      "R":6,"S":4,"T":6,"U":4,
      "V":2,"W":2,"X":1,
      "Y":2,"Z":1
  };

  let letterList = [];
  for (const [key,value] of Object.entries(LETTERPOOL)) {
    for (let i = 0; i < value; i++) {
      letterList.push(key);
    };
  };
  return letterList;
};

export const drawLetters = () => {
  let letterPool = createLetterPool();

  let letterHand = [];
  for (let i =0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * letterPool.length);
    let randomLetter = letterPool[randomIndex];
    letterHand.push(randomLetter);
    letterPool.splice(randomIndex,1);
  };

  return letterHand;
};


export const getFrequencyMap = (collection) => {
  let frequencyMap = {};
  
  for (const char of collection) {
    if (char in frequencyMap) {
      frequencyMap[char] += 1;
    } else {
      frequencyMap[char] = 1;
    };
  };
  return frequencyMap
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const uppercasedInput = input.toUpperCase();
  
  const wordFreq = getFrequencyMap(uppercasedInput);
  const handFreq = getFrequencyMap(lettersInHand);

  for (const key of Object.keys(wordFreq)) {
    if (!(key in handFreq) || wordFreq[key] > handFreq[key]) {
      return false;
    };
  };

  return true;
};


export const scoreWord = (word) => {
  const uppercasedWord = word.toUpperCase();
  const SCORECHART = {
        "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1,
        "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1,
        "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10
    };

    let wordScore = [...uppercasedWord].reduce((totalScore, char) => {
      return totalScore + SCORECHART[char];
    }, 0);

    const wordLength = uppercasedWord.length;
    if (wordLength > 6) {
      wordScore += 8;
    };

    return wordScore;
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};