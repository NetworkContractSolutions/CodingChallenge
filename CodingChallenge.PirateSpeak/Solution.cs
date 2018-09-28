using System;
using System.Linq;
using System.Collections.Generic;


        //[TestCase("trisf", new []{"first"}, new[] {"first"})]
        //[TestCase("oob", new[] {"bob", "baobob"},new string[0])]
        //[TestCase("ainstuomn", new[] { "mountains", "hills", "mesa" }, new[] { "mountains" })]
        //[TestCase("oopl", new[] { "donkey", "pool", "horse", "loop" }, new[] { "pool", "loop" })]
        //[TestCase("oprst", new[] {"sport", "ports", "ball", "bat", "port"}, new[] {"sport", "ports"})]


namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            // Order jumble by characters in asec, this returned an IOrderedEnumerable. String.Join joins the IOrderedEnumerable
            // into a string. The ToLower() is to account for any uppercase characters that may be passed.

            string sortedJumble = (String.Join("", jumble.OrderBy(x => x))).ToLower();

            // Looks like Array.Append() as been removed? So need to convert the string array to a List in order to add items to it
            // possibleWords will contain a list of potential mumblings the pirate could have been saying

            List<string> possibleWords = new List<string>();

            // Loop over each word in the supplied dictionary

            foreach (string word in dictionary)
            {
                // Sorted the current word just as jumble was sorted.

                string sortedWord = (String.Join("", word.OrderBy(x => x))).ToLower();

                // If sortedWord contains the sortedJumble and the words are the same length, add the current word to possibleWords
                // If you do not check the length of the sorted words, it is possible for sortedJumble to match sortedWord with sortedWord having extra letters

                if ((sortedWord.Contains(sortedJumble)) && (sortedWord.Count() == sortedJumble.Count()))
                {
                    possibleWords.Add(word);
                }
            }

            return possibleWords.ToArray();
        }
    }
}