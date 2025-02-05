const {
    app,
    BrowserWindow
} = require('electron'); // Fixed syntax error
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 380,
        height: 460,
        webPreferences: {
            nodeIntegration: true, // Allow using localStorage & require in renderer
            contextIsolation: false // Required to access document in renderer.js
        }
    });

    win.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});