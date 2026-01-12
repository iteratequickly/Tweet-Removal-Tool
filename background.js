/**
 * background.js
 * Listens for the extension icon click and loads the Tweet Removal Tool
 * by executing its script within the page context. 
 * This adds the tool’s independent sidebar UI to the DOM without
 * modifying or overriding Twitter/X client code.
 */

chrome.action.onClicked.addListener((tab) => {
    // Guard to ensure we only run on supported domains
    const isTwitter = tab.url && (tab.url.includes('x.com') || tab.url.includes('twitter.com'));
    
    if (isTwitter) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['tweet_removal_tool.js']
        });
    }
});
