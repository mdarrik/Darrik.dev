---
tags: ["writing", "dev tools", "notes", "wsl2"]
title: Getting WSL2 paths for Windows Applications
date: 2020-08-15T23:00:00.000Z
---

# {{title}}

Sometimes you need to access your files in WSL2 from your Windows environment. This might be for opening them in a gui or getting a path for another tool. E.g. I do it for editing my writing with the [Hemingway App](https://hemingwayapp.com). 

WSL files live on the \\wsl$ drive on your machine. So you can always build the path that way, converting the linux paths to Windows paths. 

You can also open the folder you want in explorer.exe. 

In your WSL terminal, navigate to the folder you want to open. Then run 
```bash
explorer.exe .
```

That will open the current directory in Windows Explorer (not to be confused with Internet Explorer). You then have your WSL files open in your file explorer. You can use the path there to point your various Windows tool to that folder. 