<!-- Firebase SDK (dùng CDN để hỗ trợ trên GitHub Pages) -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>

<script>
  // Cấu hình Firebase thực tế
  const firebaseConfig = {
    apiKey: "AIzaSyDBaWDDCkhRa3DQcJBYdznL98GjHmXspuI",
    authDomain: "gkdmshop.firebaseapp.com",
    projectId: "gkdmshop",
    storageBucket: "gkdmshop.appspot.com",
    messagingSenderId: "52437838526",
    appId: "1:52437838526:web:3187795557aa1458190cef",
    measurementId: "G-V4QFPWK82L",
    databaseURL: "https://gkdmshop-default-rtdb.firebaseio.com"
  };

  // Khởi tạo Firebase
  firebase.initializeApp(firebaseConfig);

  // Khởi tạo Database và Auth
  const database = firebase.database();
  const auth = firebase.auth();
</script>
