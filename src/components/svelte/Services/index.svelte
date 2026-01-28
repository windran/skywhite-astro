<!-- components/svelte/Services/index.svelte -->
<script>
  import { onMount } from 'svelte';
  
  let activeTab = 'business';
  
  // Data layanan untuk bisnis
  const businessServices = [
    {
      id: 1,
      title: 'Sewa Mobil Korporat',
      description: 'Sewa jangka pendek & panjang untuk kebutuhan bisnis dengan fasilitas lengkap',
      icon: 'M24 10H8C6.89543 10 6 10.8954 6 12V24C6 25.1046 6.89543 26 8 26H24C25.1046 26 26 25.1046 26 24V12C26 10.8954 25.1046 10 24 10ZM20 6V10M12 6V10M6 16H26M16 16V26',
      link: '/business/corporate'
    },
    {
      id: 2,
      title: 'Rental + Supir',
      description: 'Mobil dengan supir profesional untuk meeting, airport transfer, atau event',
      icon: 'M16 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 26V24C8 20.6863 10.6863 18 14 18H18C21.3137 18 24 20.6863 24 24V26M20 12L24 8M20 8L24 12',
      link: '/business/driver'
    },
    {
      id: 3,
      title: 'Transportasi Event',
      description: 'Armada untuk MICE, wedding, company outing, atau acara khusus lainnya',
      icon: 'M26 12H6C4.89543 12 4 12.8954 4 14V24C4 25.1046 4.89543 26 6 26H26C27.1046 26 28 25.1046 28 24V14C28 12.8954 27.1046 12 26 12ZM4 18H28M10 8L14 12M22 8L18 12',
      link: '/business/event'
    }
  ];
  
  // Data layanan untuk pribadi
  const personalServices = [
    {
      id: 1,
      title: 'Sewa Harian',
      description: 'Sewa mobil untuk kebutuhan harian, liburan keluarga, atau jalan-jalan akhir pekan',
      icon: 'M24 10H8C6.89543 10 6 10.8954 6 12V24C6 25.1046 6.89543 26 8 26H24C25.1046 26 26 25.1046 26 24V12C26 10.8954 25.1046 10 24 10ZM20 6V10M12 6V10M10 16H22',
      link: '/personal/daily'
    },
    {
      id: 2,
      title: 'Sewa Bulanan',
      description: 'Paket khusus untuk penyewaan jangka panjang dengan harga lebih ekonomis',
      icon: 'M16 6V10M16 22V26M10 16H6M26 16H22M19 10L13 22M13 10L19 22',
      link: '/personal/monthly'
    },
    {
      id: 3,
      title: 'Airport Transfer',
      description: 'Jemput-antar bandara dengan tepat waktu untuk penerbangan domestik/internasional',
      icon: 'M16 26V6M8 18L16 26L24 18M6 6H26M10 10H22',
      link: '/personal/airport'
    }
  ];
  
  // Fungsi untuk switch tab
  const switchTab = (tab) => {
    activeTab = tab;
  };
  
  // Load active tab dari localStorage
  onMount(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab === 'business' || savedTab === 'personal') {
      activeTab = savedTab;
    }
  });
</script>

<section class="services-section">
  <div class="services-container">
    <!-- Header -->
    <div class="services-header">
      <div class="services-badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5L10 1Z" fill="#0033A0" fill-opacity="0.1"/>
          <path d="M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5L10 1Z" stroke="#0033A0" stroke-width="1.5"/>
        </svg>
        LAYANAN KAMI
      </div>
      <h2 class="services-title">
        <span class="title-highlight">Pilihan Layanan</span> SkyWhite Rent Car
      </h2>
      <p class="services-subtitle">
        Dari sewa harian untuk kebutuhan pribadi hingga solusi transportasi korporat, kami menyediakan beragam layanan yang dapat disesuaikan dengan kebutuhan Anda.
      </p>
    </div>

    <!-- Tabs Navigation -->
    <div class="services-tabs">
      <button 
        class="tab-button {activeTab === 'business' ? 'active' : ''}" 
        on:click={() => {
          switchTab('business');
          localStorage.setItem('activeTab', 'business');
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 5H5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V7C17 5.89543 16.1046 5 15 5Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M13 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M7 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M3 9H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Untuk Bisnis
      </button>
      
      <button 
        class="tab-button {activeTab === 'personal' ? 'active' : ''}" 
        on:click={() => {
          switchTab('personal');
          localStorage.setItem('activeTab', 'personal');
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="6" r="3" stroke="currentColor" stroke-width="1.5"/>
          <path d="M15 19H5C3.89543 19 3 18.1046 3 17V14C3 12.8954 3.89543 12 5 12H15C16.1046 12 17 12.8954 17 14V17C17 18.1046 16.1046 19 15 19Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        Untuk Pribadi
      </button>
    </div>

    <!-- Tabs Content -->
    <div class="services-content">
      <!-- Business Services -->
      <div class="tab-content {activeTab === 'business' ? 'active' : ''}">
        <div class="services-grid">
          {#each businessServices as service}
            <a href={service.link} class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d={service.icon} stroke="#0033A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div class="service-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13" stroke="#0033A0" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M9 4L13 8L9 12" stroke="#0033A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          {/each}
        </div>
      </div>

      <!-- Personal Services -->
      <div class="tab-content {activeTab === 'personal' ? 'active' : ''}">
        <div class="services-grid">
          {#each personalServices as service}
            <a href={service.link} class="service-card">
              <div class="service-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d={service.icon} stroke="#0033A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div class="service-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13" stroke="#0033A0" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M9 4L13 8L9 12" stroke="#0033A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="services-cta">
      <p>Butuh layanan khusus atau konsultasi? Hubungi kami untuk solusi transportasi terbaik!</p>
      <a href="https://wa.me/6281220003546" class="cta-button" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M16.6667 3.33333H3.33333C2.44928 3.33333 1.60143 3.68452 0.976311 4.30964C0.35119 4.93476 0 5.78261 0 6.66667V13.3333C0 14.2174 0.35119 15.0652 0.976311 15.6904C1.60143 16.3155 2.44928 16.6667 3.33333 16.6667H16.6667C17.5507 16.6667 18.3986 16.3155 19.0237 15.6904C19.6488 15.0652 20 14.2174 20 13.3333V6.66667C20 5.78261 19.6488 4.93476 19.0237 4.30964C18.3986 3.68452 17.5507 3.33333 16.6667 3.33333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 6.66667L10 10.8333L0 6.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Konsultasi Sekarang
      </a>
    </div>
  </div>
</section>

<style>
  .services-section {
    padding: 5rem 0;
    background: #FFFFFF;
    position: relative;
  }

  .services-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Header Styles */
  .services-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .services-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(0, 51, 160, 0.08);
    color: #0033A0;
    padding: 0.5rem 1.25rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .services-badge svg {
    width: 16px;
    height: 16px;
  }

  .services-title {
    font-size: 2.5rem;
    color: #1F2937;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .title-highlight {
    color: #0033A0;
  }

  .services-subtitle {
    font-size: 1.125rem;
    color: #6B7280;
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto;
  }

  /* Tabs Navigation */
  .services-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid #E5E7EB;
    padding-bottom: 1rem;
  }

  .tab-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: none;
    border: none;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: #6B7280;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
  }

  .tab-button svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }

  .tab-button:hover {
    color: #0033A0;
    background: rgba(0, 51, 160, 0.05);
  }

  .tab-button.active {
    color: #0033A0;
    background: rgba(0, 51, 160, 0.1);
  }

  .tab-button.active::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    height: 3px;
    background: #0033A0;
    border-radius: 2px;
  }

  /* Tabs Content */
  .tab-content {
    display: none;
    animation: fadeIn 0.5s ease;
  }

  .tab-content.active {
    display: block;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Services Grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .service-card {
    background: white;
    border: 1px solid #E5E7EB;
    border-radius: 1rem;
    padding: 2rem;
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .service-card:hover {
    border-color: #0033A0;
    box-shadow: 0 8px 30px rgba(0, 51, 160, 0.1);
    transform: translateY(-5px);
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0033A0, #0066FF);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .service-card:hover::before {
    transform: scaleX(1);
  }

  .service-icon {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: rgba(0, 51, 160, 0.08);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .service-card:hover .service-icon {
    background: rgba(0, 51, 160, 0.15);
    transform: scale(1.1);
  }

  .service-icon svg {
    width: 32px;
    height: 32px;
  }

  .service-text {
    flex: 1;
  }

  .service-text h3 {
    font-size: 1.25rem;
    color: #1F2937;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .service-text p {
    font-size: 0.875rem;
    color: #6B7280;
    line-height: 1.5;
    margin: 0;
  }

  .service-arrow {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    background: rgba(0, 51, 160, 0.08);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .service-card:hover .service-arrow {
    background: #0033A0;
    transform: translateX(3px);
  }

  .service-arrow svg {
    width: 16px;
    height: 16px;
    stroke: #0033A0;
    transition: stroke 0.3s ease;
  }

  .service-card:hover .service-arrow svg {
    stroke: white;
  }

  /* CTA Section */
  .services-cta {
    background: linear-gradient(135deg, #0033A0, #0066FF);
    border-radius: 1rem;
    padding: 3rem;
    text-align: center;
    color: white;
  }

  .services-cta p {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: white;
    color: #0033A0;
    padding: 1rem 2.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    background: #F8FAFC;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }

  .cta-button svg {
    width: 20px;
    height: 20px;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .services-tabs {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    .services-section {
      padding: 3rem 0;
    }
    
    .services-title {
      font-size: 2rem;
    }
    
    .services-subtitle {
      font-size: 1rem;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .service-card {
      padding: 1.5rem;
    }
    
    .service-icon {
      width: 56px;
      height: 56px;
    }
    
    .service-icon svg {
      width: 24px;
      height: 24px;
    }
    
    .services-cta {
      padding: 2rem;
    }
    
    .services-cta p {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 480px) {
    .services-container {
      padding: 0 1rem;
    }
    
    .services-title {
      font-size: 1.75rem;
    }
    
    .services-badge {
      padding: 0.375rem 1rem;
      font-size: 0.6875rem;
    }
    
    .tab-button {
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
    }
    
    .service-card {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    
    .service-icon {
      align-self: center;
    }
    
    .service-arrow {
      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;
    }
    
    .cta-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>