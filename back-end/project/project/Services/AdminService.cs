using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using project.Model;

namespace project.Services
{
    public interface AdminService
    {

        public bool Login(UsernameAndPassword uap);
        public dynamic FindByUsername(string username);

        public dynamic FindByPolicyname(string policyName);

        public Employee AddEmployee(Employee employee);

        public Hospital AddHospital(Hospital hospital);

        public Policy AddPolicy(Policy policy);

        public InsuranceCompany AddCompany(InsuranceCompany company);

        public void DeleteEmployee(int employeeId);

        public void DeleteHospital(string hospitalId);
        public void DeleteCompany(int companyId);
        public void DeletePolicy(int policyId);
        
        public dynamic FindEmployee(int employeeId);
        public dynamic FindHospital(string hospitalId);
        public dynamic FindCompany(int companyId);
        public dynamic FindPolicy(int policyId);

        public dynamic FindAllEmployee();
        public dynamic FindAllHospitals();

        public dynamic FindAllCompanies();

        public dynamic FindAllPolicy();

        public dynamic DetailEmployee(int id);
        public dynamic DetailHospital(string id);
        public dynamic DetailPolicy(int id);
        public dynamic DetailCompany(int id);

        public Employee Update(Employee employee);
        public Hospital UpdateHospital(Hospital hospital);
        public InsuranceCompany UpdateCompany(InsuranceCompany company);
        public Policy UpdatePolicy(Policy policy);
        public Employee findById(int id);
        public Hospital findHospitalById(string id);
        public InsuranceCompany findCompanyById(int id);
        public Policy findPolicyById(int id);
        

        //chung

       
        //employee
        public PolicyRequestDetail AddRequest(PolicyRequestDetail request);
        public PolicyRequestDetail findRequestManagerById(int id);

        public dynamic FindRequestManager(int requestId);
        //manager
        public dynamic FindAllRequestTracking();
        public PolicyRequestDetail UpdateRequestManger(PolicyRequestDetail policyrequestdetail);

        public dynamic DetailRequestDetail(int id);


        //change password
        public void ChangePassword(Employee employee);
        public dynamic FindPolicyOnEmployee(int employeeId);
        public dynamic CheckUsername(string username);
        public dynamic CheckEmail(string email);
        bool SendEmail(Mail mail);
        public void updateSecurityCode(Employee employee);

        public Employee FindbyusernameAPI(string username);
        public bool Securitycode(SecuritycodeCheck stc);

        public dynamic FindAllRequestTracking2();

        public dynamic findDateRequest(int day,int month, int year);
        
    }
}
