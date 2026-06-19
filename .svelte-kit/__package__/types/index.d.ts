export type DeviceType = "EDGE" | "HUB" | "ROUTER";
export interface CertificateData {
    id: string;
    displayName: string;
    deviceType: DeviceType;
    status: string;
    emissionDate: number;
    expirationDate: number;
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
export interface Network {
    networkId: string;
    name: string;
    description: string;
    location: string;
    active: boolean;
    edgeId: string;
}
export interface NetworkSummary extends Network {
    hubCount: number;
}
export interface Notification {
    id: number;
    type: string;
    description: string;
    active: boolean;
    createdAt: number;
}
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
