import { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint: stamps the saved (or OS-preferred) theme on <html>
// so there is no flash of the wrong theme on load.
// Order of precedence: saved preference > ?theme= query param > OS preference.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark'){t=q;}else{t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="theme-color"
          content="#e9eae5"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#141615"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
