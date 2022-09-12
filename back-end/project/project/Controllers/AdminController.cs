using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using project.Model;
using System.Diagnostics;
using System.Globalization;
using project.Helpers;

namespace project.Services
{
    [Route("api/admin")]
    public class AdminController : Controller
    {

        private AdminService adminService;
        private ManagerService accountService;

        private IWebHostEnvironment webHostEnvironment;

        private IHttpContextAccessor httpContextAccessor;
        public AdminController(AdminService _adminService, IWebHostEnvironment _webHostEnvironment, IHttpContextAccessor _httpContextAccessor, ManagerService _accountService)
        {
            //db = _db;
            accountService = _accountService;
            adminService = _adminService;
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
                    Result = adminService.Login(usernameAndPassword)
                }); 
            }
            catch
            {
                return BadRequest();
            }
        }



        [Produces("application/json")]
        [HttpGet("findallemployee")]
        public IActionResult FindAllEmployee()
        {
            try
            {
                return Ok(adminService.FindAllEmployee());
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findallhospitals")]
        public IActionResult FindAllHospitals()
        {
            try
            {
                return Ok(adminService.FindAllHospitals());
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findallcompanies")]
        public IActionResult FindAllCompaniess()
        {
            try
            {
                return Ok(adminService.FindAllCompanies());
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findallpolicy")]
        public IActionResult FindAllPolicy()
        {
            try
            {
                return Ok(adminService.FindAllPolicy());
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("addhospital")]
        public IActionResult AddHospital([FromBody] Hospital hospital)
        {
            try
            {
                hospital = adminService.AddHospital(hospital);
                return Ok(hospital);
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("addemployee")]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            try
            {
                return Ok(adminService.AddEmployee(employee));
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("addcompany")]
        public IActionResult AddCompany([FromBody] InsuranceCompany company)
        {
            try
            {
                company = adminService.AddCompany(company);
                return Ok(company);
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("addpolicy")]
        public IActionResult AddPolicy([FromBody] Policy policy)
        {
            try
            {
                policy = adminService.AddPolicy(policy);
                return Ok(policy);
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpPost("uploads/{id}")]
        public IActionResult Uploads(int id, IFormFile file)
        {
            try
            {
                var employee = adminService.findById(id);
                var baseURL = httpContextAccessor.HttpContext.Request.Scheme + "://" + httpContextAccessor.HttpContext.Request.Host + httpContextAccessor.HttpContext.Request.PathBase;
                var fileUploadInfo = new FileUploadInfo();


                var path = Path.Combine(webHostEnvironment.WebRootPath, "uploads", file.FileName);
                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                fileUploadInfo.Name = baseURL + "/uploads/" + file.FileName;
                fileUploadInfo.Length = file.Length;
                employee.Photo = fileUploadInfo.Name;
                adminService.Update(employee);

                return Ok(new
                {
                    fileName = baseURL + "/uploads/" + file.FileName,
                    fileSize = file.Length
                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("deleteemployee/{employeeid}")]
        public IActionResult DeleteEmployee(int employeeid)
        {
            try
            {
                adminService.DeleteEmployee(employeeid);

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("deletehospital/{hospitalId}")]
        public IActionResult DeleteHospital(string hospitalId)
        {
            try
            {
                adminService.DeleteHospital(hospitalId);

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("deletecompany/{companyId}")]
        public IActionResult DeleteCompany(int companyId)
        {
            try
            {
                adminService.DeleteCompany(companyId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("deletepolicy/{policyId}")]
        public IActionResult DeletePolicy(int policyId)
        {
            try
            {
                adminService.DeletePolicy(policyId);

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("detailemployee/{id}")]
        public IActionResult Details(int id)
        {
            try
            {
                return Ok(adminService.DetailEmployee(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("detailhospital/{id}")]
        public IActionResult DetailHospital(string id)
        {
            try
            {
                return Ok(adminService.DetailHospital(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("detailcompany/{id}")]
        public IActionResult DetailCompany(int id)
        {
            try
            {
                return Ok(adminService.DetailCompany(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("detailpolicy/{id}")]
        public IActionResult DetailPolicy(int id)
        {
            try
            {
                return Ok(adminService.DetailPolicy(id));
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("updateHospital/{id}")]
        public IActionResult UpdateHospital(string id, [FromBody] Hospital hospital)
        {
            try
            {
                var updateHospital = adminService.findHospitalById(id);

                updateHospital.HospitalName = hospital.HospitalName;
                updateHospital.PhoneNumber = hospital.PhoneNumber;
                updateHospital.Location = hospital.Location;
                updateHospital.Url = hospital.Url;

                adminService.UpdateHospital(updateHospital);
                return Ok(new
                {
                    Id = updateHospital.HospitalId,
                    HospitalName=updateHospital.HospitalName,
                    PhoneNumber=updateHospital.PhoneNumber,
                    Location=updateHospital.Location,
                    Url=updateHospital.Url

                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("updateCompany/{id}")]
        public IActionResult UpdateCompany(int id, [FromBody] InsuranceCompany company)
        {
            try
            {
                var updateCompany = adminService.findCompanyById(id);

                updateCompany.CompanyName = company.CompanyName;
                updateCompany.Address = company.Address;
                updateCompany.Phone = company.Phone;
                updateCompany.Url = company.Url;

                adminService.UpdateCompany(updateCompany);
                return Ok(new
                {
                    Id = updateCompany.CompanyId,
                    CompanyName = updateCompany.CompanyName,
                    Address = updateCompany.Address,
                    Phone = updateCompany.Phone,
                    Url = updateCompany.Url

                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("updatePolicy/{id}")]
        public IActionResult UpdatePolicy(int id, [FromBody] Policy policy)
        {
            try
            {
                var updatePolicy = adminService.findPolicyById(id);

                updatePolicy.PolicyName = policy.PolicyName;
                updatePolicy.PolicyDescription = policy.PolicyDescription;
                updatePolicy.Amount = policy.Amount;
                updatePolicy.Emi = policy.Emi;
                updatePolicy.Duration = policy.Duration;
                updatePolicy.CompanyId = policy.CompanyId;
                updatePolicy.HospitalId = policy.HospitalId;

                adminService.UpdatePolicy(updatePolicy);
                return Ok(new
                {
                    Id = updatePolicy.CompanyId,
                    PolicyName = updatePolicy.PolicyName,
                    PolicyDescription = updatePolicy.PolicyDescription,
                    Amount = updatePolicy.Amount,
                    Emi = updatePolicy.Emi,
                    Duration = updatePolicy.Duration,
                    CompanyId = updatePolicy.CompanyId,
                    HospitalId = updatePolicy.HospitalId,

                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("updateEmployee/{id}")]
        public IActionResult UpdateEmployee(int id, [FromBody] Employee employee)
        {
            try
            {
                var updateEmployee = adminService.findById(id);

                updateEmployee.Fullname = employee.Fullname;
                updateEmployee.Username = employee.Username;
                updateEmployee.Password = employee.Password;
                updateEmployee.Address = employee.Address;
                updateEmployee.City = employee.City;
                updateEmployee.Country = employee.Country;
                updateEmployee.PhoneNumber = employee.PhoneNumber;
                updateEmployee.Policyid = employee.Policyid;
                updateEmployee.PolicyStatus = employee.PolicyStatus;
                updateEmployee.Role = employee.Role;
                updateEmployee.Joindate = employee.Joindate;
                updateEmployee.Email = employee.Email;
                updateEmployee.ManagerId = employee.ManagerId;
                updateEmployee.Securitycode = employee.Securitycode;
                updateEmployee.Photo = employee.Photo;
                adminService.Update(updateEmployee);
                return Ok(new
                {
                    employeeid = updateEmployee.EmployeeId,
                    fullname = updateEmployee.Fullname,
                    username = updateEmployee.Username,
                    password = updateEmployee.Password,
                    address = updateEmployee.Address,
                    city = updateEmployee.City,
                    country = updateEmployee.Country,
                    phonenumber = updateEmployee.PhoneNumber,
                    policyid = updateEmployee.Policyid,
                    policystatus = updateEmployee.PolicyStatus,
                    role = updateEmployee.Role,
                    joindate = updateEmployee.Joindate,
                    email = updateEmployee.Email,
                    managerid = updateEmployee.ManagerId,
                    securitycode = updateEmployee.Securitycode,
                    photo = updateEmployee.Photo
                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findemployee/{id}")]
        public IActionResult FindEmployee(int id)
        {
            try
            {
                return Ok(adminService.FindEmployee(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findpolicy/{id}")]
        public IActionResult FindPolicy(int id)
        {
            try
            {
                return Ok(adminService.FindPolicy(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findbyusername/{username}")]
        public IActionResult Findbyusername(string username)
        {
            try
            {
                return Ok(adminService.FindByUsername(username));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findbypolicyname/{policyName}")]
        public IActionResult Findbypolicyname(string policyName)
        {
            try
            {
                return Ok(adminService.FindByPolicyname(policyName));
            }
            catch
            {
                return BadRequest();
            }
        }


        //add request detail
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("addrequest")]
        public IActionResult AddRequest([FromBody] PolicyRequestDetail request)
        {
            try
            {
                request = adminService.AddRequest(request);
                return Ok(request);
            }
            catch(Exception e)
            {
                Debug.WriteLine("Exception: " + e);
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findrequestmanagerbyid/{id}")]
        public IActionResult findRequestManagerById(int id)
        {
            try
            {
                return Ok(adminService.findRequestManagerById(id));
            }
            catch(Exception e)
            {
                Debug.WriteLine("Exception: " + e);
                return BadRequest();
            }
        }


        [Produces("application/json")]
        [HttpGet("findrequestmanager/{employeeid}")]
        public IActionResult findRequestManager(int employeeid)
        {
            try
            {
                return Ok(adminService.FindRequestManager(employeeid));
            }
            catch (Exception e)
            {
                Debug.WriteLine("Exception: " + e);
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("updaterequestmanager/{id}")]
        public IActionResult UpdateRequestManager(int id, [FromBody] PolicyRequestDetail policyrequestdetail)
        {
            try
            {
                var updatepolicyrequestdetail = adminService.findRequestManagerById(id);
                updatepolicyrequestdetail.RequestDate = policyrequestdetail.RequestDate;
                updatepolicyrequestdetail.EmployeeId = policyrequestdetail.EmployeeId;
                updatepolicyrequestdetail.PolicyId = policyrequestdetail.PolicyId;
                updatepolicyrequestdetail.Amount = policyrequestdetail.Amount;
                updatepolicyrequestdetail.Emi = policyrequestdetail.Emi;
                updatepolicyrequestdetail.CompanyId = policyrequestdetail.CompanyId;
                updatepolicyrequestdetail.Status = policyrequestdetail.Status;
                updatepolicyrequestdetail.ManagerId = policyrequestdetail.ManagerId;
                updatepolicyrequestdetail.Reason = policyrequestdetail.Reason;
                updatepolicyrequestdetail.Description = policyrequestdetail.Description;
                adminService.UpdateRequestManger(updatepolicyrequestdetail);
                return Ok(new
                {
                    RequestId=updatepolicyrequestdetail.RequestId,
                    RequestDate = policyrequestdetail.RequestDate.ToString("yyyy-MM-ddTHH:mm:ss"),
                    EmployeeId = policyrequestdetail.EmployeeId,
                    PolicyId = policyrequestdetail.PolicyId,
                    Amount = policyrequestdetail.Amount,
                    Emi = policyrequestdetail.Emi,
                    CompanyId = policyrequestdetail.CompanyId,
                    Status = policyrequestdetail.Status,
                    ManagerId = policyrequestdetail.ManagerId,
                    Reason = policyrequestdetail.Reason,
                    Description = policyrequestdetail.Description
            });
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
                return Ok(adminService.DetailRequestDetail(id));
            }
            catch
            {
                return BadRequest();
            }
        }

        
        [Produces("application/json")]
        [HttpGet("findallrequestTracking")]
        public IActionResult FindAllRequestTracking()
        {
            try
            {
                return Ok(adminService.FindAllRequestTracking());
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
                return Ok(adminService.FindAllRequestTracking2());
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("createSecurityCode/{username}")]
        public IActionResult CreateSecurityCode(string username, [FromBody] Employee employee)
        {
            try
            {
                var securityCode = RandomHelper.CreateCode();
        
                var employeeUpdate = adminService.FindbyusernameAPI(username);
                
                employeeUpdate.Securitycode = securityCode;
                adminService.updateSecurityCode(employeeUpdate);
                Mail mail = new Mail();
                mail.Content = "The security code is: " + securityCode;
                mail.Subject = "Security Code";
                mail.To = employeeUpdate.Email;
               
                if (adminService.SendEmail(mail))
                {
                    return Ok(new
                    {
                        securityCode = employeeUpdate.Securitycode
                         
                });
                }
                else
                {
                    return Ok(new
                    {
                        error = "Wrong"
                    }); ;
                }
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("securitycheck")]
        public IActionResult SecurityCheck([FromBody] SecuritycodeCheck stc)
        {
            try
            {
                return Ok(adminService.Securitycode(stc));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("changepassword/{username}")]
        public IActionResult ChangePassword(string username, [FromBody] Employee employee)
        {
            try
            {
                var employeeUpdate = adminService.FindbyusernameAPI(username);
                employeeUpdate.Password = BCrypt.Net.BCrypt.HashString(employee.Password);
            
                adminService.ChangePassword(employeeUpdate);
                return Ok(new
                {
                    employeeid = employeeUpdate.EmployeeId,
                    fullname = employeeUpdate.Fullname,
                    username = employeeUpdate.Username,
                    password = employeeUpdate.Password,
                    address = employeeUpdate.Address,
                    city = employeeUpdate.City,
                    country = employeeUpdate.Country,
                    phonenumber = employeeUpdate.PhoneNumber,
                    policyid = employeeUpdate.Policyid,
                    policystatus = employeeUpdate.PolicyStatus,
                    role = employeeUpdate.Role,
                    joindate = employeeUpdate.Joindate,
                    email = employeeUpdate.Email,
                    managerid = employeeUpdate.ManagerId,
                    securitycode = employeeUpdate.Securitycode,
                    photo = employeeUpdate.Photo
                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findDateRequest/{day}/{month}/{year}")]
        public IActionResult findDateRequest(int day, int month, int year)
        {
            try
            {
                return Ok(adminService.findDateRequest(day,month,year));
            }
            catch
            {
                return BadRequest();
            }
        }



    }
}
