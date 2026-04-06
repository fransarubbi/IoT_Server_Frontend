import type { ComponentType } from 'svelte';
type $$ComponentProps = {
    icon: ComponentType;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
};
declare const EmptyState: import("svelte").Component<$$ComponentProps, {}, "">;
type EmptyState = ReturnType<typeof EmptyState>;
export default EmptyState;
