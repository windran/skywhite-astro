<script>
  export let car = {
    name: 'Suzuki Ertiga Hybrid',
    price: 0,
    transmission: 'Automatic',
    year: '2024',
    fuel: 'Bensin',
    seats: '7 Kursi'
  };
  
  export let buttonStyle = 'primary';
  
  function handleClick() {
    if (window.openBookingModal) {
      window.openBookingModal(car);
    }
  }
</script>

<button 
  class="rent-button {buttonStyle}"
  on:click={handleClick}
>
  <span>🚗 Sewa {car.name}</span>
  {#if car.price > 0}
    <small>Mulai Rp {car.price.toLocaleString('id-ID')}</small>
  {/if}
</button>

<style>
  .rent-button {
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    min-width: 200px;
    transition: all 0.3s;
  }
  
  .rent-button.primary {
    background: #3b82f6;
    color: white;
  }
  
  .rent-button.secondary {
    background: #10b981;
    color: white;
  }
  
  .rent-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
  
  .rent-button small {
    font-weight: 400;
    opacity: 0.9;
  }
</style>