using System;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            if (person == null)
            {
                throw new ArgumentNullException(nameof(person));
            }

            // compare current person's name with descendantName
            if(string.Equals(person.Name, descendantName, StringComparison.OrdinalIgnoreCase))
            {
                // return the birth month
                return person.Birthday.ToString("MMMM");
            }

            // the person has no descendants
            // the end of the tree
            if(person.Descendants.Count == 0)
            {
                return string.Empty;
            }

            // compare each descendant's name with descendantName
            // if found, return the birth month
            // otherwise, keep searching
            // it will call itself recursively until it finds the descendantName
            // or until it reaches the end of the tree
            foreach (var child in person.Descendants)
            {
                var result = GetBirthMonth(child, descendantName);
                if (!string.IsNullOrEmpty(result))
                {
                    // yeah, we found it
                    return result;
                }
            }

            // not found
            return string.Empty;
        }
    }
}