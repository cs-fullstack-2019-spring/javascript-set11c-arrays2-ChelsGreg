
//Create an array with 5 numbers.
// Ask the user for the length of the array you want to print.
// Alert the user of the array from 0 to their input.


num = ['5', '6', '7', '8','9'];

var askLength = parseInt(prompt("What is the length of the array that you want to print?"));

 for (var i=0; i<askLength; i++) // Just need to go < index entered since 0 based
 { alert (num[i]); }

