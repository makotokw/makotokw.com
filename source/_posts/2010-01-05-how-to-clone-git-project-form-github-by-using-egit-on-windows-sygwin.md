---
title: "How to clone git project form github by using Egit on Windows (sygwin)?"
category: "Programing"
tag: ["git","Eclipse"]
date: 2010-01-05
---

Here is "Guides: Using the EGit Eclipse Plugin with GitHub":
https://github.com/guides/using-the-egit-eclipse-plugin-with-github

However, Egit could not connect by ssh on Windows when I used cygwin for ssh+git.
Egit try to find .ssh on HOME directory on Windows(C:\Users\makoto_kw), but it is on HOME directory on cygwin(/cygwin/home/makoto_kw).

I could relate to .git with Egit after importing a project

1. git clone on cygwin
 * ```git clone git@github.com:makotokw/php-twient.git```
1. Create new project on Eclipse
 * Chose directory cloned above
1. Context menu of the project  > Team > Share Project... > Git
 * Egit find .git automatically and select "Finish" button

That's all!







