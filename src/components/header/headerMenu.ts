export const initHeaderMenus = () => {
  const headerControls = document.querySelectorAll<HTMLElement>(".header-control");
  const menuButtons: HTMLButtonElement[] = [];

  for (const headerControl of headerControls) {
    const headerButton = headerControl.querySelector<HTMLButtonElement>(".header-button");

    if (!headerButton) {
      continue;
    }

    if (headerControl.dataset.headerControl === "action") {
      headerButton.addEventListener("click", () => {
        closeAllMenus(menuButtons);
      });

      continue;
    }

    if (headerControl.dataset.headerControl === "menu") {
      const headerMenu = headerControl.querySelector<HTMLElement>(".header-menu");

      if (!headerMenu) {
        continue;
      }

      menuButtons.push(headerButton);

      headerButton.addEventListener("click", () => {
        toggleMenu(headerButton, menuButtons);
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

        closeAllMenus(menuButtons);
      });
    }
  }
};

export const toggleMenu = (button: HTMLButtonElement, buttons: HTMLButtonElement[]) => {
  const wasOpen = button.ariaExpanded === "true";

  closeAllMenus(buttons);

  if (!wasOpen) {
    button.ariaExpanded = "true";
  }
};

export const closeAllMenus = (buttons: HTMLButtonElement[]) => {
  for (const button of buttons) {
    button.ariaExpanded = "false";
  }
};

export const initHeaderDismiss = () => {
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof Element && target.closest(".header-control")) {
      return;
    }

    closeOpenDropdowns();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOpenDropdowns();
    }
  });
};

const closeOpenDropdowns = () => {
  const openTriggers = document.querySelectorAll<HTMLElement>('header [aria-expanded="true"]');

  for (const trigger of openTriggers) {
    trigger.ariaExpanded = "false";
  }
};
