export type Link = {
  objectType: 'feed'
  content: LinkContent
  social?: LinkSocial
  buttons?: Array<LinkButton>
}

export type LinkContent = {
  title: string
  description: string
  imageUrl: string
  link: {
    mobileWebUrl?: string
    webUrl: string
  }
}

export type LinkSocial = {
  likeCount?: number
  commentCount?: number
  sharedCount?: number
}

export type LinkButton = {
  title: '앱으로 보기'
  link: {
    mobileWebUrl: 'https://google.com'
    webUrl: 'https://google.com'
  }
}
