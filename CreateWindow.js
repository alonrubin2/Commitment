
const { BrowserWindow } = require('electron')
const path = require('path')

function CreateWindow(htmlFilePath) {
    // Create the browser window.

    const mainWindow = new BrowserWindow({
        width: 580,
        height: 580,
        maxHeight: 580,
        maxWidth: 580,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile(htmlFilePath)
    mainWindow.setVisibleOnAllWorkspaces(true)
    mainWindow.show()
}

module.exports = CreateWindow;