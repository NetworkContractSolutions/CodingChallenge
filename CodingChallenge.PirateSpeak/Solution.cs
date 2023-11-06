using System;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            if (string.IsNullOrWhiteSpace(jumble) || dictionary == null || dictionary.Length == 0)
            {
                return new string[0];
            }

            var jumbledMessageLetterCounts = GetLetterCounts(jumble.ToLower());

            var matchingWords = dictionary
                .Where(word => LetterCountsMatch(jumbledMessageLetterCounts, GetLetterCounts(word.ToLower())))
                .ToArray();

            return matchingWords;
        }

        private int[] GetLetterCounts(string word)
        {
            var letterCounts = new int[26];

            foreach (var letter in word)
            {
                if (char.IsLetter(letter))
                {
                    letterCounts[letter - 'a']++;
                }
            }

            return letterCounts;
        }

        private bool LetterCountsMatch(int[] counts1, int[] counts2)
        {
            for (var i = 0; i < 26; i++)
            {
                if (counts1[i] != counts2[i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}