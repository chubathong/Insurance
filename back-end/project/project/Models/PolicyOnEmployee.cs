using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class PolicyOnEmployee
    {
        public int? PolicyId { get; set; }
        public decimal Amount { get; set; }
        public string HospitalId { get; set; }
        public int CompanyId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int EmployeeId { get; set; }
        public decimal Emi { get; set; }
        public int Duration { get; set; }
        public int RequestId { get; set; }

        public virtual InsuranceCompany Company { get; set; }
        public virtual Hospital Hospital { get; set; }
        public virtual Employee Policy { get; set; }
        public virtual Policy PolicyNavigation { get; set; }
    }
}
