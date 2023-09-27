using System;
using System.Collections.Generic;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var results = new List<string>();
            // for each string in dictionary, check if it contains all the characters in jumble
            // and if it does, add it to the results list, and assign that character in jumble to a space
            // also check if the string in dictionary is the same length as jumble
            foreach(var word in dictionary)
            {
                var jumbleArray = jumble.ToCharArray();

                if (word.Length != jumble.Length)
                {
                    continue;
                }
                var isMatch = true;

                foreach(var letter in word)
                {
                    var firstIndexInJumble = Array.IndexOf(jumbleArray, letter);
                    if(firstIndexInJumble == -1)
                    {
                        isMatch = false;
                        break;
                    }

                    jumbleArray[firstIndexInJumble] = ' ';
                }

                if(isMatch)
                {
                    results.Add(word);
                }
            }

            return results.ToArray();
        }
    }
}