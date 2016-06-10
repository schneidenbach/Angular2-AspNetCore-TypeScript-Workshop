using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2.Models;

namespace Angular2.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController
    {
        public Course[] Get()
        {
            return new[] {
                new Course {Name = "REST Best Practices"},
                new Course {Name = "Angular 2 and TypeScript"},
                new Course {Name = "Baking 101"},
                new Course {Name = "Interstellar Spaceships And You"},
            };
        }
    }
}
