 import {meditationsBySyllable} from "./meditations"
 
 const syllableMapper = [
    "oneSyllable",
    "twoSyllables",
    "threeSyllables",
    "fourSyllables",
    "fiveSyllables"
  ];

  const randomNumberGenerator = max => Math.ceil(Math.random() * max);

  const wordPicker = numOfSyllables => {
    const random = randomNumberGenerator(
      meditationsBySyllable[numOfSyllables].length - 1
    );
    return meditationsBySyllable[numOfSyllables][random];
  };

  export const emptyHaiku = {
    lineOne: "",
    lineTwo: "",
    lineThree: ""
  };

  export const lineGenerator = startingSyllableCount => {
    let line = "";
    let syllablesLeftInLine = startingSyllableCount;
    while (syllablesLeftInLine > 0) {
      let syllablesForNextLine = randomNumberGenerator(syllablesLeftInLine);
      while (syllablesForNextLine > 5) {
        syllablesForNextLine = randomNumberGenerator(syllablesLeftInLine);
      }
      line += `${wordPicker(syllableMapper[syllablesForNextLine - 1])} `;
      syllablesLeftInLine -= syllablesForNextLine;
    }
    return line;
  };

  