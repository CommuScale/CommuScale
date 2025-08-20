// Core Web Vitals monitoring
(function() {
  'use strict';
  
  // Only run in production
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    return;
  }

  // Track Core Web Vitals
  function trackWebVital(name, value, id) {
    // Send to analytics (replace with your analytics service)
    console.log(`${name}: ${value} (${id})`);
    
    // Example: Send to Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        metric_id: id,
        metric_value: value,
        metric_delta: value,
      });
    }
  }

  // Performance Observer for Web Vitals
  if ('PerformanceObserver' in window) {
    // First Contentful Paint (FCP)
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          trackWebVital('FCP', entry.startTime, entry.name);
        }
      }
    }).observe({ type: 'paint', buffered: true });

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      trackWebVital('LCP', lastEntry.startTime, lastEntry.name);
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries = [];
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
      trackWebVital('CLS', clsValue, 'layout-shift');
    }).observe({ type: 'layout-shift', buffered: true });

    // First Input Delay (FID)
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        trackWebVital('FID', entry.processingStart - entry.startTime, entry.name);
      }
    }).observe({ type: 'first-input', buffered: true });
  }

  // Resource loading performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        trackWebVital('TTFB', navigation.responseStart, 'navigation');
        trackWebVital('Load', navigation.loadEventEnd, 'navigation');
      }
    }, 0);
  });
})();

