const stdin = process.openStdin();

let inputSentence = "";

console.log("Enter a sentence: ");

stdin.addListener("data", function (data) {
  // Trim any leading/trailing whitespace and store the input
  inputSentence = data.toString().trim();

  // Reverse the words in the sentence and print the result
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log("Reversed sentence:", reversedSentence);

  // Close the program
  stdin.pause();
});

function reverseWordsInSentence(sentence) {
  const words = [];
  let currentWord = "";
  let reversedSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === " " || i === sentence.length - 1) {
      if (i === sentence.length - 1) {
        currentWord += char;
      }

      const reversedWord = reverseWord(currentWord);
      words.push(reversedWord);
      currentWord = "";
    } else {
      currentWord += char;
    }
  }

  reversedSentence = words.join(" ");

  return reversedSentence;
}

function reverseWord(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
