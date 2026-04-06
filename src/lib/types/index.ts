export interface Edge {
  id_edge: string
  name: string
  ubication: string
  host_server: string
  host_port: string
  cn: string
  host_local: string
  db_path: string
  buffer_size: number
  rust_log: "Debug" | "Info" | "Error"
  max_attempts: number
  frequency_phase: number
  frequency_safe_mode: number
  timeout_handshake: number
  timeout_phase: number
  timeout_safe_mode: number
  time_between_heartbeats_balance_mode: number
  time_between_heartbeats_normal: number
  time_between_heartbeats_safe_mode: number
  
  // Non-editable dashboard functional fields
  status: "online" | "offline" | "warning"
  lastSeen: Date
  networks: Network[]
}

export interface Network {
  id: string
  description: string
  ubication: string
  edgeId: string
  status: "active" | "inactive"
  devices: number
  hubs: Hub[]
}

export interface Hub {
  id: string
  network: string
  wifi_ssid: string
  wifi_password: string
  mqtt_uri: string
  device_name: string
  sample: string
  energy_mode: string
}

export interface Certificate {
  id: string
  name: string
  type: "client" | "server" | "ca"
  status: "valid" | "expired" | "revoked"
  issuedAt: Date
  expiresAt: Date
  fingerprint: string
}

export interface Notification {
  id: string
  type: "info" | "warning" | "error" | "success"
  title: string
  message: string
  timestamp: Date
  read: boolean
}

export interface Firmware {
  id: string
  name: string
  version: string
  size: string
  uploadedAt: Date
  status: "available" | "deploying" | "deprecated"
  targetDevices: string[]
  checksum: string
}
