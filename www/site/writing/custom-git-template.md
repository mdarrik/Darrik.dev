---
title: "Creating a Custom Git Template"
tags: ["writing", "notes", "git", "cli"]
description: "Info on creating a custom git template for optimizing my repo preferences!"
date: "2020-07-01T05:50:08.000Z"
---

# {{title}}

So I want to start this post off by saying language matters. Language can make people feel excluded, and often contributes to overall structural exclusion built into racism and ableism. However, it's also important to realize that changing language is mostly performative if not paired with other active techniques to combat structural exclusion at it's roots. So changing language cannot be the only thing that you do. Take some time to elevate Black voices. If you can, help combat the racist and exclusionary practices in hiring, promoting, and retention that exist in your workplace. Donate money where you can. If you're looking for places to donate, a developer I respect a lot, Prince Wilson, set up a page with information for organizations to support specifically focused around Black Lives Matter and the fight for justice and carceral reform: [https://prince.dev/donate](https://prince.dev/donate). You can also look to find organizations local to where you live to help people directly in your communities. 

As people started discussing changing the language of git repos to move away from the term Master branch, which has at least some roots in the "Master/Slave" terminology used in other places in tech, people began creating tools to make this easier. Chris Dickinson created an npx script for defaulting the initial branch on new git repos to "latest" instead, ["git-the-latest"](https://github.com/chrisdickinson/git-the-latest). I liked the idea, but wanted to use "main" instead, because it makes more sense to me. So I forked it. In doing so, I learned about git-templates and realized I could use them to more fully customize my own git repos. Currently, I've only set up a custom exclude file and re-mapped my default branch's name to "main". There's definitely more that can be done, and I'll try and update this article and my repo as I find more things I might want to include. 

You can see the code here: https://github.com/mdarrik/git-template


## git-template directory 
The key to customizing your git repos is the "git-template" directory. Anything in this directory that does not begin with a "." will be copied into your ".git" folder when you run `git init` on a new repo. Similarly, if you run `git init` on an existing repo, git will only copy over the contents of your "git-template" that don't currently exist in your ".git" folder. As such, you can put anything in your "git-template" folder that you'd put in your ".git" folder. So this includes things like git hooks, exclude files, tags, and more. This folder can be named whatever you like, and placed anywhere that git can access it. The script I based my setup script on uses ".git-template", that's what mine are called. 

A good place to start in creating your template is to run `git init` in a repo and copy the contents of the newly created ".git" folder into your template folder. 

When you have setup your "git-template" folder, there are a few ways to tell git how to use it. Git will pick the template in this order: 

1. Pass the path to your template using the `--template` cli option. To do that, run `git init --template=path/to/template`.
2. Set the `$GIT_TEMPLATE_DIR` environment variable. How you set this environment variable differs depending on your OS + Command Line Language of choice. For bash, you can set `$GIT_TEMPLATE_DIR=path/to/template` in your .bashrc file. 
3. Add `init.templateDir` to your git config. To do that, run `git config --global init.templateDir path/to/template`. This is how my repo does it. 
4. The default template directory used by git. This defaults to `/usr/share/git-core/templates`. 

For managing git templates across machines, I can image 2 ways to do it.
1. Create a template folder and push that directly to a remote repository, then pull that wherever you need the template and point git to that template using one of the above methods. 
2. Create a script that writes the git template and sets either your environment variable or your init.templateDir config option (Because I copied my git-template from an npx script, this is what I'm doing. I may publish this to npm for my own convenience someday).


## Renaming the Initial/Default Branch

To rename the default branch from "master" to "main" (or whatever you choose), you will need to add a "HEAD" file to your template. This file tells git what branch you're currently on. In an empty git repo, we can use it to tell git what to call the branch that gets created when we add our first commit. The file has one line that looks like this: 

```
ref: refs/heads/branch-name
```

This tells git that the "ref" for the current branch can be found at "refs/heads/branch-name". In my case, I want my default branch to be "main". So my template HEAD file looks like this: 

```
ref: refs/heads/main
```

Now, when I commit my first bit of code, git will create a ref file at the path refs/heads/main with the information it needs to access that branch. 

### Gotcha: CLI context tools like Starship still say "master" until first commit
On my personal machine, I use the [rust-based CLI tool, Starship](https://starship.rs) to help contextualize my current CLI environment. It tells me what git branch I'm on, what version of node I'm using, and more. However, something that has caught me off guard was that after you run "git init", Starship will claim I'm on the "master" branch. The first and second time I encountered this, I went into a panic thinking my template was somehow broken. It wasn't. Until you commit something, Starship (and conceivably other tools) will tell you you're on the "master" branch. Don't panic. As soon as you commit something, they'll register the correct branch name. 

### Gotcha: Git CLI will tell you it's "reinitializing" new repos
Another thing that has thrown me for a loop a few times. When creating a new repo, even in a new folder, git will claim it's "reinitializing" your repo, even when running `git init` in a brand new folder. I'm not quite sure why this happens, it might be how git handles custom templates. Just know that even though it seems odd, git is still working appropriately. 

## Adding a custom git exclude 
In addition to using .gitignore to exclude directories and files from being added to git, you can use an exclude file. Note that an exclude file does not get checked into remote repos, so it's not a replacement for a .gitignore. However, it will be included while you work on any repo locally. This can stop you from accidentally committing things you don't want to. Which is why I've chosen to add one into my own template. I've also set up a bash script to copy the exclude folder to a .gitignore file when running `git init`. This way, I get the best of both. I won't accidentally commit node_modules or .env files in repos I've cloned, and I get a pre-populated .gitignore file on repos I create. Win-Win!

To create the exclude file, create an "info" directory inside your template. Then, create a file titled "exclude", all lowercase. The syntax for an exclude file is mostly identical to a .gitignore. So specify the names of files & directories you do not want available to .git. Since I mostly work in web + JS, I copied the [.gitignore template from Github for NodeJS](https://github.com/github/gitignore/blob/master/Node.gitignore) into my template. I then also added lines for ".env" and ".env.development" files. This way I don't accidentally commit any secrets to my repos. 

## Final git-template structure

If you used git-init to initialize your template, your git-template directory should now have a structure similar to this. Each level of the list represents a level in the directory.  

- HEAD (contents: "ref: refs/heads/main")
- config (generated by `git init`)
- info 
    - exclude (contents: all files you want to exclude from git)
- objects (generated by `git init`)
- refs (generated by `git init`)
