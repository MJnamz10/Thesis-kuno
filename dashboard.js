  const navItems = document.querySelectorAll('.item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // remove active from all
      navItems.forEach(i => i.classList.remove('active-item'));
      // add active to clicked item
      item.classList.add('active-item');
    });
  });
