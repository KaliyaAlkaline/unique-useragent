# unique-useragent
A little tool I made using Electron that allows you to generate unique user agents by randomizing the browser name.

# Why have a new unique user agent?
Some sites will use the user agent to track data without using your IP address or any cookies, making it more difficult to keep them from tracking you. While there are user agent generators that provide agents that can't be tracked, some sites may blacklist these agents like how they block Tor IPs. If you don't want to be tracked on the internet, then changing your user agent to something random each time can help quite a lot.

# How to use user agents?
Each browser is different, and some are easier to use custom user agents in than others. I would recommend using Firefox because it allows you to edit the user agent from about:config. Simply set the value of general.useragent.override to whatever you want your user agent to be.

# Using my application
Because of cross-platform issues, I'm going to be providing the source code files here. If you want to use the app on your device, here's the steps and requirments:

Requirments:
1. Node JS
2. npm (Comes with Node)

Steps:
1. Open your prompt and navigate to the folder (on Windows this would be "cd User-Agent Generator")
2. Type "npm i -g electron-builder"
3. Type "electron-builder -w" (-w for Windows, -l for Linux, and -m for Mac)
4. After the building process is complete, navigate to the new folder "dist" and open the setup application
5. Once the application is done being set up, you can delete the folder and use the application. There should be a shortcut automatically generated
