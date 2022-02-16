export const socialMedias: SocialMedia[] = [
  {
    id: 1,
    name: 'facebook',
    url: '#',
    image_url: '/facebook.svg',
  },
  {
    id: 1,
    name: 'instagram',
    url: '#',
    image_url: '/instagram.svg',
  },
  {
    id: 1,
    name: 'whatsapp',
    url: '#',
    image_url: '/whatsapp.svg',
  }
]

export interface SocialMedia {
  id: number,
  name: string,
  url: string,
  image_url: string,
}