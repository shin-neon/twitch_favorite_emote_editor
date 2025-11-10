"""# twitch_favorite_emote_editor（非公式 Chrome 拡張機能）

このリポジトリは、Twitch のエモート画像などをブラウザ上で簡単に表示・利用するための **非公式 Chrome 拡張機能** のソースコードです。  
**Twitch 公式とは一切関係ありません。**

---

## ⚙️ 使い方（デベロッパーモードでの読み込み）

この拡張機能は Chrome ウェブストアでは公開していません。  
ご自身の責任で、ローカル環境に読み込んでご利用ください。

### 🔽 ダウンロード方法

以下のリンクから zip ファイルを直接ダウンロードできます：  
`https://github.com/shin_neon/twitch_favorite_emote_editor/archive/refs/heads/main.zip`  
※ `<ユーザー名>` と `<リポジトリ名>` は後で書き換えてください。

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
