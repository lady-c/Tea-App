const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');
const path = require('path');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 382,
        height: 455,
        resizable: false,
        maximizable: false,
        minimizable: true,
        closable: true,
        frame: false,
        icon: path.join(__dirname, 'media/images/plant.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });

    win.loadFile('index.html');
};

// Handle window actions
ipcMain.on('minimize-window', () => {
    if (win) win.minimize();
});

ipcMain.on('close-window', () => {
    if (win) win.close();
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});