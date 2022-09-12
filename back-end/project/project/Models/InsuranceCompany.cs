using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class InsuranceCompany
    {
        public InsuranceCompany()
        {
            Policies = new HashSet<Policy>();
            PolicyOnEmployees = new HashSet<PolicyOnEmployee>();
            PolicyRequestDetails = new HashSet<PolicyRequestDetail>();
        }

        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Url { get; set; }

        public virtual ICollection<Policy> Policies { get; set; }
        public virtual ICollection<PolicyOnEmployee> PolicyOnEmployees { get; set; }
        public virtual ICollection<PolicyRequestDetail> PolicyRequestDetails { get; set; }
    }
}
