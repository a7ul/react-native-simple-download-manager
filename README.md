
# react-native-download-manager

A simple straightforward react native module that lets you schedule downloads onto your download manager for android.

- Support custom headers for authentication
- File download scheduler
- Cancel file downlaod
- Check status of the download

TODO - ios module


### Installation:

`yarn add react-native-download-manager`

or

`npm i react-native-download-manager --save`


### Mostly automatic installation

`react-native link react-native-download-manager`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.masteratul.downloadmanager.ReactNativeDownloadManagerPackage;` to the imports at the top of the file
  - Add `new ReactNativeDownloadManagerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-download-manager'
  	project(':react-native-download-manager').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-download-manager/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-download-manager')
  	```

### Usage

```js

```                                     

### Advanced Usage




Peace ! ✌🏻🌮
