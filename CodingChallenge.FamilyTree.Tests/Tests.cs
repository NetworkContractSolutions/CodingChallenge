using System;
using System.Collections.Generic;
using Given.Common;
using NUnit.Framework;

namespace CodingChallenge.FamilyTree.Tests
{
    [TestFixture]
    public class TreeTests
    {
        [TestCase(1)]
        [TestCase(33)]
        [TestCase(22)]
        public void if_the_person_exists_in_tree_the_result_should_be_their_birthday(int index)
        {
            var tree = FamilyTreeGenerator.Make();
            var result = new Solution().GetBirthMonth(tree, "Name" + index);
            result.ShouldEqual(DateTime.Now.AddDays(index - 1).ToString("MMMM"));
        }

        [Test]
        public void if_the_person_does_not_exist_in_the_tree_the_result_should_be_empty()
        {
            var tree = FamilyTreeGenerator.Make();
            var result = new Solution().GetBirthMonth(tree, "Jeebus");
            result.ShouldEqual("");
        }

        [Test]
        public void ShouldFindDescendant()
        {
            var tree = FamilyTreeGenerator.MakeReal();
            var result = new Solution().GetBirthMonth(tree, "Joe");
            result.ShouldEqual("3");
        }

        [Test]
        public void ShouldNotFindDescendant()
        {
            var tree = FamilyTreeGenerator.MakeReal();
            var result = new Solution().GetBirthMonth(tree, "Jeebus");
            result.ShouldEqual("");
        }
    }
}
