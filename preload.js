const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  minimize: () => ipcRenderer.send('window-control', 'minimize'),
  close: () => ipcRenderer.send('window-control', 'close')
});

contextBridge.exposeInMainWorld('windowControls', {
  toggleMaximize: () => ipcRenderer.send('window-control', 'toggle-maximize'),
  maximize: () => ipcRenderer.send('window-control', 'maximize'),
  unmaximize: () => ipcRenderer.send('window-control', 'unmaximize')
});
