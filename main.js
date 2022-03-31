//app and browser window module for loading the main page
//app module which controls your application's event lifecycle.
//The BrowserWindow module, which creates and manages application windows.

const {BrowserWindow, app} = require("electron");
//const isMac = process.platform === "darwin"

//add a createWindow() function that loads index.html into a new BrowserWindow instance.

const createWindow =() =>{
    const mainWindow = new BrowserWindow({
        width:800,
        height:100
    })
    //to load index.html
    mainWindow.loadFile("index.html");

}

//browser window can be created only after app is ready

app.whenReady().then(()=>{
    createWindow();

//for mac os  we have to check whether the windows are created or not
 /*  isMac? [ app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })]:[] */
})

//On Windows and Linux, exiting all windows generally quits an application entirely=>'window-all-closed' event, and call app.quit() if the user is not on macOS (darwin).
//for macos we dont need to quit the app
app.on("window-all-closed",()=>{
    if(process.platform !=="darwin"){
        app.quit();
    }
})