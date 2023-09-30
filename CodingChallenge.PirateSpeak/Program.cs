using System;

namespace CodingChallenge.PirateSpeak
{
    class Program
    {
        static void Main(string[] args)
        {
            var result = new Solution().GetPossibleWords("boop", new[] { "oops", "poo", "boo", "noop" });

			Console.WriteLine(string.Join(", ", result));
		}
    }
}
