'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Extend Window interface to include ConsentManager's properties
declare global {
  interface Window {
    __cmp?: (command: string, parameter?: any, callback?: Function) => void;
    cmpConfig?: {
      uiSettings: any;
      [key: string]: any;
    };
  }
}

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if consent was previously given
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      setConsent(storedConsent === 'true');
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setConsent(true);
    
    // If using ConsentManager's API
    if (window.cmpConfig && window.cmpConfig.uiSettings && window.__cmp) {
      window.__cmp('acceptAll');
    }
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setConsent(false);
    
    // If using ConsentManager's API
    if (window.cmpConfig && window.cmpConfig.uiSettings && window.__cmp) {
      window.__cmp('rejectAll');
    }
  };

  return (
    <>
      {/* Consent Manager Script - loaded for everyone */}
      <Script
        id="consent-manager"
        strategy="beforeInteractive"
        type="text/javascript"
        data-cmp-ab="1" 
        src="https://cdn.consentmanager.net/delivery/autoblocking/a5895374824c6.js" 
        data-cmp-host="a.delivery.consentmanager.net" 
        data-cmp-cdn="cdn.consentmanager.net" 
        data-cmp-codesrc="0"
      />

      {/* Show our custom consent banner if ConsentManager hasn't shown its UI yet and we don't have stored consent */}
      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-obvsly-darker/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-display mb-2">Cookie Consent</h3>
                <p className="text-white/70 text-sm">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                </p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleDeclineCookies}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md text-white font-display text-sm uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all duration-300 ease-in-out"
                >
                  Decline
                </button>
                <button 
                  onClick={handleAcceptCookies}
                  className="px-4 py-2 bg-black border-2 border-neon-pink text-white font-display text-sm uppercase tracking-wider hover:shadow-neon transition-all duration-300 ease-in-out"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Google Analytics - only loaded if consent is given */}
      {consent === true && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-RQW98M0DPV"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RQW98M0DPV');
            `}
          </Script>
        </>
      )}
    </>
  );
} 