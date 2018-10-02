using System;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            // Quick delegate to sort the characters into ordered arrays
            Func<string, char[]> sortArray = s => {
                var c = s.ToCharArray();
                Array.Sort(c);
                return c;
            };

            // Now compare the sorted jumble with sorted versions of each word in the array, return matches
            return dictionary.Where(w =>
            {
                return sortArray(jumble).SequenceEqual(sortArray(w));
            }).ToArray();
        }
    }
}