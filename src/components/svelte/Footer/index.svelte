<script>
  import { onMount } from 'svelte';
  
  // Social media links
  const socialMedia = [
    { name: 'WhatsApp', icon: '📱', url: 'https://wa.me/6281220003546' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/skywhiterentcar' },
    { name: 'Facebook', icon: '👥', url: 'https://facebook.com/skywhiterentcar' },
    { name: 'Email', icon: '✉️', url: 'mailto:admin@skywhiterentcar.com' }
  ];
  
  // Quick links (gabungan SkyWhite + Astra style)
  const quickLinks = {
    'LAYANAN': [
      { name: 'Sewa Harian', path: '/services/daily' },
      { name: 'Sewa Bulanan', path: '/services/monthly' },
      { name: 'Dengan Supir', path: '/services/with-driver' },
      { name: 'Lepas Kunci', path: '/services/self-drive' },
      { name: 'Antar Jemput Bandara', path: '/services/airport' }
    ],
    'ARMADA': [
      { name: 'Mobil Sedan', path: '/fleet/sedan' },
      { name: 'Mobil SUV', path: '/fleet/suv' },
      { name: 'Mobil MPV', path: '/fleet/mpv' },
      { name: 'Mobil Luxury', path: '/fleet/luxury' },
      { name: 'Semua Armada', path: '/fleet' }
    ],
    'PERUSAHAAN': [
      { name: 'Tentang Kami', path: '/about' },
      { name: 'Blog & Artikel', path: '/blog' },
      { name: 'Promo & Penawaran', path: '/promo' },
      { name: 'Syarat & Ketentuan', path: '/terms' },
      { name: 'Kebijakan Privasi', path: '/privacy' }
    ]
  };
  
  // Contact info
  const contactInfo = {
    phone: '0812-2000-3546',
    phoneDisplay: '0812 2000 3546',
    email: 'admin@skywhiterentcar.com',
    address: 'Denpasar, Bali - Indonesia',
    whatsappUrl: 'https://wa.me/6281220003546'
  };
  
  const navigate = (path) => {
    window.location.href = path;
  };
</script>

<footer class="footer-container">
  <div class="footer-top">
    <div class="footer-content">
      <!-- Logo & Description (SkyWhite Style) -->
      <div class="footer-section">
        <div class="footer-logo">
          <div class="footer-brand">
            <div class="footer-brand-name">SKYWHITE</div>
            <div class="footer-brand-tagline">RENT CAR</div>
          </div>
        </div>
        <p class="footer-description">
          SkyWhite Rental Mobil Bali - Penyedia layanan rental mobil terpercaya di Bali dengan armada terbaru, harga kompetitif, dan pelayanan 24 jam.
        </p>
        <div class="footer-certification">
          <div class="cert-badge">✓ Terdaftar Resmi</div>
          <div class="cert-badge">✓ Asuransi Lengkap</div>
          <div class="cert-badge">✓ Supir Profesional</div>
        </div>
      </div>
      
      <!-- Quick Links (Astra Style) -->
      <div class="footer-section">
        <h3 class="footer-section-title">TAUTAN CEPAT</h3>
        <div class="footer-links-grid">
          {#each Object.entries(quickLinks) as [category, links]}
            <div class="footer-links-column">
              <h4 class="footer-category-title">{category}</h4>
              <ul class="footer-links-list">
                {#each links as link}
                  <li>
                    <a 
                      href={link.path} 
                      class="footer-link"
                      on:click|preventDefault={() => navigate(link.path)}
                    >
                      {link.name}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Contact Info (Gabungan) -->
      <div class="footer-section">
        <h3 class="footer-section-title">HUBUNGI KAMI</h3>
        <div class="contact-info">
          <a 
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item phone"
          >
            <span class="contact-icon">📞</span>
            <div class="contact-details">
              <div class="contact-label">Telepon/WhatsApp</div>
              <div class="contact-value">{contactInfo.phoneDisplay}</div>
            </div>
          </a>
          
          <a 
            href={`mailto:${contactInfo.email}`}
            class="contact-item email"
          >
            <span class="contact-icon">✉️</span>
            <div class="contact-details">
              <div class="contact-label">Email</div>
              <div class="contact-value">{contactInfo.email}</div>
            </div>
          </a>
          
          <div class="contact-item address">
            <span class="contact-icon">📍</span>
            <div class="contact-details">
              <div class="contact-label">Lokasi</div>
              <div class="contact-value">{contactInfo.address}</div>
            </div>
          </div>
        </div>
        
        <!-- Social Media (Astra Style) -->
        <div class="social-section">
          <h4 class="social-title">FOLLOW KAMI</h4>
          <div class="social-links">
            {#each socialMedia as social}
              <a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                aria-label={social.name}
              >
                <span class="social-icon">{social.icon}</span>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <div class="footer-bottom-content">
      <!-- Copyright (SkyWhite Style) -->
      <div class="copyright">
        © 2025 SkyWhite Rent Car. All rights reserved.
      </div>
      
      <!-- Legal Links (Astra Style) -->
      <div class="legal-links">
        <a href="/terms" class="legal-link" on:click|preventDefault={() => navigate('/terms')}>
          Syarat & Ketentuan
        </a>
        <span class="legal-separator">|</span>
        <a href="/privacy" class="legal-link" on:click|preventDefault={() => navigate('/privacy')}>
          Kebijakan Privasi
        </a>
        <span class="legal-separator">|</span>
        <a href="/sitemap" class="legal-link" on:click|preventDefault={() => navigate('/sitemap')}>
          Sitemap
        </a>
      </div>
      
      <!-- Payment Methods (Astra Style) -->
      <div class="payment-methods">
        <div class="payment-text">Metode Pembayaran:</div>
        <div class="payment-icons">
          <span class="payment-icon" title="Credit Card">💳</span>
          <span class="payment-icon" title="Bank Transfer">🏦</span>
          <span class="payment-icon" title="E-Wallet">📱</span>
          <span class="payment-icon" title="Cash">💰</span>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  /* ============ FOOTER STYLES ============ */
  .footer-container {
    background: #1F2937;
    color: white;
    margin-top: auto;
  }
  
  .footer-top {
    padding: 60px 40px 40px;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 40px;
  }
  
  .footer-section {
    display: flex;
    flex-direction: column;
  }
  
  /* Logo Section */
  .footer-logo {
    margin-bottom: 20px;
  }
  
  .footer-brand {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }
  
  .footer-brand-name {
    font-size: 28px;
    font-weight: 800;
    color: white;
    letter-spacing: -0.5px;
  }
  
  .footer-brand-tagline {
    font-size: 12px;
    color: #9CA3AF;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-top: 4px;
  }
  
  .footer-description {
    color: #D1D5DB;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .footer-certification {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }
  
  .cert-badge {
    background: rgba(255, 255, 255, 0.1);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    color: #60A5FA;
  }
  
  /* Section Titles */
  .footer-section-title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Quick Links Grid */
  .footer-links-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  
  .footer-category-title {
    font-size: 14px;
    font-weight: 600;
    color: #60A5FA;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .footer-links-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .footer-links-list li {
    margin-bottom: 8px;
  }
  
  .footer-link {
    color: #D1D5DB;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.2s ease;
    display: block;
    padding: 4px 0;
  }
  
  .footer-link:hover {
    color: #FF6B00; /* Orange Astra */
    padding-left: 5px;
  }
  
  /* Contact Info */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 30px;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    text-decoration: none;
    color: white;
    transition: all 0.2s ease;
  }
  
  .contact-item:hover {
    opacity: 0.9;
  }
  
  .contact-item.phone:hover .contact-value {
    color: #FF6B00;
  }
  
  .contact-item.email:hover .contact-value {
    color: #FF6B00;
  }
  
  .contact-icon {
    font-size: 18px;
    color: #60A5FA;
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
  }
  
  .contact-label {
    font-size: 12px;
    color: #9CA3AF;
    margin-bottom: 2px;
  }
  
  .contact-value {
    font-size: 14px;
    font-weight: 600;
    color: white;
    transition: color 0.2s ease;
  }
  
  /* Social Media */
  .social-section {
    margin-top: auto;
  }
  
  .social-title {
    font-size: 14px;
    font-weight: 600;
    color: #9CA3AF;
    margin-bottom: 12px;
    text-transform: uppercase;
  }
  
  .social-links {
    display: flex;
    gap: 12px;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: all 0.2s ease;
  }
  
  .social-link:hover {
    background: #FF6B00;
    transform: translateY(-2px);
  }
  
  /* Footer Bottom */
  .footer-bottom {
    background: #111827;
    padding: 20px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .footer-bottom-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .copyright {
    color: #9CA3AF;
    font-size: 13px;
  }
  
  .legal-links {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .legal-link {
    color: #D1D5DB;
    text-decoration: none;
    font-size: 13px;
    transition: color 0.2s ease;
  }
  
  .legal-link:hover {
    color: #FF6B00;
  }
  
  .legal-separator {
    color: #6B7280;
    font-size: 12px;
  }
  
  .payment-methods {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .payment-text {
    font-size: 12px;
    color: #9CA3AF;
  }
  
  .payment-icons {
    display: flex;
    gap: 8px;
  }
  
  .payment-icon {
    font-size: 20px;
    opacity: 0.8;
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    .footer-links-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .footer-bottom-content {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
  }
  
  @media (max-width: 768px) {
    .footer-top {
      padding: 40px 20px;
    }
    
    .footer-links-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    
    .footer-bottom {
      padding: 20px;
    }
    
    .legal-links {
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }
    
    .payment-methods {
      flex-direction: column;
      gap: 8px;
    }
  }
  
  @media (max-width: 480px) {
    .footer-content {
      gap: 30px;
    }
    
    .footer-links-grid {
      gap: 20px;
    }
    
    .footer-certification {
      justify-content: center;
    }
    
    .social-links {
      justify-content: center;
    }
  }
</style>