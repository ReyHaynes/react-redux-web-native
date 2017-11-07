React + Redux Web Native App
--------------------

The goal of this build is to create a react web and native app using a shared codebase while keeping the integrity of the `create-react-app` and `react-native` build structure...because, who want's to waste time creating the build process.

### Quick Start

1. Clone this repo.

2. (Optional) Rename your app in the `app.json` file.

3. Install dependencies with `yarn install` or `npm install`. This will also do a `react-native eject` to generate the `/ios` & `/android` folders.

4. Code the greatest app of all time.

### Requirements

This is a `node` based build app so having node installed is an obvious requirement!

`react-native` requires you to have the proper emulators installed for your targeted operating system. Check out the [React Native docs at Facebook](https://facebook.github.io/react-native/docs/getting-started.html) to get the install instructions. Make sure to use the instructions under the "Building Projects with Native Code" tab.

(Optional) `npm` is installed with node but I recommend `yarn` package management. Instruction to install Yarn [can be found here](https://yarnpkg.com/en/docs/install).

### Issues / Gotchas

###### Testing
Unfortunately, since the testing environments are different for native and web, and there's no real way for jest to interpret the difference from web and native renders. Code might to be refactored for the fix.

###### File Naming
You will want to separate presentational containers (anything with `render()` for the most part). Since there is no graceful way to determine native and web platform and there is no `.web.js` file extension, presentational containers for the Web should be under the main `.js` file while Native should be under `.ios.js` and `.android.js`.

Please note, that if you are targeting both platforms, you will be **required** to use both file name extensions since it will default to the main file if the extension does not exist.

###### Native Code Sharing
In the case of having React-Native code that work on both platforms, if you don't want to duplicate the code in 2 files, just import the code from the main targeted platform file.

```javascript
// src/App.android.js imports the iOS version so there is no need to duplicate code.
import App from './App.ios'
export { App as default }
```

### FAQ

###### How do I rename the app?
If you already have the `/ios` & `/android` directories installed, in order to rename the app, delete these directories and run `react-native eject`.

To do this in one command, use `yarn eject:app` or `npm run eject:app`.

### Additional Options

Commands can be executed with `yarn <options>` or `npm run <options>`

| Options | Description |
| --------- | ----------- |
| install | Install dependencies and (re)build `/ios` & `/android` directories. |
| test | Run tests in `/__tests__` directory. |
| | |
| start:web | Start React Web |
| build:web | Generate build for React Web |
| test:web | Run test watcher for React Web from `/__tests__/web` directory. |
| eject:web | Eject `create-react-app` for custom React Web |
| | |
| start:app | Start background process for React Native |
| test:app | Run test watcher for React Native from `/__tests__/native` directory. |
| eject:app | (Re)Build `/ios` & `/android` directories. |
| | |
| ios | Run iOS emulator. Similar to `react-native run-ios` |
| ios:bundle | Bundle with entry file index.js |
| ios:build | Run iOS emulator with a "Release" configuration. |
| | |
| android | Run Android emulator. Similar to `react-native run-android` |
| android:clean | Fix building android if preDexDebug error |
| android:bundle | Bundle with entry file index.js |
| android:build | Build with a "Release" configuration. |
| android:signkey | Generate keystore android |
| android:signer | To sign app-release-unsigned.apk with random keystore |

### Progress:
- [x] Merge `create-react-app` & `react-native`
- [x] Create Sample App
- [x] Implement Redux sample action and reducer
- [ ] Create sample action buttons 
- [ ] Unit testing

### Contribute

Please...if you find any issues or improvements needed, feel free to submit your improvements!

Sharing is caring! 😇
