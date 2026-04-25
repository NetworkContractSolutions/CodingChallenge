using System;
using System.Collections.Generic;
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
            var makeTree = FamilyTreeGenerator.Make();
          
            List<Person> tree = new List<Person> { makeTree };

            var result = new Solution().GetBirthMonth(tree, "Name" + index);
            Assert.AreEqual(result,DateTime.Now.AddDays(index - 1).ToString("MMMM"));
        }

        [Test]
        public void if_the_person_does_not_exist_in_the_tree_the_result_should_be_empty()
        {
            var makeTree = FamilyTreeGenerator.Make();
            List<Person> tree = new List<Person> { makeTree };
            var result = new Solution().GetBirthMonth(tree, "Jeebus");
           
            // if no user is found, no birthday is found.  Returned null.
            Assert.IsNull(result);

        }
    }
}
