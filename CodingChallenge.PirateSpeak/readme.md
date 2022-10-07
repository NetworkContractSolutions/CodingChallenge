# Pirate Speak

## Scope

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

GetPossibleWords ("ortsp", ["sport", "parrot", "ports", "matey"])
Should return ["sport", "ports"].

## Explanation of Answer

Approach to the problem:

* Array of twenty-six integers, for each letter in the alphabet, represents a "hash key" for the word jumble. 
* Convert the array of dictionary words to the "alphabet" array
* Compare the arrays and return a string array with the matching words
* If no word is found, return an empty string array

Minor technical details:

* No changes were made to `Program.cs` because the scope was to just write the function.
* Added test cases for:
  * `EmptyVocabulary()` - validating input
  * `TestPirateShouting()` - changes in cases of the letters
