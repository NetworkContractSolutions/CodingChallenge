using System;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        private const int AsciiOffset = 97;

        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var dictionaryHasItems = dictionary?.Any() ?? false;
            if (string.IsNullOrWhiteSpace(jumble) || !dictionaryHasItems)
            {
                return new string[0];
            }

            var jumbleKey = GetLetterCounts(jumble);

            var words = dictionary
                .Where(dictionaryWord => LetterCountsMatch(jumbleKey, GetLetterCounts(dictionaryWord) ))
                .ToArray();

            return words;
        }

        /// <summary>
        /// Get an array of 26 elements with the count of letters in each element
        /// </summary>
        /// <param name="wordJumble">Jumbled word</param>
        /// <returns>Int array with 26 elements</returns>
        private int[] GetLetterCounts(string wordJumble)
        {
            var letterCounts = Enumerable.Repeat(0, 26).ToArray();

            foreach (var letter in wordJumble.ToLower())
            {
                letterCounts[GetLetterIndex(letter)]++;
            }

            return letterCounts;
        }

        /// <summary>
        /// Get index for each letter
        /// 
        /// Examples:
        ///     A = 0
        ///     B = 1
        ///     ...
        ///     Z = 25
        /// </summary>
        /// <param name="letter">Character letter</param>
        /// <returns>Int index</returns>
        private int GetLetterIndex(char letter) => letter - AsciiOffset;

        /// <summary>
        /// Compare int arrays, return false if their values don't match-up
        /// </summary>
        /// <param name="letterCounts1">First array of letterCounts</param>
        /// <param name="letterCounts2">Second array of letterCounts</param>
        /// <returns>True if their values match-up</returns>
        private bool LetterCountsMatch(int[] letterCounts1, int[] letterCounts2)
        {
            if (letterCounts1 == null || letterCounts1.Length != letterCounts2.Length)
            {
                return false;
            }

            for (var i = 0; i < letterCounts1.Length; i++)
            {
                if (letterCounts1[i] != letterCounts2[i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}