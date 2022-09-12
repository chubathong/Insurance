using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using project.Model;
using project.Services;

namespace project.Controllers
{
    [Route("api/employee")]
    public class EmployeeController : Controller
    {
        private EmployeeService employeeService;

        public EmployeeController (EmployeeService _employeeService)
        {
            employeeService = _employeeService;
        }
        [Produces("application/json")]
        [HttpGet("findall")]
        public IActionResult FindAll()
        {
            try
            {
                return Ok(employeeService.FindAll());
            } catch
            {
                return BadRequest();
            }
        }
 
         
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("create")]
        public IActionResult Create([FromBody] Employee employee)
        {
            try
            {      
                employee = employeeService.Create(employee);             
                return Ok(employee);
               
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("createContact")]
        public IActionResult CreateContact([FromBody] Contact contact)
        {
            try
            {
                contact = employeeService.CreateContact(contact);
                return Ok(contact);

            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("createFeedback")]
        public IActionResult CreateFeedback([FromBody] Feedback feedback)
        {
            try
            {
                feedback = employeeService.CreateFeedback(feedback);
                return Ok(feedback);

            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findallcontact")]
        public IActionResult FindAllContact()
        {
            try
            {
                return Ok(employeeService.FindAllContact());
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findallfeedback")]
        public IActionResult FindAllFeedback()
        {
            try
            {
                return Ok(employeeService.FindAllFeedback());
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("login")]
        public IActionResult LoginManager([FromBody] UsernameAndPassword usernameAndPassword)
        {
            try
            {
                return Ok(new
                {
                    Result = employeeService.Login(usernameAndPassword)
                });
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findaccountbyusername/{username}")]
        public IActionResult FindAccountByUsername(string username)
        {
            try
            {
                return Ok(employeeService.FindAccountByUsername(username));
            }
            catch
            {
                return BadRequest();
            }
        }


    }
}
