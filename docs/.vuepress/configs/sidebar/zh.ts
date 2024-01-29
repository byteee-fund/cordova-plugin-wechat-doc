import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/': [
    {
      text: '指南',
      children: [
        'README.md',
        'quickstart.md',
        'errcode.md',
        'troubleshooting.md',
        'changelog.md',
        'thanks.md',
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      children: [
        '/api/has-installed.md',
        '/api/login.md',
        '/api/login-scan.md',
        '/api/request-payment.md',
        '/api/share.md',
        '/api/share-text.md',
        '/api/share-image.md',
        '/api/share-video.md',
        '/api/share-music.md',
        '/api/share-music-video.md',
        '/api/share-webpage.md',
        '/api/share-miniprogram.md',
        '/api/share-file.md',
        '/api/share-emotion.md',
        '/api/launch-wechat-app.md',
        '/api/launch-miniprogram.md',
        '/api/open-customer-service-chat.md',
        '/api/request-subscribe-message.md',
        '/api/choose-invoice-card.md',
        '/api/get-sdk-version.md',
        '/api/start-log.md',
        '/api/stop-log.md',
        '/api/check-universal-link.md',
      ],
    },
  ],
 
}