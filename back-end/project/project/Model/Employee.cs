using System;
using System.Collections.Generic;

#nullable disable

namespace project.Model
{
    public partial class Employee
    {
        public Employee()
        {
            InverseManager = new HashSet<Employee>();
            PolicyRequestDetailEmployees = new HashSet<PolicyRequestDetail>();
            PolicyRequestDetailManagers = new HashSet<PolicyRequestDetail>();
        }

        public int EmployeeId { get; set; }
        public DateTime Joindate { get; set; }
        public string Fullname { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public int? Policyid { get; set; }
        public string PolicyStatus { get; set; }
        public string Role { get; set; }
        public int? ManagerId { get; set; }
        public string Email { get; set; }
        public string Securitycode { get; set; }
        public string Photo { get; set; }

        public virtual Employee Manager { get; set; }
        public virtual Policy Policy { get; set; }
        public virtual ICollection<Employee> InverseManager { get; set; }
        public virtual ICollection<PolicyRequestDetail> PolicyRequestDetailEmployees { get; set; }
        public virtual ICollection<PolicyRequestDetail> PolicyRequestDetailManagers { get; set; }
    }
}
