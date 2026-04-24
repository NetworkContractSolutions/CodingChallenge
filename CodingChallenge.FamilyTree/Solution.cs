using System.Linq;

namespace CodingChallenge.FamilyTree
{
    //I understood this to be a recursion problem. The issue I had was climb the stack back out when I found the name. At first I did not have the last return "" wrapped in the else, and everything was returning "".
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            //Here is your check for recursion exit
            if (person.Name.ToLower() == descendantName.ToLower())
            {
                return person.Birthday.ToString("MMMM");
            }

            //Check to make sure your not at the bottom of the tree i.e. Not found 
            if (person.Descendants.Any())
            {
                //recursively go down the left 
                var left = GetBirthMonth(person.Descendants[0], descendantName);
                // if you hit the bottom and climbing out, and there is a right side start going down
                if (left == "" && person.Descendants.Count > 1)
                {
                    return GetBirthMonth(person.Descendants[1], descendantName);
                }
                return left;
            }
            else
            {
                //Not Found
                return "";
            }
        }
    }
}