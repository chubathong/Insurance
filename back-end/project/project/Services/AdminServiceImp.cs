using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using project.Model;

using System.Net;
using System.Net.Mail;
using System.Diagnostics;
using Microsoft.Extensions.Configuration;
using project.Helpers;
using project.Services;

namespace project.Services
{
    public class AdminServiceImp : AdminService
    {
        private DatabaseContext db;
        private IConfiguration configuration;
        public AdminServiceImp(DatabaseContext _db, IConfiguration _configuration)
        {
            db = _db;
            configuration = _configuration;
        }





        public Hospital AddHospital(Hospital hospital)
        {
            db.Hospitals.Add(hospital);
            db.SaveChanges();
            return hospital;
        }

        public Policy AddPolicy(Policy policy)
        {
            db.Policies.Add(policy);
            db.SaveChanges();
            return policy;
        }

        public InsuranceCompany AddCompany(InsuranceCompany company)
        {
            db.InsuranceCompanies.Add(company);
            db.SaveChanges();
            return company;
        }

        public void DeleteEmployee(int employeeId)
        {
            db.Employees.Remove(db.Employees.Find(employeeId));
            db.SaveChanges();

        }

        public void DeleteHospital(string hospitalId)
        {
            db.Hospitals.Remove(db.Hospitals.Find(hospitalId));
            db.SaveChanges();

        }
        public void DeleteCompany(int companyId)
        {
            db.InsuranceCompanies.Remove(db.InsuranceCompanies.Find(companyId));
            db.SaveChanges();

        }

        public void DeletePolicy(int policyId)
        {
            db.Policies.Remove(db.Policies.Find(policyId));
            db.SaveChanges();
        }

        public dynamic FindAllEmployee()
        {
            return db.Employees.Select(p => new
            {
                employeeid = p.EmployeeId,
                joindate = p.Joindate.ToString("dd/MM/yyyy"),
                fullname = p.Fullname,
                username = p.Username,
                password = p.Password,
                address = p.Address,
                phonenumber = p.PhoneNumber,
                country = p.Country,
                city = p.City,
                policyid = p.Policyid,
                policystatus = p.PolicyStatus,
                role = p.Role,
                managerid = p.ManagerId,
                email = p.Email
            }).ToList();
        }


        public dynamic FindByUsername(string username)
        {

            return db.Employees.Where(e => e.Username == username).Select(e => new
            {
                employeeid = e.EmployeeId,
                joindate = e.Joindate,
                fullname = e.Fullname,
                username = e.Username,
                password = e.Password,
                address = e.Address,
                phonenumber = e.PhoneNumber,
                country = e.Country,
                city = e.City,
                policyid = e.Policyid,
                policystatus = e.PolicyStatus,
                role = e.Role,
                managerid = e.ManagerId,
                email = e.Email,
                photo = e.Photo,
                Securitycode = e.Securitycode
            }).SingleOrDefault();


        }

        public dynamic FindEmployee(int employeeId)
        {
            return db.Employees.Where(e => e.EmployeeId == employeeId).Select(e => new
            {
                employeeId = e.EmployeeId,
                joindate = e.Joindate.ToString("dd/MM/yyyy"),
                fullname = e.Fullname,
                username = e.Username,
                password = e.Password,
                address = e.Address,
                phonenumber = e.PhoneNumber,
                country = e.Country,
                city = e.City,
                policyid = e.Policyid,
                policystatus = e.PolicyStatus,
                role = e.Role,
                managerId = e.ManagerId,
                email = e.Email,
                photo = e.Photo,
                Securitycode = e.Securitycode
            }).SingleOrDefault();
        }

        public dynamic FindHospital(string hospitalId)
        {
            return db.Hospitals.Where(h => h.HospitalId == hospitalId).Select(h => new
            {
                hospitalId = h.HospitalId,
                hospitalname = h.HospitalName,
                phoneNumber = h.PhoneNumber,
                location = h.Location,
                url = h.Url
            }).SingleOrDefault();
        }
        public dynamic FindCompany(int companyId)
        {
            return db.InsuranceCompanies.Where(h => h.CompanyId == companyId).Select(h => new
            {
                companyId = h.CompanyId,
                companyName = h.CompanyName,
                address = h.Address,
                phone = h.Phone,
                url = h.Url
            }).SingleOrDefault();
        }

        public dynamic FindPolicy(int policyId)
        {
            return db.Policies.Where(h => h.PolicyId == policyId).Select(h => new
            {
                policyId = h.PolicyId,
                policyName = h.PolicyName,
                policyDescription = h.PolicyDescription,
                amount = h.Amount,
                emi = h.Emi,
                duration = h.Duration,
                companyId = h.CompanyId,
                hospitalId = h.HospitalId

            }).SingleOrDefault();
        }

        public dynamic FindAllHospitals()
        {
            return db.Hospitals.Select(h => new
            {
                hospitalId = h.HospitalId,
                hospitalname = h.HospitalName,
                phoneNumber = h.PhoneNumber,
                location = h.Location,
                url = h.Url
            }).ToList();
        }

        public bool Login(UsernameAndPassword uap)
        {
            if (db.Employees.Where(e => e.Username == uap.Username).Count() > 0)
            {
                var account = FindbyusernameAPI(uap.Username);
                if (BCrypt.Net.BCrypt.Verify(uap.Password, account.Password))
                {
                    
                    if (account.Role == "admin")
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

            }
            return false;
        }

        public dynamic FindAllCompanies()
        {
            return db.InsuranceCompanies.Select(c => new
            {
                companyId = c.CompanyId,
                companyName = c.CompanyName,
                address = c.Address,
                phone = c.Phone,
                url = c.Url
            }).ToList();
        }

        public dynamic FindAllPolicy()
        {
            return db.Policies.Select(p => new
            {
                policyId = p.PolicyId,
                policyName = p.PolicyName,
                policyDescription = p.PolicyDescription,
                amount = p.Amount,
                emi = p.Emi,
                duration = p.Duration,
                companyId = p.CompanyId,
                companyName=p.Company.CompanyName,
                hospitalId = p.HospitalId,
                hospitalName=p.Hospital.HospitalName
            }).ToList();
        }

        public Employee AddEmployee(Employee employee)
        {
            if (CheckUsername(employee.Username))
            {
                return null;
            }
            else
            {
                if (CheckEmail(employee.Email))
                {
                    return null;
                }
                else
                {
                    db.Employees.Add(employee);
                    db.SaveChanges();
                    return employee;
                }

            }

        }
        public dynamic CheckUsername(string username)
        {
            return db.Employees.Count(i => i.Username == username ) > 0;
        }
        public dynamic CheckEmail(string email)
        {
            return db.Employees.Count(i => i.Email == email) > 0;
        }

        public dynamic DetailEmployee(int id)
        {
            return db.Employees.Where(p => p.EmployeeId == id).Select(p => new
            {
                employeeid = p.EmployeeId,
                joindate = p.Joindate,
                fullname = p.Fullname,
                username = p.Username,
                password = p.Password,
                address = p.Address,
                phonenumber = p.PhoneNumber,
                country = p.Country,
                city = p.City,
                policyid = p.Policyid,
                policystatus = p.PolicyStatus,
                policydescription=p.Policy.PolicyDescription,
                role = p.Role,
                managerid = p.ManagerId,
                managername=p.Manager.Fullname,
                email = p.Email,
                photo = p.Photo,
                Securitycode = p.Securitycode
            }).FirstOrDefault();
        }

        public dynamic DetailHospital(string id)
        {
            return db.Hospitals.Where(p => p.HospitalId == id).Select(p => new
            {
                hospitalId = p.HospitalId,
                hospitalname = p.HospitalName,
                phoneNumber = p.PhoneNumber,
                location = p.Location,
                url = p.Url
            }).FirstOrDefault();
        }

        public dynamic DetailPolicy(int id)
        {
            return db.Policies.Where(p => p.PolicyId == id).Select(p => new
            {
                policyId = p.PolicyId,
                policyName = p.PolicyName,
                policyDescription = p.PolicyDescription,
                amount = p.Amount,
                emi = p.Emi,
                duration = p.Duration,
                companyId = p.CompanyId,
                companyName=p.Company.CompanyName,
                hospitalId = p.HospitalId,
                hospitalName=p.Hospital.HospitalName
            }).FirstOrDefault();
        }

        public dynamic DetailCompany(int id)
        {
            return db.InsuranceCompanies.Where(p => p.CompanyId == id).Select(p => new
            {
                companyId = p.CompanyId,
                companyName = p.CompanyName,
                address = p.Address,
                phone = p.Phone,
                url = p.Url
            }).FirstOrDefault();
        }
        public Employee Update(Employee employee)
        {
            db.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return employee;
        }
        public Hospital UpdateHospital(Hospital hospital)
        {
            db.Entry(hospital).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return hospital;
        }

        public InsuranceCompany UpdateCompany(InsuranceCompany company)
        {
            db.Entry(company).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return company;
        }

        public Policy UpdatePolicy(Policy policy)
        {
            db.Entry(policy).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return policy;
        }
        public Employee findById(int id)
        {
            return db.Employees.Find(id);
        }

        public Hospital findHospitalById(string id)
        {
            return db.Hospitals.Find(id);
        }

        public InsuranceCompany findCompanyById(int id)
        {
            return db.InsuranceCompanies.Find(id);
        }

        public Policy findPolicyById(int id)
        {
            return db.Policies.Find(id);
        }





        //employee
        public PolicyRequestDetail AddRequest(PolicyRequestDetail request)
        {
            db.PolicyRequestDetails.Add(request);
            db.SaveChanges();
            return request;
        }
        public PolicyRequestDetail findRequestManagerById(int id)
        {
            return db.PolicyRequestDetails.Find(id);
        }


        //manager
        public PolicyRequestDetail UpdateRequestManger(PolicyRequestDetail policyrequestdetail)
        {
            db.Entry(policyrequestdetail).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return policyrequestdetail;
        }
        public dynamic FindAllRequestTracking2()
        {
            return db.PolicyRequestDetails.Join(
                 db.Policies,
                 r => r.PolicyId,
                 p => p.PolicyId,
                 (r, p) => new
                 {
                     requestId = r.RequestId,
                     requestDate = r.RequestDate.ToString("dd/MM/yyyy"),
                     employeeId = r.EmployeeId,
                     policyDescription = p.PolicyDescription,
                     amount = r.Amount,
                     emi = r.Emi,
                     companyId = r.CompanyId,
                     fullname = r.Employee.Fullname,
                     status = r.Status,
                     managerId = r.ManagerId,
                     reason = r.Reason,
                     companyName = r.Company.CompanyName,
                     description = r.Description,
                 }
                 ).ToList();
        }
        public dynamic FindAllRequestTracking()
        {
            return db.PolicyRequestDetails.Select(r => new
            {
                requestId = r.RequestId,
                requestDate = r.RequestDate.ToString("dd/MM/yyyy"),
                employeeId = r.EmployeeId,
                amount = r.Amount,
                emi = r.Emi,
                policyid = r.PolicyId,
                companyId = r.CompanyId,
                status = r.Status,
                managerId = r.ManagerId,
                reason = r.Reason,
                description = r.Description,
            }
                 ).ToList();
        }
        public dynamic FindRequestManager(int employeeId)
        {
            return db.PolicyRequestDetails.Join(
                 db.Policies,
                 r => r.PolicyId,
                 p => p.PolicyId,
                 (r, p) => new
                 {
                     requestId = r.RequestId,
                     requestDate = r.RequestDate.ToString("dd/MM/yyyy"),
                     employeeId = r.EmployeeId,
                     policyDescription = p.PolicyDescription,
                     fullname=r.Employee.Fullname,
                     amount = r.Amount,
                     emi = r.Emi,
                     companyId = r.CompanyId,
                     status = r.Status,
                     managerId = r.ManagerId,
                     reason = r.Reason,
                     companyName = r.Company.CompanyName,
                     description = r.Description,
                 }
                 ).Where(r => r.employeeId == employeeId).ToList();
        }
        public dynamic FindPolicyOnEmployee(int employeeId)
        {
            return db.PolicyRequestDetails.Join(
                 db.Policies,
                 r => r.PolicyId,
                 p => p.PolicyId,
                 (r, p) => new
                 {
                     requestId = r.RequestId,
                     requestDate = r.RequestDate.ToString("dd/MM/yyyy"),
                     employeeId = r.EmployeeId,
                     policyDescription = p.PolicyDescription,
                     fullname = r.Employee.Fullname,
                     amount = r.Amount,
                     emi = r.Emi,
                     companyId = r.CompanyId,
                     status = r.Status,
                     managerId = r.ManagerId,
                     reason = r.Reason,
                     companyName = r.Company.CompanyName,
                     description = r.Description,
                 }
                 ).Where(r => r.employeeId == employeeId).ToList();
        }




        public dynamic DetailRequestDetail(int id)
        {
            return db.PolicyRequestDetails.Where(p => p.RequestId == id).Select(p => new
            {
                requestId = p.RequestId,
                requestDate = p.RequestDate.ToString("yyyy-MM-ddTHH:mm:ss"),
                employeeId = p.EmployeeId,
                fullname=p.Employee.Fullname,
                policyid = p.PolicyId,
                policyDescription=p.Policy.PolicyDescription,
                amount = p.Amount,
                emi = p.Emi,
                companyid = p.CompanyId,
                companyName=p.Company.CompanyName,
                status = p.Status,
                managerid = p.ManagerId,
                reason = p.Reason,
                description = p.Description,
            }).SingleOrDefault();
        }

        public void ChangePassword(Employee employee)
        {
            db.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
        }


        public bool SendEmail(Mail mail)
        {
            var mailHelper = new MailHelper(configuration);
            if (mailHelper.Send("kenny220290@gmail.com", mail.To, mail.Subject, mail.Content))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool Send(string from, string to, string subject, string content)
        {
            try
            {
                var host = configuration["Gmail:Host"].ToString();
                var port = int.Parse(configuration["Gmail:Port"].ToString());
                var username = configuration["Gmail:Username"].ToString();
                var password = configuration["Gmail:Password"].ToString();
                var enable = bool.Parse(configuration["Gmail:SMTP:StartTLS:Enable"].ToString());
                var smtpClient = new SmtpClient
                {
                    Host = host,
                    Port = port,
                    EnableSsl = enable,
                    Credentials = new NetworkCredential(username, password)
                };
                var mailMessage = new MailMessage(from, to, subject, content);
                mailMessage.IsBodyHtml = true;
                smtpClient.Send(mailMessage);
                return true;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                return false;
            }
        }
        public dynamic FindAllReport()
        {
            return db.PolicyRequestDetails.Select(p => new
            {
                requestId = p.RequestId,
                requestDate = p.RequestDate.ToString("dd/MM/yyyy"),
                employeeId = p.EmployeeId,
                policyId = p.PolicyId,
                amount = p.Amount,
                emi = p.Emi,
                companyId = p.CompanyId,
                status = p.Status,
                managerId = p.ManagerId,
                reason = p.Reason,
                description = p.Description
            }).ToList();
        }
        public void updateSecurityCode(Employee employee)
        {
            db.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();

        }

        public Employee FindbyusernameAPI(string username)
        {
            return db.Employees.Where(p => p.Username == username).SingleOrDefault();
        }
        public bool Securitycode(SecuritycodeCheck stc)
        {
            if (db.Employees.Where(e => e.Username == stc.Username && e.Securitycode == stc.Securitycode).Count() > 0)
            {
                if (db.Employees.Where(e => e.Role == "admin").Count() > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

        public dynamic FindByPolicyname(string policyName)
        {
            return db.Policies.Where(h => h.PolicyName == policyName).Select(h => new
            {

                policyId = h.PolicyId,
                policyName = h.PolicyName,
                policyDescription = h.PolicyDescription,
                amount = h.Amount,
                emi = h.Emi,
                duration = h.Duration,
                companyId = h.CompanyId,
                hospitalId = h.HospitalId

            }).SingleOrDefault();
        }

        public dynamic findDateRequest(int day, int month, int year)
        {
            return db.PolicyRequestDetails.Where(r => r.RequestDate.Day ==day
              && r.RequestDate.Month==month && r.RequestDate.Year==year
            ).Select(r =>new
            {
                requestId = r.RequestId,
                requestDate = r.RequestDate.ToString("dd/MM/yyyy"),
                employeeId = r.EmployeeId,
                amount = r.Amount,
                emi = r.Emi,
                policyid = r.PolicyId,
                companyId = r.CompanyId,
                status = r.Status,
                managerId = r.ManagerId,
                reason = r.Reason,
                description = r.Description,
            }).ToList();
        }


    }

}
