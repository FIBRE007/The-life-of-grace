// Mobile sidebar toggle
const toggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
if (toggle && sidebar) {
  toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 880 && sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && e.target !== toggle) {
      sidebar.classList.remove('open');
    }
  });
}

// Keep the older Life of Grace pages pointing to their new landing page.
const bookKey = document.body.getAttribute('data-book') || 'lifeOfGrace';
const brand = document.querySelector('.sidebar .brand');
if (brand && bookKey === 'lifeOfGrace' && brand.getAttribute('href') === '../index.html') {
  brand.setAttribute('href', '../life-of-grace/');
}

// Reading progress bar
const track = document.createElement('div');
track.className = 'progress-track';
const fill = document.createElement('div');
fill.className = 'progress-fill';
track.appendChild(fill);
document.body.appendChild(track);

function storageKey(name) {
  return bookKey + '_' + name;
}

function updateProgress() {
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const height = h.scrollHeight - h.clientHeight;
  const pct = height > 0 ? (scrolled / height) * 100 : 0;
  fill.style.width = pct + '%';
  const slug = document.body.getAttribute('data-slug');
  if (slug) {
    try {
      localStorage.setItem(storageKey('lastPage'), slug);
      localStorage.setItem(storageKey('progress_' + slug), pct.toFixed(1));
    } catch (e) {}
  }
}
window.addEventListener('scroll', updateProgress);
updateProgress();

// Restore scroll position on this page if returning to it
window.addEventListener('load', () => {
  const slug = document.body.getAttribute('data-slug');
  if (!slug) return;
  try {
    const saved = localStorage.getItem(storageKey('progress_' + slug));
    if (saved && parseFloat(saved) > 2) {
      const h = document.documentElement;
      const target = (parseFloat(saved) / 100) * (h.scrollHeight - h.clientHeight);
      window.scrollTo(0, target);
    }
  } catch (e) {}
});

// Audio: if a local audio file fails, show a friendly fallback.
const player = document.getElementById('player');
const fallback = document.getElementById('audioFallback');
if (player) {
  player.addEventListener('error', () => {
    player.style.display = 'none';
    if (fallback) fallback.style.display = 'inline';
  }, true);
}
