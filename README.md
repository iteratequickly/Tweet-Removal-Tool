# 🐦 Tweet Removal Tool

<p align="center">
  <strong>Delete your tweets for free, privately, locally, and on your terms.</strong>
</p>

A modern, local-first Chrome extension for reviewing and selectively deleting tweets from your X (formerly Twitter) account. There are no external servers, no subscriptions, and no data collection. All actions run directly inside your browser.

> **Disclaimer:** This project is not affiliated with, endorsed by, or supported by Twitter/X. It operates locally within your browser to facilitate manual tweet management using official web endpoints.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) 
[![Chrome Version](https://img.shields.io/badge/Chrome-88%2B-blue)](https://www.google.com/chrome/) 
[![Platform Support](https://img.shields.io/badge/Platforms-Chrome%2C%20Edge%2C%20Brave%2C%20Opera%2C%20Vivaldi-green)](https://www.google.com/chrome/)

<p align="center">
  <img src="https://repository-images.githubusercontent.com/1132546702/51f2600e-ef7f-4389-b2c0-7ccf84c258fb" alt="Tweet Removal Tool Preview" width="800">
</p>

---

## ✨ Why Choose This Tool?

- 💰 **100% free:** No limits, tiers, subscriptions, or pay-to-delete restrictions.  
- 🔒 **Privacy first:** Operates entirely within your browser. Login tokens, tweets, and cookies never leave your computer.  
- 🔑 **No credentials required:** Uses your existing logged-in X session. You never enter your password into the extension.  
- 🔍 **Selective deletion:** Review tweets in a visual grid and choose exactly what to delete instead of removing everything blindly.  
- ⚡ **No API keys:** Works immediately by mirroring official web requests. No developer account or API access is required.  

---

## 🚀 Getting Started

### Installation (Manual)

1. Download or clone this repository to your local machine.  
2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer mode** using the toggle in the top right corner.  
4. Click **Load unpacked** and select the folder containing `manifest.json`.  
5. The Tweet Removal Tool icon will appear in your extensions toolbar.  

### How to Use

1. Log in to your account at [https://x.com](https://x.com).  
2. Click the extension icon to launch the sidebar.  
3. Click **Initialise Search** to fetch your recent activity.  
4. Review your tweets, select the items you wish to delete, and confirm.  

---

## 🛠️ Technical Background (For Developers)

- **Local execution:** Runs in an isolated IIFE (Immediately Invoked Function Expression) to prevent interference with the host page.  
- **Identity resolution:** Resolves account handles using the `twid` cookie and the `window.__INITIAL_STATE__` Redux store.  
- **API mirroring:** Issues `UserTweets` and `DeleteTweet` requests that match official web client operations, improving compatibility and reducing automation risk.  
- **Privacy:** No external servers, no background persistent storage, and no analytics. All data exists only in memory until the sidebar is closed.  

---

## 🌍 Browser Compatibility

| Browser          | Supported | Notes                               |
|------------------|-----------|-------------------------------------|
| Google Chrome    | ✅ Yes     | Version 88 and above                |
| Microsoft Edge   | ✅ Yes     | Chromium-based versions             |
| Brave            | ✅ Yes     | Shields may need to allow X scripts |
| Opera / Vivaldi  | ✅ Yes     | Chromium-based versions             |
| Mobile Browsers  | ❌ No      | Extensions are not supported        |

---

## ⚖️ License and Terms

### Terms of Service
Bulk or repetitive actions may conflict with platform Terms of Service regarding automation. Users are solely responsible for compliance with applicable terms and rate limits.  

### Disclaimer
This software is provided "as-is", without warranty of any kind. The authors are not responsible for account restrictions, suspensions, or data loss resulting from the use of this tool.  

### Licence
This project is licensed under the **MIT Licence**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

Inspired by the research and tools developed by:

- [DeleteTweets by Lyfhael](https://github.com/Lyfhael/DeleteTweets)  
- [tweetXer by lucahammer](https://github.com/lucahammer/tweetXer)
