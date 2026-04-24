using System;

namespace CodingChallenge.PirateSpeak
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = new Solution().GetPossibleWords("boop", new[] { "oops", "poo", "boo", "noop", "poob" });
            Console.WriteLine($"Words found: {string.Join(",", words)}");
        }
    }
}
