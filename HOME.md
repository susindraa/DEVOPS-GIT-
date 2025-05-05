

### canvas files 
```dataviewjs
// Get all files in the vault
const canvasFiles = app.vault.getFiles()
	// Keep only .canvas files
	.filter(file => file.path.endsWith(".canvas"))
	
	// Map to file links with clean names
	.map(file => {
		const match = file.name.match(/(.+)\.canvas$/);
		const displayName = match ? match[1] : file.name;
		return dv.fileLink(file.path, false, displayName);
	});

// Sort and display list
dv.list(canvasFiles.sort((a, b) => b.display.localeCompare(a.display)));
```







