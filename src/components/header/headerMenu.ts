type HeaderMenu = {
  root: HTMLElement;
  button: HTMLButtonElement;
  panel: HTMLElement;
};

export const initHeaderMenus = () => {
  const menuRoots = document.querySelectorAll<HTMLDivElement>(".header-menu-root");
  let menus: HeaderMenu[] = [];

  for (const menuRoot of menuRoots) {
    const menuButton = menuRoot.querySelector<HTMLButtonElement>(".header-button");
    const menuPanel = menuRoot.querySelector<HTMLUListElement>(".header-menu");

    if (!menuPanel || !menuButton) {
      continue;
    }

    const menu: HeaderMenu = { root: menuRoot, button: menuButton, panel: menuPanel };
    menus.push(menu);

    menuButton.addEventListener("click", () => {
      toggleMenu(menu, menus);
    });
  }
};

export const toggleMenu = (menu: HeaderMenu, menus: HeaderMenu[]) => {
  const wasOpen = !menu.panel.hidden;

  closeAllMenus(menus);

  if (!wasOpen) {
    menu.panel.hidden = false;
    menu.button.ariaExpanded = "true";
  }
};

export const closeAllMenus = (menus: HeaderMenu[]) => {
  for (const menu of menus) {
    menu.button.ariaExpanded = "false";
    menu.panel.hidden = true;
  }
};
