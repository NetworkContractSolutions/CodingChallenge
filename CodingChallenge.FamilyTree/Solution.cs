using System;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            /*
             * I don't search nested trees very often, but my first instinct was recursion so I went with it.
            */

            // Init string to hold the result
            string result = "";

            // Are we looking at the correct match already?
            if (String.Equals(person.Name, descendantName))
            {
                result = person.Birthday.ToString("MMMM");
            }
            else
            {
                // Nope, go deeper until we find them
                foreach (var p in person.Descendants)
                {
                    result = GetBirthMonth(p, descendantName);
                    if (!String.IsNullOrEmpty(result)) break;
                }
            }

            return result;
        }
    }
}