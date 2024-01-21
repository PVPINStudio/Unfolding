---
# https://vitepress.dev/reference/default-theme-home-page
layout: "home"
title: "概览"
hero:
  name: "Unfolding"
  text: "NMS  应用指南"
  tagline: "一起揭开 OBC 的层层面纱、\n共同廓清 NMS 的重重迷雾。"
  actions:
    - theme: "brand"
      text: "开始阅读"
      link: "/Volume0/1.html"
    - theme: "alt"
      text: "加入 QQ 群聊"
      link: "https://qm.qq.com/q/YIjsKs664s"
    - theme: "alt"
      text: "加入 DC 社区"
      link: "https://discord.gg/7jS7RsMBda"
  image:
    dark: "logo-dark.svg"
    light: "logo-light.svg"
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(135deg, #4e0075 50%, #9e0148 50%);
  --vp-home-hero-image-filter: blur(56px);
}

.VPHero.VPHomeHero {
  padding-top: 120px;
}

.image{
  padding-top: 40px;
}

.VPHomeHero .name{
  font-style: italic;
  font-size: 64px;
  font-weight: 600;
  line-height: 64px;
}

.VPHomeHero .text{
  font-size: 50px;
  font-weight: 800;
  line-height: 50px;
  padding-top: 30px;
}

.VPHomeHero .tagline{
  font-size: 20px;
  padding-top: 24px;
}
</style>