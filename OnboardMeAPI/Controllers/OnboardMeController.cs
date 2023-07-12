using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OnboaedMeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OnboardMeController : ControllerBase
    {
        public OnboardMeController()
        {

        }

        [HttpPost]
        public IActionResult SaveEmployeeDocuments(IFormFile docfile)
        {
            return Ok();
        }
    }
}
