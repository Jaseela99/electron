Electron is a framework for building desktop applications using JavaScript, HTML, and CSS.
Electron allows you to maintain one JavaScript codebase and create cross-platform apps that work on Windows, macOS, and Linux — no native development experience required.

npm i --save-dev electron

add main.js
The entry point of any Electron application is its main script. This script controls the main process, which runs in a full Node.js environment and is responsible for controlling your app's lifecycle, displaying native interfaces, performing privileged operations, and managing renderer processes

to create a window we need content to load in it that will be a html file.
In Electron, each window displays web contents that can be loaded from either a local HTML file or a remote URL.
