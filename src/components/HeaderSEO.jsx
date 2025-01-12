// components/Seo.js
'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'

export function Seo({
  title,
  description,
  image,
  url,
  pixelId,
  gaId,
  twitterCard = 'summary_large_image',
  fbAppId = null,
  googleVerificationCode
}) {
  useEffect(() => {
    // Initialize Facebook Pixel if provided
    if (pixelId) {
      import('react-facebook-pixel')
        .then((module) => {
          const ReactPixel = module.default
          ReactPixel.init(pixelId, undefined, { autoConfig: true })
          ReactPixel.track('PageView')
        })
    }

    // Initialize Google Analytics if provided
    if (gaId) {
      window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
      }
      ga.l = +new Date()
      ga('create', gaId, 'auto')
      ga('send', 'pageview')
    }
  }, [pixelId, gaId])

  return (
    <>
      <Head>
        {/* Basic Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        {/* Page Title */}
        <title>{title || 'Default Title'}</title>
        <meta name="description" content={description || 'Default Description'} />

        {/* Google Search Console Verification */}
        {googleVerificationCode && (
          <meta
            name="google-site-verification"
            content={googleVerificationCode}
            
            
          />
        )}

        {/* Open Graph Tags (for Facebook and LinkedIn Sharing) */}
        <meta property="og:title" content={title || 'Default Title'} />
        <meta property="og:description" content={description || 'Default Description'} />
        <meta property="og:image" content={image || 'https://youman.one/_next/image?url=%2Fimages%2Fyouman_logo.png&w=1080&q=75'} />
        <meta property="og:url" content={url || window.location.href} />
        <meta property="og:type" content="website" />
        {fbAppId && <meta property="fb:app_id" content={fbAppId} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title || 'Default Title'} />
        <meta name="twitter:description" content={description || 'Default Description'} />
        <meta name="twitter:image" content={image || 'https://youman.one/_next/image?url=%2Fimages%2Fyouman_logo.png&w=1080&q=75'} />

        {/* Google Analytics */}
        {gaId && (
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        )}
      </Head>

      {/* Facebook Pixel Script */}
      {pixelId && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          src={`https://connect.facebook.net/en_US/fbevents.js`}
        />
      )}
    </>
  )
}
