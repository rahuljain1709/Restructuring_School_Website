(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  // Learning-path tabs
  document.querySelectorAll('.path-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      const path = tab.dataset.path;
      document.querySelectorAll('.path-tab').forEach(function (item) {
        item.classList.toggle('active', item === tab);
        item.setAttribute('aria-selected', String(item === tab));
      });
      document.querySelectorAll('.path-panel').forEach(function (panel) {
        panel.classList.toggle('active', panel.dataset.panel === path);
      });
    });
  });

  // News filter
  document.querySelectorAll('.news-filter-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = button.dataset.filter;
      document.querySelectorAll('.news-filter-btn').forEach(function (item) {
        item.classList.toggle('active', item === button);
      });
      document.querySelectorAll('.news-card').forEach(function (card) {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.type !== filter);
      });
    });
  });

  // Sports pills are deliberately lightweight in the sample; active state communicates the intended CMS-driven filter interaction.
  document.querySelectorAll('.sport-pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      document.querySelectorAll('.sport-pill').forEach(function (item) {
        item.classList.remove('active');
      });
      pill.classList.add('active');
    });
  });

  // Demo search affordance: keep the prototype frictionless without introducing a dependency.
  const searchButton = document.querySelector('.icon-button');
  if (searchButton) {
    searchButton.addEventListener('click', function () {
      const query = window.prompt('Prototype search — what would you like to find?');
      if (query && query.trim()) {
        window.alert('Search placeholder: "' + query.trim() + '"\nIn production this connects to the CMS/search API.');
      }
    });
  }
}());
