# Installing ASP.NET Core on a Windows machine
These are the step-by-step instructions that you will need to follow to get ASP.NET Core running on your computer.  I've included both Mac and Windows instructions in this repo.

If you want to be able to follow along on your laptop as we use ASP.NET Core during the workshop, you **must** be able to run the demo project at the end of these instructions - we simply won't have time to go through .  If you run into trouble, please feel free to contact me for assistance.

### Setup prerequisites

1. Install [Node](https://nodejs.org).  The version you should install will be labeled "Recommended For Most Users."
2. Make sure Node is in your command prompt's PATH by opening a command prompt and typing "npm" without quotes, and hitting Enter.  You should see a list of commands pop up.  (If you get something like "'npm' is not recognized as an internal or external command, operable program or batch file," then you need to add Node to your PATH using [these instructions](http://stackoverflow.com/a/27864253).)
3. Install [Visual Studio Code](https://code.visualstudio.com/Download).

### Install the ASP.NET Core binaries

1. Follow the instructions [here](http://docs.asp.net/en/latest/getting-started/installing-on-windows.html#install-asp-net-5-from-the-command-line) to install ASP.NET 5.  **Make sure you follow the "Install ASP.NET 5 from the command-line" instructions!**
2. During the step where you setup the .NET Execution Environment (DNX) install **DNX for .NET Core**.

### Run the project
1. Download [this repo](https://github.com/schneidenbach/Angular2AndAspNetCoreSample) as a ZIP file and unzip it to a directory of your choosing. (If you're a Git user, feel free to clone it instead.)
2. Open Visual Studio Code.
3. Go to File -> Open Folder.
4. Navigate to the folder where your source code was downloaded and open the "src" folder.
5. A popup will come at the top of the Visual Studio Code window saying something like "Would you like to install the C# extension?"  Click Yes and wait for the extension to install.
5. Open the command palette by pressing Ctrl-Shift-P.  (We will use this command palette frequently to perform tasks.)
6. Start typing "dnx restore".  Eventually one command will be left to select - press Enter to run that command.
7. **You might get a message saying "OmniSharp is not running."**  This is normal!  Wait a few seconds and try step 6 again.
8. A command prompt will open up and download a bunch of things right before your eyes.  Wait for it to finish - the window will close automatically.
9. Once that's done, press Ctrl-Shift-C inside of Visual Studio Code.  This will open a new command prompt.
10. Type "npm install -g gulp" without quotes and hit Enter.  Wait for the install to finish.
11. Type "npm install" without quotes and hit Enter.  Wait for the install to finish.
12. Close the command prompt.
13. Open the command palette (Ctrl-Shift-P) and type build and hit enter.  Wait for the build task to finish.
13. Go back to Visual Studio Code and open the command palette (Ctrl-Shift-P.)  Type "dnx run" without quotes and hit Enter.
14. A command prompt will open up.  After a few seconds, it should say "Now listening on http://localhost:5000."
15. Open a browser window and navigate to http://localhost:5000.
16. If everything is setup correctly, after a few seconds you should get a message saying something like "Congratulations!  You have setup ASP.NET Core successfully."