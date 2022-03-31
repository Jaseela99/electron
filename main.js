//app and browser window module for loading the main page
//app module which controls your application's event lifecycle.
//The BrowserWindow module, which creates and manages application windows.

const {BrowserWindow, app} = require("electron");

//add a createWindow() function that loads index.html into a new BrowserWindow instance.

const createWindow =() =>{
    const mainWindow = new BrowserWindwow({
        width:800,
        height:100
    })
    //to load index.html
    mainWindow.loadFile("index.html");
}