import { DefaultTheme } from "vitepress"
type Sidebar = DefaultTheme.Sidebar

export const sidebarEn: Sidebar = {
  '/guide': [
    {
      text: 'Guide',
      items: [
        {text: "About", link: "/guide/index.md"},
        {text: "Quickstart", link: "/guide/quickstart.md"},
        {text: "Capacitor/Ionic", link: "/guide/capacitor.md"},
        {text: "Troubleshooting", link: "/guide/troubleshooting.md"},
        {text: "Errcode", link: "/guide/errcode.md"},
        {text: "Changelog", link: "/guide/changelog.md"},
        {text: "Thanks", link: "/guide/thanks.md"}
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      items: [
        {
          text: "IsWXAppInstalled",
          link: "/api/has-installed.md"
        },
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
          text: "ShareText",
          link: "/api/share-text.md"
        },
        {
          text: "ShareWebpage",
          link: "/api/share-webpage.md"
        },
        {
          text: "ShareFile",
          link: "/api/share-file.md"
        },
        {
          text: "ShareImage",
          link: "/api/share-image.md"
        },
        {
          text: "ShareMiniProgram",
          link: "/api/share-miniprogram.md"
        },
        {
          text: "ShareMusic",
          link: "/api/share-music.md"
        },
        {
          text: "ShareMusicVideo",
          link: "/api/share-music-video.md"
        },
        {
          text: "ShareVideo",
          link: "/api/share-video.md"
        },
        {
          text: "ShareMotion",
          link: "/api/share-emotion.md"
        },
        {
          text: "LaunchMiniprogram",
          link: "/api/launch-miniprogram.md"
        },
        {
          text: "OpenCustomerServiceChat",
          link: "/api/open-customer-service-chat.md"
        },
        {text: "LaunchWechatApp", link: "/api/launch-wechat-app.md"},
        {text: "RequestSubscribeMessage", link: "/api/request-subscribe-message.md"},
        {text: "ChooseInvoiceCard", link: "/api/choose-invoice-card.md"},
        {text: "CheckUniversalLinkReady", link: "/api/check-universal-link.md"},
        {text: "GetSDKVersion", link: "/api/get-sdk-version.md"},
        {text: "StartLog", link: "/api/start-log.md"},
        {text: "StopLog", link: "/api/stop-log.md"},
      ],
    },
  ],

}