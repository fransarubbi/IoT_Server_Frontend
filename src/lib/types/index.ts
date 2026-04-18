// =============================================================================
// Edge
// =============================================================================

/** Full Edge device configuration — matches the backend API contract. */
export interface Edge {
  edgeId: string
  name: string
  ubication: string
  hostServer: string
  port: string
  cn: string
  hostLocal: string
  dbPath: string
  bufferSize: number
  rustLog: 'Debug' | 'Info' | 'Error'
  maxAttempts: number
  frequencyPhase: number
  frequencySafeMode: number
  timeoutHandshake: number
  timeoutPhase: number
  timeoutSafeMode: number
  timeBetweenHeartbeatsBalanceMode: number
  timeBetweenHeartbeatsNormal: number
  timeBetweenHeartbeatsSafeMode: number

  /** Runtime fields — may or may not be returned by the backend. */
  status?: 'online' | 'offline' | 'warning'
  lastSeen?: string  // ISO 8601
}

// =============================================================================
// Network
// =============================================================================

/**
 * Lightweight network summary returned by GET /api/networks?edgeId=
 * Includes the hub count but not full hub details.
 */
export interface NetworkSummary {
  networkId: string
  name: string
  active: boolean
  edgeId: string
  hubCount: number
}

/**
 * Full network detail returned by GET /api/networks/detail?edgeId=
 */
export interface Network {
  networkId: string
  name: string
  active: boolean
  edgeId: string
}

// =============================================================================
// Hub
// =============================================================================

/** Hub device configuration — used both for reading and writing settings. */
export interface HubSettings {
  hubId: string
  deviceName: string
  wifiSsid: string
  wifiPassword: string
  mqttUri: string
  /** Sampling interval in minutes */
  sample: string
  energyMode: string
  networkId?: string
}

// =============================================================================
// Notification
// =============================================================================

/** Active notification from the field devices. */
export interface Notification {
  /** Numeric ID used in the PATCH /read endpoint */
  id: number
  type: 'info' | 'warning' | 'error' | 'success'
  description: string
  edgeId: string
  createdAt: string  // ISO 8601
}

// =============================================================================
// Certificate
// =============================================================================

/** Certificate record as stored in the backend history table. */
export interface CertificateData {
  id: string
  displayName: string
  deviceType: string
  commonName?: string
  organization?: string
  country?: string
  status: 'valid' | 'expired' | 'revoked'
  issuedAt: string   // ISO 8601
  expiresAt: string  // ISO 8601
}

/** Payload for POST /api/certificates/generate */
export interface CertificateRequest {
  displayName: string
  deviceType: string
  commonName: string
  organization: string
  country: string
  sanDomain: string
  validityDays: number
}

// =============================================================================
// Firmware (UI-only, no backend endpoint yet)
// =============================================================================

export interface Firmware {
  id: string
  name: string
  version: string
  size: string
  uploadedAt: Date
  status: 'available' | 'deploying' | 'deprecated'
  targetDevices: string[]
  checksum: string
}
