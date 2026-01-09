// Linear 日本語化 - 翻訳辞書
const translations = {
  // ナビゲーション
  "Inbox": "インボックス",
  "My issues": "マイイシュー",
  "Projects": "プロジェクト",
  "Views": "ビュー",
  "More": "その他",
  "Workspace": "ワークスペース",
  "Your teams": "チーム",
  "Issues": "イシュー",
  "Try": "試す",
  "Import issues": "イシューをインポート",
  "Invite people": "メンバーを招待",
  "Link GitHub": "GitHub連携",
  "Profile": "プロフィール",
  "Preferences": "設定",
  "Notifications": "通知",
  "Security & access": "セキュリティとアクセス",
  "Connected accounts": "接続済みアカウント",

  // Issues 関連
  "All issues": "すべてのイシュー",
  "Active": "アクティブ",
  "Backlog": "未着手",
  "Done": "完了",
  "Filter": "フィルター",
  "Display": "表示",
  "Add filter": "フィルターを追加",
  "Display options": "表示オプション",

  // Issue 詳細ページ
  "Properties": "プロパティ",
  "Set priority": "優先度を設定",
  "Labels": "ラベル",
  "Add label": "ラベルを追加",
  "Project": "プロジェクト",
  "Activity": "アクティビティ",
  "Subscribe": "購読",
  "Subscribed": "購読中",
  "Add sub-issues": "サブイシューを追加",

  // Projects ページ
  "All projects": "すべてのプロジェクト",
  "New view": "新規ビュー",
  "Add project": "プロジェクトを追加",
  "Name": "名前",
  "Health": "健全性",
  "Priority": "優先度",
  "Lead": "担当者",
  "Leads": "担当者",
  "Target date": "目標日",
  "Status": "ステータス",
  "No updates": "更新なし",
  "No lead": "担当者なし",

  // Views ページ
  "Create custom views": "カスタムビューを作成",
  "Create new view": "新規ビューを作成",
  "Display": "表示",

  // My Issues ページ
  "Assigned": "割り当て済み",
  "Created": "作成済み",
  "Subscribed": "購読中",
  "No issues assigned to you": "割り当てられたイシューはありません",
  "Create new issue": "新規イシューを作成",

  // Settings
  "Initiatives": "イニシアティブ",
  "Enable Initiatives": "イニシアティブを有効化",
  "Initiative updates": "イニシアティブの更新",
  "Update schedule": "スケジュール",
  "No expectation for updates": "更新予定なし",
  "Templates": "テンプレート",
  "SLAs": "SLA",
  "Statuses": "ステータス",
  "Updates": "更新",
  "Documents": "ドキュメント",
  "Customer requests": "カスタマーリクエスト",
  "Teams": "チーム",
  "Members": "メンバー",
  "Security": "セキュリティ",
  "API": "API",
  "Applications": "アプリケーション",
  "Billing": "請求",
  "Import / Export": "インポート / エクスポート",

  // Features セクション
  "Features": "機能",
  "Pulse": "パルス",
  "AI": "AI",
  "Agents": "エージェント",
  "Asks": "質問",
  "Emojis": "絵文字",
  "Integrations": "連携",

  // Administration セクション
  "Administration": "管理",

  // チームセクション
  "Create a team": "チームを作成",
  "Free plan": "無料プラン",

  // プロジェクト詳細
  "Overview": "概要",
  "In Progress": "進行中",
  "No priority": "優先度なし",
  "Add lead": "担当者を追加",
  "Add members": "メンバーを追加",
  "Dates": "日付",
  "Target": "目標",
  "Resources": "リソース",
  "Add document or link...": "ドキュメントまたはリンクを追加...",
  "Write first project update": "最初のプロジェクト更新を書く",
  "Description": "説明",
  "Add description...": "説明を追加...",
  "Milestone": "マイルストーン",
  "Milestones": "マイルストーン",
  "Add milestones to organize work within your project and break it into more granular stages.": "マイルストーンを追加して、プロジェクト内の作業を整理し、より細かなステージに分割できます。",
  "Learn more": "詳細を見る",
  "Progress": "進捗",
  "Scope": "スコープ",
  "Started": "開始済み",
  "Completed": "完了済み",
  "Assignees": "担当者",

  // ワークスペースメニュー
  "Settings": "設定",
  "Invite and manage members": "メンバーの招待と管理",
  "Download desktop app": "デスクトップアプリをダウンロード",
  "Switch workspace": "ワークスペースを切り替え",
  "Log out": "ログアウト",

  // ボタンテキスト
  "Back to app": "アプリに戻る",
  "Edit": "編集",
  "Connect": "接続",
  "Save": "保存",
  "Cancel": "キャンセル",
  "Delete": "削除",
  "Search": "検索",

  // メッセージ
  "No notifications": "通知がありません",
  "No issues assigned to you": "割り当てられたイシューはありません",

  // 設定画面 - General
  "General": "一般",
  "Default home view": "デフォルトのホームビュー",
  "Select which view to display when launching Linear": "Linear起動時に表示するビューを選択",
  "Active issues": "アクティブなイシュー",
  "Display full names": "フルネームを表示",
  "Show full names of users instead of shorter usernames": "短いユーザー名の代わりにフルネームを表示",
  "First day of the week": "週の始まり",
  "Used for date pickers": "日付選択に使用",
  "Sunday": "日曜日",
  "Monday": "月曜日",
  "Convert text emoticons into emojis": "テキスト顔文字を絵文字に変換",
  "Strings like :) will be converted to": ":) などの文字列を絵文字に変換",

  // 設定画面 - Interface and theme
  "Interface and theme": "インターフェースとテーマ",
  "App sidebar": "アプリサイドバー",
  "Customize sidebar item visibility, ordering, and badge style": "サイドバーの表示項目、順序、バッジスタイルをカスタマイズ",
  "Customize": "カスタマイズ",
  "Font size": "フォントサイズ",
  "Adjust the size of text across the app": "アプリ全体のテキストサイズを調整",
  "Default": "デフォルト",
  "Use pointer cursors": "ポインターカーソルを使用",
  "Change the cursor to a pointer when hovering over any interactive elements": "インタラクティブな要素にホバーするとポインターに変更",
  "Interface theme": "インターフェーステーマ",
  "Select or customize your interface color scheme": "インターフェースの配色を選択またはカスタマイズ",
  "System preference": "システム設定に従う",
  "Light": "ライト",
  "Theme to use for light system appearance": "ライトモード時のテーマ",
  "Dark": "ダーク",
  "Theme to use for dark system appearance": "ダークモード時のテーマ",

  // 設定画面 - Desktop application
  "Desktop application": "デスクトップアプリケーション",
  "Open in desktop app": "デスクトップアプリで開く",
  "Automatically open links in desktop app when possible": "可能な場合、リンクをデスクトップアプリで自動的に開く",
  "App notification badge": "アプリ通知バッジ",
  "Show a badge on Linear's icon to indicate unread notifications": "未読通知を示すバッジをLinearのアイコンに表示",
  "Check spelling": "スペルチェック",
  "Check for spelling errors while typing": "入力中にスペルエラーをチェック",

  // 設定画面 - Automations and workflows
  "Automations and workflows": "自動化とワークフロー",
  "Auto-assign to self": "自分に自動割り当て",
  "When creating new issues, always assign them to yourself by default": "新しいイシュー作成時、デフォルトで自分に割り当て",
  "Git attachment format": "Git添付フォーマット",
  "The format of GitHub/GitLab attachments on issues": "イシューのGitHub/GitLab添付の形式",
  "Title": "タイトル",
  "On git branch copy, move issue to started status": "Gitブランチコピー時、イシューを開始ステータスに移動",
  "After copying the git branch name, issue status is moved to the team's first started workflow status. Hold": "Gitブランチ名をコピー後、イシューのステータスをチームの最初の開始ワークフローステータスに移動。長押しで無効化",
  "to disable.": "",
  "On move to started status, assign to yourself": "開始ステータスへの移動時、自分に割り当て",
  "When you move an unassigned issue to started, it will be automatically assigned to you": "未割り当てのイシューを開始に移動すると、自動的に自分に割り当てられます",

  // チーム説明ダイアログ
  "What are teams?": "チームとは？",
  "Teams are groups of people who regularly work together.": "チームは、一緒に作業するメンバーのグループです。",
  "When you join a team, you'll be listed as a team member. This makes managing and assigning work easier for everyone.": "チームに参加すると、チームメンバーとして表示されます。これにより、作業の管理と割り当てが簡単になります。",
  "Teams you have joined will show up in your sidebar for quick access. You'll also see more relevant search and filter results.": "参加したチームはサイドバーに表示され、すぐにアクセスできます。検索やフィルターの結果もより関連性の高いものになります。",
  "Got it": "了解",
  "Documentation": "ドキュメント",

  // チーム作成画面
  "Create a new team": "新しいチームを作成",
  "Create a new team to manage separate cycles, workflows and notifications": "サイクル、ワークフロー、通知を個別に管理する新しいチームを作成",
  "Team icon": "チームアイコン",
  "Team name": "チーム名",
  "e.g. Engineering": "例: エンジニアリング",
  "Identifier": "識別子",
  "Used to identify issues from this team (e.g. ENG-123)": "このチームのイシューを識別するために使用（例: ENG-123）",
  "e.g. ENG": "例: ENG",
  "Team hierarchy": "チーム階層",
  "Teams can be nested to reflect your team structure and to share workflows and settings": "チームをネストして、チーム構造を反映し、ワークフローと設定を共有できます",
  "Parent team": "親チーム",
  "Available on Business": "ビジネスプランで利用可能",
  "Copy settings from existing team": "既存のチームから設定をコピー",
  "You can choose to copy the settings of an existing team for your newly created team. All settings including workflow and cycle settings are copied, but Slack notification settings and team members won't be copied.": "新しいチームに既存のチームの設定をコピーできます。ワークフローとサイクルの設定を含むすべての設定がコピーされますが、Slack通知設定とチームメンバーはコピーされません。",
  "Copy from team": "コピー元チーム",
  "Don't copy": "コピーしない",
  "Timezone": "タイムゾーン",
  "The timezone should be set as the location where most of your team members reside. All other times referenced by the team will be relative to this timezone setting. For example, if the team uses cycles, each cycle will start at midnight in the specified timezone.": "タイムゾーンは、チームメンバーの大半が居住する場所に設定してください。チームが参照するすべての時間は、このタイムゾーン設定を基準にします。例えば、チームがサイクルを使用する場合、各サイクルは指定されたタイムゾーンの深夜0時に開始されます。",
  "Make team private": "チームを非公開にする",
  "Private teams and their issues are only visible to members of the team and admins. Only admins and team owners can add new users to a private team. Public teams and their issues are visible to anyone in the workspace.": "非公開チームとそのイシューは、チームメンバーと管理者のみに表示されます。管理者とチームオーナーのみが非公開チームに新しいユーザーを追加できます。公開チームとそのイシューはワークスペース内の誰でも閲覧できます。",
  "Private team": "非公開チーム",
  "Create team": "チームを作成",

  // チームメニュー
  "Team settings": "チーム設定",
  "Copy link": "リンクをコピー",
  "Open archive": "アーカイブを開く",
  "Configure Slack notifications...": "Slack通知を設定...",

  // 購読サブメニュー
  "An issue is added to the team": "イシューがチームに追加されたとき",
  "An issue is marked completed or canceled": "イシューが完了またはキャンセルされたとき",
  "An issue is added to the triage queue": "イシューがトリアージキューに追加されたとき",

  // 表示オプション
  "List": "リスト",
  "Board": "ボード",
  "Grouping": "グループ化",
  "Sub-grouping": "サブグループ化",
  "No grouping": "グループ化なし",
  "Ordering": "並び順",
  "Importance": "重要度",
  "Order completed by recency": "完了を新しい順に並べる",
  "Completed issues": "完了したイシュー",
  "Past day": "過去1日",
  "Show sub-issues": "サブイシューを表示",
  "List options": "リストオプション",
  "Display properties": "表示プロパティ",
  "ID": "ID",
  "Assignee": "担当者",
  "Due date": "期限",
  "Links": "リンク",
  "Time in status": "ステータス経過時間",
  "Updated": "更新日",
  "Focus": "フォーカス",
  "Timeline": "タイムライン",
  "Manual": "手動",
  "Show closed projects": "終了したプロジェクトを表示",
  "All": "すべて",
  "Dependencies": "依存関係",
  "Start date": "開始日",
  "Add label group...": "ラベルグループを追加...",

  // 優先度
  "Change priority...": "優先度を変更...",
  "Urgent": "緊急",
  "High": "高",
  "Medium": "中",
  "Low": "低",

  // ビュー説明
  "Create custom views using filters to show only the issues you want to see. You can save, share, and favorite these views for easy access and faster team collaboration.": "フィルターを使ってカスタムビューを作成し、見たいイシューだけを表示できます。ビューを保存、共有、お気に入りに追加して、簡単にアクセスしチームのコラボレーションを効率化できます。",
  "You can also save any existing view by clicking the": "既存のビューを保存するには、",
  "icon or by pressing": "アイコンをクリックするか、",

  // アクティブイシュー説明
  "Active issues represent work that is currently in flight or should be worked on next. There are currently no active issues in this team. Once an issue moves to the Todo or In Progress state, it will show up here.": "アクティブなイシューは、現在進行中または次に取り組むべき作業を表します。現在このチームにはアクティブなイシューがありません。イシューがTodoまたは進行中のステータスに移動すると、ここに表示されます。",

  // すべてのイシュー説明
  "All issues is the place where you can see all your team's work in one view. Once you have created issues for this team, they will show up here.": "すべてのイシューは、チームの全作業を一覧で確認できる場所です。このチームのイシューを作成すると、ここに表示されます。",

  // プロジェクト説明
  "Projects are larger units of work with a clear outcome, such as a new feature you want to ship. They can be shared across multiple teams and are comprised of issues and optional documents.": "プロジェクトは、リリースしたい新機能など、明確な成果を持つ大きな作業単位です。複数のチームで共有でき、イシューとオプションのドキュメントで構成されます。",
  "Create new project": "新規プロジェクトを作成",
  "Create project": "プロジェクトを作成",

  // イシュー作成ダイアログ
  "New issue": "新規イシュー",
  "Issue title": "イシュータイトル",
  "Create more": "続けて作成",
  "Create issue": "イシューを作成",
  "Save as draft": "下書きとして保存",
  "Change status...": "ステータスを変更...",
  "Todo": "Todo",
  "Canceled": "キャンセル",
  "Duplicate": "重複",

  // タイムラインオプション
  "Timeline options": "タイムラインオプション",
  "Show project list": "プロジェクトリストを表示",
  "Show week numbers": "週番号を表示",
  "Zoom": "ズーム",
  "Year": "年",
  "Quarter": "四半期",
  "Month": "月",
  "Week": "週",
  "Today": "今日",
  "Predictions": "予測",
  "Reset": "リセット",
  "Set default for everyone": "全員のデフォルトに設定",

  // 月名
  "JAN": "1月",
  "FEB": "2月",
  "MAR": "3月",
  "APR": "4月",
  "MAY": "5月",
  "JUN": "6月",
  "JUL": "7月",
  "AUG": "8月",
  "SEP": "9月",
  "OCT": "10月",
  "NOV": "11月",
  "DEC": "12月",
  "Jan": "1月",
  "Feb": "2月",
  "Mar": "3月",
  "Apr": "4月",
  "May": "5月",
  "Jun": "6月",
  "Jul": "7月",
  "Aug": "8月",
  "Sep": "9月",
  "Oct": "10月",
  "Nov": "11月",
  "Dec": "12月",
  "January": "1月",
  "February": "2月",
  "March": "3月",
  "April": "4月",
  "June": "6月",
  "July": "7月",
  "August": "8月",
  "September": "9月",
  "October": "10月",
  "November": "11月",
  "December": "12月",

  // 期限設定メニュー
  "Set due date": "期限を設定",
  "Change due date": "期限を変更",
  "Remove due date": "期限を削除",
  "Make recurring...": "繰り返し設定...",
  "Add link...": "リンクを追加...",
  "Add sub-issue": "サブイシューを追加",
  "Custom...": "カスタム...",
  "Tomorrow": "明日",
  "End of this week": "今週末",
  "In one week": "1週間後",
  "In two weeks": "2週間後",
  "In one month": "1ヶ月後",

  // マイルストーンメニュー
  "See issues": "イシューを見る",
  "Edit...": "編集...",
  "Copy": "コピー",
  "Move milestone to": "マイルストーンを移動",
  "Convert to project": "プロジェクトに変換",

  // イシューコンテキストメニュー
  "Rename...": "名前を変更...",
  "Convert into": "変換",
  "Make a copy...": "コピーを作成...",
  "Mark as": "マーク",
  "Create related": "関連を作成",
  "Move": "移動",
  "Unsubscribe": "購読解除",
  "Favorite": "お気に入り",
  "Remind me": "リマインダー",

  // チーム設定画面
  "Name, identifier, timezone, estimates, and broader settings": "名前、識別子、タイムゾーン、見積もり、その他の設定",
  "Manage team members": "チームメンバーを管理",
  "Slack notifications": "Slack通知",
  "Broadcast notifications to Slack": "Slackに通知を配信",
  "Off": "オフ",

  // Issues, projects, and docs
  "Issues, projects, and docs": "イシュー、プロジェクト、ドキュメント",
  "Issue labels": "イシューラベル",
  "Labels available to this team's issues": "このチームのイシューで使用可能なラベル",
  "Pre-filled templates for issues, documents, and projects": "イシュー、ドキュメント、プロジェクトの定型テンプレート",
  "Recurring issues": "繰り返しイシュー",
  "Automatically create issues on a schedule": "スケジュールに基づいてイシューを自動作成",
  "None": "なし",

  // Workflow
  "Workflow": "ワークフロー",
  "Issue statuses & automations": "イシューステータスと自動化",
  "Customize issue statuses and git automations": "イシューステータスとGit自動化をカスタマイズ",
  "Triage": "トリアージ",
  "Streamline how you handle requests from outside your team": "チーム外からのリクエストの処理を効率化",
  "Cycles": "サイクル",
  "Focus your team over short, time-boxed windows": "短い期間でチームの作業を集中",

  // AI
  "Add guidance for how agents should operate within this team": "このチームでエージェントがどう動作すべきかのガイダンスを追加",
  "Discussion summaries": "ディスカッションサマリー",
  "Automatically generate summaries for issues and comments": "イシューとコメントのサマリーを自動生成",

  // チーム階層
  "Teams can be nested to reflect your team structure and to share workflows and settings.": "チームをネストして、チーム構造を反映し、ワークフローと設定を共有できます。",
  "Docs": "ドキュメント",
  "No parent team": "親チームなし",

  // Danger zone
  "Danger zone": "危険ゾーン",
  "Delete team": "チームを削除",
  "Permanently delete this team and all its data, with a 30-day restoration window": "このチームとすべてのデータを完全に削除（30日間は復元可能）",
  "Delete...": "削除..."
};

// グローバルに translations を公開
window.LINEAR_TRANSLATIONS = translations;