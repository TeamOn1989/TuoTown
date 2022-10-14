(function() {
  const DROP_MENU = document.querySelector('.header__nav');
  const DROP_MENU_BTN = document.querySelector('#drop_menu')

  DROP_MENU_BTN.addEventListener('click', function() {
    removeHidden(DROP_MENU);
    let back = document.querySelector('.header__nav-icon');
    back.setAttribute('cursor', 'pointer')
        
    back.addEventListener('click', function() {
      DROP_MENU.classList.add('hidden')
    })
  })





  function removeHidden(el) {
    el.classList.remove('hidden');
  }
  
  

})();