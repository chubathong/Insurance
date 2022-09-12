using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using project.Model;

namespace project.Services
{
    public interface EmployeeService
    {
        public bool Login(UsernameAndPassword uap);
        public Employee FindbyusernameAPI(string username);
        public dynamic FindAll();
        public dynamic FindAccountByUsername(string username);

        public dynamic Find(int id);

       // public dynamic Details(int id);

        public Employee Create(Employee employee);

        public Employee findById(int id);
        public Employee Update(Employee employee);

        public dynamic FindRequestManager(int employeeId);
        public void Delete(int id);

        public dynamic CheckUsername(string username);
        public dynamic CheckEmail(string email);
        public Contact CreateContact(Contact contact);
        public Feedback CreateFeedback(Feedback feedback);
        public dynamic FindAllContact();
        public dynamic FindAllFeedback();
    }
}
