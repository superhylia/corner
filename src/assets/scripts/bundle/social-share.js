const shareMenu = document.querySelector('[data-module="share-menu"]');
const shareFooterMenu = document.querySelector('[data-module="share-footer-menu"]');

if (shareMenu) {
  const trigger = shareMenu.querySelector('[data-share-trigger]');

  // Web Share API Logic
  if (navigator.share) {
    trigger.addEventListener('click', () => {
      navigator.share({
        title: trigger.dataset.title,
        url: trigger.dataset.url
      }).catch(console.error);
    });
  }

  else {
    trigger.addEventListener('click', () => {
      const url = trigger.dataset.url;
      navigator.clipboard.writeText(url).then(() => {
        const originalText = trigger.innerText;
        trigger.innerText = 'Copied! Go paste it.';
        setTimeout(() => trigger.innerText = originalText, 2000);
      });
    });
  }
}

if (shareFooterMenu) {
  const trigger = shareFooterMenu.querySelector('[data-footer-share-trigger]');
  if (navigator.share) {
    trigger.addEventListener('click', () => {
      navigator.share({
        title: trigger.dataset.title,
        url: trigger.dataset.url
      }).catch(console.error);
    });
  }
}