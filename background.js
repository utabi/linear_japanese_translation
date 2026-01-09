// Linear 日本語化 - Background Service Worker
// Extension のイベントハンドリングと管理タスクを行う

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install') {
    // Extension がインストールされた時
    console.log('Linear 日本語化 Extension がインストールされました');
    
    // デフォルト設定を保存
    chrome.storage.local.set({
      extensionEnabled: true,
      translateAttributes: true
    });
  } else if (details.reason === 'update') {
    // Extension が更新された時
    console.log('Linear 日本語化 Extension が更新されました');
  }
});

// Content Script からのメッセージを受け取る
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getSettings') {
    // 設定を取得
    chrome.storage.local.get(['extensionEnabled', 'translateAttributes'], function(result) {
      sendResponse({
        extensionEnabled: result.extensionEnabled !== false,
        translateAttributes: result.translateAttributes !== false
      });
    });
    return true; // 非同期でレスポンスを送信するため
  }
});

// アイコンクリック時の処理（オプション）
chrome.action.onClicked.addListener(function(tab) {
  // Linear のページかどうか確認
  if (tab.url && tab.url.includes('linear.app')) {
    // ページをリロード
    chrome.tabs.reload(tab.id);
  }
});