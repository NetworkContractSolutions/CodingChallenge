using System;
using System.Linq;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            //Establish base cases
            //If current person does not exist in tree, return empty string
            if(ReferenceEquals(person, null))
            {
                return "";
            }
            //If the current person is the descendant, return their birth month
            if(person.Name == descendantName)
            {
                return person.Birthday.ToString("MMMM");
            }

            //Recursively find the descendant whose name matches descendantName
            foreach (var child in person.Descendants)
            {
                string result = GetBirthMonth(child, descendantName);
                if (result != "")
                {
                    return result;
                }
            }

            //Return empty string so all possible paths return a value
            return "";
        }
    }
}