// app.js - kết nối Firebase & xử lý logic shop

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, push } from "firebase/database";

// Cấu hình Firebase của bạn (thay bằng config thật)
const firebaseConfig = {
  apiKey: "AIzaSyDBaWDDCkhRa3DQcJBYdznL98GjHmXspuI",
  authDomain: "gkdmshop.firebaseapp.com",
  databaseURL: "https://gkdmshop-default-rtdb.firebaseio.com",
  projectId: "gkdmshop",
  storageBucket: "gkdmshop.appspot.com",
  messagingSenderId: "52437838526",
  appId: "1:52437838526:web:3187795557aa1458190cef",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Tham chiếu đến dữ liệu top nạp
const topNapsRef = ref(db, 'topNaps');
// Tham chiếu đến số dư từng user
const userBalancesRef = ref(db, 'userBalances');
// Tham chiếu đến lịch sử giao dịch
const transactionsRef = ref(db, 'transactions');

// Load bảng top nạp và hiển thị
function loadTopNaps() {
  onValue(topNapsRef, (snapshot) => {
    const data = snapshot.val() || {};
    const tableBody = document.getElementById('topNapsBody');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    // chuyển data thành mảng rồi sắp xếp giảm dần theo số tiền nạp
    const sorted = Object.entries(data).sort((a,b) => b[1] - a[1]);
    sorted.forEach(([username, amount], index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${index+1}</td><td>${username}</td><td>${amount.toLocaleString()}</td>`;
      tableBody.appendChild(tr);
    });
  });
}

// Cập nhật số dư user
function updateUserBalance(username, amount) {
  const userRef = ref(db, `userBalances/${username}`);
  set(userRef, amount);
}

// Thêm giao dịch lịch sử
function addTransaction(username, amount, type) {
  // type = 'nap' hay 'mua'
  const newTransRef = push(transactionsRef);
  set(newTransRef, {
    username,
    amount,
    type,
    timestamp: Date.now(),
  });
}

// Kiểm tra và xử lý auto cập nhật số dư khi có giao dịch (giả định...)
function listenForAutoBank() {
  // Ví dụ: Giả lập, thật ra bạn cần backend để kiểm tra chuyển khoản qua ngân hàng
  // Firebase Realtime DB ở đây là nơi lưu thông tin auto bank
  const autoBankRef = ref(db, 'autoBank');
  onValue(autoBankRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    Object.entries(data).forEach(([username, info]) => {
      // info = {amount: số tiền, processed: true/false}
      if (info.processed) return; // đã xử lý rồi
      // cập nhật số dư
      const userBalanceRef = ref(db, `userBalances/${username}`);
      onValue(userBalanceRef, (snap) => {
        let oldAmount = snap.val() || 0;
        let newAmount = oldAmount + info.amount;
        updateUserBalance(username, newAmount);
        addTransaction(username, info.amount, 'nap');
        // đánh dấu processed
        const autoBankUserRef = ref(db, `autoBank/${username}/processed`);
        set(autoBankUserRef, true);
      }, {onlyOnce: true});
    });
  });
}

window.onload = () => {
  loadTopNaps();
  listenForAutoBank();
  // Các hàm khác nếu cần...
}
