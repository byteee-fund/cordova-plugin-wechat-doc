import { DefaultTheme } from "vitepress"
type Sidebar = DefaultTheme.Sidebar

export const sidebarZh: Sidebar = {
  '/zh/guide/': [
    {
      text: '指南',
      items: [
        {text: "关于", link: "/zh/guide/index.md"},
        {text: "快速开始", link: "/zh/guide/quickstart.md"},
        {text: "Capacitor/Ionic", link: "/zh/guide/capacitor.md"},
        {text: "常见问题", link: "/zh/guide/troubleshooting.md"},
        {text: "错误码", link: "/zh/guide/errcode.md"},
        {text: "更新日志", link: "/zh/guide/changelog.md"},
        {text: "特别鸣谢", link: "/zh/guide/thanks.md"}
      ],
    },
  ],
  '/zh/api/': [
    {
      text: 'API',
      items: [
        {
          text: "是否安装（isWXAppInstalled）",
          link: "/zh/api/has-installed.md"
        },
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
          text: "分享文本（ShareText）",
          link: "/zh/api/share-text.md"
        },
        {
          text: "分享网页（ShareWebpage）",
          link: "/zh/api/share-webpage.md"
        },
        {
          text: "分享文件（ShareFile）",
          link: "/zh/api/share-file.md"
        },
        {
          text: "分享图片（ShareImage）",
          link: "/zh/api/share-image.md"
        },
        {
          text: "分享小程序（ShareMiniProgram）",
          link: "/zh/api/share-miniprogram.md"
        },
        {
          text: "分享音乐（ShareMusic）",
          link: "/zh/api/share-music.md"
        },
        {
          text: "分享音乐视频（ShareMusicVideo）",
          link: "/zh/api/share-music-video.md"
        },
        {
          text: "分享视频（ShareVideo）",
          link: "/zh/api/share-video.md"
        },
        {
          text: "分享表情（ShareMotion）",
          link: "/zh/api/share-emotion.md"
        },
        {
          text: "打开小程序（launchMiniprogram）",
          link: "/zh/api/launch-miniprogram.md"
        },
        {
          text: "拉起微信客服（openCustomerServiceChat）",
          link: "/zh/api/open-customer-service-chat.md"
        },
        {text: "打开微信APP（LaunchWechatApp)", link: "/zh/api/launch-wechat-app.md"},
        {text: "一次性订阅消息（RequestSubscribeMessage)", link: "/zh/api/request-subscribe-message.md"},
        {text: "选择发票（ChooseInvoiceCard)", link: "/zh/api/choose-invoice-card.md"},
        {text: "检查UniversalLink配置（CheckUniversalLinkReady)", link: "/zh/api/check-universal-link.md"},
        {text: "获取版本号（getSDKVersion）", link: "/zh/api/get-sdk-version.md"},
        {text: "开始日志（startLog）", link: "/zh/api/start-log.md"},
        {text: "停止日志（stopLog）", link: "/zh/api/stop-log.md"},
      ],
    },
  ],

}