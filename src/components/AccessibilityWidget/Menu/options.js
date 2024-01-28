export const optionGroups = [
  {
    name: "content",
    options: [
      {
        name: "highlight-links",
        addsBodyClass: true,
      },
      {
        name: "letter-spacing",
        addsBodyClass: true,
      },
      {
        name: "line-height",
        addsBodyClass: true,
      },
      {
        name: "font-weight",
        addsBodyClass: true,
      },
      {
        name: "highlight-title",
        addsBodyClass: true,
      },
      {
        name: "dyslexia-font",
        addsBodyClass: true,
      },
    ],
  },
  {
    name: "color",
    options: [
      {
        name: "dark-contrast",
        addsBodyClass: true,
      },
      {
        name: "light-contrast",
        addsBodyClass: true,
      },
      {
        name: "high-contrast",
        addsHtmlClass: true,
      },
      {
        name: "high-saturation",
        addsHtmlClass: true,
      },
      {
        name: "low-saturation",
        addsHtmlClass: true,
      },
      {
        name: "monochrome",
        addsHtmlClass: true,
      },
    ],
  },
  {
    name: "tools",
    options: [
      {
        name: "stop-animations",
        addsBodyClass: true,
      },
      {
        name: "big-cursor",
        extraClass: "js-big-cursor-button",
      },
    ],
  },
];
