using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using project.Model;

namespace project.Services
{
    public interface ManagerService
    {
        public bool Login(UsernameAndPassword uap);

        public Employee FindbyusernameAPI(string username);
        public dynamic FindAllRequestTracking2();
        public PolicyRequestDetail findRequestManagerById(int id);
        public PolicyRequestDetail UpdateRequestManger(int id,PolicyRequestDetail policyrequestdetail);
        public dynamic DetailRequestDetail(int id);
        public PolicyRequestDetail FindPolicyRequestDetail(int id);
        public bool SendEmail(Mail mail);

    }
}
