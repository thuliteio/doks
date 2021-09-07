var announcement = document.getElementById('announcement');

if (announcement !== null) {

  if (localStorage.getItem('announcement') === null ) {

    announcement.classList.remove('d-none');

  }

  announcement.addEventListener('closed.bs.alert', () => {

    localStorage.setItem('announcement', 'closed');

  });

}
