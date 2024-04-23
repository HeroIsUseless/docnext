import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="前端面试题" />
      <meta property="og:description" content="前端面试题" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 前端面试题'
    }
  },
  logo: <span>前端面试题</span>,
  project: {
    link: 'https://github.com/HeroIsUseless/docnext',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/HeroIsUseless/docnext',
  footer: {
    text: 'front-interview.com',
  },
}

export default config
