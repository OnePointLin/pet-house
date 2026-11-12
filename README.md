# 家事寵物樂園（GitHub Pages 版）

前端放在 GitHub Pages，資料與邏輯仍然放在 Google Apps Script + Google 試算表。

## 檔案
| 檔案 | 說明 |
|---|---|
| `index.html` | 前端主程式（含「加到桌面」使用說明頁） |
| `config.js` | **唯一需要修改的檔案**：填入後端網址 |
| `manifest.webmanifest`、`icon*.png`、`apple-touch-icon.png`、`favicon-32.png`、`icon.svg` | 網站圖示與「加到主畫面」設定 |
| `.nojekyll` | 讓 GitHub Pages 原樣提供檔案 |

## 部署步驟

### 1. 後端（Google Apps Script）
1. 開啟試算表 →「擴充功能」→ Apps Script，貼上 `code.gs`、`Setup.gs`。
   - `Index.html` 可以不要放；沒有它時，後端會自動變成純 API 模式。
2. 重新整理試算表，用選單「家事寵物樂園 → 初始化表單」建立資料表。
3. 右上「部署」→「新增部署作業」→ 類型選「網頁應用程式」：
   - 執行身分：**我**
   - 誰可以存取：**任何人**（一定要選這個，否則 GitHub 上的網頁會連不到）
4. 複製部署後的網址（結尾是 `/exec`）。
5. 之後改了後端程式，要到「管理部署作業」→ 編輯 → 版本選「新版本」→ 部署，網址才不會變。

### 2. 前端（GitHub）
1. 打開 `config.js`，把剛剛的網址貼到 `API_URL`。
2. 在 GitHub 建立新的 repository（公開或私人都可，私人 repo 需付費方案才能用 Pages）。
3. 把這個資料夾裡的所有檔案（包含 `.nojekyll`）上傳到 repository 的根目錄。
4. Settings → Pages → Source 選 `Deploy from a branch`，Branch 選 `main`、資料夾選 `/ (root)` → Save。
5. 等一分鐘左右，網站就會在 `https://你的帳號.github.io/repository名稱/` 開啟。

### 3. 收尾
- 到試算表的 `Settings` 表，把 `appUrl` 填成上面的 GitHub 網址，通知信裡的連結才會指向新網站。填完請執行選單的「清除快取」。
- 在手機上開啟網站，分享給家人。網址後面加 `?fc=家庭代號` 可以自動填好家庭代號。

## 加到手機主畫面
- iPhone：用 Safari 打開網站 → 分享 → 加入主畫面。
- Android：用 Chrome 打開網站 → 選單 → 加到主畫面 / 安裝應用程式。
主畫面圖示和瀏覽器的登入是分開的，第一次要登入一次。

## 常見問題
- **畫面一直顯示「無法連線到伺服器」：** 檢查 `config.js` 的網址是不是 `/exec` 結尾，以及部署時「誰可以存取」是不是「任何人」。
- **改了後端程式沒有生效：** 要在「管理部署作業」建立「新版本」，只存檔不會更新 `/exec`。
- **想要讓原本的 Apps Script 網址也能用：** 把 `Index.html` 也貼進 Apps Script 即可，兩個網址可以同時使用，資料是同一份。
