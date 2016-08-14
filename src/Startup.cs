using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace Angular2
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        { 
            services.AddMvcCore()
                    .AddRazorViewEngine()
                    .AddTagHelpersAsServices()
                    .AddJsonFormatters();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Debug);
            
            app.UseFileServer(new FileServerOptions {
                FileProvider = new PhysicalFileProvider(Directory.GetCurrentDirectory())
            });

            /*
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            */

            app.UseMvc();
        }
    }
}
