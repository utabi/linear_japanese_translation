// Linear 日本語化 - Popup Script
document.addEventListener('DOMContentLoaded', function() {
  const enableToggle = document.getElementById('enableToggle');
  const translateAttributesToggle = document.getElementById('translateAttributes');
  const reloadBtn = document.getElementById('reloadBtn');
  const statusMessage = document.getElementById('statusMessage');

  // Storage から設定を読み込む
  chrome.storage.local.get(['extensionEnabled', 'translateAttributes'], function(result) {
    enableToggle.checked = result.extensionEnabled !== false; // デフォルトは有効
    translateAttributesToggle.checked = result.translateAttributes !== false; // デフォルトは有効
  });

  // トグルが変更されたとき
  enableToggle.addEventListener('change', function() {
    chrome.storage.local.set({ extensionEnabled: this.checked }, function() {
      showMessage('設定を保存しました', 2000);
    });
  });

  translateAttributesToggle.addEventListener('change', function() {
    chrome.storage.local.set({ translateAttributes: this.checked }, function() {
      showMessage('設定を保存しました', 2000);
    });
  });

  // ページをリロードするボタン
  reloadBtn.addEventListener('click', function() {
    chrome.tabs.query({ url: 'https://linear.app/*' }, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.reload(tab.id);
      });
      showMessage('ページをリロードしました', 2000);
    });
  });

  // メッセージ表示関数
  function showMessage(message, duration) {
    statusMessage.textContent = message;
    statusMessage.style.display = 'block';
    setTimeout(function() {
      statusMessage.style.display = 'none';
    }, duration);
  }
});