<!-- firebase.js -->
<!-- Bạn có thể dùng file riêng hoặc gắn trong thẻ <script> -->

<!-- Nhúng Firebase SDK -->
<script type="module">
  // Import SDK dạng module
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // Cấu hình Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDBaWDDCkhRa3DQcJBYdznL98GjHmXspuI",
    authDomain: "gkdmshop.firebaseapp.com",
    databaseURL: "https://gkdmshop-default-rtdb.firebaseio.com",
    projectId: "gkdmshop",
    storageBucket: "gkdmshop.appspot.com", // Sửa lại tên bucket cho đúng
    messagingSenderId: "52437838526",
    appId: "1:52437838526:web:3187795557aa1458190cef",
    measurementId: "G-V4QFPWK82L"
  };

  // Khởi tạo Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);

  // Đưa ra global (để dùng ở file HTML khác nếu cần)
  window.firebaseApp = app;
  window.database = database;
  window.auth = auth;
</script>
