# Hide Twitter Header Extension

tldr - hide twitter sidebar while in logged in state, to minimize distractions

### Overview
This Chrome extension is designed to hide the header on Twitter's website. It's useful if you find the header distracting and want to have a cleaner viewing experience.

### Files
manifest.json: Contains the metadata required for the extension, such as the manifest version, name, matching patterns, and scripts.
content.js: The JavaScript file that contains the code to find and hide the header on Twitter's web pages.

### How to Install
Create the Files: Create manifest.json and content.js in a new directory with the provided code.
Open Chrome Extensions: Navigate to chrome://extensions/ in Chrome.
Enable Developer Mode: Toggle the switch in the top-right corner.
Load Unpacked Extension: Click "Load unpacked" and select the directory containing the files.
Refresh Twitter: Refresh any open Twitter pages or navigate to Twitter to see the header hidden.

### How it Works
The extension looks for the specific header element on Twitter's website using its role and class attributes. Once found, it sets the display style to 'none', effectively hiding it. The script checks for the header every second for 10 seconds to accommodate dynamic content loading.

### Debugging
If changes are made to the extension files, make sure to reload the extension in chrome://extensions/ and refresh any relevant web pages.

### Note
This extension targets a specific structure on Twitter's website, which may change over time. Regular maintenance might be required to ensure continued functionality.

****