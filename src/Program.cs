using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using System;

namespace Angular2 {
    public class Program
    {
        public static void Main(string[] args)
        {
            var dir = Directory.GetCurrentDirectory();
            Console.WriteLine(dir);
            var host = new WebHostBuilder()
                        .UseKestrel()
                        .UseContentRoot(dir)
                        .UseIISIntegration()
                        .UseStartup<Startup>()
                        .Build();

            host.Run();
        }
    }
}