// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const electronReload = require('electron-reload')






// Enable live reload for Electron too
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 580,
    height: 580,
    maxHeight: 580,
    maxWidth: 580,
    transparent: true,
    frame: false,
    // frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  loadWindow(mainWindow, 'index.html')
  // mainWindow.setAlwaysOnTop(true);
  const position = mainWindow.getPosition();
  let left = position[0];
  let top = position[1];

  const animation = setInterval(() => {
    if (top <= 50) {
      clearInterval(animation);
    }
    top = top - 10;
    console.log(position, left, top);
    mainWindow.setPosition(left, top);
  }, 100);




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
  window.setPosition(350, 500);
}

// function windowAnimation(window) {
//   const position = window.getPosition();
//   let x = position[0];
//   let y = position[1];
//   console.log(position, x, y);
//   for (let i = 0; y >= 50; i++) {
//     y = y - 10;
//     window.setPosition(x, y);
//   }
// }

// need to find a way to use mainWondow to create a timed animation that moves it up

function moveDown() {
  console.log('clicked')
}

