using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWordsWithRecursion(string jumble, string[] dictionary)
        {
            var jumbleLength = jumble.Length;
            var dictionaryList = new List<string>(dictionary);

            //Permutations list used to track all possible variations of the jumbled word
            var permutations = new List<string>();

            Unjumble(jumble, 0, jumbleLength - 1, permutations);

            //Using the passed in dictionary and all possible permutations, find the items that match
            return dictionaryList.Where(di => permutations.Any(pi => (pi == di && pi == di))).ToArray();
        }

        private static void Unjumble(string jumble, int beginIndex, int endIndex, ICollection<string> permutations)
        {
            if (beginIndex == endIndex)
            {
                permutations.Add(jumble);
            }
            else
            {
                for (var i = beginIndex; i <= endIndex; i++)
                {
                    jumble = Swap(jumble, beginIndex, i);
                    Unjumble(jumble, beginIndex + 1, endIndex, permutations);
                    jumble = Swap(jumble, beginIndex, i);
                }
            }
        }

        //Swap around characters in the jumbled string in order to create all possible permutations
        private static string Swap(string jumble, int i, int x)
        {
            var charArray = jumble.ToCharArray();
            var temp = charArray[i];
            charArray[i] = charArray[x];
            charArray[x] = temp;
            var s = new string(charArray);
            return s;
        }

        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var wordList = dictionary.ToList();

            foreach (var word in dictionary)
            {
                var tempWordList = wordList;
                var tempJumble = jumble;

                //Remove from the list if the length isn't equal
                if (word.Length != jumble.Length)
                {
                    tempWordList.Remove(word);
                    continue;
                }

                //remove from the list based on each word in the dictionary (determined by the characters in those words)
                foreach (var letter in word)
                {
                    var charToRemove = tempJumble.IndexOf(letter);
                    {
                        if (!tempJumble.Contains(letter))
                        {
                            tempWordList.Remove(word);
                            break;
                        }
                    }
                    tempJumble = tempJumble.Remove(charToRemove, 1);
                }
            }
            return wordList.ToArray();
        }
    }
}