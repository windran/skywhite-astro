// Global store untuk booking modal state
import { writable } from 'svelte/store';

// Initial state
const createBookingStore = () => {
  const { subscribe, set, update } = writable({
    isOpen: false,
    carData: null
  });

  return {
    subscribe,
    open: (carData) => set({ isOpen: true, carData }),
    close: () => set({ isOpen: false, carData: null }),
    update
  };
};

export const bookingStore = createBookingStore();

// Helper functions untuk global access
export function openBookingModal(carData = null) {
  bookingStore.open(carData);
}

export function closeBookingModal() {
  bookingStore.close();
}