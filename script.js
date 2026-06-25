/* =========================================================
   Ale Durán — interacciones
   ========================================================= */
(function () {
  'use strict';

  // ⚙️ EDITAR: número de WhatsApp para booking (formato internacional, sin +, sin espacios)
  var WHATSAPP_NUMBER = '50600000000';

  /* ---------- Nav: fondo al hacer scroll ---------- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  toggle.addEventListener('click', function () {
    var open = mobile.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  mobile.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobile.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Placeholders de imagen ----------
     Carga ./images/<data-img> como background. Si la foto no existe aún,
     muestra un marcador elegante con el nombre del archivo esperado. */
  document.querySelectorAll('[data-img]').forEach(function (el) {
    var file = el.getAttribute('data-img');
    if (!file) return;
    var probe = new Image();
    probe.onload = function () {
      el.style.backgroundImage = 'url("./images/' + file + '")';
      el.classList.remove('is-empty');
    };
    probe.onerror = function () {
      el.classList.add('is-empty');
    };
    probe.src = './images/' + file;
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) * 60 : 0;
          setTimeout(function () { el.classList.add('is-visible'); }, Math.min(delay, 300));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Año en footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Formulario → WhatsApp ---------- */
  var form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var date = form.date.value;
      var type = form.type.value;
      var message = form.message.value.trim();

      // Validación mínima
      var ok = true;
      [['name', name], ['email', email]].forEach(function (pair) {
        var field = form[pair[0]].closest('.field');
        if (!pair[1]) { field.classList.add('is-error'); ok = false; }
        else { field.classList.remove('is-error'); }
      });
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.email.closest('.field').classList.add('is-error');
        ok = false;
      }
      if (!ok) { form.querySelector('.is-error input').focus(); return; }

      var lines = [
        'Hola Ale, me gustaría consultar disponibilidad.',
        '',
        'Nombre: ' + name,
        'Email: ' + email,
        date ? 'Fecha del evento: ' + date : '',
        type ? 'Tipo de evento: ' + type : '',
        message ? '' : '',
        message ? message : ''
      ].filter(Boolean);

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }
})();
