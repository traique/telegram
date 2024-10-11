// ==UserScript==
// @name         web UI
// @version      1.0
// @description  Running BOT in a browser
// @author       traique
// @match        none
// @grant        none
// @icon         none
// @downloadURL  https://github.com/traique/telegram/blob/main/web.user.js
// @updateURL    https://github.com/traique/telegram/blob/main/web.user.js
// @homepage     https://github.com/traique
// ==/UserScript==

(function() {
  function updateIframeSrc() {
    const iframes = document.querySelectorAll('iframe'); // Chọn tất cả iframe

    iframes.forEach(iframe => {
      let src = iframe.src;

      if (src.includes('tgWebAppPlatform=weba') || src.includes('tgWebAppPlatform=web')) {
        src = src.replace(/tgWebAppPlatform=(weba|web)/g, 'tgWebAppPlatform=ios');

        iframe.src = src;

        console.log('Đường dẫn đã được cập nhật:', src);
      }
    });
  }

  setInterval(updateIframeSrc, 2000);
})();
