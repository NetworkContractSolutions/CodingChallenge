using System;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            string result = DFS(person, descendantName);
            return result ?? "";
        }
        private static string DFS(Person node, string targetName)
        {
            if (node.Name == targetName)
                return node.Birthday.ToString("MMMM");



            foreach (var child in node.Descendants)
            {
                string result = DFS(child, targetName);
                if (result != null)
                    return result;
            }
            return null;
        }
    }
}