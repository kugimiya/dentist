var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--header-menu-display');

console.log(mainColor); // '#ffeead'
console.log(rootStyles); // '#ffeead'

function toggleMenu() {
  var showHeaderMenu = rootStyles.getPropertyValue('--header-menu-display');
  console.log(showHeaderMenu);
  if (showHeaderMenu =='none'){
    root.style.setProperty('--header-menu-display','flex');
  }else{
    root.style.setProperty('--header-menu-display','none');
  }
}