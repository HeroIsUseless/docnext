import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <meta name="title" content="前端面试题" />   
      <meta name="description" content="前端面试题网站是一个专为前端开发者设计的资源平台，提供全面、最新的前端面试题库和答案解析。无论你是初学者还是资深开发者，这里都有适合你的练习题目和面试技巧。涵盖HTML、CSS、JavaScript、React、Vue等热门技术栈，帮助你全面提升面试技巧，轻松应对各类前端面试挑战。"/>
      <meta name="keywords" content="前端面试题,面试题,HTML面试题,前端面试题分享,前端面试题汇总,前端面试题精选,前端面试题目,前端面试题答案,前端面试题解析,前端面试经验,前端面试指南,前端面试常见问题,前端工程师面试,Vue面试题,React面试题,JavaScript面试题,CSS面试题,前端面试技巧,前端面试准备,前端面试题库,前端开发面试,js前端面试题,面试,面试技巧,前端开发,HTML,CSS,JavaScript,React,Vue" />

      <meta property="og:title" content="前端面试题" />
      <meta property="og:description" content="前端面试题网站是一个专为前端开发者设计的资源平台，提供全面、最新的前端面试题库和答案解析。无论你是初学者还是资深开发者，这里都有适合你的练习题目和面试技巧。涵盖HTML、CSS、JavaScript、React、Vue等热门技术栈，帮助你全面提升面试技巧，轻松应对各类前端面试挑战。" />
      <meta property="og:keywords" content="前端面试题,面试题,HTML面试题,前端面试题分享,前端面试题汇总,前端面试题精选,前端面试题目,前端面试题答案,前端面试题解析,前端面试经验,前端面试指南,前端面试常见问题,前端工程师面试,Vue面试题,React面试题,JavaScript面试题,CSS面试题,前端面试技巧,前端面试准备,前端面试题库,前端开发面试,js前端面试题,面试,面试技巧,前端开发,HTML,CSS,JavaScript,React,Vue" />
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
