using System;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            string theBirthday = "";

            foreach (Person peep in person.Descendants)
            {
                if (peep.Name == descendantName)
                {
                    theBirthday = peep.Birthday.ToString();
                } else if (peep.Descendants.Count > 0)
                {
                    theBirthday = this.KeepLooking(peep, descendantName);
                }
            }

            return theBirthday;
             
            throw new NotImplementedException();
        }

        public string KeepLooking (Person person, string descendantName)
        {
            string toReturn = "";

            foreach (Person man in person.Descendants)
            {
                if (man.Name == descendantName)
                {
                    toReturn = man.Birthday.ToString();
                } else if (man.Descendants.Count > 0)
                {
                    this.KeepLooking(man, descendantName);
                } else
                {
                    return toReturn;
                }
            }

            return toReturn;            
        }
    }
}