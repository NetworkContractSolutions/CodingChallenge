using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        private Dictionary<char, int> _availableLetters;

        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            //Start by putting all available letters in a dictionary for quick lookup.
            _availableLetters = BuildLetterDictionary(jumble);

            var foundWords = new List<string>();
            foreach (var word in dictionary)
            {
                //Assumption: Test case "oprst" suggests that all words in the jumble must be used.
                //i.e. "port" is in "oprst" but the s is not used so the pirate did not mean to say "port".
                if (word.Length == jumble.Length && WordExistsInJumble(word))
                {
                    foundWords.Add(word);
                }
            }

            return foundWords.Distinct().ToArray();
        }

        /// <summary>
        /// Utility method for converting string to dictionary for easy comparison. 
        /// Each char is used as a key and the value is the number of times that char appears.
        /// </summary>
        /// <param name="stringToConvert">String to be converted to a dictionary.</param>
        /// <returns>Dictionary of characters and their count.</returns>
        private Dictionary<char, int> BuildLetterDictionary(string stringToConvert)
        {
            //Assumption: Non-letter characters have already been removed.
            var letterDictionary = new Dictionary<char, int>();

            stringToConvert.ToList().ForEach(x =>
            {
                if (letterDictionary.ContainsKey(x))
                {
                    letterDictionary[x]++;

                }
                else
                {
                    letterDictionary[x] = 1;
                }
            });

            return letterDictionary;
        }

        /// <summary>
        /// Ultility method for finding word matches in _availableLetters.
        /// </summary>
        /// <param name="word">string to check if all characters exist in _availableLetters.</param>
        /// <returns>True if all the letters exist in the correct amount. Otherwise false.</returns>
        private bool WordExistsInJumble(string word)
        {
            var wordDictionary = BuildLetterDictionary(word);
            foreach (var letterInWord in wordDictionary)
            {
                //If the key does not exist then the letter does not appear at all.
                if (!_availableLetters.ContainsKey(letterInWord.Key))
                {
                    return false;
                }

                //If the key does exist we need to make sure we have the correct count.
                var numberOfTimeLetterAppearsInJumble = _availableLetters[letterInWord.Key];

                if (numberOfTimeLetterAppearsInJumble != letterInWord.Value)
                {
                    return false;
                }
            }

            return true;
        }
    }
}