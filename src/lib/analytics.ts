declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, string | number>) {
  window.gtag?.("event", action, params);
}
