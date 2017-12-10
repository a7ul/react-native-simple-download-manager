
import {NativeModules} from 'react-native';

const {ReactNativeDownloadManager} = NativeModules;

const noop = () => {};

const getRequestConfig = (url, config) => ({
  downloadTitle: 'File Download',
  downloadDescription: url,
  saveAsName: 'Downloaded File - ' + new Date(),
  allowedInRoaming: true,
  allowedInMetered: true,
  showInDownloads: true,
  ...config
});

const download = (url = '', headers = {}, config = {}, onEnd = noop) => {
  const downloadRequestConfig = getRequestConfig(config);
  ReactNativeDownloadManager.download(url, headers, downloadRequestConfig, onEnd);
};

const queueDownload = (url = '',  headers = {}, config = {}, onStart = noop) => {
  const downloadRequestConfig = getRequestConfig(config);
  ReactNativeDownloadManager.queueDownload(url, headers, downloadRequestConfig, onStart);
};

const attachOnCompleteListener = (downloadId = '', onComplete = noop) => {
  ReactNativeDownloadManager.attachOnCompleteListener(downloadId, onComplete);
};

const cancel = (downloadId = '', onCancel = noop) =>  {
  ReactNativeDownloadManager.cancel(downloadId, onCancel);
};


const checkStatus = (downloadId = '', onStatus = noop) => {
  ReactNativeDownloadManager.checkStatus(downloadId, onStatus);
};

module.exports = {
  download,
  queueDownload,
  attachOnCompleteListener,
  cancel,
  checkStatus
};
