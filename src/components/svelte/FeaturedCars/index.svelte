<script>
  import { onMount } from 'svelte';
  
  // Data mobil dari SkyWhite Rent Car
  const featuredCars = [
    {
      id: 1,
      name: 'Suzuki Ertiga Hybrid',
      category: 'MPV',
      transmission: 'Automatic',
      year: '2024',
      fuel: 'Bensin',
      seats: '7 Kursi',
      price: 'Rp 500rb',
      priceUnit: '/12 jam',
      image: 'https://skywhiterentcar.com/wp-content/uploads/2025/03/rental-suzuki-ertiga-hybrid-skywhiterentcar-648x432.webp',
      link: 'https://skywhiterentcar.com/rental/suzuki-ertiga-hybrid/'
    },
    {
      id: 2,
      name: 'Mitsubishi Pajero',
      category: 'SUV',
      transmission: 'Automatic',
      year: '2022',
      fuel: 'Solar',
      seats: '7 Kursi',
      price: 'Rp 1,5jt',
      priceUnit: '/12 jam',
      image: 'https://skywhiterentcar.com/wp-content/uploads/2025/03/rental-mitsubishi-pajero-sport-skywhiterentcar-648x432.webp',
      link: 'https://skywhiterentcar.com/rental/mitsubishi-pajero/'
    },
    {
      id: 3,
      name: 'Suzuki XL-7 Hybrid',
      category: 'SUV',
      transmission: 'Automatic',
      year: '2023',
      fuel: 'Bensin',
      seats: '7 Kursi',
      price: 'Rp 600rb',
      priceUnit: '/12 jam',
      image: 'https://skywhiterentcar.com/wp-content/uploads/2025/03/rental-suzuki-xl7-hybrid-skywhiterentcar-648x432.webp',
      link: 'https://skywhiterentcar.com/rental/suzuki-xl-7-hybrid/'
    },
    {
      id: 4,
      name: 'Mitsubishi Xpander',
      category: 'SUV',
      transmission: 'Automatic',
      year: '2022',
      fuel: 'Bensin',
      seats: '6 Kursi',
      price: 'Rp 600rb',
      priceUnit: '/12 jam',
      image: 'https://skywhiterentcar.com/wp-content/uploads/2025/03/xpander-sky-white-rent-car.webp',
      link: 'https://skywhiterentcar.com/rental/mitsubishi-xpander/'
    },
    {
      id: 5,
      name: 'Toyota Avanza Veloz',
      category: 'MPV',
      transmission: 'Automatic',
      year: '2022',
      fuel: 'Bensin',
      seats: '7 Kursi',
      price: 'Rp 600rb',
      priceUnit: '/12 jam',
      image: 'https://skywhiterentcar.com/wp-content/uploads/2025/03/rental-toyota-avanza-veloz-skywhiterentcar-648x432.webp',
      link: 'https://skywhiterentcar.com/rental/toyota-avanza-veloz/'
    },
    {
      id: 6,
      name: 'Hyundai Stargazer',
      category: 'MPV',
      transmission: 'Automatic',
      year: '2023',
      fuel: 'Bensin',
      seats: '6 Kursi',
      price: 'Rp 750rb',
      priceUnit: '/12 jam',
      image: 'https://skywhiterentcar.com/wp-content/uploads/2025/03/rental-hyundai-stargazer-skywhiterentcar.webp',
      link: 'https://skywhiterentcar.com/rental/hyundai-stargazer/'
    }
  ];
  
  let currentSlide = 0;
  let isMobile = false;
  let autoScrollInterval;
  
  // Navigation functions
  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % Math.ceil(featuredCars.length / (isMobile ? 1 : 3));
  };
  
  const prevSlide = () => {
    currentSlide = currentSlide === 0 ? Math.ceil(featuredCars.length / (isMobile ? 1 : 3)) - 1 : currentSlide - 1;
  };
  
  const goToSlide = (index) => {
    currentSlide = index;
  };
  
  // Auto scroll
  const startAutoScroll = () => {
    if (!autoScrollInterval) {
      autoScrollInterval = setInterval(nextSlide, 5000);
    }
  };
  
  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  };
  
  onMount(() => {
    isMobile = window.innerWidth <= 768;
    
    // Handle resize
    const handleResize = () => {
      isMobile = window.innerWidth <= 768;
      currentSlide = 0; // Reset slide on resize
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start auto-scroll
    startAutoScroll();
    
    return () => {
      stopAutoScroll();
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<section class="featured-cars-section">
  <div class="featured-cars-container">
    <!-- Header -->
    <div class="section-header">
      <div class="section-badge">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5L10 1Z" fill="#0033A0" fill-opacity="0.1"/>
          <path d="M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5L10 1Z" stroke="#0033A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        PILIHAN TERBAIK
      </div>
      <h2 class="section-title">Rental <span class="title-accent">Terbaru</span></h2>
      <p class="section-description">
        <strong>SkyWhite Rent Car</strong> menghadirkan layanan penyewaan kendaraan terbaru dengan kondisi prima dan harga kompetitif. Kami selalu update armada terbaru untuk memastikan kenyamanan dan keamanan Anda selama pemakaian.
      </p>
      <a href="https://skywhiterentcar.com/rental" class="view-all-link" target="_blank" rel="noopener noreferrer">
        Lihat Semua
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    
    <!-- Carousel Container -->
     
    <div 
      class="cars-carousel-container"
      on:mouseenter={stopAutoScroll}
      on:mouseleave={startAutoScroll}
      role="region"
      aria-label="Featured cars carousel"
    >
      <!-- Navigation Buttons -->
      <button 
        class="carousel-nav prev"
        on:click={prevSlide}
        aria-label="Previous cars"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- Cars Grid/Carousel -->
      <div class="cars-grid">
        {#each featuredCars as car, index}
          <div 
            class="car-card"
            class:car-card-visible={isMobile ? Math.floor(index) === currentSlide : Math.floor(index / 3) === currentSlide}
          >
            <a 
              href={car.link} 
              class="car-image-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Detail ${car.name}`}
            >
              <img 
                src={car.image} 
                alt={`Rental ${car.name} SkyWhite Rent Car`}
                class="car-image"
                loading="lazy"
              />
              <div class="car-category">{car.category}</div>
            </a>
            
            <div class="car-content">
              <h3 class="car-name">
                <a href={car.link} target="_blank" rel="noopener noreferrer">{car.name}</a>
              </h3>
              
              <ul class="car-specs">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 4L6 12L2 8" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {car.transmission}
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 4L6 12L2 8" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {car.year}
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 4L6 12L2 8" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {car.fuel}
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 4L6 12L2 8" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {car.seats}
                </li>
              </ul>
              
              <div class="car-price">
                <div class="price-label">Sewa mulai</div>
                <div class="price-amount">{car.price}<span class="price-unit">{car.priceUnit}</span></div>
              </div>
              
              <div class="car-actions">
                <a 
                  href={car.link} 
                  class="btn-detail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 10L13.3333 13.3333M10 10L6.66667 6.66667M10 10L6.66667 13.3333M10 10L13.3333 6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Lihat Detail
                </a>
                <a 
                  href="https://wa.me/6281220003546?text=Halo%20SkyWhite,%20saya%20tertarik%20dengan%20{encodeURIComponent(car.name)}" 
                  class="btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp untuk ${car.name}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6667 3.33333H3.33333C2.44928 3.33333 1.60143 3.68452 0.976311 4.30964C0.35119 4.93476 0 5.78261 0 6.66667V13.3333C0 14.2174 0.35119 15.0652 0.976311 15.6904C1.60143 16.3155 2.44928 16.6667 3.33333 16.6667H16.6667C17.5507 16.6667 18.3986 16.3155 19.0237 15.6904C19.6488 15.0652 20 14.2174 20 13.3333V6.66667C20 5.78261 19.6488 4.93476 19.0237 4.30964C18.3986 3.68452 17.5507 3.33333 16.6667 3.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 6.66667L10 10.8333L0 6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <button 
        class="carousel-nav next"
        on:click={nextSlide}
        aria-label="Next cars"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    
    <!-- Dots Indicator -->
    <div class="carousel-dots">
      {#each Array(Math.ceil(featuredCars.length / (isMobile ? 1 : 3))) as _, index}
        <button 
          class="carousel-dot {currentSlide === index ? 'active' : ''}"
          on:click={() => goToSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      {/each}
    </div>
  </div>
</section>

<style>
  .featured-cars-section {
    padding: 5rem 0;
    background: #F8FAFC;
  }

  .featured-cars-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Section Header */
  .section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
  }

  .section-badge {
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
    margin-bottom: 1rem;
  }

  .section-badge svg {
    width: 16px;
    height: 16px;
  }

  .section-title {
    font-size: 2.5rem;
    color: #1F2937;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .title-accent {
    color: #0033A0;
  }

  .section-description {
    font-size: 1.125rem;
    color: #6B7280;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .section-description strong {
    color: #1F2937;
  }

  .view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #0033A0;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .view-all-link:hover {
    color: #FF6B00;
    gap: 0.75rem;
  }

  .view-all-link svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  .view-all-link:hover svg {
    transform: translateX(3px);
  }

  /* Carousel Container */
  .cars-carousel-container {
    position: relative;
    margin-bottom: 2rem;
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    background: white;
    border: 1px solid #E5E7EB;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    opacity: 0.8;
  }

  .carousel-nav:hover {
    background: #0033A0;
    border-color: #0033A0;
    opacity: 1;
  }

  .carousel-nav:hover svg {
    stroke: white;
  }

  .carousel-nav.prev {
    left: -24px;
  }

  .carousel-nav.next {
    right: -24px;
  }

  .carousel-nav svg {
    width: 24px;
    height: 24px;
    stroke: #6B7280;
    transition: stroke 0.3s ease;
  }

  /* Cars Grid/Carousel */
  .cars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    transition: transform 0.5s ease;
  }

  .car-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border: 1px solid #E5E7EB;
    transition: all 0.3s ease;
    opacity: 1;
    transform: scale(1);
  }

  .car-card:hover {
    border-color: #0033A0;
    box-shadow: 0 8px 30px rgba(0, 51, 160, 0.1);
    transform: translateY(-4px);
  }

  .car-image-link {
    position: relative;
    display: block;
    overflow: hidden;
    height: 200px;
  }

  .car-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .car-card:hover .car-image {
    transform: scale(1.05);
  }

  .car-category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 51, 160, 0.9);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .car-content {
    padding: 1.5rem;
  }

  .car-name {
    font-size: 1.25rem;
    color: #1F2937;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .car-name a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .car-name a:hover {
    color: #0033A0;
  }

  .car-specs {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .car-specs li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
  }

  .car-specs li svg {
    flex-shrink: 0;
  }

  .car-price {
    border-top: 1px solid #E5E7EB;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .price-label {
    font-size: 0.75rem;
    color: #9CA3AF;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .price-amount {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0033A0;
    line-height: 1;
  }

  .price-unit {
    font-size: 0.875rem;
    color: #6B7280;
    font-weight: 500;
    margin-left: 0.25rem;
  }

  .car-actions {
    display: flex;
    gap: 0.75rem;
  }

  .btn-detail {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #0033A0;
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all 0.3s ease;
  }

  .btn-detail:hover {
    background: #00257A;
    transform: translateY(-2px);
  }

  .btn-detail svg {
    width: 16px;
    height: 16px;
  }

  .btn-whatsapp {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    background: #25D366;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-whatsapp:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }

  .btn-whatsapp svg {
    width: 20px;
    height: 20px;
  }

  /* Dots Indicator */
  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #D1D5DB;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .carousel-dot.active {
    background: #0033A0;
    width: 24px;
    border-radius: 4px;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .cars-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .carousel-nav.prev {
      left: -16px;
    }
    
    .carousel-nav.next {
      right: -16px;
    }
  }

  @media (max-width: 768px) {
  .featured-cars-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .cars-carousel-container {
    overflow: hidden;
  }

  .cars-grid {
    grid-template-columns: repeat(6, 100%);
    gap: 0;
    transform: translateX(calc(-100% * var(--current-slide, 0)));
  }

  .car-card {
    margin: 0 0.5rem;
    opacity: 1;
    transform: scale(1);
  }

  .carousel-nav {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
  }

  .carousel-nav.prev {
    left: 8px;
  }

  .carousel-nav.next {
    right: 8px;
  }

  .carousel-nav svg {
    width: 20px;
    height: 20px;
  }

  .car-image-link {
    height: 180px;
  }
}

  @media (max-width: 480px) {
    .featured-cars-container {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .section-badge {
      padding: 0.375rem 1rem;
      font-size: 0.6875rem;
    }

    .car-content {
      padding: 1.25rem;
    }

    .car-name {
      font-size: 1.125rem;
    }

    .car-specs {
      grid-template-columns: 1fr;
    }

    .price-amount {
      font-size: 1.25rem;
    }

    .car-actions {
      flex-direction: column;
    }

    .btn-whatsapp {
      width: 100%;
      height: 44px;
    }
  }
</style>