"""# twitch_favorite_emote_editor（非公式 Chrome 拡張機能）

このリポジトリは、Twitch のチャット欄のスタンプ機能を便利にするための補助ツールであり、
**非公式 Chrome 拡張機能** のソースコードです。  
**Twitch 公式とは一切関係ありません。**

---

## ⚙️ 使い方（デベロッパーモードでの読み込み）

この拡張機能は Chrome ウェブストアでは公開していません。  
ご自身の責任で、ローカル環境に読み込んでご利用ください。

### 🔽 ダウンロード方法

以下のリンクから zip ファイルを直接ダウンロードできます：  
[ZIP をダウンロード](https://github.com/shin-neon/twitch_favorite_emote_editor/archive/refs/heads/main.zip)

または、GitHub からクローンすることもできます：  
`git clone https://github.com/shin-neon/twitch_favorite_emote_editor.git`

### 🔧 Chrome に読み込む手順

1. ダウンロードした zip ファイルを解凍します。  
2. Chrome の拡張機能管理ページを開きます。  
   `chrome://extensions/`  
3. 右上の「デベロッパーモード」をオンにします。  
4. 「パッケージ化されていない拡張機能を読み込む」をクリックします。  
5. 解凍したフォルダを選択します。

---

### 🍀 使用方法

1. twitchのドメインのページへアクセスします。
2. 本拡張機能を選択すると、emote使用回数一覧が表示されます。
3. 使用回数を変更するか、削除ボタンで削除を行い、twitchスタンプ一覧の「頻繁に使用」に優先表示したいスタンプを調整します。
4. 「プレビュー」を押すと、twitch側でのスタンプ一覧の表示イメージが見れます。
　 ⇒今回のバージョンではフォロワーであるかの判定、サブスク済かの判定が不可のため、利用不可なスタンプも表示されてしまう点に注意。
5. 「保存」ボタンを押して閉じます。
   ⇒回数変更、削除の操作では保存されません。変更後は必ず「保存」を押して反映させてください。
6. twitch側のスタンプ一覧の「頻繁に使用」を見ると上記変更が反映されています
   ⇒使用回数が多いものから２４個まで表示される仕様のようです。
　   サブスクスタンプやフォロワースタンプは利用可能なものが表示され、
   　利用不可のものはスキップされ次に利用回数が多いスタンプが表示候補になります。

---

## 💡 注意事項

- 本プロジェクトは **学習・個人利用目的** での使用を想定しています。  
- **Twitch公式の拡張機能ではありません。**  
- Twitch の画像・データ（エモートなど）は **Twitch の CDN から直接取得** されます。  
  - 表示のみを行い、保存・再配布・改変は行いません。  
  - 取得元: `https://static-cdn.jtvnw.net/emoticons/v1/{emote_id}/3.0`  
- 各ユーザーは Twitch の利用規約および開発者ポリシーに従ってご利用ください。  
  👉 [Twitch Developer Agreement](https://www.twitch.tv/p/en/legal/developer-agreement/)

---

## ⚠️ 免責事項（Disclaimer）

- この拡張機能の利用により発生した **いかなる損害・トラブル・アカウント制限・停止等についても、作者は一切の責任を負いません。**  
- 本ソースコードは **現状のまま提供されており、動作や結果は保証されません。** 
- 利用するかどうかは **ご自身の判断と責任** で行ってください。

---

## 🧾 ライセンス

**MIT License**  

Copyright (c) 2025 shin_neon

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the “Software”), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.

---

## 🧩 備考

- このプロジェクトは Twitch ブランド・ロゴ・公式エモート等の知的財産を含みません。  
- 利用する画像やデータは Twitch の CDN から直接取得され、キャッシュ・保存・再配布は行いません。  
- 拡張機能の名称・見た目で Twitch 公式製品と誤認される表現を避けてください。
