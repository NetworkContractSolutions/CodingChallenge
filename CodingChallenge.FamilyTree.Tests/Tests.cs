using System;
using NUnit.Framework;

namespace CodingChallenge.FamilyTree.Tests
{
    [TestFixture]
    public class TreeTests
    {
        [TestCase(1)]
        [TestCase(33)]
        [TestCase(22)]
        public void TestPersonExists(int index)
        {
            var tree = FamilyTreeGenerator.Make();
            var result = new Solution().GetBirthMonth(tree, "Name" + index);
            Assert.AreEqual(DateTime.Now.AddDays(index - 1).ToString("MMMM"), result);
        }

        [TestCase(10)]
        public void TestPersonExistsLargeList(int index)
        {
            var tree = FamilyTreeGenerator.MakeLargeList();
            var result = new Solution().GetBirthMonth(tree, "Name" + index);
            Assert.AreEqual(DateTime.Now.AddDays(index - 1).ToString("MMMM"), result);
        }

        [TestCase("")]
        [TestCase(null)]
        [TestCase("abc")]
        public void TestPersonNull(string searchName)
        {
            AssertNameNotFound(null, searchName);
        }

        [TestCase("")]
        [TestCase(null)]
        [TestCase("abc")]
        public void TestPersonEmpty(string searchName)
        {
            var emptyTree = new Person();
            AssertNameNotFound(emptyTree, searchName);
        }

        [TestCase("invalidName")]
        [TestCase("")]
        [TestCase(null)]
        public void TestNameNotExists(string searchName)
        {
            var tree = FamilyTreeGenerator.Make();
            AssertNameNotFound(tree, searchName);
        }

        private static void AssertNameNotFound(Person tree, string searchName)
        {
            var result = new Solution().GetBirthMonth(tree, searchName);
            Assert.IsEmpty(result);
        }
    }
}
