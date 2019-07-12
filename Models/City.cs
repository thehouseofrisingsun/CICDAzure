using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class City
    {
        public int Id { get; set; }
        public int Name { get; set; }
       public ICollection<VenueModel> Venues { get; set; }
    }
}
