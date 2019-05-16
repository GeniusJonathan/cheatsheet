module.exports = {
  title: "Genius Jonathan",
  description: "Handy code snippets documented",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "CSS", link: "/css/" },
      { text: "Java", link: "/java/" }
    ],
    sidebar: {
      "/css/": [
        "" /* /css/ */,
        "grid-system" /* /css/grid-system.html */,
        "flexbox" /* /css/flexbox.html */
      ],
      "/java/": ["" /* /java/ */]
    }
  }
};
