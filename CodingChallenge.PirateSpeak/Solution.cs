using System;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            //move jumble to char array
            var jumbleChars = jumble.ToCharArray();

            //sort jumble
            Array.Sort(jumbleChars);
            
            //sort each string in dictionary and compare to jumble
            var possibleWords = dictionary.Where(word =>
            {
                var wordChars = word.ToCharArray();
                Array.Sort(wordChars);
                return new string(wordChars) == new string(jumbleChars);
            }).ToArray();

            return possibleWords;
        }
    }
}