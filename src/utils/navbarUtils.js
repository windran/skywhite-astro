// src/utils/navbarUtils.js

/**
 * Debounce function untuk optimasi event handlers
 */
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Throttle function untuk scroll events
 */
export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Generate unique ID untuk dropdowns
 */
export const generateId = (prefix = '') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Keyboard navigation helper
 */
export const handleKeyboardNav = (event, currentIndex, itemsLength) => {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      return (currentIndex + 1) % itemsLength;
    
    case 'ArrowUp':
      event.preventDefault();
      return (currentIndex - 1 + itemsLength) % itemsLength;
    
    case 'Home':
      event.preventDefault();
      return 0;
    
    case 'End':
      event.preventDefault();
      return itemsLength - 1;
    
    default:
      return currentIndex;
  }
};

/**
 * Focus trap untuk dropdowns dan modals
 */
export const createFocusTrap = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const handleTabKey = (e) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  return {
    destroy: () => element.removeEventListener('keydown', handleTabKey),
  };
};

/**
 * Touch event handler untuk mobile
 */
export const createTouchHandler = (element, options) => {
  let startY;
  let isScrolling;
  
  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
    isScrolling = undefined;
  };
  
  const handleTouchMove = (e) => {
    if (!startY) return;
    
    const y = e.touches[0].clientY;
    const diff = startY - y;
    
    if (isScrolling === undefined) {
      isScrolling = Math.abs(diff) > Math.abs(e.touches[0].clientX - startY);
    }
    
    if (isScrolling) {
      if (diff > 0 && element.scrollTop === 0) {
        e.preventDefault();
      } else if (diff < 0 && element.scrollHeight - element.clientHeight === element.scrollTop) {
        e.preventDefault();
      }
    }
  };
  
  element.addEventListener('touchstart', handleTouchStart, { passive: true });
  element.addEventListener('touchmove', handleTouchMove, { passive: false });
  
  return {
    destroy: () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    }
  };
};