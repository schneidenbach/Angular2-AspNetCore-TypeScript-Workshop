# Installing ASP.NET Core on a Windows machine
These are the step-by-step instructions that you will need to follow to get ASP.NET Core running on your computer.  I've included both Mac and Windows instructions in this repo.

If you want to be able to follow along on your laptop as we use ASP.NET Core during the workshop, you **must** be able to run the demo project at the end of these instructions - we simply won't have time to go through .  If you run into trouble, please feel free to contact me for assistance.

### Setup prerequisites

1. Install [Node](https://nodejs.org).  The version you should install will be labeled "Recommended For Most Users."
2. Make sure Node is in your command prompt's PATH by opening a command prompt and typing "npm" without quotes, and hitting Enter.  You should see a list of commands pop up.  (If you get something like "'npm' is not recognized as an internal or external command, operable program or batch file," then you need to add Node to your PATH using [these instructions](http://stackoverflow.com/a/27864253).)
3. Install [Visual Studio Code](https://code.visualstudio.com/Download).

### Install the .NET Version Manager

(From the official instructions [here](http://docs.asp.net/en/latest/getting-started/installing-on-windows.html#install-asp-net-5-from-the-command-line))

1. Open a command prompt.
2. Copy and paste the following into the command prompt and press Enter.  After it's done installing, close the command prompt.  
```
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "&{$Branch='dev';iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))}"
```

### Install the .NET Core CLR runtimes

1. Open up a new command prompt.
2. Type `dnvm upgrade -r coreclr` and press Enter.
3. The Core CLR binaries will now be installed.

### Run the project
1. Download [this repo](https://github.com/schneidenbach/Angular2-AspNetCore-TypeScript-Workshop) as a ZIP file and unzip it to a directory of your choosing. (If you're a Git user, feel free to clone it instead.)
2. Open Visual Studio Code.
3. Go to File -> Open Folder.
4. Navigate to the folder where your source code was downloaded and open the "aspnetcore" folder.
5. Type Ctrl-P to open up the command palette, then type `ext install csharp` and press Enter.  This will install the C# extension for Visual Studio Code.
6. After a minute, a popup will come up saying that the C# extension has been installed - click the Restart button.
7. Once Visual Studio Code has been restarted, press Ctrl-Shift-C to open up a command line.
8. Type `dnu restore` without quotes and press Enter.  This will download all of the required server-side resources we need to run ASP.NET Core.
9. After that is done, type `npm install` and press Enter.  This will install the client-side dependencies, including Angular 2.
10. After that is done, type `npm start` to run the application.  Note that this will take a minute as it is copying all of the client-side dependencies to wwwroot.
7. After a few seconds, it should say "Now listening on http://localhost:5000."
15. Open a browser window and navigate to http://localhost:5000.
16. If everything is setup correctly, after a few seconds a list of courses will pop up on the screen.  Congrats - you've set up ASP.NET Core!