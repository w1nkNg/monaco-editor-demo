---
marp: true
---

# Introduction for github.dev web-based editor


--- 

### Features：

- runs entirely in browser's sandbox
- navigate files and source code repositories from GitHub 
- create PR, commit & push
- not clone githubt repo, use [Github Repositories VSC-extention](https://code.visualstudio.com/docs/sourcecontrol/github#_github-repositories-extension) instead
    - The ext lets you quickly browse, search, edit, and commit to any remote GitHub repository directly from within Visual Studio Code, without needing to clone the repository locally
- data is saved in the browser’s local storage until you commit it.
- only one limitation to start: `github user account`

---

## How to open the github.dev editor
1. press `.` key to open in current tab, press `>` key to open in new tab while browsering any repository or PR 
2. replace the repository's url `github.com/xxx` -> `github.dev/xxx`
3. when viewing a file, use the dropdown menu next to  and select github.dev.

---

## Use of Visual Studio Code | Integration of VSC

GitHub.dev is built on top of Visual Studio Code, it inherits many of VS Code's features, like syntax highlighting, code completion...

GitHub.dev web-based editor realizes code completion through its integration with the Language Server Protocol (LSP) and the IntelliSense engine from Visual Studio Code (VS Code).

---

## Extension

Not all the extension in market can be directly installed and used in web based editor, only `web extension` can be successfully run

---
## Source Control

GitHub.dev is deeply integrated with Git.This integration allows users to create new branches, commit changes, and push code to GitHub repositories directly from the editor

---

## Known limitation

- Some keybindings may not work, depending on the browser you are using
- . may not work to open github.dev according to your local keyboard layout
- only a subset of extensions that can run in the web will appear in the Extensions View and can be installed.
- terminal not availabel.