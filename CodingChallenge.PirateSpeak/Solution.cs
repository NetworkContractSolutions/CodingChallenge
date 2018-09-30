using System;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            // Sort the jumble alphabetically
            var j = jumble.ToCharArray();
            Array.Sort(j);

            // Now compare the sorted jumble with sorted versions of each word in the array, return matches
            return dictionary.Where(w =>
            {
                var c = w.ToCharArray();
                Array.Sort(c);
                return j.SequenceEqual(c);
            }).ToArray();
        }
    }
}