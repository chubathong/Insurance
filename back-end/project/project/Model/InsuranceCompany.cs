using System;
using System.Collections.Generic;

#nullable disable

namespace project.Model
{
    public partial class InsuranceCompany
    {
        public InsuranceCompany()
        {
            Policies = new HashSet<Policy>();
            PolicyRequestDetails = new HashSet<PolicyRequestDetail>();
        }

        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Url { get; set; }

        public virtual ICollection<Policy> Policies { get; set; }
        public virtual ICollection<PolicyRequestDetail> PolicyRequestDetails { get; set; }
    }
}
