export const Send = () => {
  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '으아',
      description: '시험공부 시러어',
      imageUrl:
        'https://picsum.photos/400/450',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com'
      }
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://google.com',
          webUrl: 'https://google.com'
        }
      },
      {
        title: '앱으로 보기',
        link: {
            mobileWebUrl: 'https://google.com',
            webUrl: 'https://google.com'
        }
      }
    ]
  })
}
