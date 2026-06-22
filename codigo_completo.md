# Código Completo do Projeto StudyIA

## 1. index.html
``html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>StudyIA — Onde a IA Encontra a Tradição</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <!-- Bebas Neue for the massive Barbershop style titles, Inter for body, Playfair Display for elegant italics -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital@1&display=swap" rel="stylesheet"/>
  
  <link rel="stylesheet" href="style.css"/>
</head>
<body>

  <!-- Navegação Minimalista -->
  <nav class="nav">
    <a href="#" class="nav-logo">Study<span>IA</span></a>
    <ul class="nav-links">
      <li><a href="#funcionalidades">Funcionalidades</a></li>
      <li><a href="#modos">Modos de Foco</a></li>
      <li><a href="#planos">Planos</a></li>
      <li><a href="#depoimentos">Depoimentos</a></li>
    </ul>
    <div style="display:flex; align-items:center; gap:20px;">
      <button class="theme-toggle" aria-label="Inverter Cores" onclick="document.documentElement.classList.toggle('light-mode')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </button>
      <a href="#planos" class="nav-cta">Começar Grátis</a>
    </div>
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>

  <!-- Seção Hero Dividida -->
  <section class="hero">
    
    <!-- Vídeo de Fundo Dinâmico com Overlay Gradiente -->
    <video class="bg-video" autoplay loop muted playsinline>
      <source src="video de fundo.mp4" type="video/mp4">
    </video>
    <div class="bg-overlay"></div>
    <div class="noise"></div>

    <div class="hero-content">
      
      <div class="hero-tag">
        <span class="hero-tag-line"></span>
        <span class="hero-tag-text">Fundado para Alta Performance -- IA Generativa</span>
      </div>

      <h1 class="hero-title">
        <span>Seu Tutor</span>
        <span>Particular</span>
        <span class="stroke-text" data-text="Com Memória">Com Memória</span>
        <span>De IA</span>
      </h1>

      <p class="hero-desc">
        O StudyIA aprende quem você é, lembra do que você errou e monta um plano de estudos que cresce com você. Nossa inteligência artificial combina técnicas consagradas pelo tempo com tecnologia de ponta para esculpir sua aprovação.
      </p>

      <div class="hero-actions">
        <!-- Botão Secundário Sofisticado -->
        <a href="#funcionalidades" class="btn-secondary">
          <span>Explorar Recursos</span>
          <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        
        <!-- Botão Primário Premium -->
        <a href="#planos" class="btn-primary">
          <span>Iniciar Agora</span>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

    </div>
  </section>

  <!-- Segunda Dobra: Funcionalidades -->
  <section id="funcionalidades" class="features">
    
    <div class="features-header">
      <div class="features-tag reveal">INTELIGÊNCIA COGNITIVA</div>
      <h2 class="features-title reveal delay-1">
        A ARTE DE APRENDER.<br>
        ELEVADA PELA <span class="serif-italic">INTELIGÊNCIA.</span>
      </h2>
      <p class="features-desc reveal delay-2">
        A infraestrutura do StudyIA é desenhada para emular o cérebro humano. 
        Mapeamos seus erros, construímos um perfil cognitivo exclusivo e arquitetamos 
        uma jornada de alto desempenho para a sua aprovação.
      </p>
    </div>

    <div class="features-grid">
      <!-- Card 1 -->
      <div class="feature-card reveal delay-1">
        <div>
          <div class="fc-header">
            <span class="fc-tag">FIG. 01</span>
            <svg class="fc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
          </div>
          <h3 class="fc-title">MEMÓRIA DE<br>LONGO PRAZO</h3>
          <p class="fc-desc">Nosso algoritmo de revisão espaçada adapta-se dinamicamente à sua curva de esquecimento, solidificando o conhecimento.</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="feature-card reveal delay-2">
        <div>
          <div class="fc-header">
            <span class="fc-tag">FIG. 02</span>
            <svg class="fc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <h3 class="fc-title">CRONOGRAMA<br>FLEXÍVEL</h3>
          <p class="fc-desc">Organização autônoma de rotinas que recalcula seu caminho instantaneamente se você precisar faltar um dia.</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="feature-card reveal delay-3">
        <div>
          <div class="fc-header">
            <span class="fc-tag">FIG. 03</span>
            <svg class="fc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </div>
          <h3 class="fc-title">CORREÇÃO<br>MULTIMODAL</h3>
          <p class="fc-desc">Tire dúvidas enviando fotos da sua lista de exercícios ou enviando áudios diretamente para o tutor de IA.</p>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="feature-card reveal delay-4">
        <div>
          <div class="fc-header">
            <span class="fc-tag">FIG. 04</span>
            <svg class="fc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <h3 class="fc-title">TRÍADE<br>DE FOCO</h3>
          <p class="fc-desc">Três modos exclusivos de preparação: Modo Prova, Modo Concurso e Modo Apresentação para roteiros e oratória.</p>
        </div>
      </div>
    </div>

  </section>

  <!-- Terceira Dobra: Modos de Foco -->
  <section id="modos" class="modes">
    
    <div class="modes-header">
      <div class="modes-tag reveal">ADAPTABILIDADE MÁXIMA</div>
      <h2 class="modes-title reveal delay-1">
        ESCOLHA O SEU<br>
        <span class="serif-italic">CAMPO DE BATALHA.</span>
      </h2>
      <p class="modes-desc reveal delay-2">
        O StudyIA calibra a intensidade, o formato e o espaçamento do ensino 
        com base no seu objetivo final. Três algoritmos distintos para três vitórias diferentes.
      </p>
    </div>

    <div class="modes-grid">
      
      <!-- Flip Card 1: Modo Prova -->
      <div class="flip-card reveal delay-1">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <svg class="fc-front-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <h3 class="fc-front-title">MODO PROVA</h3>
            <span class="fc-front-tag">Curto Prazo</span>
            <p class="fc-front-desc">Sprint focado em absorção máxima. Ideal para a semana que antecede as avaliações da faculdade ou escola.</p>
            <div class="fc-front-btn">Ver Estratégia 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="fc-back-header">
              <span class="fc-back-title">Bastidores do Algoritmo</span>
              <svg class="fc-front-icon" style="margin:0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <ul class="fc-back-list">
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Frequência de revisão ultra-intensificada para retenção rápida.</span>
              </li>
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Geração automática de simulados diários focados nos seus erros.</span>
              </li>
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Resumos condensados: corte do que não cai, foco total no que cai.</span>
              </li>
            </ul>
            <div class="fc-back-spec">
              <span class="fc-spec-label">Fadiga Mental Calculada</span>
              <span class="fc-spec-value">ALTA TENSÃO</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Flip Card 2: Modo Apresentação -->
      <div class="flip-card reveal delay-2">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <svg class="fc-front-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
            </svg>
            <h3 class="fc-front-title">MODO APRESENTAÇÃO</h3>
            <span class="fc-front-tag">Oratória & Roteiro</span>
            <p class="fc-front-desc">Domine a fala. O foco aqui não é papel e caneta, é a construção do raciocínio em tempo real para bancas.</p>
            <div class="fc-front-btn">Ver Estratégia 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="fc-back-header">
              <span class="fc-back-title">Bastidores do Algoritmo</span>
              <svg class="fc-front-icon" style="margin:0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/></svg>
            </div>
            <ul class="fc-back-list">
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Análise de áudio em tempo real para detectar vícios de linguagem.</span>
              </li>
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Estruturação de Flashcards baseados em gatilhos mentais.</span>
              </li>
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Cronômetro dinâmico para treino de pitch e TCCs.</span>
              </li>
            </ul>
            <div class="fc-back-spec">
              <span class="fc-spec-label">Fadiga Mental Calculada</span>
              <span class="fc-spec-value">MODERADA</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Flip Card 3: Modo Concurso -->
      <div class="flip-card reveal delay-3">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <svg class="fc-front-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <h3 class="fc-front-title">MODO CONCURSO</h3>
            <span class="fc-front-tag">Longo Prazo</span>
            <p class="fc-front-desc">A maratona definitiva. Um ecossistema de aprendizado desenhado para editais monstruosos e meses de estudo.</p>
            <div class="fc-front-btn">Ver Estratégia 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="fc-back-header">
              <span class="fc-back-title">Bastidores do Algoritmo</span>
              <svg class="fc-front-icon" style="margin:0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>
            </div>
            <ul class="fc-back-list">
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Ciclo de estudos contínuo e flexível, sem dias fixos que geram culpa.</span>
              </li>
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Curva de esquecimento de longo prazo (algoritmo SuperMemo).</span>
              </li>
              <li>
                <svg class="fc-back-list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="fc-back-list-text">Geração de bateria de questões baseada nas bancas (CESPE, FGV).</span>
              </li>
            </ul>
            <div class="fc-back-spec">
              <span class="fc-spec-label">Fadiga Mental Calculada</span>
              <span class="fc-spec-value">RESISTÊNCIA</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Quarta Dobra: Planos -->
  <section id="planos" class="pricing">
    
    <div class="pricing-header">
      <div class="pricing-tag reveal">INVESTIMENTO</div>
      <h2 class="pricing-title reveal delay-1">
        SUA APROVAÇÃO<br>
        <span class="serif-italic">NÃO TEM PREÇO.</span>
      </h2>
      <p class="pricing-desc reveal delay-2">
        Escolha o arsenal ideal para o seu momento de estudo. Sem taxas escondidas, sem surpresas. Cancele quando for aprovado.
      </p>
    </div>

    <div class="pricing-grid">
      
      <!-- Passe Tático -->
      <div class="pricing-card reveal delay-1">
        <h3 class="pc-name">PASSE TÁTICO</h3>
        <p class="pc-desc">Sobrevivência universitária e escolar. O essencial para manter as notas altas.</p>
        <div class="pc-price">R$ 29<span>/mês</span></div>
        <ul class="pc-features">
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Modo Prova Ilimitado</li>
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 50 Resumos por mês</li>
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Histórico de erros de 30 dias</li>
        </ul>
        <a href="#" class="pc-btn">Assinar Tático</a>
      </div>

      <!-- Passe Estratégico (Premium) -->
      <div class="pricing-card premium reveal delay-2">
        <div class="pc-badge">Recomendado</div>
        <h3 class="pc-name">PASSE ESTRATÉGICO</h3>
        <p class="pc-desc">Alta performance para Concursos e Vestibulares. Liberdade total nos 3 Modos de Foco.</p>
        <div class="pc-price">R$ 59<span>/mês</span></div>
        <ul class="pc-features">
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Todos os 3 Modos de Foco</li>
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Resumos & Simulados Infinitos</li>
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Análise de Áudio (Oratória)</li>
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Revisão Espaçada Ativa</li>
        </ul>
        <a href="#" class="pc-btn">Assinar Estratégico</a>
      </div>

      <!-- Passe Vitalício -->
      <div class="pricing-card reveal delay-3">
        <h3 class="pc-name">PASSE VITALÍCIO</h3>
        <p class="pc-desc">Pagamento único. Acesso irrestrito ao sistema de inteligência artificial para sempre.</p>
        <div class="pc-price">R$ 499<span>/único</span></div>
        <ul class="pc-features">
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Acesso Estratégico Perpétuo</li>
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Mentoria Humana Bimestral</li>
          <li><svg class="pc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Acesso antecipado a Betas</li>
        </ul>
        <a href="#" class="pc-btn">Obter Vitalício</a>
      </div>

    </div>
  </section>

  <!-- Quinta Dobra: Depoimentos (Human Academy Style) -->
  <section id="depoimentos" class="testimonials">
    <div class="t-header-container reveal">
      <span class="t-tag-pill">Depoimentos</span>
      <h2 class="t-main-title mt-5">O que os alunos estão dizendo</h2>
    </div>
    
    <div class="t-carousel-wrapper reveal delay-1">
      <div class="t-carousel" id="testimonialCarousel">
        
        <!-- Grupo 1 -->
        <!-- Card 1 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"A revisão espaçada mapeou perfeitamente meus pontos fracos. No dia da prova, parecia que a inteligência artificial já tinha me treinado para exatamente aquelas questões."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #CBA052;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Marina Silveira</span>
              <span class="t-author-handle">@marinasilveira</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"Estudar para auditor é solitário e exaustivo. O algoritmo ajustou meu cronograma automaticamente quando eu estava fadigado. Isso me salvou do burnout."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #555;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Carlos Mendes</span>
              <span class="t-author-handle">@carlosmendes</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"Sabe quando você encontra uma IA que não te dá apenas respostas, mas desbloqueia uma nova forma de pensar e organizar os estudos? É isso."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #333;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Lucas Furtado</span>
              <span class="t-author-handle">@lucas_furtado</span>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"Abrindo caminhos para entender na prática como criar e estudar usando IA. Desmitifica os processos, abre o jogo, sem enrolação."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #777;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Fernanda Lima</span>
              <span class="t-author-handle">@fer.lima</span>
            </div>
          </div>
        </div>

        <!-- Grupo 2 (Duplicata para scroll contínuo) -->
        <!-- Card 1 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"A revisão espaçada mapeou perfeitamente meus pontos fracos. No dia da prova, parecia que a inteligência artificial já tinha me treinado para exatamente aquelas questões."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #CBA052;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Marina Silveira</span>
              <span class="t-author-handle">@marinasilveira</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"Estudar para auditor é solitário e exaustivo. O algoritmo ajustou meu cronograma automaticamente quando eu estava fadigado. Isso me salvou do burnout."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #555;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Carlos Mendes</span>
              <span class="t-author-handle">@carlosmendes</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"Sabe quando você encontra uma IA que não te dá apenas respostas, mas desbloqueia uma nova forma de pensar e organizar os estudos? É isso."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #333;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Lucas Furtado</span>
              <span class="t-author-handle">@lucas_furtado</span>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="t-card">
          <div class="t-card-top">
            <p class="t-quote-text">"Abrindo caminhos para entender na prática como criar e estudar usando IA. Desmitifica os processos, abre o jogo, sem enrolação."</p>
          </div>
          <div class="t-card-bottom">
            <div class="t-avatar" style="background: #777;"></div>
            <div class="t-author-info">
              <span class="t-author-name">Fernanda Lima</span>
              <span class="t-author-handle">@fer.lima</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="t-controls reveal delay-2">
      <button class="t-pause-btn" id="carouselPauseBtn">
        <svg fill="currentColor" height="10" viewBox="0 0 8 10" width="8">
          <rect height="10" rx="0.5" width="2.5" x="0" y="0"></rect>
          <rect height="10" rx="0.5" width="2.5" x="5.5" y="0"></rect>
        </svg>
      </button>
    </div>
  </section>

  <!-- Rodapé (Footer GKL) -->
  <footer class="footer">
    <!-- Faixa Animada (Marquee) -->
    <div class="f-marquee-wrapper">
      <div class="f-marquee">
        <span>GKL AUTOMAÇÕES <span class="star">✦</span></span>
        <span>STUDYIA <span class="star">✦</span></span>
        <span>ALTA PERFORMANCE <span class="star">✦</span></span>
        <span>INTELIGÊNCIA ARTIFICIAL <span class="star">✦</span></span>
        <span>GKL AUTOMAÇÕES <span class="star">✦</span></span>
        <span>STUDYIA <span class="star">✦</span></span>
        <span>ALTA PERFORMANCE <span class="star">✦</span></span>
        <span>INTELIGÊNCIA ARTIFICIAL <span class="star">✦</span></span>
      </div>
      <div class="f-marquee">
        <span>GKL AUTOMAÇÕES <span class="star">✦</span></span>
        <span>STUDYIA <span class="star">✦</span></span>
        <span>ALTA PERFORMANCE <span class="star">✦</span></span>
        <span>INTELIGÊNCIA ARTIFICIAL <span class="star">✦</span></span>
        <span>GKL AUTOMAÇÕES <span class="star">✦</span></span>
        <span>STUDYIA <span class="star">✦</span></span>
        <span>ALTA PERFORMANCE <span class="star">✦</span></span>
        <span>INTELIGÊNCIA ARTIFICIAL <span class="star">✦</span></span>
      </div>
    </div>
    
    <div class="f-content">
      <div class="f-logo">GKL <span>|</span> STUDYIA</div>
      <p class="f-copyright">&copy; 2026 GKL. Todos os direitos reservados.</p>
    </div>
  </footer>

  <!-- Script para Interatividade e Animações (Scroll Reveal e Mouse Spotlight) -->
  <script src="script.js"></script>

</body>
</html>

``

## 2. style.css
``css
    /* Reset & Base */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #050505;
      color: #FFFFFF;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Background Video & Overlays */
    .bg-video {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      z-index: -3;
      opacity: 0.8;
    }
    .bg-overlay {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      /* Preto sólido em 25% da tela, sumindo até 65% para revelar mais o vídeo */
      background: linear-gradient(90deg, #050505 0%, #050505 25%, rgba(5,5,5,0) 65%);
      z-index: -2;
    }
    .noise {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.04"/%3E%3C/svg%3E');
      z-index: -1;
      pointer-events: none;
    }

    /* Navigation - Clean & Minimal */
    .nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 80px;
      z-index: 100;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, padding 0.4s ease;
    }
    .nav.nav-scrolled {
      background-color: rgba(5, 5, 5, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 20px 80px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .nav.nav-hidden {
      transform: translateY(-100%) !important;
    }
    .nav-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 26px;
      font-weight: 400;
      color: #fff;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .nav-logo span {
      color: #CBA052; /* Gold accent */
    }
    .nav-links {
      display: flex;
      gap: 50px;
      list-style: none;
    }
    .nav-links a {
      color: #E0E0E0;
      text-decoration: none;
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 3px;
      text-transform: uppercase;
      transition: color 0.3s ease;
      position: relative;
    }
    .nav-links a:hover {
      color: #CBA052;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -6px; left: 50%; right: 50%;
      height: 1px;
      background: #CBA052;
      transition: all 0.3s ease;
    }
    .nav-links a:hover::after {
      left: 0; right: 0;
    }
    .nav-cta {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #CBA052;
      text-decoration: none;
      border: 1px solid rgba(203,160,82,0.4);
      padding: 12px 28px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .nav-cta:hover {
      color: #050505;
      background: #CBA052;
      border-color: #CBA052;
    }
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
    }
    .hamburger span {
      width: 30px; height: 1px;
      background: #fff;
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: flex-start;
      padding: 160px 80px 0;
      z-index: 10;
      overflow: hidden;
    }
    .hero-content {
      max-width: 600px;
      margin-top: 0;
    }
    
    /* Tagline Superior */
    .hero-tag {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 25px;
    }
    .hero-tag-line {
      width: 40px;
      height: 1px;
      background: #CBA052;
    }
    .hero-tag-text {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #C0C0C0;
    }

    /* Título Monumental */
    .hero-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 70px;
      font-weight: 400;
      line-height: 0.95;
      color: #fff;
      margin-bottom: 30px;
      letter-spacing: 2px;
      display: flex;
      flex-direction: column;
    }
    .stroke-text {
      color: transparent;
      -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.9);
      position: relative;
      display: inline-block;
      width: fit-content;
    }
    .stroke-text::after {
      content: attr(data-text);
      position: absolute;
      left: 0; top: 0;
      color: transparent;
      -webkit-text-stroke: 1.5px #CBA052;
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: -1;
      filter: blur(6px);
    }
    .hero-title:hover .stroke-text::after {
      opacity: 1;
    }

    /* Descrição Fina */
    .hero-desc {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.6;
      color: #EAEAEA;
      max-width: 440px;
      margin-bottom: 50px;
    }

    /* Botões */
    .hero-actions {
      display: flex;
      align-items: center;
      gap: 30px;
      position: absolute;
      bottom: 80px;
      right: 80px;
    }

    .btn-primary {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 16px;
      padding: 20px 40px;
      background: #CBA052;
      color: #050505;
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      text-decoration: none;
      overflow: hidden;
      border-radius: 100px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: #fff;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1;
    }
    .btn-primary:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
    .btn-primary span, .btn-primary svg {
      position: relative;
      z-index: 2;
      transition: color 0.4s ease;
    }
    .btn-primary .arrow {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-primary:hover .arrow {
      transform: translateX(6px);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      text-decoration: none;
      position: relative;
      padding: 18px 30px;
      background: rgba(10, 10, 10, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 100px;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(203, 160, 82, 0.5);
      color: #CBA052;
    }
    .btn-secondary .arrow {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-secondary:hover .arrow {
      transform: translateX(6px);
    }

    /* Animações de Entrada (Reveal Flow) */
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .nav { animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
    .hero-tag { animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
    .hero-title { animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
    .hero-desc { animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both; }
    .hero-actions { animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both; }

    /* Responsividade */
    @media (max-width: 1200px) {
      .nav-links { gap: 30px; }
      .hero-title { font-size: 62px; }
      .bg-overlay { background: linear-gradient(90deg, #050505 0%, #050505 30%, rgba(5,5,5,0) 75%); }
    }
    @media (max-width: 992px) {
      .nav { padding: 30px 40px; }
      .nav.nav-scrolled { padding: 15px 40px; }
      .hero { padding: 0 40px; }
      .hero-title { font-size: 52px; }
      .hero-actions { bottom: 40px; right: 40px; }
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .bg-overlay { background: linear-gradient(90deg, #050505 0%, #050505 40%, rgba(5,5,5,0) 85%); }
    }
    @media (max-width: 768px) {
      .nav-cta { display: none; }
      .hero { align-items: flex-end; padding-bottom: 80px; }
      .hero-content { margin-top: 100px; }
      .bg-overlay { background: linear-gradient(0deg, #050505 0%, #050505 60%, rgba(5,5,5,0.3) 100%); }
      .hero-title { font-size: 44px; }
      .hero-actions { 
        position: relative; 
        bottom: auto; 
        right: auto; 
        flex-direction: column; 
        align-items: flex-start; 
        gap: 24px; 
        margin-top: 40px;
        width: 100%;
      }
      .btn-primary { width: 100%; justify-content: space-between; }
    }

    /* --- Funcionalidades (Segunda Dobra) --- */
    .features {
      position: relative;
      background-color: #050505;
      border-top: 1px solid #1A1A1A;
      z-index: 10;
      display: flex;
      flex-direction: column;
    }
    
    /* Header da Seção */
    .features-header {
      padding: 180px 80px 100px;
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 1px solid #1A1A1A;
      position: relative;
    }
    /* Sombra dourada de fundo similar ao Drone */
    .features-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(circle at 0% 0%, rgba(203,160,82,0.05), transparent 60%);
      pointer-events: none;
    }

    .features-tag {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 4px;
      color: #CBA052;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    .features-tag::before {
      content: '';
      width: 6px; height: 6px;
      background: #CBA052;
      box-shadow: 0 0 10px rgba(203,160,82,0.8);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.5); }
      100% { opacity: 1; transform: scale(1); }
    }

    .features-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 72px;
      font-weight: 400;
      line-height: 0.9;
      color: #fff;
      margin-bottom: 30px;
      letter-spacing: 1px;
    }
    .serif-italic {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #CBA052;
      font-size: 1.1em;
      letter-spacing: 0;
      text-transform: none;
    }
    
    .features-desc {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 300;
      line-height: 1.6;
      color: #A1A1A1;
      max-width: 500px;
    }

    /* Feature Grid (Drone Inspired) */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      border-left: 1px solid #1A1A1A;
    }
    .feature-card {
      padding: 60px 40px;
      border-right: 1px solid #1A1A1A;
      border-bottom: 1px solid #1A1A1A;
      background: #050505;
      position: relative;
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 360px;
      overflow: hidden;
    }
    /* Efeito de Spotlight e Bordas */
    .feature-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.04), transparent 40%);
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
    }
    .feature-card:hover::before {
      opacity: 1;
    }
    .feature-card:hover {
      background: #080808;
    }

    .fc-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 40px;
    }
    .fc-tag {
      font-family: 'Inter', sans-serif;
      font-size: 9px;
      font-weight: 500;
      letter-spacing: 2px;
      color: #A1A1A1;
      border: 1px solid #1A1A1A;
      padding: 4px 8px;
      transition: all 0.3s ease;
    }
    .feature-card:hover .fc-tag {
      color: #CBA052;
      border-color: #CBA052;
      box-shadow: 0 0 15px rgba(203,160,82,0.2);
    }
    .fc-icon {
      color: #555;
      transition: all 0.3s ease;
    }
    .feature-card:hover .fc-icon {
      color: #fff;
    }

    .fc-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      font-weight: 400;
      color: #fff;
      letter-spacing: 1px;
      margin-bottom: 16px;
      transition: color 0.3s ease;
    }
    .feature-card:hover .fc-title {
      color: #CBA052;
    }
    .fc-desc {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 300;
      line-height: 1.6;
      color: #888;
      transition: color 0.3s ease;
    }
    .feature-card:hover .fc-desc {
      color: #B0B0B0;
    }

    /* Responsividade da Grid */
    @media (max-width: 1200px) {
      .features-grid { grid-template-columns: repeat(2, 1fr); }
      .feature-card { min-height: 300px; }
    }
    @media (max-width: 768px) {
      .features-grid { grid-template-columns: 1fr; }
      .features-header { padding: 80px 40px 60px; }
      .features-title { font-size: 56px; }
    }

    /* Animação via Scroll */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    .delay-1 { transition-delay: 0.1s; }
    .delay-2 { transition-delay: 0.2s; }
    .delay-3 { transition-delay: 0.3s; }
    .delay-4 { transition-delay: 0.4s; }

    /* --- Terceira Dobra (Modos de Foco - Interativo 3D) --- */
    .modes {
      position: relative;
      background-color: #050505;
      border-top: 1px solid #1A1A1A;
      z-index: 10;
      display: flex;
      flex-direction: column;
      padding: 180px 80px;
    }
    .modes-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 0 auto 100px;
      max-width: 1400px;
      width: 100%;
    }
    .modes-tag {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 4px;
      color: #CBA052;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    .modes-tag::before, .modes-tag::after {
      content: '';
      width: 20px; height: 1px;
      background: #CBA052;
    }
    .modes-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 80px;
      font-weight: 400;
      line-height: 0.9;
      color: #fff;
      margin-bottom: 24px;
      letter-spacing: 2px;
    }
    .modes-desc {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.6;
      color: #A1A1A1;
      max-width: 600px;
    }

    /* Flip Cards Grid */
    .modes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      perspective: 1000px;
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
    }
    .flip-card {
      background-color: transparent;
      height: 500px;
      perspective: 1000px;
      cursor: pointer;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      transform-style: preserve-3d;
    }
    /* Gira o card no hover ou clicando na classe active */
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 20px;
      border: 1px solid #1A1A1A;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    
    /* Frente do Cartão */
    .flip-card-front {
      background: linear-gradient(180deg, #0A0A0A 0%, #050505 100%);
      padding: 60px 40px;
      justify-content: space-between;
      align-items: center;
    }
    .fc-front-icon {
      color: #CBA052;
      margin-bottom: 20px;
      transition: transform 0.4s ease;
    }
    .flip-card:hover .fc-front-icon {
      transform: scale(1.1);
    }
    .fc-front-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 40px;
      color: #fff;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    .fc-front-tag {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #888;
      border: 1px solid #333;
      padding: 4px 12px;
      border-radius: 100px;
      margin-bottom: 20px;
    }
    .fc-front-desc {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 300;
      color: #A1A1A1;
      line-height: 1.6;
    }
    .fc-front-btn {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 3px;
      color: #CBA052;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: auto;
    }

    /* Verso do Cartão */
    .flip-card-back {
      background: radial-gradient(circle at top right, rgba(203,160,82,0.1), transparent 70%), #080808;
      border-color: rgba(203,160,82,0.3);
      transform: rotateY(180deg);
      padding: 50px 40px;
      text-align: left;
    }
    .fc-back-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      padding-bottom: 20px;
    }
    .fc-back-title {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 2px;
      color: #fff;
      text-transform: uppercase;
    }
    .fc-back-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .fc-back-list li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .fc-back-list-icon {
      color: #CBA052;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .fc-back-list-text {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 300;
      color: #D0D0D0;
      line-height: 1.5;
    }
    .fc-back-spec {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    .fc-spec-label {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .fc-spec-value {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: #CBA052;
    }

    @media (max-width: 1200px) {
      .modes-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .modes { padding: 80px 40px; }
      .modes-grid { grid-template-columns: 1fr; }
      .modes-title { font-size: 56px; }
      .flip-card { height: 450px; }
    }

    /* --- Quarta Dobra (Planos - Estética SaaS Premium) --- */
    .pricing {
      position: relative;
      background-color: #050505;
      background-image: radial-gradient(circle at top center, rgba(203,160,82,0.05), transparent 60%);
      border-top: 1px solid #1A1A1A;
      z-index: 10;
      display: flex;
      flex-direction: column;
      padding: 180px 80px;
    }
    .pricing-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 0 auto 100px;
      max-width: 1400px;
      width: 100%;
    }
    .pricing-tag {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 4px;
      color: #CBA052;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    .pricing-tag::before, .pricing-tag::after {
      content: '';
      width: 20px; height: 1px;
      background: #CBA052;
    }
    .pricing-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 80px;
      font-weight: 400;
      line-height: 0.9;
      color: #fff;
      margin-bottom: 24px;
      letter-spacing: 2px;
    }
    .pricing-desc {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.6;
      color: #A1A1A1;
      max-width: 600px;
    }

    /* Pricing Grid */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
      align-items: center;
    }
    .pricing-card {
      background-color: #0A0A0A;
      border: 1px solid #1A1A1A;
      border-radius: 16px;
      padding: 50px 40px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      transition: transform 0.4s ease, border-color 0.4s ease;
    }
    .pricing-card:hover {
      border-color: rgba(203, 160, 82, 0.3);
      transform: translateY(-10px);
    }
    .pc-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      color: #fff;
      letter-spacing: 2px;
      margin-bottom: 12px;
    }
    .pc-desc {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 300;
      color: #888;
      margin-bottom: 30px;
      line-height: 1.5;
      min-height: 40px;
    }
    .pc-price {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 56px;
      color: #fff;
      margin-bottom: 30px;
      display: flex;
      align-items:baseline;
      gap: 8px;
    }
    .pc-price span {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: #888;
      letter-spacing: 0;
    }
    .pc-features {
      list-style: none;
      margin-bottom: 40px;
      flex-grow: 1;
    }
    .pc-features li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 300;
      color: #D0D0D0;
      margin-bottom: 16px;
    }
    .pc-icon {
      color: #CBA052;
      flex-shrink: 0;
    }
    .pc-btn {
      width: 100%;
      text-align: center;
      padding: 16px;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
      border: 1px solid #333;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    .pc-btn:hover {
      background: #fff;
      color: #000;
    }

    /* Cartão Destacado (Passe Estratégico) */
    .pricing-card.premium {
      background: linear-gradient(180deg, #0D0D0D 0%, #050505 100%);
      border: 1px solid rgba(203, 160, 82, 0.4);
      padding: 60px 40px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .pricing-card.premium::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: #CBA052;
      box-shadow: 0 0 20px rgba(203, 160, 82, 0.8);
    }
    .pricing-card.premium .pc-btn {
      background: #CBA052;
      border-color: #CBA052;
      color: #050505;
    }
    .pricing-card.premium .pc-btn:hover {
      background: #fff;
      border-color: #fff;
    }
    .pc-badge {
      position: absolute;
      top: 20px; right: 20px;
      background: rgba(203, 160, 82, 0.1);
      border: 1px solid rgba(203, 160, 82, 0.3);
      color: #CBA052;
      font-family: 'Inter', sans-serif;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 100px;
    }

    @media (max-width: 1024px) {
      .pricing-grid { grid-template-columns: 1fr; max-width: 500px; }
      .pricing-card.premium { padding: 50px 40px; }
    }
    @media (max-width: 768px) {
      .pricing { padding: 80px 40px; }
      .pricing-title { font-size: 56px; }
    }

    /* --- Inversão de Cores (Light Mode Hack) --- */
    html.light-mode {
      filter: invert(1) hue-rotate(180deg);
    }
    html.light-mode img,
    html.light-mode video {
      filter: invert(1) hue-rotate(180deg);
    }
    html.light-mode .bg-overlay {
      opacity: 0.7;
    }
    .theme-toggle {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      width: 40px; height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .theme-toggle:hover {
      background: #CBA052;
      border-color: #CBA052;
      color: #050505;
    }

    /* --- Quinta Dobra (Depoimentos - Estilo Human Academy) --- */
    .testimonials {
      position: relative;
      background-color: #050505;
      border-top: 1px solid #1A1A1A;
      z-index: 10;
      padding: 180px 0;
      overflow: hidden;
    }
    .t-header-container {
      text-align: center;
      margin: 0 auto 80px;
      max-width: 1400px;
      width: 100%;
    }
    .t-tag-pill {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      color: #CBA052;
      background: rgba(203, 160, 82, 0.1);
      padding: 6px 16px;
      border-radius: 100px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 24px;
    }
    .t-main-title {
      font-family: 'Inter', sans-serif;
      font-size: 48px;
      font-weight: 500;
      color: #fff;
      letter-spacing: -1px;
    }
    
    .t-carousel-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .t-carousel {
      display: flex;
      gap: 24px;
      width: max-content;
      padding: 20px 0;
      animation: testimonialMarquee 40s linear infinite;
    }
    .t-carousel:hover {
      animation-play-state: paused;
    }
    @keyframes testimonialMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-50% - 12px)); }
    }
    .t-card {
      flex-shrink: 0;
      width: min(380px, 85vw);
      display: flex;
      flex-direction: column;
      border-radius: 24px;
      background: #0A0A0A;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05), 0 10px 30px rgba(0,0,0,0.3);
      transition: transform 0.4s ease;
    }
    .t-card-top {
      background: #111;
      border-radius: 24px 24px 16px 16px;
      margin: 12px 12px 0;
      padding: 32px 40px;
      flex: 1;
    }
    .t-quote-text {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      line-height: 1.6;
      color: #E0E0E0;
    }
    .t-card-bottom {
      padding: 24px 40px 32px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .t-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255,255,255,0.1);
    }
    .t-author-info {
      display: flex;
      flex-direction: column;
    }
    .t-author-name {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
    }
    .t-author-handle {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.4);
    }
    
    .t-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
    }
    .t-pause-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.05);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: rgba(255,255,255,0.5);
      transition: all 0.3s ease;
    }
    .t-pause-btn:hover {
      background: rgba(255,255,255,0.1);
      color: #fff;
    }

    @media (max-width: 992px) {
      .t-carousel-wrapper { padding-left: 40px; }
      .t-main-title { font-size: 36px; }
    }
    @media (max-width: 768px) {
      .t-carousel-wrapper { padding-left: 20px; }
    }

    /* --- Rodapé (Footer GKL) --- */
    .footer {
      background-color: #050505;
      border-top: 1px solid #1A1A1A;
      padding: 60px 0 40px;
      position: relative;
      overflow: hidden;
    }
    .f-marquee-wrapper {
      width: 100%;
      overflow: hidden;
      margin-bottom: 60px;
      display: flex;
    }
    .f-marquee {
      display: flex;
      gap: 40px;
      white-space: nowrap;
      animation: footerMarquee 25s linear infinite;
      padding-right: 40px;
    }
    .f-marquee span {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 4px;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 40px;
    }
    .f-marquee span .star {
      color: #CBA052;
      opacity: 0.5;
    }
    @keyframes footerMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    .f-content {
      text-align: center;
      padding-top: 40px;
      border-top: 1px solid #111;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    .f-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      color: #fff;
      letter-spacing: 2px;
    }
    .f-logo span {
      color: #CBA052;
    }
    .f-copyright {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.3);
      letter-spacing: 1px;
    }



``

## 3. script.js
``javascript
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

``
