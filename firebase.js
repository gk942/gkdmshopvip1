<!-- Đặt vào đầu <head> -->
<script type="module">
  // Import SDK từ Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getDatabase, ref, set, push, onValue, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  // Cấu hình Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDBaWDDCkhRa3DQcJBYdznL98GjHmXspuI",
    authDomain: "gkdmshop.firebaseapp.com",
    databaseURL: "https://gkdmshop-default-rtdb.firebaseio.com",
    projectId: "gkdmshop",
    storageBucket: "gkdmshop.appspot.com",
    messagingSenderId: "52437838526",
    appId: "1:52437838526:web:3187795557aa1458190cef",
    measurementId: "G-V4QFPWK82L"
  };

  // Khởi tạo Firebase
  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.database = getDatabase(app);
  window.ref = ref;
  window.set = set;
  window.push = push;
  window.onValue = onValue;
  window.update = update;
  window.signInWithEmailAndPassword = signInWithEmailAndPassword;
  window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
</script>
