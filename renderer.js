const { ipcRenderer } = require('electron')

const btn = document.getElementById('close');
btn.addEventListener('click', (e) => {
    ipcRenderer.send('asynchronous-message', 'ping')
})


