const openButtonEl = document.querySelector('[data-about-open]');
const closeButtonEl = document.querySelector('[data-about-close]');
const modalEl = document.querySelector('[data-about-modal]');

function openModal() {
  modalEl.hidden = false;
  modalEl.dataset.aboutState = 'open';
  openButtonEl.setAttribute('aria-expanded', 'true');
  closeButtonEl.focus();
}

function closeModal() {
  modalEl.hidden = true;
  modalEl.dataset.aboutState = 'closed';
  openButtonEl.setAttribute('aria-expanded', 'false');
  openButtonEl.focus();
}

if (openButtonEl && closeButtonEl && modalEl) {
  openButtonEl.addEventListener('click', openModal);
  closeButtonEl.addEventListener('click', closeModal);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalEl.dataset.aboutState === 'open') {
      closeModal();
    }
  });
}
