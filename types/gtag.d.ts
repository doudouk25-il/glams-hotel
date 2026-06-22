// Type declaration for window.gtag (Google Tag / Consent Mode V2)
interface Window {
  gtag: (
    command: "consent" | "config" | "event" | "js" | "set",
    action: string | Date,
    params?: Record<string, unknown>
  ) => void;
  dataLayer: unknown[];
}
