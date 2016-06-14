using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angular2.Controllers
{
    public class HomeController : Controller
    {
        //[HttpGet("/")]
        public IActionResult Index() => View();
        
        //[HttpGet("/About")]
        public IActionResult About() => View();
    }
}
