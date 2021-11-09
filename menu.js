const menuData = {};
menuData.closeBtnId = "menu-close-btn";
menuData.closeBtn = document.getElementById(menuData.closeBtnId);
menuData.menuButtonId = "menu-icon";
menuData.menuButton = document.getElementById(menuData.menuButtonId);
menuData.menuBarId = "navigation-link-holder";
menuData.navigationContainer = document.getElementById(menuData.menuBarId);
menuData.closeBtn.addEventListener("click", () => {
  menuData.navigationContainer.style.width = "0px";
});
menuData.menuButton.addEventListener("click", () => {
  menuData.navigationContainer.style.width = "50%";
});
