/**
 * By default, the browser will compress multiple whitespace characters
 * into one and then display a narrow whitespace. That causes trouble if
 * we want to use space to separate ordinals and titles. (For example,
 * 'ChapterI      Title' will be compressed into 'ChapterI Title'.)
 * When it comes to preserving the width of the spaces, there are 3 ways.
 * 1. Use the 'white-space' CSS property, but that leads to unexpected
 * behavior in vitepress. There will be no auto line breaks, and thus
 * every paragraph will appear as an incredibly long line.
 * 2. Use the '<pre>' tag to wrap the spaces. The tag itself comes with a
 * linebreak, thus messing up the sidebar.
 * 3. Hardcode '&nbsp;' as a substitute for normal whitespace characters.
 * Despite the unpleasant appearance, it works.
 */

export const sidebar = [
  {
    text: "卷首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首序",
    items: [
      { text: "卷首上&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;圣谕", link: "Volume0/1.md" },
      { text: "卷首中&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进表", link: "Volume0/2.md" },
      { text: "卷首下&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职名", link: "Volume0/3.md" },
    ],
  },
  {
    text: "卷一&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务端",
    items: [
      { text: "第一篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开发用的工具", link: "/Volume1/1.md" },
      { text: "第二篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务端的由来", link: "/Volume1/2.md" },
      { text: "第三篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;源代码的体裁", link: "/Volume1/3.md" },
      { text: "第四篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;兼容性的保证", link: "/Volume1/4.md" },
      { text: "第五篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接口类的实现", link: "/Volume1/5.md" },
      { text: "第六篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工具链的介绍", link: "/Volume1/6.md" },
      { text: "第七篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重混淆的沿革", link: "/Volume1/7.md" },
      { text: "第八篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版本差的弥合（上）", link: "/Volume1/8.md" },
      { text: "第九篇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版本差的弥合（下）", link: "/Volume1/9.md" },
    ],
  },
];
