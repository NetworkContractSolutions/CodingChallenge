using System;
using System.Globalization;
using System.Linq;

namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            ////If the passed in name is the same as the person passed in
            if (person.Name == descendantName)
            {
                return GetMonthString(person.Birthday);
            }

            //Check all descendants
            var match =
                person
                    .Descendants
                    .SelectMany(x => x.Descendants)
                    .Where(x => x.Name == descendantName).ToList().FirstOrDefault();

            var birthday = !string.IsNullOrEmpty(match?.Name) ? GetMonthString(match.Birthday) : string.Empty;
            return birthday;
        }

        private static string GetMonthString(DateTime birthday)
        {
            return new DateTime(birthday.Year, birthday.Month, birthday.Day).ToString("MMMM", CultureInfo.InvariantCulture);
        }
    }
}
