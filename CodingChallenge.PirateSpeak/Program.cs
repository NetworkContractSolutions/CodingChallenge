using System;

namespace CodingChallenge.PirateSpeak
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(new Solution().GetPossibleWords("boop", new [] {"oops","poo","boo","noop", "obop"}));
        }
    }
}
