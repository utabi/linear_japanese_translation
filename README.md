# Linear 日本語化 Chrome Extension

このChrome Extensionは、Linear（プロジェクト管理ツール）のUIテキストを日本語に翻訳します。

## インストール方法

1. このリポジトリをクローンまたはダウンロードします
2. Chrome を開いて、`chrome://extensions/` にアクセスします
3. 右上の「デベロッパー モード」をオンにします
4. 「パッケージ化されていない拡張機能を読み込む」をクリックします
5. このプロジェクトのフォルダを選択します

## 使用方法

1. Extension がインストールされると、Linear のページを訪問したときに自動的にUIテキストが日本語に翻訳されます
2. Extension のポップアップアイコン（拡張機能メニュー）をクリックすると、設定パネルが開きます
3. 「日本語化を有効にする」チェックボックスで有効/無効を切り替えられます
4. 「ページをリロード」ボタンで、現在のページを再読み込みできます

## 対応している翻訳

- サイドバーナビゲーション（Inbox、My issues、Projectsなど）
- Issues 管理（All issues、Active、Backlog、Doneなど）
- Issue 詳細ページ（Properties、Labels、Activityなど）
- Projects ページ
- Views ページ
- Settings ページ（Initiatives、Templates、Security など）
- ボタンテキストと属性テキスト

## 機能

- ✅ リアルタイムUI翻訳
- ✅ 動的に追加されるコンテンツの翻訳対応（MutationObserverを使用）
- ✅ ボタンラベルと属性テキストの翻訳
- ✅ オン/オフ切り替え機能
- ✅ ページリロード機能

## 開発

### ファイル構成
```
linear-jp-extension/
├── manifest.json          # Extension 設定
├── translations.js        # 日本語翻訳辞書
├── content-script.js      # DOM 操作とテキスト置き換えロジック
├── popup.html             # ポップアップUI
├── popup.js               # ポップアップロジック
├── styles.css             # ポップアップスタイル
├── background.js          # バックグラウンドスクリプト（オプション）
└── README.md              # このファイル
```

### 翻訳の追加方法

`translations.js` の `translations` オブジェクトに新しいキーバリューペアを追加します：
```javascript
const translations = {
  "English Text": "日本語テキスト",
  // ... 他の翻訳
};
```

### 注意事項

- Linear のUIが更新されたときは、`translations.js` に新しい翻訳を追加する必要があります
- ユーザーが作成したコンテンツ（Issue のタイトルなど）は翻訳されません
- このExtensionは linear.app ドメインでのみ動作します

## ライセンス

MIT License

## 貢献

バグ報告や機能リクエストは、GitHubのIssuesで受け付けています。