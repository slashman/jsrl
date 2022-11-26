// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');
const isDev = (process.env.NODE_ENV === 'development');

if (isDev) {
  // we want to watch the output of the renderer bundle for changes
  const distPath = path.join(__dirname, '..', 'dist/electron/**')
  require('electron-reload')(distPath, {
    electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
  });
}

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // Required by pixijs
      enableRemoteModule: true, // Required by pixijs
      contextIsolation: false // Required by pixijs
    }
  });

  mainWindow.setMenu(null);

  if (isDev) {
    mainWindow.loadURL(`file://${__dirname}/../dist/electron/index.html`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile('index.html');
  }

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
