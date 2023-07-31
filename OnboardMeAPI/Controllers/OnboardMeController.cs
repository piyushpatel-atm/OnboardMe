using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnboaedMeAPI.Models;
using OnboaedMeAPI.Repository;
using System.Net.Mail;

namespace OnboaedMeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OnboardMeController : ControllerBase
    {
        private readonly IService _service;
      
        public OnboardMeController(IService service)
        {
            _service = service;
           
        }

        [HttpPost("Register")]
        public IActionResult RegisterUser(User obj)
        {
            try
            {
                if (!_service.IsEmailAvailable(obj.Email))
                {
                    return Ok("Email is already exist!");
                }
                _service.RegisterNewUser(obj);
                return Ok("User Register");
            }
            catch
            {
                return BadRequest("Not Register");
            }
           
        }
    }
}
