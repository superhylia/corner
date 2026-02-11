const shareMenu = document.querySelector('[data-module="share-menu"]');

if (shareMenu) {
  const trigger = shareMenu.querySelector('[data-share-trigger]');
  const list = shareMenu.querySelector('#share-list');
  const copyBtn = shareMenu.querySelector('[data-copy-link]');
  const webShareItem = shareMenu.querySelector('[data-web-share-item]');
  const webShareBtn = shareMenu.querySelector('[data-web-share-trigger]');

  // Toggle Dropdown
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', !expanded);
    list.hidden = expanded;
  });

  // Copy Link Logic
  copyBtn.addEventListener('click', () => {
    const url = copyBtn.dataset.copyLink;
    navigator.clipboard.writeText(url).then(() => {
      const originalText = copyBtn.innerText;
      copyBtn.innerText = 'Copied! Go paste it.';
      setTimeout(() => copyBtn.innerText = originalText, 2000);
    });
  });

  // Web Share API Logic
  if (navigator.share) {
    webShareItem.hidden = false;
    webShareBtn.addEventListener('click', () => {
      navigator.share({
        title: webShareBtn.dataset.title,
        url: webShareBtn.dataset.url
      }).catch(console.error);
    });
  }
}