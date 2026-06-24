type HeaderMenu = {
  root: HTMLElement;
  button: HTMLButtonElement;
  panel: HTMLElement;
};

export const initHeaderMenus = () => {
  const headerControls = document.querySelectorAll<HTMLElement>(".header-control");
  const menus: HeaderMenu[] = [];

  for (const headerControl of headerControls) {
    const headerButton = headerControl.querySelector<HTMLButtonElement>(".header-button");

    if (!headerButton) {
      continue;
    }

    if (headerControl.dataset.headerControl === "action") {
      headerButton.addEventListener("click", () => {
        closeAllMenus(menus);
      });

      continue;
    }

    if (headerControl.dataset.headerControl === "menu") {
      const headerMenu = headerControl.querySelector<HTMLElement>(".header-menu");

      if (!headerMenu) {
        continue;
      }

      const menu: HeaderMenu = {
        root: headerControl,
        button: headerButton,
        panel: headerMenu,
      };

      menus.push(menu);

      headerButton.addEventListener("click", () => {
        toggleMenu(menu, menus);
      });

      headerMenu.addEventListener("click", (event) => {
        const target = event.target;

        if (!(target instanceof Element)) {
          return;
        }

        const menuItemAction = target.closest("a, button");

        if (!menuItemAction || !headerMenu.contains(menuItemAction)) {
          return;
        }

        closeAllMenus(menus);
      });
    }
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
