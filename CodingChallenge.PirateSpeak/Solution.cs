using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var result = new List<string>();
            var jumbleSorted = Sort(jumble);
            foreach (var word in dictionary)
            {
                if (jumbleSorted.Equals(Sort(word)))
                {
                    result.Add(word);
                }
            }
            return result.ToArray();
        }

        private string Sort(string word)
        {
			char[] wordAsArray = word.ToCharArray();
			Array.Sort(wordAsArray);
			var wordSorted = string.Join(' ', wordAsArray);
            return wordSorted;    
		}
	}
}