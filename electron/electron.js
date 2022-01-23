// Modules to control application life and create native browser window
const {app, protocol, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {

  const indexFile = 'index.html';

  protocol.interceptFileProtocol(
    'file',
    (request, callback) => {
      const url = request.url.substr(7); // strip "file://" out of all urls
      if (request.url.endsWith(indexFile)) {
        callback({ path: url });
      } else {
        // filter out our path name from the file://
        // aka. file:///c:/index.foo.css
        const realurl = request.url.substr(11);
        callback({ path: path.normalize(`${__dirname}/${realurl}`) });
      }
    },
    error => console.error(error)
  )

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // and load the index.html of the app.
  //mainWindow.loadURL(url.format({
  //  pathname: 'index.html',
  //  protocol: PROTOCOL + ':',
  //  slashes: true
  //}));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
