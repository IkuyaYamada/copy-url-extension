chrome.commands.onCommand.addListener((command) => {
  if (command === "copy_url") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const url = tabs[0].url;
        navigator.clipboard.writeText(url).then(() => {
          console.log("URL copied:", url);
        }).catch(err => console.error("Failed to copy:", err));
      }
    });
  }
});

