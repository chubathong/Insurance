using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project.Model;
using project.Services;

namespace project.Controllers
{
    [Route("api/manager")]
    public class ManagerController : Controller
    {
        private DatabaseContext db;

        private ManagerService managerService;

        private IWebHostEnvironment webHostEnvironment;

        private IHttpContextAccessor httpContextAccessor;

        public ManagerController(ManagerService _managerService, DatabaseContext _db, IWebHostEnvironment _webHostEnvironment, IHttpContextAccessor _httpContextAccessor)
        {
            managerService = _managerService;
            db = _db;
            webHostEnvironment = _webHostEnvironment;
            httpContextAccessor = _httpContextAccessor;
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("login")]
        public IActionResult Login([FromBody] UsernameAndPassword usernameAndPassword)
        {
            try
            {
                return Ok(new
                {
                    Result = managerService.Login(usernameAndPassword)
                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findallrequestTracking2")]
        public IActionResult FindAllRequestTracking2()
        {
            try
            {
                return Ok(managerService.FindAllRequestTracking2());
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("detailrequestmanager/{id}")]
        public IActionResult DetailRequestManager(int id)
        {
            try
            {
                return Ok(managerService.DetailRequestDetail(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("updaterequestmanager/{id}")]
        public IActionResult UpdateRequestManager(int id, [FromBody] PolicyRequestDetail policyRequestDetail)
        {
            try
            {
                var requestDetail = managerService.FindPolicyRequestDetail(id);
                requestDetail.RequestDate = policyRequestDetail.RequestDate;
                requestDetail.EmployeeId = policyRequestDetail.EmployeeId;

                requestDetail.PolicyId = policyRequestDetail.PolicyId;

                requestDetail.Amount = policyRequestDetail.Amount;
                requestDetail.Emi = policyRequestDetail.Emi;
                requestDetail.CompanyId = policyRequestDetail.CompanyId;
 
                requestDetail.Status = policyRequestDetail.Status;
                requestDetail.ManagerId = policyRequestDetail.ManagerId;
                requestDetail.Reason = policyRequestDetail.Reason;
                requestDetail.Description = policyRequestDetail.Description;
                managerService.UpdateRequestManger(id, requestDetail);
                Mail mail = new Mail();
                mail.To = requestDetail.Employee.Email;
                mail.Subject = "Request number" + requestDetail.RequestId;
                mail.Content = "<h3> Request number </h3>" + "<h3>" + requestDetail.RequestId + "</h3>";
                mail.Content += "<br><br>";
                mail.Content += "Dear " + "" + requestDetail.Employee.Fullname;
                mail.Content += " Your request has been " + "" + requestDetail.Status + " !!!";
                mail.Content += "<br><br>";
                mail.Content += "Thank you!!!";
                if (managerService.SendEmail(mail))
                {
                    return Ok(new
                    {
                        requestId = requestDetail.RequestId,
                        requestDate = requestDetail.RequestDate,         
                        emplemployeeId=requestDetail.EmployeeId,

                        policyid = requestDetail.PolicyId,
  
                        amount = requestDetail.Amount,
                        emi = requestDetail.Emi,
                        companyId = requestDetail.CompanyId,

                        status = requestDetail.Status,
                        managerid = requestDetail.ManagerId,
                        reason = requestDetail.Reason,
                        description = requestDetail.Description
                    });
                }
                else
                {
                    return BadRequest();
                }

            }
            catch
            {
                return BadRequest();
            }
        }

    }
}
