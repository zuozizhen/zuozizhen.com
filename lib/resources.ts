export type Resource = {
  href: string;
  badgeText: string;
  title: string;
  buttonText: string;
  className: string;
};

export const resources: Resource[] = [
  {
    href: "https://afdian.com/item/40d6ab9a3a9111ee96535254001e7c00",
    badgeText: "¥12",
    title: "极简简历模版包",
    buttonText: "获取 ->",
    className: "cv"
  },
  {
    href: "https://arlogrey.lemonsqueezy.com/checkout/buy/0c70f01e-b150-4175-b286-ed21ee5a57b6",
    badgeText: "免费",
    title: "Notion 极简简历模版",
    buttonText: "获取 ->",
    className: "cv-notion"
  },
  {
    href: "https://arlogrey.lemonsqueezy.com/checkout/buy/a8c1d2ff-7a1c-41e8-a6b7-3b38c3ec60ad",
    badgeText: "免费",
    title: "Figma 极简简历模版",
    buttonText: "获取 ->",
    className: "cv-figma-free"
  },
  {
    href: "https://www.notion.so/zh-cn/templates/personal-year-end-summary",
    badgeText: "免费",
    title: "Notion 个人年终总结模版",
    buttonText: "获取 ->",
    className: "year-end-notion"
  }
];
