using System;
using System.Collections.Generic;

#nullable disable

namespace project.Model
{
    public partial class Policy
    {
        public Policy()
        {
            Employees = new HashSet<Employee>();
            PolicyRequestDetails = new HashSet<PolicyRequestDetail>();
        }

        public int PolicyId { get; set; }
        public string PolicyName { get; set; }
        public string PolicyDescription { get; set; }
        public decimal Amount { get; set; }
        public decimal Emi { get; set; }
        public int Duration { get; set; }
        public int CompanyId { get; set; }
        public string HospitalId { get; set; }

        public virtual InsuranceCompany Company { get; set; }
        public virtual Hospital Hospital { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
        public virtual ICollection<PolicyRequestDetail> PolicyRequestDetails { get; set; }
    }
}
