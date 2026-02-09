(function () {
  'use strict';

  // Mobile nav toggle
  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  // Dark mode toggle
  var themeToggle = document.querySelector('[data-theme-toggle]');
  var html = document.documentElement;
  var STORAGE_KEY = 'theme';

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setTheme(value) {
    if (value === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    try {
      if (value) localStorage.setItem(STORAGE_KEY, value);
      else localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function initTheme() {
    var stored = getStored();
    if (stored === 'dark' || (stored !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
    } else {
      setTheme(stored || '');
    }
  }

  if (themeToggle) {
    initTheme();
    themeToggle.addEventListener('click', function () {
      var isDark = html.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // Publications search and filters (client-side)
  var searchInput = document.querySelector('[data-pub-search]');
  var searchStatus = document.querySelector('[data-search-status]');
  var filterYear = document.querySelector('[data-filter-year]');
  var filterType = document.querySelector('[data-filter-type]');
  var pubCards = document.querySelectorAll('.pub-card');

  function filterPubs() {
    var q = (searchInput && searchInput.value) ? searchInput.value.trim().toLowerCase() : '';
    var year = filterYear && filterYear.value ? filterYear.value : '';
    var type = filterType && filterType.value ? filterType.value : '';
    var visible = 0;
    pubCards.forEach(function (card) {
      var text = (card.textContent || '').toLowerCase();
      var matchSearch = !q || text.indexOf(q) !== -1;
      var matchYear = !year || (card.getAttribute('data-year') === year);
      var matchType = !type || (card.getAttribute('data-type') === type);
      var show = matchSearch && matchYear && matchType;
      card.hidden = !show;
      if (show) visible++;
    });
    if (searchStatus) {
      searchStatus.textContent = (q || year || type) ? visible + ' of ' + pubCards.length + ' publications' : '';
    }
  }

  if (searchInput) searchInput.addEventListener('input', filterPubs);
  if (filterYear) filterYear.addEventListener('change', filterPubs);
  if (filterType) filterType.addEventListener('change', filterPubs);
})();
