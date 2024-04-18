# Best Shop

![螢幕擷取畫面 2024-03-27 093302](https://github.com/JamesChenTW09/BestShop/assets/92699251/ea04d9cc-d90e-4bea-817a-0801e9d25ab3)

Best Shop提供一個開放平台，讓所有人都能上傳、瀏覽以及管理針對店家的評論，讓拜訪店家前能有更多有用的參考。

## Live Demo
https://jameschentw09.github.io/BestShop

## Schedule
1. 會員註冊和登入功能(串接google登入)
2. 會員行程編輯
3. 導入styled-components

## Database

資料庫透過Ragic提供的[RESTFUL HTTP API](https://www.ragic.com/intl/zh-TW/doc-api)，來進行資料的取得、新增、修改、刪除，以及資料排序和關鍵字搜尋。[Ragic](https://www.ragic.com/intl/zh-TW/home?campaign=goadzhtw&gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppIZaR_4Jj9teiUJNfikRLvRzY4gE8I2TQPphB1rc9YK7DskPjB5XfRoCAhsQAvD_BwE)為一個線上的資料庫系統，能輕鬆建構自己的資料庫應用。

https://ap9.ragic.com/js1031222/tour/2

![螢幕擷取畫面 2024-03-28 092627](https://github.com/JamesChenTW09/BestShop/assets/92699251/c90edbb8-7627-46d5-9e9b-b9a34a73b172)

## Lighthouse Report
![螢幕擷取畫面 2024-03-27 144345](https://github.com/JamesChenTW09/BestShop/assets/92699251/40e0bce1-5846-409a-ba45-9b2441e8d931)

## Features

### 1️ Infinite Scroll
透過onscroll實現**Infinite Scroll**，確保不用一次讀取全部資料，搭配debounce來降低瀏覽器負擔並增加使用者體驗

![84a5645a-9a56-40e0-a586-d1ca929d9a25](https://github.com/JamesChenTW09/BestShop/assets/92699251/1f9834ef-882d-4a4a-a54a-c24883d419cd)

### 2️ Full Text Search
透過全文檢索，快速搜尋到對應的店家

![Best Shop - Google Chrome 2024-03-27 15-32-12 (1)](https://github.com/JamesChenTW09/BestShop/assets/92699251/1155ebb7-1c41-464c-9da2-d6f9994c7742)

### 3️ React-Easy-Crop
讓使用者能自行透過拖拉，來決定上傳圖片的位置、放大或縮小的套件，並擷取最後選擇的圖片位置

![Best Shop - Google Chrome 2024-03-27 15-36-07](https://github.com/JamesChenTW09/BestShop/assets/92699251/012b81c5-5e34-44c0-86c7-b4a7cac1daf6)

### 4️ Compression Ratio of Image
調整上傳團片的品質來降低圖片的大小，同時增加在讀取圖片時的速度

### 5️ React Lazy
動態引入組件，加快頁面讀取速度

### 6 HTML entities
透過he套件，將寫入資料庫的資料使用he.escape處理過，避免XSS攻擊

## RWD

![螢幕擷取畫面 2024-03-27 143633](https://github.com/JamesChenTW09/BestShop/assets/92699251/fd2285f3-fd1d-4d1d-a0f7-888f670ae177)  ![螢幕擷取畫面 2024-03-27 143623](https://github.com/JamesChenTW09/BestShop/assets/92699251/07f9eacc-951d-472f-887b-39e3aab84ce6)



