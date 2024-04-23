const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  output: 'export',
  titleSuffix: ' – 前端面试题',
})

module.exports = {...withNextra(), titleSuffix: ' – 前端面试题'}
