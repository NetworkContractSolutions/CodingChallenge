using System;
using System.Collections.Generic;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            string birthMonth = "";
            List<Person> children = new List<Person>();
            if (person.Name == descendantName)
            { //it could be him or her self
                return person.Birthday.ToString("MMMM");
            }
            foreach (Person descendant in person.Descendants)
            {
                if (descendant.Name == descendantName)
                {
                    birthMonth = descendant.Birthday.ToString("MMMM");
                    break;
                }
                if (descendant.Descendants.Count > 0) //if child has children add to the list of children
                    children.AddRange(descendant.Descendants);
            }

            if (birthMonth == "")
            {
                foreach (Person descendant in children)
                {
                    birthMonth = GetBirthMonth(descendant, descendantName); //check the children 
                    if (birthMonth != "") break; // this will break recursive function
                }
            }

            return birthMonth;

        }
    }
}