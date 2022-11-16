import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Node.js 学习指南',
    description: '构建 Node.js 知识体系',
    base:'/vue-next-i18n/',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    theme: defaultTheme({
      displayAllHeaders:true,
      logo: '/nodejs.svg',
      navbar:  [
          { text: '首页', link: '/' },
          { text: '仓库', link: 'https://github.com/aaronlamz/vue-next-i18n' },
      ],
      sidebar: {
          '/md/guide/': [
          {
            text: '基础入门',
            collapsible:false,
            children: [
              '/md/guide/basic/node-intro.md',
              '/md/guide/basic/basic-principle.md',
              '/md/guide/basic/module-mechanism.md',
            ],
          },
          {
            text: '系统模块',
            collapsible:false,
            children: [
              '/md/guide/system-module/globals.md',
              '/md/guide/system-module/fs.md',
              '/md/guide/system-module/buffer.md',
            ],
          },
        ],

      }
    }),
})

