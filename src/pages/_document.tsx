import { Html, Head, Main, NextScript } from "next/document";

// Before first paint: mark JS available (gates scroll-reveal hidden state) and
// stamp the saved / OS-preferred theme so there is no flash.
const bootScript = `(function(){try{document.documentElement.classList.add('js');var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark'){t=q;}else{t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="theme-color"
          content="#f5f2ea"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0f0e13"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
