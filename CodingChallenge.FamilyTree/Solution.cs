using System;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            // check if the person argument is null
            if (person == null)
            {
                return null;
            }

            // check if the current person is the one we're looking for
            if (person.Name == descendantName)
            {
                return person.Birthday.ToString("MMMM");
            }

            // if not, recursively search through this person's descendants
            foreach (Person descendant in person.Descendants)
            {
                string birthMonth = GetBirthMonth(descendant, descendantName);

                // if a non-empty string is returned, we've found the person
                if (!string.IsNullOrEmpty(birthMonth))
                {
                    return birthMonth;
                }
            }

            // person was not found in the family tree
            return null;
        }
    }
}
