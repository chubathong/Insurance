using System;
using System.Collections.Generic;

#nullable disable

namespace project.Models
{
    public partial class PolicyRequestDetail
    {
        public int RequestId { get; set; }
        public DateTime RequestDate { get; set; }
        public int EmployeeId { get; set; }
        public int PolicyId { get; set; }
        public decimal Amount { get; set; }
        public decimal Emi { get; set; }
        public int CompanyId { get; set; }
        public string Status { get; set; }
        public int ManagerId { get; set; }
        public string Reason { get; set; }
        public string Description { get; set; }

        public virtual InsuranceCompany Company { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Employee Manager { get; set; }
        public virtual Policy Policy { get; set; }
    }
}
