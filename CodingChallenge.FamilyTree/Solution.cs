using System;
using System.Collections.Generic;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {

            var queue = new Queue<Person>();

            // add our top level person to the test queue
            queue.Enqueue(person);

            // keep iterating until the queue is empty (i.e. we have tested the entire tree)
            while (queue.Count > 0)
            {
                // pop a new test case out of the queue
                var testCase = queue.Dequeue();

                // if this is our guy, return his birthday
                if (testCase.Name == descendantName)
                {
                    return testCase.Birthday.ToString("MMMM");
                }

                // otherwise, if he has any descendants, enqueue them
                else
                {
                    foreach (var descendant in testCase.Descendants)
                    {
                        queue.Enqueue(descendant);
                    }
                }
            }

            // if we complete the queue without a positive result, shrug and return empty string
            return string.Empty;
        }
    }
}