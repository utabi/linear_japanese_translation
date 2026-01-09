// Linear 日本語化 - Content Script
(function() {
  'use strict';

  // 翻訳を適用する関数
  function translateText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent.trim();
      if (text && window.LINEAR_TRANSLATIONS && window.LINEAR_TRANSLATIONS[text]) {
        node.textContent = window.LINEAR_TRANSLATIONS[text];
      }
    }
  }

  // DOMを再帰的に走査して翻訳を適用
  function walkDOM(node) {
    // スクリプトやスタイルタグは無視
    if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE') {
      return;
    }

    // テキストノードの場合
    if (node.nodeType === Node.TEXT_NODE) {
      translateText(node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // 子ノードをループ（reverse は変更中に問題が起きないため）
      for (let i = node.childNodes.length - 1; i >= 0; i--) {
        walkDOM(node.childNodes[i]);
      }

      // 属性の翻訳（placeholder, title, aria-label など）
      if (node.hasAttribute('placeholder')) {
        const placeholder = node.getAttribute('placeholder');
        if (window.LINEAR_TRANSLATIONS && window.LINEAR_TRANSLATIONS[placeholder]) {
          node.setAttribute('placeholder', window.LINEAR_TRANSLATIONS[placeholder]);
        }
      }

      if (node.hasAttribute('title')) {
        const title = node.getAttribute('title');
        if (window.LINEAR_TRANSLATIONS && window.LINEAR_TRANSLATIONS[title]) {
          node.setAttribute('title', window.LINEAR_TRANSLATIONS[title]);
        }
      }

      if (node.hasAttribute('aria-label')) {
        const ariaLabel = node.getAttribute('aria-label');
        if (window.LINEAR_TRANSLATIONS && window.LINEAR_TRANSLATIONS[ariaLabel]) {
          node.setAttribute('aria-label', window.LINEAR_TRANSLATIONS[ariaLabel]);
        }
      }
    }
  }

  // 初期ページの翻訳
  function initializeTranslations() {
    if (document.body) {
      walkDOM(document.body);
    }
  }

  // MutationObserver でDOM変更を監視
  function setupMutationObserver() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // 追加されたノードの翻訳
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
            walkDOM(node);
          }
        });
      });
    });

    const config = {
      childList: true,
      subtree: true,
      characterData: false
    };

    observer.observe(document.body, config);
  }

  // ページの読み込み完了時に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initializeTranslations, 100);
      setupMutationObserver();
    });
  } else {
    initializeTranslations();
    setupMutationObserver();
  }

  // Storage から有効/無効のステータスを取得して適用
  chrome.storage.local.get(['extensionEnabled'], function(result) {
    if (result.extensionEnabled === false) {
      // Extension が無効の場合は何もしない
      return;
    }
  });
})();