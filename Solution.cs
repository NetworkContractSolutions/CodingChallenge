using System;
using System.Globalization;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            //If the passed in name is the same as the person passed in
            if (person.Name == descendantName)
            {
                return GetMonthString(person.Birthday);
            }

            //Iterate through children
            foreach (var child in person.Descendants)
            {
                if (child.Name == descendantName)
                {
                    return GetMonthString(child.Birthday);
                }

                //Iterate through grandchildren
                foreach (var grandchild in child.Descendants)
                {
                    if (grandchild.Name == descendantName)
                    {
                        return GetMonthString(grandchild.Birthday);
                    }
                }
                //Continue iterations for each child in the tree hierarchy
            }
            return string.Empty;
        }


        private static string GetMonthString(DateTime birthday)
        {
            return new DateTime(birthday.Year, birthday.Month, birthday.Day).ToString("MMMM", CultureInfo.InvariantCulture);
        }
    }


}