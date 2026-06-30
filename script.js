/* =========================================================
   Ale Durán — interacciones + i18n (ES / EN)
   ========================================================= */
(function () {
  'use strict';

  // ⚙️ EDITAR: número de WhatsApp (formato internacional, sin + ni espacios)
  var WHATSAPP_NUMBER = '50685858566';

  /* =========================================================
     DICCIONARIO I18N
     ========================================================= */
  var I18N = {
    es: {
      'a11y.skip': 'Saltar al contenido',
      'meta.title': 'Ale Durán — Cantante en vivo · Pacífico de Costa Rica',
      'meta.desc': 'Ale Durán, cantante en vivo en el Pacífico de Costa Rica. Música para hoteles boutique, bodas, cenas privadas y eventos corporativos.',
      'nav.brandSub': 'Cantante en vivo',
      'nav.about': 'Sobre Ale', 'nav.repertoire': 'Repertorio', 'nav.gallery': 'Galería', 'nav.events': 'Eventos', 'nav.book': 'Reservar',
      'hero.eyebrow': 'Pacífico de Costa Rica · Música en vivo',
      'hero.lede': 'Voz en vivo para los momentos que merecen recordarse. Atmósferas a la medida para hoteles boutique, bodas frente al mar, cenas privadas y eventos de marca.',
      'hero.cta1': 'Reservar una fecha', 'hero.cta2': 'Ver & escuchar', 'hero.scroll': 'Descubrir',
      'about.badge': 'Pacífico Central · CR', 'about.eyebrow': 'Sobre Ale',
      'about.title': 'Una voz que vuelve íntimo cualquier espacio.',
      'about.p1': 'Ale Durán es cantante en vivo con más de 6 años de trayectoria artística en el Pacífico de Costa Rica. Su sello es la cercanía: interpretaciones cuidadas, en voz y guitarra, que acompañan sin competir con la conversación. Del atardecer en la terraza al brindis de una boda, construye la banda sonora del momento.',
      'about.p2': 'A lo largo de su carrera ha acumulado experiencias que la distinguen: ha colaborado con la Orquesta Universal en diferentes proyectos musicales y ha tenido el honor de abrir conciertos de artistas internacionales como Reik. Con más de 500 eventos en vivo y presencia constante en los mejores spots de Jacó, Herradura y Hermosa, hoy lleva su propuesta a hoteles boutique, marinas y venues de primer nivel del país.',
      'about.stat1': 'Eventos en vivo', 'about.stat2': 'Formatos disponibles', 'about.stat3': 'A la medida',
      'rep.eyebrow': 'Repertorio & estilos', 'rep.title': 'Música pensada para cada ambiente.',
      'rep.sub': 'Repertorio curado en español e inglés, adaptable a la energía de tu evento: de fondo elegante para un cóctel a un cierre que invita a bailar.',
      'rep.c1t': 'Soft Music', 'rep.c1p': 'Música suave y envolvente para cócteles, cenas y atardeceres frente al mar.',
      'rep.c2t': 'Rock Pop', 'rep.c2p': 'Standards modernos y pop rock para un público internacional y eventos con energía.',
      'rep.c3t': 'Boleros & clásicos', 'rep.c3p': 'El romanticismo de siempre para primeras danzas y momentos especiales.',
      'rep.formatsTitle': 'Formatos disponibles',
      'rep.f1': 'Voz & guitarra. Íntimo y versátil.',
      'rep.f2name': 'Dúo Plancha Rock', 'rep.f2': 'Con Rayssa: dos voces, dos guitarras.',
      'rep.f3name': 'Dúo Rock Pop', 'rep.f3': 'Con Lucho Aguilar: dos voces, dos guitarras.',
      'rep.f4name': 'Dúo Guitarra & Percusión', 'rep.f4': 'Formato acústico con base rítmica, también disponible.',
      'rep.f5name': 'Banda', 'rep.f5': 'Formato ampliado para fiestas y grandes celebraciones.',
      'gal.eyebrow': 'Galería', 'gal.title': 'Verla & escucharla.', 'gal.video': 'Video próximamente',
      'ev.eyebrow': 'Para tu evento', 'ev.title': 'Una propuesta a la altura de tu marca.',
      'ev.sub': 'Música en vivo profesional, puntual y discreta. Sonido propio, vestuario acorde y repertorio coordinado contigo previo al evento.',
      'ev.c1t': 'Hoteles boutique & resorts', 'ev.c1p': 'Ambiente sonoro para lobbies, terrazas, restaurantes y atardeceres.',
      'ev.c2t': 'Bodas & ceremonias', 'ev.c2p': 'Desde la ceremonia hasta el brindis: la música de tu día perfecto.',
      'ev.c3t': 'Eventos corporativos', 'ev.c3p': 'Activaciones de marca, cenas ejecutivas y lanzamientos con sello premium.',
      'ev.c4t': 'Cenas & celebraciones privadas', 'ev.c4p': 'Aniversarios, cumpleaños y reuniones íntimas con música en vivo.',
      'ev.ctaText': '¿Tenés una fecha en mente?', 'ev.ctaBtn': 'Solicitar disponibilidad',
      'ts.eyebrow': 'Testimonios', 'ts.title': 'Lo que dicen quienes la contrataron.',
      'ts.q1': '“La voz de Ale convirtió nuestra cena de aniversario en algo inolvidable. Elegante y profesional de principio a fin.”', 'ts.q1a': 'Evento privado',
      'ts.q2': '“Puntual, impecable y con un repertorio que encajó perfecto con nuestros huéspedes. La volveremos a llamar.”', 'ts.q2a': 'Hotel boutique',
      'ts.q3': '“El cierre perfecto para nuestra boda. La pista de baile no paró. 100% recomendada.”', 'ts.q3a': 'Boda',
      'ct.eyebrow': 'Reservas', 'ct.title': 'Hagamos sonar tu evento.',
      'ct.sub': 'Contame la fecha, el lugar y el tipo de evento. Te respondo con disponibilidad y una propuesta a la medida.',
      'ct.zoneLabel': 'Zona', 'ct.zone': 'Pacífico Central · Jacó, Herradura, Hermosa',
      'ct.fName': 'Nombre', 'ct.fEmail': 'Email', 'ct.fDate': 'Fecha del evento', 'ct.fType': 'Tipo de evento',
      'ct.fSelect': 'Seleccionar…', 'ct.optWedding': 'Boda', 'ct.optHotel': 'Hotel / Resort', 'ct.optCorp': 'Evento corporativo', 'ct.optPrivate': 'Cena privada', 'ct.optOther': 'Otro',
      'ct.fMsg': 'Contame sobre tu evento', 'ct.submit': 'Enviar por WhatsApp', 'ct.note': 'Se abrirá WhatsApp con tu mensaje listo para enviar.',
      'ft.tag': 'Música en vivo · Pacífico de Costa Rica', 'ft.rights': 'Todos los derechos reservados.',
      // mensaje del formulario → WhatsApp
      'wa.intro': 'Hola Ale, me gustaría consultar disponibilidad.', 'wa.name': 'Nombre', 'wa.email': 'Email', 'wa.date': 'Fecha del evento', 'wa.type': 'Tipo de evento',
      'err.required': 'Por favor completá tu nombre y un email válido.'
    },
    en: {
      'a11y.skip': 'Skip to content',
      'meta.title': 'Ale Durán — Live Singer · Pacific Coast, Costa Rica',
      'meta.desc': "Ale Durán, live singer on Costa Rica's Pacific coast. Music for boutique hotels, weddings, private dinners and corporate events.",
      'nav.brandSub': 'Live Singer',
      'nav.about': 'About', 'nav.repertoire': 'Repertoire', 'nav.gallery': 'Gallery', 'nav.events': 'Events', 'nav.book': 'Book',
      'hero.eyebrow': 'Pacific Coast, Costa Rica · Live Music',
      'hero.lede': 'A live voice for the moments worth remembering. Tailored atmospheres for boutique hotels, beachfront weddings, private dinners and brand events.',
      'hero.cta1': 'Book a date', 'hero.cta2': 'Watch & listen', 'hero.scroll': 'Discover',
      'about.badge': 'Central Pacific · CR', 'about.eyebrow': 'About Ale',
      'about.title': 'A voice that makes any space feel intimate.',
      ‘about.p1’: "Ale Durán is a live singer with over 6 years of artistic experience on Costa Rica’s Pacific coast. Her signature is closeness: refined performances on voice and guitar that accompany without competing with the conversation. From a sunset on the terrace to a wedding toast, she builds the soundtrack of the moment.",
      ‘about.p2’: "Throughout her career she has built a distinguished track record: she has collaborated with the Orquesta Universal on multiple musical projects and has had the honor of opening for international artists such as Reik. With over 500 live events and a constant presence at the best spots in Jacó, Herradura and Hermosa, she now brings her act to boutique hotels, marinas and the country’s top-tier venues.",
      'about.stat1': 'Live events', 'about.stat2': 'Available formats', 'about.stat3': 'Tailored',
      'rep.eyebrow': 'Repertoire & styles', 'rep.title': 'Music crafted for every mood.',
      'rep.sub': 'A curated repertoire in Spanish and English, adaptable to your event’s energy: from elegant background for a cocktail to a closing set that gets people dancing.',
      'rep.c1t': 'Soft Music', 'rep.c1p': 'Smooth, immersive music for cocktails, dinners and beachfront sunsets.',
      'rep.c2t': 'Rock Pop', 'rep.c2p': 'Modern pop rock standards for international crowds and high-energy events.',
      'rep.c3t': 'Boleros & classics', 'rep.c3p': 'Timeless romance for first dances and special moments.',
      'rep.formatsTitle': 'Available formats',
      'rep.f1': 'Voice & guitar. Intimate and versatile.',
      'rep.f2name': 'Duo Plancha Rock', 'rep.f2': 'With Rayssa: two voices, two guitars.',
      'rep.f3name': 'Duo Rock Pop', 'rep.f3': 'With Lucho Aguilar: two voices, two guitars.',
      'rep.f4name': 'Duo Guitar & Percussion', 'rep.f4': 'Acoustic format with rhythmic base, also available.',
      'rep.f5name': 'Band', 'rep.f5': 'Expanded format for parties and large celebrations.',
      'gal.eyebrow': 'Gallery', 'gal.title': 'Watch & listen.', 'gal.video': 'Video coming soon',
      'ev.eyebrow': 'For your event', 'ev.title': 'An act worthy of your brand.',
      'ev.sub': 'Professional, punctual and discreet live music. Own sound system, fitting attire and a repertoire coordinated with you ahead of the event.',
      'ev.c1t': 'Boutique hotels & resorts', 'ev.c1p': 'Ambient sound for lobbies, terraces, restaurants and sunsets.',
      'ev.c2t': 'Weddings & ceremonies', 'ev.c2p': 'From the ceremony to the toast: the music of your perfect day.',
      'ev.c3t': 'Corporate events', 'ev.c3p': 'Brand activations, executive dinners and launches with a premium feel.',
      'ev.c4t': 'Private dinners & celebrations', 'ev.c4p': 'Anniversaries, birthdays and intimate gatherings with live music.',
      'ev.ctaText': 'Have a date in mind?', 'ev.ctaBtn': 'Request availability',
      'ts.eyebrow': 'Testimonials', 'ts.title': 'What clients say.',
      'ts.q1': '“Ale’s voice turned our anniversary dinner into something unforgettable. Elegant and professional from start to finish.”', 'ts.q1a': 'Private event',
      'ts.q2': '“Punctual, flawless, with a repertoire that fit our guests perfectly. We’ll book her again.”', 'ts.q2a': 'Boutique hotel',
      'ts.q3': '“The perfect close to our wedding. The dance floor never stopped. 100% recommended.”', 'ts.q3a': 'Wedding',
      'ct.eyebrow': 'Bookings', 'ct.title': 'Let’s make your event sound.',
      'ct.sub': 'Tell me the date, place and type of event. I’ll reply with availability and a tailored proposal.',
      'ct.zoneLabel': 'Area', 'ct.zone': 'Central Pacific · Jacó, Herradura, Hermosa',
      'ct.fName': 'Name', 'ct.fEmail': 'Email', 'ct.fDate': 'Event date', 'ct.fType': 'Event type',
      'ct.fSelect': 'Select…', 'ct.optWedding': 'Wedding', 'ct.optHotel': 'Hotel / Resort', 'ct.optCorp': 'Corporate event', 'ct.optPrivate': 'Private dinner', 'ct.optOther': 'Other',
      'ct.fMsg': 'Tell me about your event', 'ct.submit': 'Send via WhatsApp', 'ct.note': 'WhatsApp will open with your message ready to send.',
      'ft.tag': "Live music · Pacific Coast, Costa Rica", 'ft.rights': 'All rights reserved.',
      'wa.intro': "Hi Ale, I'd like to check availability.", 'wa.name': 'Name', 'wa.email': 'Email', 'wa.date': 'Event date', 'wa.type': 'Event type',
      'err.required': 'Please enter your name and a valid email.'
    }
  };

  var lang = 'es';

  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.es[key]) || key; }

  function applyLang(next) {
    lang = (next === 'en') ? 'en' : 'es';
    document.documentElement.lang = lang;
    try { localStorage.setItem('ale_lang', lang); } catch (e) {}

    var dict = I18N[lang];

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] == null) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) el.setAttribute(attr, dict[key]);
      else el.textContent = dict[key];
    });

    // <title> y meta description
    if (dict['meta.title']) document.title = dict['meta.title'];

    // estado de los botones de idioma
    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  // idioma inicial: localStorage → navegador → es
  (function initLang() {
    var saved;
    try { saved = localStorage.getItem('ale_lang'); } catch (e) {}
    var nav = (navigator.language || 'es').toLowerCase().indexOf('en') === 0 ? 'en' : 'es';
    applyLang(saved || nav);
  })();

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  /* ---------- Nav scroll ---------- */
  var nav = document.getElementById('nav');
  var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  toggle.addEventListener('click', function () {
    var open = mobile.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  mobile.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobile.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Placeholders de imagen ---------- */
  function loadImg(el) {
    var file = el.getAttribute('data-img');
    if (!file) return;
    var probe = new Image();
    probe.onload = function () { el.style.backgroundImage = 'url("./images/' + file + '")'; el.classList.remove('is-empty'); };
    probe.onerror = function () { el.classList.add('is-empty'); };
    probe.src = './images/' + file;
  }
  var allImgs = Array.prototype.slice.call(document.querySelectorAll('[data-img]'));
  // Hero: siempre visible al cargar → carga inmediata
  allImgs.filter(function (el) { return el.closest('.hero'); }).forEach(loadImg);
  // Resto (about, galería, etc.): lazy-load real al entrar al viewport
  var lazyImgs = allImgs.filter(function (el) { return !el.closest('.hero'); });
  if ('IntersectionObserver' in window) {
    var imgIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { loadImg(entry.target); imgIo.unobserve(entry.target); }
      });
    }, { rootMargin: '200px 0px' });
    lazyImgs.forEach(function (el) { imgIo.observe(el); });
  } else {
    lazyImgs.forEach(loadImg);
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
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

  /* ---------- Año footer ---------- */
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

      var ok = true;
      var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      [['name', !!name], ['email', !!email && emailValid]].forEach(function (pair) {
        var input = form[pair[0]];
        var field = input.closest('.field');
        field.classList.toggle('is-error', !pair[1]);
        input.setAttribute('aria-invalid', String(!pair[1]));
        if (!pair[1]) ok = false;
      });

      var errBox = document.getElementById('formError');
      if (!ok) {
        if (errBox) { errBox.hidden = false; errBox.textContent = t('err.required'); }
        var first = form.querySelector('.is-error input');
        if (first) first.focus();
        return;
      }
      if (errBox) { errBox.hidden = true; errBox.textContent = ''; }

      var lines = [
        t('wa.intro'), '',
        t('wa.name') + ': ' + name,
        t('wa.email') + ': ' + email,
        date ? t('wa.date') + ': ' + date : '',
        type ? t('wa.type') + ': ' + type : '',
        message ? '\n' + message : ''
      ].filter(Boolean);

      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }
})();
