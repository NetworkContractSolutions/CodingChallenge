using System;
using System.Linq;
using System.Text.Json;
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
                .With(h => h.MinimumChildren = 1) // This doesn't fix the truncated descendents issue.
                .With(h => h.MaximumChildren = 3)
                .With(h => h.NumberOfRoots = 1).Build();

            var person = Builder<Person>.CreateListOfSize(1100).BuildHierarchy(hierarchySpec).First();
            
            /*
             * The tree generator does not always produce a tree containing the number of descendents
             * the unit tests are expecting. As such the unit tests intermittently fail.
             *
             * For example: a unit test was expecting the function under test to return the birth month
             * for "Name22". The JSON serialized form of the Person tree passed to the function showed no
             * descendents past "Name9":

                {
                    "Name": "Name1",
                    "Descendants": [
                    {
                        "Name": "Name2",
                        "Descendants": [
                        {
                            "Name": "Name3",
                            "Descendants": [
                            {
                                "Name": "Name4",
                                "Descendants": [
                                {
                                    "Name": "Name5",
                                    "Descendants": [
                                    {
                                        "Name": "Name6",
                                        "Descendants": [
                                        {
                                            "Name": "Name7",
                                            "Descendants": [
                                            {
                                                "Name": "Name8",
                                                "Descendants": [],
                                                "Birthday": "2023-09-06T00:00:00"
                                            },
                                            {
                                                "Name": "Name9",
                                                "Descendants": [],
                                                "Birthday": "2023-09-07T00:00:00"
                                            }
                                            ],
                                            "Birthday": "2023-09-05T00:00:00"
                                        }
                                        ],
                                        "Birthday": "2023-09-04T00:00:00"
                                    }
                                    ],
                                    "Birthday": "2023-09-03T00:00:00"
                                }
                                ],
                                "Birthday": "2023-09-02T00:00:00"
                            }
                            ],
                            "Birthday": "2023-09-01T00:00:00"
                        }
                        ],
                        "Birthday": "2023-08-31T00:00:00"
                    }
                    ],
                    "Birthday": "2023-08-30T00:00:00"
                }
             * 
             */
            
            Console.WriteLine(JsonSerializer.Serialize(person));
            
            return person;
        }
    }
}