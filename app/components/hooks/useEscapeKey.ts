import { useEffect } from 'react';

type UseEscapeKeyProps = {
  enabled: boolean;
  onClose: () => void;
};

export function useEscapeKey({ enabled, onClose }: UseEscapeKeyProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (enabled && event.key === 'Escape') {
        onClose();
      }
    };

    if (enabled) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [enabled, onClose]);
}
