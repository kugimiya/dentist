(function (w) {

var root       = document.querySelector(':root'),
    rootStyles = getComputedStyle(root),
    mainColor  = rootStyles.getPropertyValue('--header-menu-display');

w.toggleMenu = function toggleMenu () {

  if (mainColor === 'none') {
    root.style.setProperty('--header-menu-display', 'flex');
  } else {
    root.style.setProperty('--header-menu-display', 'none');
  }

}


})(window);
