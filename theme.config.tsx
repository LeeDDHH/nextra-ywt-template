import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>My YWT</span>,
  project: {
    link: "https://github.com/LeeDDHH/nextra-ywt-template",
  },
  docsRepositoryBase: "https://github.com/LeeDDHH/nextra-ywt-template",
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="Content-Language" content="ja" />
        <meta name="apple-mobile-web-app-title" content="Nextra YWT" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="" /> */}
        {/* <meta property="og:url" content={`https://my-app.com${asPath}`} /> */}
        <meta property="og:title" content={frontMatter.title || "Nextra YWT"} />
        <meta
          property="og:description"
          content={frontMatter.description || "The next site builder"}
        />
      </>
    );
  },
  primaryHue: 48,
  footer: {
    text: "Nextra YWT Template",
  },
};

export default config;
