using CodingChallenge.FamilyTree;
using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var person = CreateFamilyTree();
            var solution = new Solution();
            var descendantNames = new List<string> { "Joe", "Jeep" };

            foreach (var descendantName in descendantNames)
            {
                var birthMonth = solution.GetBirthMonth(person, descendantName);
                if (string.IsNullOrEmpty(birthMonth))
                {
                    Console.WriteLine($"{descendantName} birth month is not found");
                }
                else
                {
                    Console.WriteLine($"{descendantName} birth month is on {birthMonth}");
                }
            }
        }

        private static Person CreateFamilyTree()
        {
            /*
             * create a new tree that looks like this
             *              Ted
             *               /\
             *              /  \
             *           Jim  Sally
             *           /      /\
             *          /      /  \
             *        Bob    Joe  George
             */
            return new Person
            {
                Name = "Ted",
                Birthday = new DateTime(1950, 1, 1),
                Descendants = new List<Person>
                {
                    new Person
                    {
                        Name = "Jim",
                        Birthday = new DateTime(1970, 1, 1),
                        Descendants = new List<Person>
                        {
                            new Person { Name = "Bob" }
                        }
                    },
                    new Person
                    {
                        Name = "Sally",
                        Birthday = new DateTime(1972, 1, 1),
                        Descendants = new List<Person>
                        {
                            new Person
                            {
                                Name = "Joe",
                                Birthday = new DateTime(1990, 1, 1)
                            },
                            new Person
                            {
                                Name = "George",
                                Birthday = new DateTime(1992, 1, 1)
                            }
                        }
                    }
                }
            };
        }
    }
}
