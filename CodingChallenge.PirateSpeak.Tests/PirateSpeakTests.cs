using NUnit.Framework;

namespace CodingChallenge.PirateSpeak.Tests
{
    public class PirateSpeakTests
    {
        [TestCase("trisf", new []{"first"}, new[] {"first"})]
        [TestCase("oob", new[] {"bob", "baobob"},new string[0])]
        [TestCase("ainstuomn", new[] { "mountains", "hills", "mesa" }, new[] { "mountains" })]
        [TestCase("oopl", new[] { "donkey", "pool", "horse", "loop" }, new[] { "pool", "loop" })]
        [TestCase("oprst", new[] {"sport", "ports", "ball", "bat", "port"}, new[] {"sport", "ports"})]
        public void TestPirateVocabulary(string jumble, string[] dictionary, string[] expectedResult)
        {
            AssertWords(jumble, dictionary, expectedResult);
        }

        [TestCase("abc", new[] {""}, new string[0])]
        [TestCase("abc", null, new string[0])]
        [TestCase("abc", new[] { "abcd" }, new string[0])]
        [TestCase("abcd", new[] { "abc" }, new string[0])]
        [TestCase("", new[] { "abc" }, new string[0])]
        [TestCase(null, new[] { "abc" }, new string[0])]
        public void EmptyVocabulary(string jumble, string[] dictionary, string[] expectedResult)
        {
            AssertWords(jumble, dictionary, expectedResult);
        }

        [TestCase("aBc", new[] { "cab" }, new string[] { "cab" })]
        [TestCase("abc", new[] { "Cab" }, new string[] { "Cab" })]
        public void TestPirateShouting(string jumble, string[] dictionary, string[] expectedResult)
        {
            AssertWords(jumble, dictionary, expectedResult);
        }

        private static void AssertWords(string jumble, string[] dictionary, string[] expectedResult)
        {
            var actualResult = new Solution().GetPossibleWords(jumble, dictionary);
            Assert.AreEqual(expectedResult, actualResult);
        }
    }
}

