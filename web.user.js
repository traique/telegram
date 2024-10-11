// ==UserScript==
// @name         Web UI
// @version      1.0
// @description  Tự động thay đổi nền tảng WebApp cho tất cả các ứng dụng chạy trên trình duyệt từ "web" hoặc "weba" thành "ios"
// @author       traique
// @match        https://*/*
// @grant        none
// @icon         https://your-icon-link-here.png
// @downloadURL  https://github.com/traique/telegram/blob/main/web.user.js
// @updateURL    https://github.com/traique/telegram/blob/main/web.user.js
// @homepage     https://github.com/traique/telegram
// ==/UserScript==

(function() {
  function updateIframeSrc() {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        let src = iframe.src;

        // Thay đổi nền tảng từ weba/web sang ios cho tất cả ứng dụng
        if (src.includes('tgWebAppPlatform=weba') || src.includes('tgWebAppPlatform=web')) {
            src = src.replace(/tgWebAppPlatform=(weba|web)/g, 'tgWebAppPlatform=ios');

            iframe.src = src;

            console.log('Đã cập nhật src:', src);
        }
    });
  }
  
  setInterval(updateIframeSrc, 2000);
})();
