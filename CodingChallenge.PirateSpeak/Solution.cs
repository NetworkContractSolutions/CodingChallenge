using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            //Declare list and array variabes to keep track of words
            List<string> possibleWords = new List<string>();
            string[] wordsArray;

            //Sort the characters in jumble alphabetically
            char[] jumbleArray = jumble.ToCharArray();
            Array.Sort(jumbleArray);
            string sortedJumble = new string(jumbleArray);

            //Loop through each word in dictionary
            foreach (string word in dictionary)
            {
                //Sort the word's characters alphabetically
                char[] wordArray = word.ToCharArray();
                Array.Sort(wordArray);
                string sortedWord = new string(wordArray);

                //Check if the sortedWord and sortedJumble match
                if (sortedWord == sortedJumble)
                {
                    possibleWords.Add(word);
                }
            }

            //Convert list to array and return
            wordsArray = possibleWords.ToArray();
            return wordsArray;
        }
    }
}