using System.Linq;
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
    }
}