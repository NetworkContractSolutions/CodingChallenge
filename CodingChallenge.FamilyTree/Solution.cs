using System;
using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        /// <summary>
        /// Performs a breadth first search to find the birth month of a descendant.
        /// </summary>
        /// <param name="person">Root node of family tree.</param>
        /// <param name="descendantName">Name of descendant to find.</param>
        /// <returns>Month of birth of descendant if found. Empty string if not found.</returns>
        public string GetBirthMonth(Person person, string descendantName)
        {
            var queue = new Queue<Person>();
            queue.Enqueue(person);

            Person descendant = null;


            while (queue.Count > 0)
            {
                var currentPerson = queue.Dequeue();
                currentPerson.Descendants.ForEach(x => queue.Enqueue(x));

                if (currentPerson.Name == descendantName)
                {
                    descendant = currentPerson;
                    break;
                }
            }

            if (descendant != null)
            {
                return descendant.Birthday.ToString("MMMM");
            }
            else
            {
                return string.Empty;
            }
        }
    }
}