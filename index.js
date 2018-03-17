import {NativeModules} from 'react-native';

const {ReactNativeDownloadManager} = NativeModules;

const getRequestConfig = (config, url) => Object.assign({}, {
  downloadTitle: 'File Download',
  downloadDescription: url,
  saveAsName: 'Downloaded File - ' + new Date(),
  allowedInRoaming: true,
  allowedInMetered: true,
  showInDownloads: true,
  external: false,
  path: "Downloads/"
}, config);

const download = (url = '', headers = {}, config = {}) => {
  const downloadRequestConfig = getRequestConfig(config, url);
  return new Promise((resolve, reject) => {
    ReactNativeDownloadManager.download(url, headers, downloadRequestConfig, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

const queueDownload = (url = '', headers = {}, config = {}) => {
  const downloadRequestConfig = getRequestConfig(config, url);
  return new Promise((resolve, reject) => {
    ReactNativeDownloadManager.queueDownload(url, headers, downloadRequestConfig, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

const attachOnCompleteListener = (downloadId = '') => new Promise((resolve, reject) => {
  ReactNativeDownloadManager.attachOnCompleteListener(downloadId, (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

const cancel = (downloadId = '') => new Promise((resolve, reject) => {
  ReactNativeDownloadManager.cancel(downloadId, (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

const checkStatus = (downloadId = '') => new Promise((resolve, reject) => {
  ReactNativeDownloadManager.checkStatus(downloadId, (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

module.exports = {
  download,
  queueDownload,
  attachOnCompleteListener,
  cancel,
  checkStatus
};
