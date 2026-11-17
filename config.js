// 前端設定：只需要改這個檔案
window.APP_CONFIG = {
  // Supabase Edge Function 的網址，格式：https://<專案代號>.supabase.co/functions/v1/api
  API_URL: "https://hbfxikcnwfecgsalmljf.supabase.co/functions/v1/dynamic-endpoint",
  // 登入頁是否預設顯示「建立新家庭」按鈕（實際會再以資料庫 settings 表的 showCreateFamily 為準）
  showCreateFamily: false
};
