<<!-- firebase.js -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDBaWDDCkhRa3DQcJBYdznL98GjHmXspuI",
    authDomain: "gkdmshop.firebaseapp.com",
    databaseURL: "https://gkdmshop-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gkdmshop",
    storageBucket: "gkdmshop.appspot.com",
    messagingSenderId: "52437838526",
    appId: "1:52437838526:web:3187795557aa1458190cef"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
</script>
