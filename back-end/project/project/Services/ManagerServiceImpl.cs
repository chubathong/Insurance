using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using project.Helpers;
using project.Model;

namespace project.Services
{
    public class ManagerServiceImpl : ManagerService
    {
        private DatabaseContext db;


        private IWebHostEnvironment webHostEnvironment;

        private IConfiguration configuration;


        private IHttpContextAccessor httpContextAccessor;
        public ManagerServiceImpl(DatabaseContext _db, IWebHostEnvironment _webHostEnvironment, IConfiguration _configuration, IHttpContextAccessor _httpContextAccessor)
        {
            db = _db;
            webHostEnvironment = _webHostEnvironment;
            configuration = _configuration;
            httpContextAccessor = _httpContextAccessor;
        }


        public bool Login(UsernameAndPassword uap)
        {
            if (db.Employees.Where(e => e.Username == uap.Username).Count() > 0)
            {
                var account = FindbyusernameAPI(uap.Username);
                if (BCrypt.Net.BCrypt.Verify(uap.Password, account.Password))
                {

                    if (account.Role == "manager")
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
        public Employee FindbyusernameAPI(string username)
        {
            return db.Employees.Where(p => p.Username == username).SingleOrDefault();
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
        public PolicyRequestDetail UpdateRequestManger(int id,PolicyRequestDetail policyrequestdetail)
        {
            db.Entry(policyrequestdetail).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return policyrequestdetail;
        }
        public PolicyRequestDetail findRequestManagerById(int id)
        {
            return db.PolicyRequestDetails.Find(id);
        }
        public dynamic DetailRequestDetail(int id)
        {
            return db.PolicyRequestDetails.Where(p => p.RequestId == id).Select(p => new
            {
                requestId = p.RequestId,
                requestDate = p.RequestDate,
                employeeId = p.EmployeeId,
                fullname = p.Employee.Fullname,
                policyid = p.PolicyId,
                policyDescription = p.Policy.PolicyDescription,
                amount = p.Amount,
                emi = p.Emi,
                companyId = p.CompanyId,
                companyName = p.Company.CompanyName,
                status = p.Status,
                managerid = p.ManagerId,
                reason = p.Reason,
                description = p.Description,
            }).SingleOrDefault();
        }
        public PolicyRequestDetail FindPolicyRequestDetail(int id)
        {
            return db.PolicyRequestDetails.Where(p => p.RequestId == id).SingleOrDefault();
        }
        public bool SendEmail(Mail mail)
        {
            var mailHelper = new MailHelper(configuration);
            if (mailHelper.Send("chubathongp2000@gmail.com", mail.To, mail.Subject, mail.Content))
            {
                return true;
            }
            else
            {
                return false;
            }
        }



    }
}

