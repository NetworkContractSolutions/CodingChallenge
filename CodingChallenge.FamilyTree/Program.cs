using CodingChallenge.FamilyTree;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var person = new Person()
            {
                Name = "Steve",
                Birthday = DateTime.Now.AddDays(-1552),
                Descendants = new List<Person>
                {
                    new Person()
                    {
                        Name = "Lucy",
                        Birthday = DateTime.Now.AddDays(-234),
                        Descendants = new List<Person>
                        {
                            new Person()
                            {
                                Name = "Alex",
                                Birthday = DateTime.Now.AddDays(-2554)
                            }
                        }
                    }
                }
            };

            var solution = new Solution();
            var birthMonthOfAlex = solution.GetBirthMonth(person, "Alex");

            Console.WriteLine($"Alex was born in {birthMonthOfAlex}.");
        }
    }
}
