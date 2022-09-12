using System;
using System.Collections.Generic;

#nullable disable

namespace project.Model
{
    public partial class Hospital
    {
        public Hospital()
        {
            Policies = new HashSet<Policy>();
        }

        public string HospitalId { get; set; }
        public string HospitalName { get; set; }
        public string PhoneNumber { get; set; }
        public string Location { get; set; }
        public string Url { get; set; }

        public virtual ICollection<Policy> Policies { get; set; }
    }
}
