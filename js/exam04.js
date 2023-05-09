let selectedMenu = null;

function selectMenu(menu) {
  if (selectedMenu === menu) {
    // 선택된 메뉴를 다시 클릭한 경우, 선택을 취소한다.
    menu.classList.remove("active");
    selectedMenu = null;
  } else {
    // 다른 메뉴를 클릭한 경우, 선택 상태를 변경한다.
    if (selectedMenu) {
      selectedMenu.classList.remove("active");
    }
    menu.classList.add("active");
    selectedMenu = menu;
  }
}
