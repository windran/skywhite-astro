<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  
  export let isOpen = false;
  
  // Data mobil default (Avanza Veloz)
  export let carData = {
    name: 'Toyota Avanza Veloz',
    price: 700000,
    transmission: 'Automatic',
    year: '2022',
    fuel: 'Solar',
    seats: '7',
    image: '',
    slug: 'avanza-veloz'
  };
  
  // Data form
  let formData = {
    customerName: '',
    location: '',
    pickupTime: '00.30', // Format string biasa (bukan type="time")
    rentalDate: '',
    duration: '1',
    package: 'with_driver_full'
  };
  
  // Daftar lokasi
  const locations = [
    'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat',
    'Jakarta Timur', 'Jakarta Utara', 'Bandung', 'Bekasi',
    'Tangerang', 'Depok', 'Bogor', 'Lainnya (Tulis di WhatsApp)'
  ];
  
  // Waktu penjemputan (lebih user-friendly untuk Android)
  const pickupTimes = [
    '00.00 WIB', '00.30 WIB', '01.00 WIB', '02.00 WIB',
    '03.00 WIB', '04.00 WIB', '05.00 WIB', '06.00 WIB',
    '07.00 WIB', '08.00 WIB', '09.00 WIB', '10.00 WIB',
    '11.00 WIB', '12.00 WIB', '13.00 WIB', '14.00 WIB',
    '15.00 WIB', '16.00 WIB', '17.00 WIB', '18.00 WIB',
    '19.00 WIB', '20.00 WIB', '21.00 WIB', '22.00 WIB',
    '23.00 WIB', '23.30 WIB'
  ];
  
  // Paket Avanza Veloz
  const packages = [
    { 
      id: 'with_driver_12h', 
      name: 'Car + Driver / 12 hours', 
      price: 600000,
      unit: '/12 jam',
      showDuration: false // Tidak perlu input durasi
    },
    { 
      id: 'with_driver_full', 
      name: 'Car + Driver (Fullday)', 
      price: 700000,
      unit: '/hari',
      showDuration: true
    },
    { 
      id: 'self_drive', 
      name: 'Lepas Kunci (Fullday)', 
      price: 600000,
      unit: '/hari',
      showDuration: true
    },
    { 
      id: 'self_drive_monthly', 
      name: 'Lepas Kunci (Bulanan)', 
      price: 8500000,
      unit: '/Bulan',
      showDuration: false // Tidak perlu input durasi
    }
  ];
  
  // Paket yang dipilih
  $: selectedPackage = packages.find(p => p.id === formData.package);
  $: showDurationInput = selectedPackage?.showDuration || false;
  
  // Set tanggal default saat modal dibuka
  onMount(() => {
    const handleOpen = (e) => {
      if (e.detail && e.detail.carData) {
        isOpen = true;
        carData = e.detail.carData;
        
        // Set tanggal default besok
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        formData.rentalDate = tomorrow.toISOString().split('T')[0];
      }
    };
    
    document.addEventListener('open-booking-modal', handleOpen);
    
    return () => {
      document.removeEventListener('open-booking-modal', handleOpen);
      document.body.style.overflow = 'auto';
    };
  });
  
  // Event handlers
  function closeModal() {
    isOpen = false;
    document.body.style.overflow = 'auto';
  }
  
  function handleBackdropClick(e) {
    if (e.target.classList.contains('booking-modal-backdrop')) {
      closeModal();
    }
  }
  
  function handleKeydown(e) {
    if (e.key === 'Escape') closeModal();
  }
  
  // Tambahkan keyboard event untuk backdrop
  function handleBackdropKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      closeModal();
      e.preventDefault();
    }
  }
  
  // Hitung total
  function calculateTotal() {
    if (!selectedPackage) return 0;
    
    // Jika paket bulanan atau 12 jam, durasi selalu 1
    if (!selectedPackage.showDuration) {
      return selectedPackage.price;
    }
    
    const duration = parseInt(formData.duration) || 1;
    return selectedPackage.price * duration;
  }
  
  // Format pesan WhatsApp
  function formatWhatsAppMessage() {
    const total = calculateTotal();
    
    // Format tanggal Indonesia
    const dateObj = new Date(formData.rentalDate);
    const formattedDate = dateObj.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    let durationText = '';
    if (selectedPackage.unit === '/12 jam') {
      durationText = '12 Jam';
    } else if (selectedPackage.unit === '/Bulan') {
      durationText = '1 Bulan';
    } else {
      durationText = `${formData.duration} ${selectedPackage.unit.replace('/', '')}`;
    }
    
    return `Halo, saya ingin booking *Toyota Avanza Veloz*:

📋 *Data Pemesan:*
- Nama: ${formData.customerName}
- Lokasi Penjemputan: ${formData.location}
- Jam Penjemputan: ${formData.pickupTime} WIB

🚗 *Detail Sewa:*
- Paket: ${selectedPackage?.name}
- Durasi: ${durationText}
- Tanggal Sewa: ${formattedDate}
- Jumlah: 1 unit
- Harga: Rp ${total.toLocaleString('id-ID')} ${selectedPackage?.unit}

Silakan konfirmasi ketersediaan unit. Terima kasih.`;
  }
  
  // Kirim ke WhatsApp
  function submitToWhatsApp() {
    if (!formData.customerName || !formData.location || !formData.rentalDate) {
      alert('Mohon lengkapi nama, lokasi, dan tanggal sewa');
      return;
    }
    
    const message = formatWhatsAppMessage();
    const phoneNumber = '6281220003546';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      closeModal();
      resetForm();
    }, 1000);
  }
  
  // Reset form
  function resetForm() {
    formData = {
      customerName: '',
      location: '',
      pickupTime: '00.30',
      rentalDate: '',
      duration: '1',
      package: 'with_driver_full'
    };
  }
  
  // Update body overflow saat modal terbuka
  $: if (isOpen) {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);
  }
</script>

{#if isOpen}
<div 
  class="booking-modal-backdrop"
  on:click={handleBackdropClick}
  on:keydown={handleBackdropKeydown}
  tabindex="0"
  role="button"
  aria-label="Tutup modal booking"
  transition:fade={{ duration: 200 }}
>
  <div 
    class="booking-modal-content"
    transition:scale={{ duration: 300 }}
    role="dialog"
    aria-labelledby="booking-modal-title"
    aria-modal="true"
    on:click|stopPropagation
  >
    <!-- Header -->
    <div class="booking-modal-header">
      <h2 id="booking-modal-title">Booking {carData.name}</h2>
      <button 
        class="booking-modal-close"
        on:click={closeModal}
        aria-label="Tutup booking"
      >
        ✕
      </button>
    </div>
    
    <!-- Body -->
    <div class="booking-modal-body">
      <!-- Car Info -->
      <div class="car-summary">
        <h3>{carData.name}</h3>
        <div class="car-specs">
          <span class="spec">⚙️ {carData.transmission}</span>
          <span class="spec">📅 {carData.year}</span>
          <span class="spec">⛽ {carData.fuel}</span>
          <span class="spec">👥 {carData.seats} Kursi</span>
        </div>
      </div>
      
      <!-- Booking Form -->
      <div class="booking-form-simple">
        <!-- Nama -->
        <div class="form-group">
          <label for="customerName">👤 Nama Lengkap *</label>
          <input 
            id="customerName"
            type="text"
            bind:value={formData.customerName}
            placeholder="Nama lengkap Anda"
            required
          />
        </div>
        
        <!-- Lokasi -->
        <div class="form-group">
          <label for="location">📍 Lokasi Penjemputan *</label>
          <select 
            id="location"
            bind:value={formData.location}
            required
          >
            <option value="">Pilih lokasi...</option>
            {#each locations as loc}
              <option value={loc}>{loc}</option>
            {/each}
          </select>
        </div>
        
        <!-- Paket -->
        <div class="form-group">
          <label id="package-label">📦 Pilih Paket</label>
          <div class="package-options" role="radiogroup" aria-labelledby="package-label">
            {#each packages as pkg}
              <label class="package-option">
                <input 
                  type="radio" 
                  name="package" 
                  value={pkg.id}
                  bind:group={formData.package}
                  aria-describedby="package-desc-{pkg.id}"
                />
                <div class="package-info">
                  <div class="package-name">{pkg.name}</div>
                  <div class="package-price">
                    Rp {pkg.price.toLocaleString('id-ID')}{pkg.unit}
                  </div>
                </div>
              </label>
            {/each}
          </div>
        </div>
        
        <!-- Durasi (hanya tampil untuk paket tertentu) -->
        {#if showDurationInput}
          <div class="form-group">
            <label for="duration">⏱️ Durasi (hari)</label>
            <div class="duration-options">
              {#each [1, 2, 3, 4, 5, 6, 7, 10, 14, 30] as days}
                <button 
                  type="button"
                  class:selected={formData.duration === days.toString()}
                  on:click={() => formData.duration = days.toString()}
                  aria-label={`${days} hari`}
                >
                  {days} {days === 1 ? 'Hari' : 'Hari'}
                </button>
              {/each}
            </div>
          </div>
        {/if}
        
        <!-- Jam Jemput -->
        <div class="form-group">
          <label for="pickupTime">🕐 Jam Penjemputan</label>
          <select 
            id="pickupTime"
            bind:value={formData.pickupTime}
          >
            {#each pickupTimes as time}
              <option value={time.replace(' WIB', '')}>{time}</option>
            {/each}
          </select>
        </div>
        
        <!-- Tanggal -->
        <div class="form-group">
          <label for="rentalDate">📅 Tanggal Sewa *</label>
          <input 
            id="rentalDate"
            type="date"
            bind:value={formData.rentalDate}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <!-- Total -->
        <div class="total-summary">
          <div class="total-row">
            <span>Total Estimasi</span>
            <span class="total-amount">
              Rp {calculateTotal().toLocaleString('id-ID')}
              {selectedPackage?.unit === '/Bulan' ? '/Bulan' : selectedPackage?.showDuration ? ` (${formData.duration} hari)` : ''}
            </span>
          </div>
          <small class="disclaimer">* Harga dapat berubah. Konfirmasi via WhatsApp.</small>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="booking-modal-footer">
      <button 
        class="btn-secondary"
        on:click={closeModal}
      >
        Batal
      </button>
      <button 
        class="btn-primary"
        on:click={submitToWhatsApp}
        disabled={!formData.customerName || !formData.location || !formData.rentalDate}
      >
        <span class="whatsapp-icon">📱</span> Booking via WhatsApp
      </button>
    </div>
  </div>
</div>
{/if}

<style>
  /* Backdrop dengan keyboard accessibility */
  .booking-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: grid;
    place-items: center;
    z-index: 9999;
    padding: 1rem;
    outline: none;
    cursor: default;
  }
  
  .booking-modal-backdrop:focus {
    outline: 2px solid #3b82f6;
  }
  
  /* Content */
  .booking-modal-content {
    background: white;
    border-radius: 20px;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
    cursor: default;
  }
  
  /* Header */
  .booking-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-bottom: 2px solid #f1f5f9;
  }
  
  .booking-modal-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #1e293b;
  }
  
  .booking-modal-close {
    background: #f1f5f9;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: #64748b;
    padding: 0.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    transition: all 0.2s;
  }
  
  .booking-modal-close:hover,
  .booking-modal-close:focus {
    background: #e2e8f0;
    color: #1e293b;
    outline: 2px solid #3b82f6;
  }
  
  /* Body */
  .booking-modal-body {
    padding: 1.5rem;
  }
  
  /* Car Summary */
  .car-summary {
    background: #f8fafc;
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }
  
  .car-summary h3 {
    margin: 0 0 0.5rem 0;
    color: #1e293b;
  }
  
  .car-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.9rem;
    color: #64748b;
  }
  
  .spec {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  /* Form */
  .booking-form-simple {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #374151;
    font-size: 0.95rem;
  }
  
  .form-group input,
  .form-group select {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s;
    background: white;
  }
  
  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
  
  /* Package Options */
  .package-options {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .package-option {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    background: white;
  }
  
  .package-option:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
  }
  
  .package-option input[type="radio"]:checked + .package-info {
    color: #1d4ed8;
  }
  
  .package-option input[type="radio"]:checked {
    accent-color: #3b82f6;
  }
  
  .package-info {
    flex: 1;
  }
  
  .package-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .package-price {
    color: #059669;
    font-weight: 600;
  }
  
  /* Duration Options (button pills) */
  .duration-options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .duration-options button {
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s;
    color: #64748b;
  }
  
  .duration-options button:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
  }
  
  .duration-options button.selected {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
    font-weight: 600;
  }
  
  /* Total */
  .total-summary {
    background: #eff6ff;
    padding: 1.25rem;
    border-radius: 12px;
    margin-top: 1rem;
  }
  
  .total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }
  
  .total-amount {
    color: #059669;
  }
  
  .disclaimer {
    color: #64748b;
    font-size: 0.85rem;
  }
  
  /* Footer */
  .booking-modal-footer {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    border-top: 2px solid #f1f5f9;
  }
  
  .btn-primary,
  .btn-secondary {
    flex: 1;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.3s;
  }
  
  .btn-primary {
    background: #10b981;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .btn-primary:hover:not(:disabled) {
    background: #059669;
    transform: translateY(-2px);
  }
  
  .btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .btn-secondary {
    background: #f1f5f9;
    color: #64748b;
  }
  
  .btn-secondary:hover {
    background: #e2e8f0;
  }
  
  /* Responsive */
  @media (max-width: 640px) {
    .booking-modal-content {
      max-height: 95vh;
    }
    
    .booking-modal-footer {
      flex-direction: column;
    }
    
    .duration-options button {
      padding: 0.5rem 0.75rem;
      font-size: 0.85rem;
    }
  }
</style>