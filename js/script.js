// เลือก hamburger menu และเมนูหลัก
const hamburger = document.getElementById('hamburger-menu');
const navList = document.querySelector('.nav-list');

// เพิ่ม Event Listener เมื่อคลิก Hamburger
hamburger.addEventListener('click', () => {
  navList.classList.toggle('active'); // เพิ่มหรือลบคลาส active
});