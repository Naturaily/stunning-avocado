import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

import { infoLogger } from '@natu/utils';

let warned = false;

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export interface GoogleTagManagerScriptProps {
  gtmID?: string;
}

// TODO add tests
export const GoogleTagManagerScript = ({ gtmID }: GoogleTagManagerScriptProps) => {
  const { events } = useRouter();

  useEffect(() => {
    const onRouteChangeComplete = (url: string) => {
      if (!gtmID) {
        return;
      }

      const dataLayer = window.dataLayer as Record<string, unknown>[] | undefined;
      dataLayer?.push({ event: 'pageview', page: url });
    };

    events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [events, gtmID]);

  if (!gtmID) {
    if (!warned) {
      infoLogger('[@natu/googletagmanager]: process.env.NEXT_PUBLIC_GTM_ID not found');
      warned = true;
    }

    return null;
  }

  return (
    <>
      <Script id={`gtm-${gtmID}`} strategy="afterInteractive">{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', '${gtmID}');
    `}</Script>
      <noscript>
        <iframe
          title={`gtm-${gtmID}`}
          src={`https://www.googletagmanager.com/ns.html?id=${gtmID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};
