using System;
using System.Collections.Generic;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        // Queue solution (Second attempt)
        public string GetBirthMonth(Person person, string searchName)
        {
            if (person == null || string.IsNullOrWhiteSpace(searchName) || string.IsNullOrWhiteSpace(person.Name))
            {
                return string.Empty;
            }

            // Init queue and visitedNodes with parent node
            var neighborsNeedToVisit = new Queue<Person>();
            var visitedNodes = new Dictionary<Person, bool>
            {
                { person, false }
            };

            neighborsNeedToVisit.Enqueue(person);

            while (neighborsNeedToVisit.Count > 0)
            {
                var currentNode = neighborsNeedToVisit.Dequeue();

                if (NamesMatch(currentNode.Name, searchName))
                {
                    return currentNode.Birthday.ToString("MMMM");
                }

                foreach (var neighbor in currentNode.Descendants)
                {
                    if (!visitedNodes.ContainsKey(neighbor))
                    {
                        visitedNodes.Add(neighbor, false);
                        neighborsNeedToVisit.Enqueue(neighbor);
                    }
                }
            }

            return string.Empty;
        }

        // Naive solution that used recursion (First attempt)
        //public string GetBirthMonthRecursion(Person person, string searchName)
        //{
        //    if (person != null && !string.IsNullOrWhiteSpace(searchName) && !string.IsNullOrWhiteSpace(person.Name))
        //    {
        //        return string.Empty;
        //    }

        //    if (NamesMatch(person.Name, searchName))
        //    {
        //        return person.Birthday.ToString("MMMM");
        //    }

        //    foreach ( var personDescendant in person.Descendants )
        //    {
        //        var descendantsMonth = GetBirthMonthRecursion(personDescendant, searchName);

        //        if (!string.IsNullOrWhiteSpace(descendantsMonth))
        //        {
        //            return descendantsMonth;
        //        }
        //    }

        //    return string.Empty;
        //}

        private bool NamesMatch(string name1, string name2) => 
            name1.Equals(name2, StringComparison.InvariantCultureIgnoreCase);
    }
}