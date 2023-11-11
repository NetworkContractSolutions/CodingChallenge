using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.PirateSpeak
{
    //I saw this as a two possible solutions
    //1.one use a FIFO stack so you dont get reuse duplication
    //2.my solution which was get a group by with counts for both words and do a equals compare
    public class Solution
    {
        public string[] GetPossibleWords(string jumble, string[] dictionary)
        {
            var result = new List<string>();
            //do this here so it only happens once, order by is important so you can do a true compare
            var jumbleCharArray = jumble.ToLower().GroupBy(x => x).Select(x => new { Char = x.Key, Count = x.Count()}).OrderBy(x => x.Char);

            foreach (var word in dictionary)
            {
                //in your test project you have port and ports port wasn't defined as a passing test, so if the strings aren't same length continue.
                if(word.Length != jumble.Length)
                {
                    continue;
                }

                //order by is important so you can do a true compare
                var wordCharArray = word.ToLower().GroupBy(x => x).Select(x => new { Char = x.Key, Count = x.Count()}).OrderBy(x => x.Char);
                if (jumbleCharArray.SequenceEqual(wordCharArray))
                {
                    result.Add(word);
                }
            }

            return result.ToArray();
        }
    }
}