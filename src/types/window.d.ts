export {};

declare global {
  interface Window {
    bookingState?: {
      isOpen: boolean;
      carData: any;
    };
    openBookingModal?: (carData: any) => void;
    closeBookingModal?: () => void;
  }
}