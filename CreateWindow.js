
const { BrowserWindow } = require('electron')
const path = require('path')

function CreateWindow(htmlFilePath) {
    // Create the browser window.

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

    // and load the index.html of the app.
    mainWindow.loadFile(htmlFilePath)
    mainWindow.setVisibleOnAllWorkspaces(true)
    mainWindow.show()
    mainWindow.setPosition(350, 1000);
}

module.exports = CreateWindow;