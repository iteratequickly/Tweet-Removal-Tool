# 🐦 Tweet Removal Tool

A modern browser-based Chrome extension for reviewing and deleting tweets from your own authenticated account on X (formerly Twitter). The tool runs entirely inside your active browser session and provides a visual, manual interface for selective bulk deletion.

> **Disclaimer:** This project is not affiliated with, endorsed by, or supported by Twitter/X. It only uses available browser sessions and official API endpoints to facilitate manual tweet management.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) 
[![Chrome Version](https://img.shields.io/badge/Chrome-88%2B-blue)](https://www.google.com/chrome/) 
[![Platform Support](https://img.shields.io/badge/Platforms-Chrome%2C%20Edge%2C%20Brave%2C%20Opera%2C%20Vivaldi-green)](https://www.google.com/chrome/)

<p align="center">
  <img src="https://repository-images.githubusercontent.com/1132546702/51f2600e-ef7f-4389-b2c0-7ccf84c258fb" alt="Tweet Removal Tool Preview" width="800">
</p>


---

## ✨ Features

- 🔑 **Session-Based Authentication:** Reuses your existing logged-in browser session. No login credentials are ever requested or stored.  
- 🔍 **Runtime API Discovery:** Dynamically detects GraphQL operation identifiers and tokens already loaded by the official X web client.  
- 🖼️ **Visual Review Interface:** Browse tweets in a responsive grid with timestamps, preview text, and direct "View" links.  
- 🗑️ **Selective Bulk Deletion:** Choose individual items or use "Select All" to clear batches with a single confirmation.  
- 📊 **Real-Time Statistics:** Live counters track found, selected, and successfully deleted tweets during the process.  
- 🛡️ **Safety-First Design:** Features mandatory confirmation dialogs, rate-limiting delays, and an isolated execution environment.  

---

## 🚀 Getting Started

### Installation (Manual)

1. Download or clone this repository to your local machine.  
2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer mode** using the toggle in the top-right corner.  
4. Click **Load unpacked** and select the folder containing `manifest.json`.  
5. The Tweet Removal Tool icon will appear in your extensions toolbar.  

### First-Time Usage

1. Log in to your account at [https://x.com](https://x.com).  
2. Click the extension icon to launch the sidebar.  
3. Click **Initialise Search** to fetch your recent activity.  

---

## 🛠️ Technical Background

- **Architecture:** Executes in an isolated IIFE (Immediately Invoked Function Expression) to prevent interference with the host page.  
- **Identity Resolution:** Resolves account handles via the `twid` cookie and `window.__INITIAL_STATE__` Redux store.  
- **API Mirroring:** Issues requests for `UserTweets` and `DeleteTweet` that exactly match the structure of official web client operations.  
- **Privacy:** No external servers, no background persistent storage, and no analytics. All data exists only in memory until the sidebar is closed.  

---

## 🌍 Browser Compatibility

| Browser          | Supported | Notes                        |
|-----------------|-----------|------------------------------|
| Google Chrome   | ✅ Yes     | Version 88+                  |
| Microsoft Edge  | ✅ Yes     | Chromium-based versions      |
| Brave           | ✅ Yes     | Shields may need to allow X scripts |
| Opera / Vivaldi | ✅ Yes     | Chromium-based versions      |
| Mobile Browsers | ❌ No      | Extensions not supported     |

---

## ⚖️ License & Terms

### Terms of Service
Bulk or repetitive actions may conflict with platform Terms of Service regarding automation. Users are solely responsible for compliance with applicable terms and rate limits.  

### Disclaimer
This software is provided "as-is", without warranty of any kind. The authors are not responsible for account restrictions, suspensions, or data loss resulting from the use of this tool.  

### License
This project is licensed under the **MIT License**, see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

Inspired by the research and tools developed by:

- [DeleteTweets by Lyfhael](https://github.com/Lyfhael/DeleteTweets)  
- [tweetXer by lucahammer](https://github.com/lucahammer/tweetXer)
