export interface Edge {
    id: string;
    name: string;
    status: "online" | "offline" | "warning";
    location: string;
    lastSeen: Date;
    networks: Network[];
}
export interface Network {
    id: string;
    name: string;
    edgeId: string;
    subnet: string;
    gateway: string;
    status: "active" | "inactive";
    devices: number;
    hubs: Hub[];
}
export interface Hub {
    id: string;
    network: string;
    wifi_ssid: string;
    wifi_password: string;
    mqtt_uri: string;
    device_name: string;
    sample: string;
    energy_mode: string;
}
export interface Certificate {
    id: string;
    name: string;
    type: "client" | "server" | "ca";
    status: "valid" | "expired" | "revoked";
    issuedAt: Date;
    expiresAt: Date;
    fingerprint: string;
}
export interface Notification {
    id: string;
    type: "info" | "warning" | "error" | "success";
    title: string;
    message: string;
    timestamp: Date;
    read: boolean;
}
export interface Firmware {
    id: string;
    name: string;
    version: string;
    size: string;
    uploadedAt: Date;
    status: "available" | "deploying" | "deprecated";
    targetDevices: string[];
    checksum: string;
}
