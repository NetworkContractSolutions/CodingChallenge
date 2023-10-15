using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        
     
        /// <summary>
        /// Pass in an enumberable list that simulates a tree.  This will then recursively transend the tree until a matching name is found.  
        /// Once the user by the matching name is found, it will return the birthday month back up the tree.
        /// </summary>
        /// <param name="people"> Enumberable list of people</param>
        /// <param name="descendantName"> Users name to find within the tree.</param>
        /// <returns></returns>
        public string GetBirthMonth(IEnumerable<Person> people, string descendantName)
        {
            // loop each item in the list..
            foreach (var person in people)
            { 
                // if a match is found, return the birthday month.
                if (person.Name == descendantName)
                {
                    return person.Birthday.ToString("MMMM");
                }
                // if no match was previously found, traverse the tree with the decendants and look deeper in the tree.
                string birthdayInChildren = GetBirthMonth(person.Descendants, descendantName);

                // if in the last iteration a match was found, continue to return the value found.
                if (!string.IsNullOrEmpty(birthdayInChildren))
                {
                    return birthdayInChildren;
                }
            }
            // if no match was found within the tree, return null. The user does not exist in this family tree.
            return null;


        }

        

    }      
}