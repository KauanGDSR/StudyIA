    // Logica do Carrossel Contínuo (Marquee Animado)
    const carousel = document.getElementById('testimonialCarousel');
    const pauseBtn = document.getElementById('carouselPauseBtn');
    let isPaused = false;
    
    if(carousel) {
      // Pausar/Despausar ao clicar no botão
      pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
          pauseBtn.innerHTML = `<svg fill="currentColor" height="12" viewBox="0 0 12 12" width="12"><path d="M3 2l8 4-8 4V2z"/></svg>`; // Play icon
          carousel.style.animationPlayState = 'paused';
        } else {
          pauseBtn.innerHTML = `<svg fill="currentColor" height="10" viewBox="0 0 8 10" width="8"><rect height="10" rx="0.5" width="2.5" x="0" y="0"></rect><rect height="10" rx="0.5" width="2.5" x="5.5" y="0"></rect></svg>`; // Pause icon
          carousel.style.animationPlayState = 'running';
        }
      });
    }
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      
      if (currentScroll <= 10) {
        nav.classList.remove('nav-scrolled');
        nav.classList.remove('nav-hidden');
        lastScrollY = currentScroll;
        return;
      }

      if (currentScroll > 50) {
        nav.classList.add('nav-scrolled');
      }

      if (currentScroll > lastScrollY && currentScroll > 150) {
        nav.classList.add('nav-hidden');
      } else if (currentScroll < lastScrollY) {
        nav.classList.remove('nav-hidden');
      }
      
      lastScrollY = currentScroll;
    }, { passive: true });

    // Intersection Observer para animar os elementos quando aparecem na tela (Reveal Flow)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Efeito de Spotlight nos cartões seguindo o mouse (inspirado no Drone)
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Hack para Inversão de Cores (Light Mode)
    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle) {
      themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle('light-mode');
      });
    }

    // Toggle de Preços (Mensal/Anual)
    const billingToggle = document.getElementById('billingToggle');
    if (billingToggle) {
      const prices = document.querySelectorAll('.pc-price-value');
      const periods = document.querySelectorAll('.pc-price-period');
      const monthlyLabel = document.querySelector('.pt-label.monthly');
      const annualLabel = document.querySelector('.pt-label.annual');

      billingToggle.addEventListener('click', () => {
        billingToggle.classList.toggle('annual-active');
        const isAnnual = billingToggle.classList.contains('annual-active');
        
        monthlyLabel.classList.toggle('active', !isAnnual);
        annualLabel.classList.toggle('active', isAnnual);

        prices.forEach(price => {
          if (isAnnual) {
            price.textContent = price.getAttribute('data-annual');
          } else {
            price.textContent = price.getAttribute('data-monthly');
          }
        });
        
        periods.forEach(period => {
          period.textContent = isAnnual ? '/anual' : '/mês';
        });
      });
    }
