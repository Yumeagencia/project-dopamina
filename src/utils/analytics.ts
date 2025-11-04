export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams);
    }

    if ((window as any).fbq) {
      (window as any).fbq('track', eventName, eventParams);
    }

    console.log(`Analytics Event: ${eventName}`, eventParams);
  }
};

export const analyticsEvents = {
  viewLanding: () => trackEvent('view_landing'),
  startTest: () => trackEvent('start_test'),
  completeTest: () => trackEvent('complete_test'),
  viewPayment: () => trackEvent('view_payment'),
  completePayment: () => trackEvent('complete_payment', { value: 9900, currency: 'PYG' }),
  skipPayment: () => trackEvent('skip_payment'),
  shareResult: () => trackEvent('share_result'),
};
