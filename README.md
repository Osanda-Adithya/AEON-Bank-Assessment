# BankAssessment

A React Native mobile application built with React Native and the React Native Community CLI.

## Requirements

Before running the project, make sure the following tools are installed and configured:

- Node.js
- npm or Yarn
- Java Development Kit (JDK)
- Android Studio and Android SDK — for Android development
- Xcode — for iOS development (macOS only)
- CocoaPods — for iOS dependencies
- Ruby and Bundler — for iOS dependency management

For the official React Native environment setup guide:

https://reactnative.dev/docs/set-up-your-environment

---

# Getting Started

## 1. Clone the repository

Clone the project and navigate to the project directory:

```bash
git clone <repository-url>
cd BankAssessment
```

## 2. Install JavaScript dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

---

# iOS Setup

> iOS development requires macOS and Xcode.

## 1. Install Ruby dependencies

From the project root:

```bash
bundle install
```

## 2. Install CocoaPods dependencies

Navigate to the iOS directory:

```bash
cd ios
bundle exec pod install
cd ..
```

Run `pod install` again whenever native iOS dependencies are changed.

## 3. Start Metro

From the project root:

```bash
npm start
```

Or:

```bash
yarn start
```

Keep Metro running.

## 4. Run the iOS application

Open another terminal and run:

```bash
npm run ios
```

Or:

```bash
yarn ios
```

The application should launch in the iOS Simulator.

### Running on a physical iPhone

Make sure:

1. The iPhone is connected to the Mac.
2. The device is trusted.
3. A valid Apple Development Team/signing configuration is selected in Xcode.
4. The correct Bundle Identifier is configured.
5. Developer Mode is enabled on the device if required.

You can also open the workspace directly in Xcode:

```bash
open ios/BankAssessment.xcworkspace
```

Then select the target device and press **Run**.

---

# Android Setup

## 1. Configure Android environment

Make sure Android Studio is installed and the required Android SDK, emulator, and environment variables are configured.

Verify that ADB is available:

```bash
adb devices
```

You should see your connected Android device or emulator.

## 2. Start Metro

From the project root:

```bash
npm start
```

Or:

```bash
yarn start
```

Keep Metro running.

## 3. Run the Android application

Open another terminal and run:

```bash
npm run android
```

Or:

```bash
yarn android
```

The application should launch in the Android Emulator or on your connected Android device.

---

# Running the Application

The normal development workflow is:

### Terminal 1 — Start Metro

```bash
npm start
```

### Terminal 2 — Run Android

```bash
npm run android
```

Or run iOS:

```bash
npm run ios
```

---

# Useful Commands

## Start Metro

```bash
npm start
```

## Start Metro with a clean cache

```bash
npm start -- --reset-cache
```

## Run Android

```bash
npm run android
```

## Run iOS

```bash
npm run ios
```

## Install iOS dependencies

```bash
cd ios
bundle exec pod install
cd ..
```

## Open iOS project in Xcode

```bash
open ios/BankAssessment.xcworkspace
```

## Check connected Android devices

```bash
adb devices
```

---

# Troubleshooting

## Metro cache issues

If the application is showing stale JavaScript or unexpected Metro errors:

```bash
npm start -- --reset-cache
```

Then rebuild the application.

## iOS dependency issues

If you encounter CocoaPods or native dependency issues:

```bash
cd ios
rm -rf Pods
bundle exec pod install
cd ..
```

Then rebuild the application.

If required, clean the Xcode build:

```bash
rm -rf ~/Library/Developer/Xcode/DerivedData/*
```

## Android build issues

Try cleaning the Android build:

```bash
cd android
./gradlew clean
cd ..
```

Then run:

```bash
npm run android
```

## Application does not connect to Metro

Make sure Metro is running:

```bash
npm start
```

For a physical Android device, verify that the device can reach the development machine and that ADB is connected correctly.

---

# Development

The main application entry point is:

```text
App.tsx
```

React Native's **Fast Refresh** automatically updates the application when JavaScript/TypeScript files are modified.

For a complete reload:

### Android

Press `R` twice in the emulator or use the React Native Dev Menu.

### iOS

Press `R` in the iOS Simulator or use the React Native Dev Menu.

---

# Project Structure

```text
BankAssessment/
├── android/
├── ios/
├── src/
├── App.tsx
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
└── README.md
```

---

# Important Notes

- Do not commit generated build directories.
- Do not commit sensitive credentials, API keys, certificates, or signing files.
- Always run `bundle exec pod install` after changing native iOS dependencies.
- Keep Metro running while developing.
- Use the appropriate Node.js, Java, Xcode, and Android SDK versions required by the project.

---

# React Native Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment)
- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [React Native GitHub Repository](https://github.com/facebook/react-native)
- [CocoaPods Getting Started](https://guides.cocoapods.org/using/getting-started.html)
