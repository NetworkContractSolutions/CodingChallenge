using System;
using System.Collections.Generic;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            if (person == null || string.IsNullOrEmpty(descendantName))
            {
                return string.Empty;
            }

            var queue = new Queue<Person>();
            queue.Enqueue(person);

            while (queue.Count > 0)
            {
                var currentPerson = queue.Dequeue();

                // Check the current person
                if (currentPerson.Name == descendantName)
                {
                    return currentPerson.Birthday.ToString("MMMM");
                }

                // Enqueue all descendants of the current person to search in the next level
                foreach (var descendant in currentPerson.Descendants)
                {
                    queue.Enqueue(descendant);
                }
            }

            // If we've searched the entire tree and haven't found the person
            return string.Empty;
        }

        //Memoization version for very large datasets and in high-performance scenarios
        /*
        private Dictionary<string, string> _cache = new Dictionary<string, string>();

        public string GetBirthMonth(Person person, string descendantName)
        {
            if (person == null || string.IsNullOrEmpty(descendantName))
            {
                return string.Empty;
            }

            // Check cache first
            if (_cache.TryGetValue(descendantName, out var cachedResult))
            {
                return cachedResult;
            }

            var queue = new Queue<Person>();
            queue.Enqueue(person);

            while (queue.Count > 0)
            {
                var currentPerson = queue.Dequeue();

                // Check for reference equality and case-sensitive name match
                if (ReferenceEquals(currentPerson.Name, descendantName) ||
                    currentPerson.Name.Equals(descendantName, StringComparison.Ordinal))
                {
                    var birthMonth = currentPerson.Birthday.ToString("MMMM");
                    _cache[descendantName] = birthMonth; // Cache the result
                    return birthMonth;
                }

                foreach (var descendant in currentPerson.Descendants)
                {
                    queue.Enqueue(descendant);
                }
            }

            _cache[descendantName] = string.Empty; // Cache the negative result
            return string.Empty;
        }
        */
    }
}