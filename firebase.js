<!-- firebase.js -->
<script type="module">
  // Import SDK compat
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/compat/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/compat/firebase-auth.js";
  import { getDatabase, ref, set, push, onValue, update } from "https://www.gstatic.com/firebasejs/9.22.0/compat/firebase-database.js";

  // Firebase config
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "gkdmshop.firebaseapp.com",
    databaseURL: "https://gkdmshop-default-rtdb.firebaseio.com",
    projectId: "gkdmshop",
    storageBucket: "gkdmshop.appspot.com",
    messagingSenderId: "YOUR_MSG_ID",
    appId: "YOUR_APP_ID"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.db = getDatabase(app);

  // Expose Firebase functions globally
  window.firebaseFunctions = {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    ref,
    set,
    push,
    onValue,
    update
  };
</script>
