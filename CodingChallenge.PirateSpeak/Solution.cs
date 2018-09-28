using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            //Order the jumbled string
            var orderedJumble = string.Concat(jumble.OrderBy(c => c));
            var results = new List<string>();
            var dictionaryList = dictionary.ToList();
            
            foreach (var item in dictionaryList)
            {
                //order each string in the dictionary
                if(string.Concat(item.OrderBy(c => c)) == orderedJumble)
                {
                    results.Add(item);
                }
            }

            return results.ToArray();
        }
    }
}
