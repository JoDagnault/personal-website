const TRIGGER_SELECTOR = ".header-button[aria-expanded]";
const OPEN_TRIGGER_SELECTOR = `header ${TRIGGER_SELECTOR}[aria-expanded="true"]`;
const ACTION_SELECTOR = '[data-header-control="action"], .header-menu a, .header-menu button';

export const initHeaderControlsEvents = () => {
  document.addEventListener("click", handleHeaderClick);
  document.addEventListener("keydown", handleHeaderKeydown);
};

const handleHeaderClick = (event: MouseEvent) => {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  closeInactiveMenus(target);

  const trigger = target.closest<HTMLElement>(TRIGGER_SELECTOR);

  if (trigger) {
    toggleTrigger(trigger);
  }
};

const handleHeaderKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeAllMenus();
  }
};

const closeInactiveMenus = (target: Element) => {
  for (const trigger of openTriggers()) {
    if (!staysOpenAfterClick(trigger, target)) {
      trigger.ariaExpanded = "false";
    }
  }
};

const staysOpenAfterClick = (trigger: HTMLElement, target: Element): boolean => {
  const control = trigger.closest<HTMLElement>(".header-control");

  if (!control) {
    return false;
  }

  // An action settles a setting (theme toggle, colour switch):
  // it collapses dropdowns but keeps the mobile burger group open so several
  // settings can be changed in a row.
  if (isActionClick(target)) {
    return isGroupControl(control);
  }

  // Any other click keeps open only the menu it landed inside, which drives
  // exclusive dropdowns and click-outside dismiss.
  return control.contains(target);
};

const isActionClick = (target: Element) => target.closest(ACTION_SELECTOR) !== null;

const isGroupControl = (control: HTMLElement) => control.dataset.headerControl === "group";

const toggleTrigger = (trigger: HTMLElement) => {
  trigger.ariaExpanded = trigger.ariaExpanded === "true" ? "false" : "true";
};

const closeAllMenus = () => {
  for (const trigger of openTriggers()) {
    trigger.ariaExpanded = "false";
  }
};

const openTriggers = () => document.querySelectorAll<HTMLElement>(OPEN_TRIGGER_SELECTOR);
