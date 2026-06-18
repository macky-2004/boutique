/**
 * AVIKA — Premium Indian Boutique
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const body = document.body;

  if (navToggle) {
    function toggleBodyLock(force) {
      body.classList.toggle('nav-open', force);
    }

    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.classList.toggle('active');
      toggleBodyLock(nav.classList.contains('open'));
    });

    // Close nav on link click (mobile) — skip dropdown toggle links
    document.querySelectorAll('.nav > a, .dropdown-menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (link.parentElement && link.parentElement.classList.contains('dropdown')) return;
        nav.classList.remove('open');
        navToggle.classList.remove('active');
        toggleBodyLock(false);
      });
    });
  }

  // --- Dropdown toggle on mobile ---
  document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        dropdownLink.parentElement.classList.toggle('open');
      }
    });
  });

  // --- Header scroll effect ---
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Back to Top Button ---
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Scroll-triggered fade-in animations ---
  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  // Immediately show elements already in the viewport instead of
  // waiting for the async observer to fire (avoids the "flash of invisible
  // shifted content" on first paint).
  const viewportHeight = window.innerHeight;
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < viewportHeight - 40) {
      el.classList.add('visible');
    } else {
      fadeObserver.observe(el);
    }
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Testimonial Carousel ---
  const carouselTrack = document.querySelector('.carousel-track');

  if (carouselTrack) {
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (slides.length > 0) {
      let currentIndex = 0;
      let visibleCount = getVisibleCount();
      const totalSlides = slides.length;
      let autoplayTimer = null;

      function getVisibleCount() {
        const w = window.innerWidth;
        if (w < 640) return 1;
        if (w < 1024) return 2;
        return 3;
      }

      function getMaxIndex() {
        return Math.max(0, totalSlides - visibleCount);
      }

      function goTo(index) {
        currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
        const offset = (currentIndex * (100 / visibleCount));
        carouselTrack.style.transform = `translateX(-${offset}%)`;

        // Update dots
        if (dotsContainer) {
          const dots = dotsContainer.querySelectorAll('.carousel-dot');
          const dotIndex = Math.min(
            currentIndex,
            dots.length - 1
          );
          dots.forEach((d, i) => d.classList.toggle('active', i === dotIndex));
        }

        // Update buttons
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex >= getMaxIndex();
      }

      function createDots() {
        if (!dotsContainer) return;
        const totalDots = getMaxIndex() + 1;
        if (totalDots <= 1) { dotsContainer.style.display = 'none'; return; }
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalDots; i++) {
          const dot = document.createElement('button');
          dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('aria-label', `Go to testimonial group ${i + 1}`);
          dot.addEventListener('click', () => {
            stopAutoplay();
            goTo(i);
            startAutoplay();
          });
          dotsContainer.appendChild(dot);
        }
      }

      function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
          if (currentIndex >= getMaxIndex()) {
            goTo(0);
          } else {
            goTo(currentIndex + 1);
          }
        }, 3000);
      }

      function stopAutoplay() {
        if (autoplayTimer) {
          clearInterval(autoplayTimer);
          autoplayTimer = null;
        }
      }

      // Recalculate on resize
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          visibleCount = getVisibleCount();
          goTo(0);
          if (dotsContainer) {
            dotsContainer.innerHTML = '';
            createDots();
          }
        }, 200);
      });

      // Event listeners
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          stopAutoplay();
          if (currentIndex > 0) goTo(currentIndex - 1);
          startAutoplay();
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          stopAutoplay();
          if (currentIndex < getMaxIndex()) goTo(currentIndex + 1);
          startAutoplay();
        });
      }

      // Pause on hover
      const carousel = document.querySelector('.testimonial-carousel');
      if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
        // Touch support — pause on touch
        carousel.addEventListener('touchstart', stopAutoplay);
        carousel.addEventListener('touchend', startAutoplay);
      }

      // Init
      createDots();
      goTo(0);
      startAutoplay();
    }
  }

  // --- Contact Form handler ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.pointerEvents = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // --- Newsletter form handler ---
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed';
      if (input) input.value = '';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2500);
    });
  });

  // --- Active nav link highlighting ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

});
