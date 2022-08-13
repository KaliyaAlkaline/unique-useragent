const {app, BrowserWindow} = require("electron")
const path = require("path")
const loadMainWindow = () => {
	const mainWindow = new BrowserWindow({
		autoHideMenuBar: true,
		icon: path.join(__dirname, "favicon.ico"),
        	width : 1200,
        	height: 800,
        	webPreferences: {
        		nodeIntegration: true,
			contextIsolation: false
		}
	})
	mainWindow.loadFile(path.join(__dirname, "index.html"))
}
app.on("ready", loadMainWindow);
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})
app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
        	loadMainWindow()
	}
})