import { DefaultTheme } from "vitepress"
type NavItem = DefaultTheme.NavItem

export const navbarEn: NavItem[] = [
  {
    text: 'Guide',
    link: "/guide"
  },
  {
    text: 'API',
    items: [
      {
        text: "Login",
        link: "/api/login.md"
      },
      {
        text: "Auth",
        link: "/api/login-scan.md"
      },
      {
        text: "RequestPayment",
        link: "/api/request-payment.md"
      },
      {
        text: "Share",
        link: "/api/share.md"
      },
      {
        text: "LaunchMiniprogram",
        link: "/api/launch-miniprogram.md"
      },
      {
        text: "OpenCustomerServiceChat",
        link: "/api/open-customer-service-chat.md"
      },
    ],
  },
  {
    text: 'Capacitor/Ionic',
    link: "/guide/capacitor.md"
  },
]