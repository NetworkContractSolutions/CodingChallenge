using System;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            if(string.IsNullOrEmpty(jumble) 
                || dictionary == null 
                || dictionary.Length == 0)
            {
                return new string[0];
            }

            var possibleMatches = dictionary.ToList(); 
            var jumbleCharacterArray = StringToSortedCharacterArray(jumble);

            for (int i = possibleMatches.Count - 1; i >= 0; i--)
            {
                var possibleMatchArray = StringToSortedCharacterArray(possibleMatches[i]);

                if(!possibleMatchArray.SequenceEqual(jumbleCharacterArray))
                {
                    possibleMatches.Remove(possibleMatches[i]);
                }
            }

            return possibleMatches.ToArray();
        }

        private char[] StringToSortedCharacterArray(string inputString)
        {
            char[] retVal = inputString.ToLower().ToCharArray();
            Array.Sort(retVal);

            return retVal;
        }
    }
}