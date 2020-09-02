using System;
using System.Globalization;
using System.Linq;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            return GetDescendant(person, descendantName)?.Birthday.Month.ToString() ?? "";
        }

        private static Person GetDescendant(Person person, string descendantName)
        {
            // if the incoming person is the descendant then return them
            if (person.Name == descendantName) return person;

            // make sure the person has descendants
            if (person.Descendants == null) return null;

            // now check nested descendants
            foreach (var descendantTmp in person.Descendants)
            {
                // recursively check this person's descendants
                var descendant = GetDescendant(descendantTmp, descendantName);
                if (descendant != null && descendant.Name == descendantName) return descendant;
            }
            return null;
        }
    }
}