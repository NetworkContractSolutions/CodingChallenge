using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        private static string ToKey(string input)
        {
            var chars = input.ToLower().ToArray();
            Array.Sort(chars);
            return new string(chars);
        }
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var translations = new List<string>();
            var key = ToKey(jumble);
            foreach(string word in dictionary) 
            {
                if (key == ToKey(word)) translations.Add(word);
            }
            return translations.ToArray();
        }
    }
}