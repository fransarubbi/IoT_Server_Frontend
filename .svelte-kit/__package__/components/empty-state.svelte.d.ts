import type { ComponentType, Snippet } from 'svelte';
type $$ComponentProps = {
    icon: ComponentType;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    children?: Snippet;
};
declare const EmptyState: import("svelte").Component<$$ComponentProps, {}, "">;
type EmptyState = ReturnType<typeof EmptyState>;
export default EmptyState;
