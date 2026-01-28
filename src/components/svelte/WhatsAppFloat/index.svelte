<script>
  import { onMount } from 'svelte';
  
  let isExpanded = false;
  let isVisible = true;
  let isMobile = false;
  
  const phoneNumber = '081220003546';
  const formattedNumber = '0812-2000-3546';
  const whatsappUrl = `https://wa.me/62${phoneNumber.substring(1)}?text=Halo%20SkyWhite%20Rent%20Car`;
  
  onMount(() => {
    isMobile = window.innerWidth < 768;
    
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isVisible = !(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };
    
    const handleResize = () => {
      isMobile = window.innerWidth < 768;
      if (isMobile) isExpanded = false;
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div class="whatsapp-float" style:opacity={isVisible ? 1 : 0} style:transform={isVisible ? 'translateY(0)' : 'translateY(100px)'}>
  {#if isMobile}
    <!-- Mobile: Simple button -->
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button-mobile"
      aria-label="WhatsApp"
    >
      <span class="whatsapp-icon">💬</span>
    </a>
  {:else}
    <!-- Desktop: Expanding button -->
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button-desktop"
      class:expanded={isExpanded}
      on:mouseenter={() => isExpanded = true}
      on:mouseleave={() => isExpanded = false}
      aria-label="WhatsApp"
    >
      <span class="whatsapp-icon">💬</span>
      {#if isExpanded}
        <div class="whatsapp-text">
          <div>WhatsApp Kami</div>
          <div class="whatsapp-number">{formattedNumber}</div>
        </div>
      {/if}
    </a>
  {/if}
</div>

<style>
  .whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    transition: all 0.4s ease;
  }
  
  .whatsapp-button-mobile,
  .whatsapp-button-desktop {
    display: flex;
    align-items: center;
    background: #25D366;
    color: white;
    text-decoration: none;
    border-radius: 50%;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
    transition: all 0.3s ease;
  }
  
  .whatsapp-button-mobile {
    width: 70px;
    height: 70px;
    justify-content: center;
    font-size: 32px;
  }
  
  .whatsapp-button-mobile:hover {
    background: #128C7E;
    transform: scale(1.1);
  }
  
  .whatsapp-button-desktop {
    width: 60px;
    height: 60px;
    justify-content: center;
    font-size: 28px;
    overflow: hidden;
    transition: width 0.3s ease;
  }
  
  .whatsapp-button-desktop.expanded {
    width: 220px;
    border-radius: 30px;
    padding: 0 20px;
    justify-content: flex-start;
    gap: 12px;
  }
  
  .whatsapp-button-desktop:hover {
    background: #128C7E;
    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4);
  }
  
  .whatsapp-text {
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.2;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }
  
  .whatsapp-button-desktop.expanded .whatsapp-text {
    opacity: 1;
    transform: translateX(0);
  }
  
  .whatsapp-number {
    font-weight: 700;
    font-size: 12px;
  }
  
  /* Pulse animation */
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
    70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  }
  
  .whatsapp-button-mobile,
  .whatsapp-button-desktop {
    animation: pulse 2s infinite;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .whatsapp-float {
      bottom: 20px;
      right: 20px;
    }
  }
</style>