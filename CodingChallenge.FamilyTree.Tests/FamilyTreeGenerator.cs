using System;
using System.Collections.Generic;
using System.Linq;
using CodingChallenge.FamilyTree;
using FizzWare.NBuilder;

namespace CodingChallenge.FamilyTree.Tests
{
    public static class FamilyTreeGenerator
    {
        public static Person Make()
        {
            var hierarchySpec = Builder<HierarchySpec<Person>>.CreateNew()
                .With(h => h.AddMethod, (p1, p2) => p1.Descendants.Add(p2))
                .With(h => h.Depth = 7)
                .With(h => h.MaximumChildren = 3)
                .With(h => h.NumberOfRoots = 1).Build();

            var person = Builder<Person>.CreateListOfSize(1100).BuildHierarchy(hierarchySpec).First();

            return person;
        }

        public static Person MakeReal()
        {
            var tree = new Person
            {
                Name = "Ted",
                Birthday = new DateTime(2000, 1, 1),
                Descendants = new List<Person>
                {
                    new Person
                    {
                        Name = "Jim",
                        Birthday = new DateTime(2000,2,1),
                        Descendants = new List<Person>
                        {
                            new Person
                            {
                                Name = "Bob",
                                Birthday = new DateTime(2000,3,1)
                            }
                        }
                    },
                    new Person
                    {
                        Name = "Sally",
                        Birthday = new DateTime(2000,2,1),
                        Descendants = new List<Person>
                        {
                            new Person
                            {
                                Name = "Joe",
                                Birthday = new DateTime(2000,3,1)
                            },
                            new Person
                            {
                                Name = "George",
                                Birthday = new DateTime(2000,3,1)
                            }
                        }
                    }
                }
            };
            return tree;
        }
    }
}