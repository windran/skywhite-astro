<script>
  import { onMount } from 'svelte';
  import './Navbar.css';
  import './Dropdown.css';
  import './MobileMenu.css';
  
  // State
  let isMenuOpen = false;
  let isScrolled = false;
  let currentPath = '/';
  let isMobile = false;
  
  // Contact info
  const phoneNumber = '021-8062-1888';
  const whatsappNumber = '6281220003546';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  // Functions
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  const navigate = (path) => {
    currentPath = path;
    isMenuOpen = false;
    document.body.style.overflow = '';
  };
  
  const handleBooking = () => {
    navigate('/booking');
  };
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    
    const handleResize = () => {
      isMobile = window.innerWidth < 1024;
      if (!isMobile && isMenuOpen) {
        isMenuOpen = false;
        document.body.style.overflow = '';
      }
    };
    
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
    }
    
    isMobile = window.innerWidth < 1024;
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  });
</script>

<!-- Main Navbar Container -->
<div class="navbar-container {isScrolled ? 'scrolled' : ''}">
  <nav class="navbar" aria-label="Main navigation">
    
    <!-- Logo Section -->
    <div class="logo-section">
  <a 
    href="/" 
    class="logo-link" 
    aria-label="SkyWhite Rent Car Home"
    on:click|preventDefault={() => navigate('/')}
  >
    <!-- Hapus div logo-main -->
    <div class="logo-brand">
      <div class="brand-name">SKYWHITE</div>
      <div class="brand-tagline">RENT CAR</div>
    </div>
  </a>
</div>
    
    <!-- Desktop Navigation - Clean seperti Trac Astra -->
    <div class="desktop-nav">
      <!-- Product & Service -->
      <a 
        href="/product-service" 
        class="nav-link {currentPath === '/product-service' ? 'active' : ''}"
        on:click|preventDefault={() => navigate('/product-service')}
      >
        Product & Service
      </a>
      
      <!-- Blog -->
      <a 
        href="/blog" 
        class="nav-link {currentPath === '/blog' ? 'active' : ''}"
        on:click|preventDefault={() => navigate('/blog')}
      >
        Blog
      </a>
      
      <!-- Promo -->
      <a 
        href="/promo" 
        class="nav-link {currentPath === '/promo' ? 'active' : ''}"
        on:click|preventDefault={() => navigate('/promo')}
      >
        Promo
      </a>
      
      <!-- About Us -->
      <a 
        href="/about-us" 
        class="nav-link {currentPath === '/about-us' ? 'active' : ''}"
        on:click|preventDefault={() => navigate('/about-us')}
      >
        About Us
      </a>
      
      <!-- Help -->
      <a 
        href="/help" 
        class="nav-link {currentPath === '/help' ? 'active' : ''}"
        on:click|preventDefault={() => navigate('/help')}
      >
        Help
      </a>
    </div>
    
    <!-- Right Section -->
<div class="nav-right">
  <!-- Phone Number -->
  <a 
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="phone-display"
    aria-label="Hubungi via WhatsApp"
  >
    <span class="phone-icon">📞</span>
    <span class="phone-number">{phoneNumber}</span>
  </a>
  
  <!-- CTA Button - Trac Astra Style -->
  <button 
    class="cta-button primary"
    on:click={handleBooking}
  >
    BOOKING NOW
  </button>
  
  <!-- Hamburger Button (Mobile Only) -->
  <button 
    class="hamburger-btn {isMenuOpen ? 'active' : ''}" 
    on:click={toggleMenu}
    aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
    aria-expanded={isMenuOpen}
  >
    <span class="hamburger-icon"></span>
  </button>
</div>
  </nav>
</div>

<!-- Mobile Menu Overlay -->
<div class="mobile-overlay {isMenuOpen ? 'active' : ''}">
  <div class="mobile-header">
    <!-- Logo text di mobile header -->
    <div class="mobile-logo">
      <div class="mobile-brand">
        <div class="mobile-logo-text">SKYWHITE</div>
        <div class="mobile-tagline">RENT CAR</div>
      </div>
    </div>
    
    <button 
      class="mobile-close-btn" 
      on:click={toggleMenu}
      aria-label="Tutup menu"
    >
      <span class="mobile-close-icon"></span>
    </button>
  </div>
  
  <div class="mobile-content">
    <!-- Mobile Navigation - tanpa icon -->
    <ul class="mobile-nav-links">
      <li class="mobile-nav-item">
        <a 
          href="/product-service" 
          class="mobile-nav-link"
          on:click|preventDefault={() => { navigate('/product-service'); toggleMenu(); }}
        >
          Product & Service
        </a>
      </li>
      
      <li class="mobile-nav-item">
        <a 
          href="/blog" 
          class="mobile-nav-link"
          on:click|preventDefault={() => { navigate('/blog'); toggleMenu(); }}
        >
          Blog
        </a>
      </li>
      
      <li class="mobile-nav-item">
        <a 
          href="/promo" 
          class="mobile-nav-link"
          on:click|preventDefault={() => { navigate('/promo'); toggleMenu(); }}
        >
          Promo
        </a>
      </li>
      
      <li class="mobile-nav-item">
        <a 
          href="/about-us" 
          class="mobile-nav-link"
          on:click|preventDefault={() => { navigate('/about-us'); toggleMenu(); }}
        >
          About Us
        </a>
      </li>
      
      <li class="mobile-nav-item">
        <a 
          href="/help" 
          class="mobile-nav-link"
          on:click|preventDefault={() => { navigate('/help'); toggleMenu(); }}
        >
          Help
        </a>
      </li>
    </ul>
    
    <!-- Mobile Action Buttons -->
<div class="mobile-actions">
  <button 
    class="mobile-action-btn primary"
    on:click={() => { handleBooking(); toggleMenu(); }}
  >
    BOOKING NOW
  </button>
  
  <a 
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="mobile-phone-display"
    aria-label="Hubungi via WhatsApp"
  >
    <span class="mobile-phone-number">{phoneNumber}</span>
  </a>
</div>
  </div>
</div>

<!-- Spacer for content -->
<div class="navbar-spacer"></div>