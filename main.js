// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const electronReload = require('electron-reload')
let mainWindow = null;
const minute = 60000;





// Enable live reload for Electron too
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    maxHeight: 800,
    maxWidth: 1000,
    transparent: true,
    frame: false,
    alwaysOnTop: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  loadWindow(mainWindow, 'index.html')

  setInterval(() => {
    animation(mainWindow);
  }, 90 * minute);



});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) loadWindow(mainWindow, 'index.html')
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


function loadWindow(window, htmlFilePath) {
  window.loadFile(htmlFilePath)
  window.setVisibleOnAllWorkspaces(true)
  window.show()
  window.setPosition(150, 1000);
}


function animation(window) {
  const position = window.getPosition();
  let left = position[0];
  let top = position[1];
  const animation = setInterval(() => {
    if (top <= 20) {
      clearInterval(animation);

    }
    top = top - 10;
    console.log(top, left)
    window.setPosition(left, top);
  }, 100);

}


ipcMain.on('asynchronous-message', (event, arg) => {
  if (arg === 'ping') {
    mainWindow.setPosition(350, 1000)
  }
})

