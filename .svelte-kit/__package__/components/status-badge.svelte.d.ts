type $$ComponentProps = {
    status: 'online' | 'offline' | 'warning' | 'active' | 'inactive' | 'valid' | 'expired' | 'revoked' | 'available' | 'deploying' | 'deprecated';
    size?: 'sm' | 'md';
};
declare const StatusBadge: import("svelte").Component<$$ComponentProps, {}, "">;
type StatusBadge = ReturnType<typeof StatusBadge>;
export default StatusBadge;
