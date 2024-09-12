chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'executeScript') {
        chrome.tabs.executeScript({
            code: 'document.body.innerText'
        }, function(results) {
            sendResponse(results[0]);
        });
    }
});