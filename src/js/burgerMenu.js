const openButtonEl = document.querySelector('[data-menu-open]');
const closeButtonEl = document.querySelector('[data-menu-close]');
const mobileMenuEl = document.querySelector('[data-mobile-menu]');
const menuLinkEls = document.querySelectorAll('[data-menu-link]');

function openMenu() {
  mobileMenuEl.hidden = false;
  mobileMenuEl.dataset.menuState = 'open';
  openButtonEl.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenuEl.hidden = true;
  mobileMenuEl.dataset.menuState = 'closed';
  openButtonEl.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

openButtonEl.addEventListener('click', openMenu);
closeButtonEl.addEventListener('click', closeMenu);
menuLinkEls.forEach(linkEl => linkEl.addEventListener('click', closeMenu));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenuEl.dataset.menuState === 'open') {
    closeMenu();
  }
});
