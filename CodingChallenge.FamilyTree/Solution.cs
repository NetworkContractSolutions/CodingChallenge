using System.Collections.Generic;
using System.Linq;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        //queue based BFS implementation for traversing a family tree to find a descendants birth month
        //I chose BFS over DFS because it's a little more effecient at scale and it's implemenation is more readable in my opinion
        //Most BFS implementations ensure graphs can be traversed by maintianing a "visited" structure
        //I have omitted that here since this is a limited example and our use case probably shouldn't allow that
        public string GetBirthMonth(Person person, string descendantName)
        {
            if(person == null 
                || person.Descendants.Count == 0
                || string.IsNullOrEmpty(descendantName))
            {
                return string.Empty;
            }

            var treeTraversalQueue = new Queue<Person>();

            treeTraversalQueue.Enqueue(person);

            while(treeTraversalQueue.Any())
            {
                var currentFamilyMember = treeTraversalQueue.Dequeue();

                if (currentFamilyMember.Name == descendantName)
                {
                    return currentFamilyMember.Birthday.ToString("MMMM");
                }

                currentFamilyMember.Descendants.ForEach(x => treeTraversalQueue.Enqueue(x));
            }

            return string.Empty;
        }
    }
}