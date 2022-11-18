using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            return dictionary
                .ToList()
                .Where(s => jumble
                    .OrderBy(kvp => kvp)
                    .SequenceEqual(s.OrderBy(kvp => kvp))) // Fast sequence comparer
                .ToArray()
                ;
        }
    }


    public static class StringExtension
    {
        public static Dictionary<char, int> ToCharDictionary(this string owner)
        {
            return owner
                .ToCharArray()
                .GroupBy(c => c)
                .OrderBy(g => g.Key)
                .ToDictionary(g => g.Key, g => g.Count())
                ;
        }
    }
}