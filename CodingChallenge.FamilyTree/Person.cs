using System;
using System.Collections.Generic;

namespace CodingChallenge.FamilyTree
{
    public class Person
    {
        public Person()
        {
            Descendants = new List<Person>();
        }

        public string Name { get; set; }
        public List<Person> Descendants { get; set; }
        public DateTime Birthday { get; set; }

        //public bool IsValid()
        //{
        //    var invalidName = string.IsNullOrWhiteSpace(Name);
        //    var 
        //    if ()
        //    {
        //        return false;
        //    }

        //    return true;
        //}
    }
}