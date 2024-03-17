<h1 align="center">Welcome to One Dionys - Web Font Loader! 👋 </h1>

<p align="center">Functions to load and manage the use of web fonts in applications, ensuring consistent display across different devices. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-web-font-loader?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-web-font-loader?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-web-font-loader?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-web-font-loader?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-web-font-loader.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-web-font-loader?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-web-font-loader?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
// Import the Web Font Loader
import { loadFonts } from './src/webFontLoader';

// Define fonts to load
const fonts = {
  google: {
    families: ['Roboto:400,700', 'Open+Sans:400,700']
  }
};

// Load fonts
loadFonts(fonts)
  .then(() => {
    console.log('Fonts loaded successfully!');
    // Add code to execute after fonts are loaded
  })
  .catch((error) => {
    console.error('Failed to load fonts:', error);
  });
```

#### Explanation

* The Web Font Loader package provides a convenient way to load web fonts dynamically in your web application. This package allows you to specify the fonts you want to load and handles the loading process asynchronously. It supports loading fonts from various sources, including Google Fonts, Typekit, and custom font files.

#### Return Value

* `loadFonts(fonts)`: This function returns a Promise that resolves when all specified fonts are successfully loaded. If any font fails to load, the Promise will be rejected with an error.

## 📆 Release Date

* v1.0.0 : 17 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Web Font Loader is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Web Font Loader? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
