document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a.nav-link');
  const sections = document.querySelectorAll('main .section');

  // Chuyển tab
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('data-section');

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(sec => {
        sec.classList.remove('active');
        if (sec.id === target) sec.classList.add('active');
      });
    });
  });

  // Xử lý nút mua hàng
  const buyButtons = document.querySelectorAll('.btn-buy');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.getAttribute('data-product');
      const price = btn.getAttribute('data-price');
      alert(`Bạn đã chọn mua: ${product}\nGiá: ${price} VNĐ\n(Vui lòng chuyển khoản theo phần Nạp tiền)`);
    });
  });

  // Xử lý form nạp tiền
  const formNapTien = document.getElementById('form-nap-tien');
  const napTienResult = document.getElementById('nap-tien-result');

  formNapTien.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username-nap').value.trim();
    const amount = parseInt(document.getElementById('amount-nap').value);

    if (!username || amount <= 0) {
      napTienResult.textContent = 'Vui lòng điền đúng thông tin.';
      napTienResult.style.color = '#f00';
      return;
    }

    // Demo: Hiện thông báo chờ xác nhận chuyển khoản
    napTienResult.textContent = `Yêu cầu nạp ${amount.toLocaleString()} VNĐ cho tài khoản "${username}" đã gửi. Vui lòng chuyển khoản theo thông tin bên trên.`;
    napTienResult.style.color = '#0f0';

    formNapTien.reset();
  });

  // Load dữ liệu top nạp (demo)
  const topNapList = document.getElementById('top-nap-list');
  const demoTopNap = [
    { user: 'HungAkira', amount: 5000000 },
    { user: 'Player1', amount: 2000000 },
    { user: 'ProGamer', amount: 1500000 },
    { user: 'FFMaster', amount: 1200000 },
  ];

  topNapList.innerHTML = demoTopNap.map((item, i) => 
    `<li>${i + 1}. ${item.user} - ${item.amount.toLocaleString()} VNĐ</li>`
  ).join('');
});

