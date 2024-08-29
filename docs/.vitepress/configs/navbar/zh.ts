import { DefaultTheme } from "vitepress"
type NavItem = DefaultTheme.NavItem

export const navbarZh: NavItem[] = [
  {
    text: '指南',
    link: "/zh/guide/index.md"
  },
  {
    text: 'API',
    items: [
      {
        text: "登录（login）",
        link: "/zh/api/login.md"
      },
      {
        text: "扫码登录（auth）",
        link: "/zh/api/login-scan.md"
      },
      {
        text: "支付（requestPayment）",
        link: "/zh/api/request-payment.md"
      },
      {
        text: "分享（share）",
        link: "/zh/api/share.md"
      },
      {
        text: "打开小程序（launchMiniprogram）",
        link: "/zh/api/launch-miniprogram.md"
      },
      {
        text: "拉起微信客服（openCustomerServiceChat）",
        link: "/zh/api/open-customer-service-chat.md"
      },
    ],
  },
  {
    text: 'Capacitor/Ionic',
    link: "/zh/guide/capacitor.md"
  },
]