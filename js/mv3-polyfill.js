// Manifest V3 Compatibility Polyfill
// This provides compatibility shims for deprecated Manifest V2 APIs

// Create browserAction shim pointing to action API
if (!chrome.browserAction) {
  chrome.browserAction = {};
}

// Bridge browserAction methods to action API
chrome.browserAction.getTitle = chrome.browserAction.getTitle || function(details, callback) {
  chrome.action.getTitle(details, callback);
};

chrome.browserAction.setTitle = chrome.browserAction.setTitle || function(details, callback) {
  chrome.action.setTitle(details, callback);
};

chrome.browserAction.getBadgeText = chrome.browserAction.getBadgeText || function(details, callback) {
  chrome.action.getBadgeText(details, callback);
};

chrome.browserAction.setBadgeText = chrome.browserAction.setBadgeText || function(details, callback) {
  chrome.action.setBadgeText(details, callback);
};

chrome.browserAction.setIcon = chrome.browserAction.setIcon || function(details, callback) {
  chrome.action.setIcon(details, callback);
};

chrome.browserAction.getIcon = chrome.browserAction.getIcon || function(details, callback) {
  chrome.action.getIcon(details, callback);
};

chrome.browserAction.onClicked = chrome.browserAction.onClicked || chrome.action.onClicked;

// Polyfill for chrome.tabs.insertCSS (deprecated in MV3)
if (chrome.scripting && !chrome.tabs.insertCSS) {
  chrome.tabs.insertCSS = function(tabId, details, callback) {
    const actualCallback = typeof details === 'function' ? details : callback;
    const targetDetails = {
      target: { tabId: tabId }
    };
    
    if (details.file) {
      targetDetails.files = [details.file];
    } else if (details.code) {
      targetDetails.css = details.code;
    }
    
    chrome.scripting.insertCSS(targetDetails).then(() => {
      if (actualCallback) actualCallback();
    }).catch(err => {
      if (actualCallback) actualCallback();
    });
  };
}

// Polyfill for chrome.tabs.executeScript (deprecated in MV3)
if (chrome.scripting && !chrome.tabs.executeScript) {
  chrome.tabs.executeScript = function(tabId, details, callback) {
    const actualCallback = typeof details === 'function' ? details : callback;
    const targetDetails = {
      target: { tabId: tabId }
    };
    
    if (details.file) {
      targetDetails.files = [details.file];
    } else if (details.code) {
      targetDetails.func = details.code;
    }
    
    chrome.scripting.executeScript(targetDetails).then(() => {
      if (actualCallback) actualCallback();
    }).catch(err => {
      if (actualCallback) actualCallback();
    });
  };
}

