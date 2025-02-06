const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');
const path = require('path');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 380,
        height: 460,
        resizable: false, // Prevents resizing (removes maximize button)
        maximizable: false, // Ensures maximize button is removed
        minimizable: true, // Allows minimizing
        closable: true, // Allows closing
        frame: false, // Removes native title bar
        icon: path.join(__dirname, 'media/images/plant.png'),
        webPreferences: {
            nodeIntegration: false, // More secure
            contextIsolation: true, // Prevents access to `require` in renderer
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js') // 👈 Add this line
        }
    });

    win.loadFile('index.html');
};

// Handle window actions from renderer
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