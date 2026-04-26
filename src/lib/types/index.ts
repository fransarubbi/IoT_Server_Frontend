// --- CERTIFICADOS ---
export type DeviceType = "EDGE" | "HUB" | "ROUTER";

export interface CertificateData {
  id: string; // UUID
  displayName: string;
  deviceType: DeviceType;
  status: string; // Ej: "VALID", "REVOKED", "EXPIRED"
  emissionDate: number; // UNIX Timestamp ms
  expirationDate: number; // UNIX Timestamp ms
  privateKeyPem: string;
  certificatePem: string;
}

export interface CertificateRequest {
  displayName: string;
  deviceType: DeviceType;
  commonName: string;
  organization: string;
  country: string;
  sanDomain: string;
  validityDays: number;
}

// --- EDGES ---
export interface Edge {
  edgeId: string;
  name: string;
  location: string;
  cn: string;
  hostServer: string;
  hostPort: number;
  hostLocal: string;
  dataBasePath: string;
  bufferLength: number;
  logLevel: "DEBUG" | "INFO" | "WARN";
  maxNumberHandshakeAttempts: number;
  frequencyMessagesPhase: number;
  frequencyMessagesSafeMode: number;
  handshakeTimeLimit: number;
  phaseTimeLimit: number;
  safeModeTimeLimit: number;
  heartbeatBalanceModeTime: number;
  heartbeatNormalTime: number;
  heartbeatSafeModeTime: number;
}

// --- HUBS ---
export interface HubSettings {
  hubId: string;
  networkId: string;
  deviceName: string;
  wifiSsid: string;
  wifiPassword: string;
  mqttUri: string;
  sample: number;
  energyMode: number;
}

// --- NETWORKS ---
export interface Network {
  networkId: string;
  name: string;
  description: string;
  location: string;
  active: boolean;
  edgeId: string;
}

export interface NetworkSummary extends Network {
  hubCount: number; // Agregado en el DTO de lectura
}

// --- NOTIFICATIONS ---
export interface Notification {
  id: number; // Long
  type: string; // "INFO", "WARNING", "ERROR"
  description: string;
  active: boolean;
  createdAt: number; // UNIX Timestamp
}

// --- FIRMWARE (UI-only) ---
export interface Firmware {
  id: string;
  name: string;
  version: string;
  size: string;
  uploadedAt: Date;
  status: 'available' | 'deploying' | 'deprecated';
  targetDevices: string[];
  checksum: string;
}
