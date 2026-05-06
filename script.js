(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var sections  = document.querySelectorAll('.content-section');
    var navLinks  = document.querySelectorAll('.nav-link');
    var header    = document.querySelector('header');

    /* ── Show the correct section based on URL hash or default to #home ── */
    function showSection(id) {
      sections.forEach(function (sec) {
        if (sec.id === id) {
          sec.classList.remove('hidden');
          /* Re-trigger fade-in animation */
          sec.style.animation = 'none';
          sec.offsetHeight;               /* reflow */
          sec.style.animation = '';
        } else {
          sec.classList.add('hidden');
        }
      });

      navLinks.forEach(function (link) {
        if (link.dataset.target === id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    /* ── Nav click handler ── */
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = this.dataset.target;
        showSection(target);
        history.replaceState(null, '', '#' + target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    /* ── Sticky header shadow on scroll ── */
    window.addEventListener('scroll', function () {
      if (window.scrollY > 4) {
        header.style.boxShadow = '0 1px 8px rgba(0,0,0,.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });

    /* ── Initial render: honour the URL hash ── */
    var hash = window.location.hash.replace('#', '');
    var validIds = Array.from(sections).map(function (s) { return s.id; });
    showSection(validIds.indexOf(hash) !== -1 ? hash : 'home');
  });
})();
