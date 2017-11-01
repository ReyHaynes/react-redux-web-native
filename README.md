React Web Native App
--------------------

The goal of this build is to create a react web and native app using a shared codebase while keeping the integrity of the `create-react-app` and `react-native` build structure.

If you find any issues or improvements needed, feel free to submit your improvements!

### Quick Start

1. Clone this repo.

2. (Optional) Rename your app in the `app.json` file.

3. Install dependencies with `yarn install` or `npm install`. This will also do a `react-native eject` to generate the `/ios` & `/android` folders.

4. Code the greatest app of all time.

### Additional Options

Commands can be executed with `yarn <options>` or `npm run <options>`

| options | Description |
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
| eject:app | Build `/ios` & `/android` directories (if deleted). |
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
