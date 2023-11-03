using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var listOfStrings = new List<string>();

            foreach (string word in dictionary)
            {
                if (MatchWord(jumble, word))
                {
                    listOfStrings.Add(word);
                }
            }

            string[] arrayOfStrings = listOfStrings.ToArray();
            return arrayOfStrings;
        }

        private bool MatchWord(string jumble, string word)
        {
            var match = false;
            var listOfCharMatchPos = new List<int>();

            if (jumble.Length != word.Length)
                return false;

            foreach (char jchar in jumble)
            {
                for (int i = 0; i < word.Length; i++)
                {
                    if (!listOfCharMatchPos.Contains(i) && jchar == word[i])
                    {
                        listOfCharMatchPos.Add(i);
                        break;
                    }
                }
            }
            if (jumble.Length == listOfCharMatchPos.Count)
                match = true;

            return match;
        }
    }
}