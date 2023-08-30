namespace CodingChallenge.FamilyTree
{
    public class Solution
    {
        public string GetBirthMonth(Person person, string descendantName)
        {
            if (person.Name == descendantName) return person.Birthday.ToString("MMMM");
            foreach (Person descendant in person.Descendants)
            {
                string birthMonth = GetBirthMonth(descendant, descendantName);
                if (birthMonth != string.Empty) return birthMonth;
            }
            return string.Empty;
        }
    }
}