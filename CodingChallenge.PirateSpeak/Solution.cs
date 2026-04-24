using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
        {
            public string GetPossibleWords(string scrambled, string[] dictionary)
            {
                // sort the scrambled word letters
                var sortedScrambled = String.Concat(scrambled.OrderBy(c => c));

                // use LINQ to find all words in the dictionary that, when sorted, match the sorted scrambled word
                var matches = dictionary.Where(word => String.Concat(word.OrderBy(c => c)) == sortedScrambled);

                // return the joined matching words into a single string, separated by a comma and a space
                return string.Join(", ", matches);
            }
        }
}
