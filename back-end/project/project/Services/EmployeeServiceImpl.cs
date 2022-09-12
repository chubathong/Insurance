using project.Model;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project.Services
{
    public class EmployeeServiceImpl : EmployeeService
    {
        private DatabaseContext db;
        public EmployeeServiceImpl(DatabaseContext _db)
        {
            db = _db;
        }
        public bool Login(UsernameAndPassword uap)
        {
            if (db.Employees.Where(e => e.Username == uap.Username).Count() > 0)
            {
                var account = FindbyusernameAPI(uap.Username);
                if (BCrypt.Net.BCrypt.Verify(uap.Password, account.Password))
                {

                    if (account.Role == "employee" || account.Role=="manager" || account.Role == "admin")
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

        public Employee Create(Employee employee)
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
                    var hash = BCrypt.Net.BCrypt.HashString(employee.Password);
                    employee.Password = hash;
                    db.Employees.Add(employee);
                    employee.Password = hash;
                    db.SaveChanges();
                    return employee;
                }

            }

        }
        public dynamic CheckUsername(string username)
        {
            return db.Employees.Count(i => i.Username == username) > 0;
        }
        public dynamic CheckEmail(string email)
        {
            return db.Employees.Count(i => i.Email == email) > 0;
        }

        public dynamic Find(int id)
        {
            return db.Employees.Where(p=>p.EmployeeId == id).Select(p => new
            {
                employeeid = p.EmployeeId,
                joindate=p.Joindate,
                fullname=p.Fullname,
                username = p.Username,
                password=p.Password,
                address=p.Address,
                phonenumber=p.PhoneNumber,
                country=p.Country,
                city=p.City,
                policyid=p.Policyid,
                policystatus=p.PolicyStatus,
                role=p.Role,
                managerid=p.ManagerId,
                email=p.Email


            }).FirstOrDefault();
        }


        public dynamic FindAll()
        {
            return db.Employees.Select(p => new
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
                role = p.Role,
                managerid = p.ManagerId,
                email = p.Email
            }).ToList();
        }

     

        public Employee findById(int id)
        {
            return db.Employees.Find(id);
        }


        public Employee Update(Employee employee)
        {
            db.Entry(employee).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return employee;
        }

        public void Delete(int id)
        {
            db.Employees.Remove(db.Employees.Find(id));
            db.SaveChanges();
        }

        public Contact CreateContact(Contact contact)
        {
            db.Contacts.Add(contact);
            db.SaveChanges();
            return contact;
        }

        public Feedback CreateFeedback(Feedback feedback)
        {
            db.Feedbacks.Add(feedback);
            db.SaveChanges();
            return feedback;
        }

        public dynamic FindAllContact()
        {
            return db.Contacts.Select(p => new
            {
                contactid = p.ContactId,
                name = p.Name,
                email=p.Email,
                message=p.Message,
                date=p.Date.ToString("dd/MM/yyyy")

            }).ToList();
        }

        public dynamic FindAllFeedback()
        {
            return db.Feedbacks.Select(p => new
            {
                feedbackid = p.FeedbackId,
                rate = p.Rate,        
                message = p.Message,
                dateofbirth=p.Dateofbirth.ToString("dd/MM/yyyy"),
                gender=p.Gender,
                email = p.Email,
                phone=p.Phone,
                date = p.Date.ToString("dd/MM/yyyy")
            }).ToList();
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

        public dynamic FindAccountByUsername(string username)
        {
            return db.Employees.Where(p => p.Username == username).Select(p => new
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
                role = p.Role,
                managerid = p.ManagerId,
                email = p.Email


            }).FirstOrDefault();
        }
    }
}
