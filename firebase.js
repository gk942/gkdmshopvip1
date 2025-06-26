<!-- Firebase SDK (dùng CDN thay vì import) -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDBaWDDCkhRa3DQcJBYdznL98GjHmXspuI",
    authDomain: "gkdmshop.firebaseapp.com",
    projectId: "gkdmshop",
    storageBucket: "gkdmshop.firebasestorage.app",
    messagingSenderId: "52437838526",
    appId: "1:52437838526:web:3187795557aa1458190cef",
    measurementId: "G-V4QFPWK82L"
  };

  // Khởi tạo Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
</script>
