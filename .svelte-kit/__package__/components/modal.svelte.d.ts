import type { Snippet } from 'svelte';
interface Props {
    children: Snippet;
    open?: boolean;
    title: string;
    onClose: () => void;
}
declare const Modal: import("svelte").Component<Props, {}, "">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
