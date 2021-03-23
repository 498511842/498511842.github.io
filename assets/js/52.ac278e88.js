(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{561:function(s,e,a){"use strict";a.r(e);var t=a(7),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[s._v("#")]),s._v(" 是什么")]),s._v(" "),a("p",[s._v("VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。")]),s._v(" "),a("p",[s._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")]),s._v(" "),a("p",[s._v("事实上，一个 VuePress 网站是一个由 Vue (opens new window)、Vue Router (opens new window)和 webpack (opens new window)驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。")]),s._v(" "),a("p",[s._v("在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 Nuxt (opens new window)的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby")]),s._v(" "),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("前提条件")]),s._v(" "),a("p",[s._v("VuePress 需要 Node.js (opens new window)>= 8.6")])]),a("p",[s._v("本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。")]),s._v(" "),a("p",[s._v("1.创建并进入一个新目录")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("mkdir vuepress-starter && cd vuepress-starter\n")])])]),a("p",[s._v("2.使用你喜欢的包管理器进行初始化")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("yarn init # npm init\n")])])]),a("p",[s._v("3.将 VuePress 安装为本地依赖\n已经不再推荐全局安装 VuePress")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("yarn add -D vuepress # npm install -D vuepress\n")])])]),a("p",[s._v("4.创建你的第一篇文档")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("mkdir docs && echo '# Hello VuePress' > docs/README.md\n")])])]),a("p",[s._v("5.在 package.json 中添加一些 scripts(opens new window)\n这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('{\n"scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n    }\n}\n')])])]),a("p",[s._v("6.在本地启动服务器")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("yarn docs:dev # npm run docs:dev\n")])])]),a("p",[s._v("VuePress 会在 "),a("code",[s._v("http://localhost:8080")]),s._v(" (opens new window)启动一个热重载的开发服务器。")]),s._v(" "),a("p",[s._v("现在，你应该已经有了一个简单可用的 VuePress 文档。")]),s._v(" "),a("p",[s._v("接下来，了解一下推荐的 目录结构 和 VuePress 中的 基本配置。")]),s._v(" "),a("p",[s._v("等你了解完上文介绍的基础概念，再去学习一下如何使用 静态资源，Markdown 拓展 和 在 Markdown 中使用 Vue 来丰富你的文档内容。")]),s._v(" "),a("p",[s._v("当你的文档逐渐成型的时候，不要忘记 VuePress 的 多语言支持 并了解一下如何将你的文档 部署 到任意静态文件服务器上。")])])}),[],!1,null,null,null);e.default=n.exports}}]);