export function trackEvent(eventName, data = {}) {
  if (typeof window === 'undefined') return;

  try {
    const existing = JSON.parse(window.localStorage.getItem('portfolio-events') || '[]');
    const payload = {
      event: eventName,
      path: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...data,
    };
    window.localStorage.setItem('portfolio-events', JSON.stringify([...existing, payload].slice(-25)));
  } catch {
    // Privacy-safe local event logging for future analytics integration.
  }
}
