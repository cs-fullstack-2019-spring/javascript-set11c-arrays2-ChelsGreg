

//Ask the user to enter a word to add to an array.
// Add the user input into the array.
// If the user enters a 'q', stop asking them to enter a word.

var wordList=[];

while (true) {
    var addWord = prompt("Enter a word to add");
    if(addWord === 'q')
    {
        break;
    }
    wordList.push(addWord);

}

console.log(wordList);


