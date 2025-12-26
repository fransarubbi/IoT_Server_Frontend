// src/lib/types.ts

export type PageType = 'networks' | 'certificates' | 'firmware' | 'notifications';

export type Theme = 'light' | 'dark';

export interface Networks {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  devices: number;
  lastUpdate: Date;
}

export interface Certificate {
  id: string;
  name: string;
  type: string;
  expirationDate: Date;
  status: 'valid' | 'expiring' | 'expired';
}

export interface Firmware {
  id: string;
  version: string;
  releaseDate: Date;
  devices: number;
  size: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  timestamp: Date;
  read: boolean;
}