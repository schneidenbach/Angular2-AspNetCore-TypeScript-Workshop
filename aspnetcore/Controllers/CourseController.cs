using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using StudentManager.Models;

namespace StudentManager.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        public async Task<IActionResult> GetAsync()
        {
            return Ok(new[] {
                new Course {Name = "REST Best Practices"},
                new Course {Name = "Angular 2 and TypeScript"},
                new Course {Name = "Baking 101"},
                new Course {Name = "Interstellar Spaceships And You"},
            });
        }
    }
}
