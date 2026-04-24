Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

GetPossibleWords ("ortsp", ["sport", "parrot", "ports", "matey"])
Should return ["sport", "ports"].

##Approach
- Check for edge cases where the jumble is empty or contains no letters, or if the dictionary is empty.
- Convert both the jumble and dictionary words to lowercase for case-insensitive comparison.
- Count the occurrences of each letter in both the jumble and dictionary words.
- Compare the letter counts to determine if a dictionary word matches the jumble.