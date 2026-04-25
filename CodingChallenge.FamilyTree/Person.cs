using System;
using System.Collections.Generic;
using System.Collections;
using System.Xml.Linq;

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

       
    }
}