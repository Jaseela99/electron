//app and browser window module for loading the main page
//app module which controls your application's event lifecycle.
//The BrowserWindow module, which creates and manages application windows.
//menus for creating application and context menus
// include the Node.js 'path' module at the top of your file
const path = require("path");
const { BrowserWindow, app, Menu } = require("electron");
const isMac = process.platform === "darwin";

//add a createWindow() function that loads index.html into a new BrowserWindow instance.

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 100,
    webPreferences: {
      //The __dirname string points to the path of the currently executing script
      //The path.join API joins multiple path segments together, creating a combined path string that works across all platforms.
      preload: path.join(__dirname, "preload.js"),
    },
  });
  //to load index.html
  mainWindow.loadFile("index.html");
  //to open developer options
  mainWindow.webContents.openDevTools();
};

//browser window can be created only after app is ready

app.whenReady().then(() => {
  createWindow();

  //for mac os  we have to check whether the windows are created or not
  /*   app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      }) */
});

//On Windows and Linux, exiting all windows generally quits an application entirely=>'window-all-closed' event, and call app.quit() if the user is not on macOS (darwin).
//for macos we dont need to quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//menus
//the template is an array of options for constructing a MenuItem

const template = [
  //for macos the first menu will be app name so the predefined menus are given by role and type is used to have a line to seperste these menus
  {
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: "about" },
              { type: "separator" },
              { role: "services" },
              { type: "separator" },
              { role: "quit" },
            ],
          },
        ]
      : []),
  },
  {
    label: "File",
    submenu: [
      { role: "about" },
      { type: "separator" },
      {
        role: "quit",
      },
    ],
  },

  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          //shell=>Manage files and URLs using their default applications.
          const { shell } = require("electron");
          //Open the given external protocol URL in the desktop's default manner.
          await shell.openExternal("https://electron.js.org");
        },
      },
    ],
  },
];
const menu = Menu.buildFromTemplate(template);
//Returns Menu | null - The application menu, if set, or null, if not set.
Menu.getApplicationMenu(menu);
