document.addEventListener('DOMContentLoaded', function () {
  // 默认显示 Home 页内容
  document.getElementById('home').style.display = 'block';
  document.getElementById('research').style.display = 'none';

  // 监听导航链接点击事件
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      // 获取目标 section 的 id
      const targetId = this.getAttribute('href').substring(1); // 去掉 # 号
      // 隐藏所有 section
      document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
      });
      // 显示点击的目标 section
      document.getElementById(targetId).style.display = 'block';
    });
  });
});