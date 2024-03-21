// Array of words
const words = ["apple", "banana", "orange", "grape", "strawberry", "kiwi", "pineapple", "blueberry", "watermelon", "peach"];

// Function to generate a random word
function generateRandomWord() {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * words.length);
  // Return the word at the random index
  return words[randomIndex];
}

// Example usage
console.log(generateRandomWord());