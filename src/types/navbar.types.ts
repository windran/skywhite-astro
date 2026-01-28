// src/types/navbar.types.ts

export interface MenuItem {
  name: string;
  path: string;
  icon: string;
  children?: MenuItem[];
  isExternal?: boolean;
  badge?: {
    text: string;
    color: string;
  };
}

export interface NavbarProps {
  initialPath?: string;
  initialLanguage?: 'ID' | 'EN';
  showCallCenter?: boolean;
  showLanguageSwitcher?: boolean;
  transparentOnTop?: boolean;
}

export interface NavbarState {
  isMenuOpen: boolean;
  isScrolled: boolean;
  activeDropdown: string | null;
  currentLanguage: 'ID' | 'EN';
  currentPath: string;
}

export interface DropdownEvent {
  type: 'open' | 'close' | 'select';
  target: string;
  data?: any;
}

export interface NavigationEvent {
  type: 'internal' | 'external';
  path: string;
  timestamp: number;
}