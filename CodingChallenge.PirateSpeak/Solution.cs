using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var outputList = new List<string>();
            var charArray = jumble.ToLower().ToCharArray();
            Array.Sort(charArray);
            foreach (var word in dictionary)
            {
                var wordCharArray = word.ToLower().ToCharArray();
                Array.Sort(wordCharArray);
                if (charArray.Length == wordCharArray.Length && charArray.SequenceEqual(wordCharArray))
                    outputList.Add(word);
            }
            return outputList.ToArray();
        }
    }
}