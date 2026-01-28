<script>
  import { onMount } from 'svelte';
  
  // State untuk form
  let selectedBrand = '';
  let selectedTransmission = '';
  let selectedYear = '';
  
  // Data dropdown
  const brands = [
    { value: '', label: 'Semua Brand' },
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Honda', label: 'Honda' },
    { value: 'Wuling', label: 'Wuling' },
    { value: 'Mitsubishi', label: 'Mitsubishi' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Jeep', label: 'Jeep' }
  ];
  
  const transmissions = [
    { value: '', label: 'Semua Transmisi' },
    { value: 'Manual', label: 'Manual' },
    { value: 'Automatic', label: 'Automatic' },
    { value: 'Semi Auto', label: 'Semi Auto' },
    { value: 'CVT', label: 'CVT' },
    { value: 'Elektrik', label: 'Elektrik' }
  ];
  
  const years = [
    { value: '', label: 'Semua Tahun' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build query parameters
    const params = new URLSearchParams();
    if (selectedBrand) params.append('brand', selectedBrand);
    if (selectedTransmission) params.append('transmisi', selectedTransmission);
    if (selectedYear) params.append('tahun', selectedYear);
    
    // Redirect ke search page dengan query
    window.location.href = `/search?${params.toString()}`;
  };
  
  const resetForm = () => {
    selectedBrand = '';
    selectedTransmission = '';
    selectedYear = '';
  };
</script>

<div class="rent-search-container">
  <div class="search-header">
    <h2 class="search-title">
      <span class="title-sub">Search Form</span>
      <span class="title-main">Cari Mobil</span>
    </h2>
    <p class="search-description">
      Temukan mobil impian Anda dengan mudah menggunakan filter pencarian
    </p>
  </div>
  
  <form on:submit={handleSubmit} class="rent-search-form">
    <div class="form-grid">
      <!-- Brand Select -->
      <div class="form-group">
        <label for="brand" class="form-label">
          <span class="label-text">Brand</span>
          <div class="select-wrapper">
            <select 
              id="brand" 
              bind:value={selectedBrand}
              class="form-select"
              aria-label="Pilih Brand Mobil"
            >
              {#each brands as brand}
                <option value={brand.value}>{brand.label}</option>
              {/each}
            </select>
            <svg class="select-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </label>
      </div>
      
      <!-- Transmission Select -->
      <div class="form-group">
        <label for="transmission" class="form-label">
          <span class="label-text">Transmisi</span>
          <div class="select-wrapper">
            <select 
              id="transmission" 
              bind:value={selectedTransmission}
              class="form-select"
              aria-label="Pilih Jenis Transmisi"
            >
              {#each transmissions as trans}
                <option value={trans.value}>{trans.label}</option>
              {/each}
            </select>
            <svg class="select-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </label>
      </div>
      
      <!-- Year Select -->
      <div class="form-group">
        <label for="year" class="form-label">
          <span class="label-text">Tahun</span>
          <div class="select-wrapper">
            <select 
              id="year" 
              bind:value={selectedYear}
              class="form-select"
              aria-label="Pilih Tahun Mobil"
            >
              {#each years as year}
                <option value={year.value}>{year.label}</option>
              {/each}
            </select>
            <svg class="select-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </label>
      </div>
    </div>
    
    <div class="form-actions">
      <button 
        type="button" 
        on:click={resetForm}
        class="btn-reset"
        aria-label="Reset pencarian"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12L12 4M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Reset
      </button>
      
      <button 
        type="submit" 
        class="btn-search"
        aria-label="Cari mobil sekarang"
      >
        <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19 19L14.65 14.65" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Cari Sekarang
      </button>
    </div>
  </form>
</div>

<style>
  .rent-search-container {
    background: linear-gradient(135deg, #0033A0 0%, #1E40AF 100%);
    border-radius: 16px;
    padding: 40px;
    color: white;
    box-shadow: 0 8px 32px rgba(0, 51, 160, 0.2);
    margin: 2rem 0;
  }
  
  .search-header {
    text-align: center;
    margin-bottom: 32px;
  }
  
  .search-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  
  .title-sub {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .title-main {
    font-size: 32px;
    font-weight: 800;
    line-height: 1.2;
  }
  
  .search-description {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .rent-search-form {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 32px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-label {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .label-text {
    font-size: 14px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .select-wrapper {
    position: relative;
  }
  
  .form-select {
    width: 100%;
    padding: 14px 16px;
    padding-right: 40px;
    background: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-size: 15px;
    color: #1f2937;
    cursor: pointer;
    appearance: none;
    transition: all 0.2s ease;
    font-weight: 500;
  }
  
  .form-select:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  .form-select:focus {
    outline: none;
    border-color: #FF6B00;
    box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.2);
  }
  
  .select-arrow {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #6B7280;
    pointer-events: none;
  }
  
  .form-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  
  .btn-reset,
  .btn-search {
    padding: 14px 32px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px solid transparent;
  }
  
  .btn-reset {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .btn-reset:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
  
  .btn-search {
    background: #FF6B00;
    color: white;
    border-color: #FF6B00;
  }
  
  .btn-search:hover {
    background: #E65A00;
    border-color: #E65A00;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 0, 0.3);
  }
  
  .search-icon {
    width: 20px;
    height: 20px;
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .form-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .rent-search-container {
      padding: 32px 24px;
    }
  }
  
  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .title-main {
      font-size: 28px;
    }
    
    .search-description {
      font-size: 15px;
    }
    
    .rent-search-container {
      padding: 28px 20px;
      margin: 1.5rem 0;
    }
    
    .form-actions {
      flex-direction: column;
    }
    
    .btn-reset,
    .btn-search {
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 480px) {
    .title-main {
      font-size: 24px;
    }
    
    .rent-search-container {
      padding: 24px 16px;
      border-radius: 12px;
    }
    
    .form-select {
      padding: 12px 14px;
      font-size: 14px;
    }
  }
</style>