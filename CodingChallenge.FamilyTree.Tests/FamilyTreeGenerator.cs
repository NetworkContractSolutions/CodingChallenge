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
                .With(h => h.MinimumChildren = 2)
                .With(h => h.MaximumChildren = 4)
                .With(h => h.NumberOfRoots = 1).Build();

            return Builder<Person>.CreateListOfSize(5461).BuildHierarchy(hierarchySpec).First();
        }
    }
}