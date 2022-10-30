/* eslint-disable @typescript-eslint/no-var-requires */
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require('electron')

// Provide proper declarations in global.d.ts !!!

contextBridge.exposeInMainWorld('API', {
    foo: (text : string) => {
        console.log(text)
    },
    bar: () => {
        return 5;
    }
})