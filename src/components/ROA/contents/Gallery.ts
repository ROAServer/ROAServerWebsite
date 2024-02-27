type ImageTag = '其他' | '联谊活动' | '新春活动' | '日常照片' | '风景'

export {ImageTag}

const ImageTagList: ImageTag[] = ['联谊活动','新春活动','日常照片','风景','其他']

type ImageWithTags = {
  title: string,
  tags: ImageTag[],
  src: string,
  smallSizeSrc?: string
  describe?: string,
  date?: string
}

const GalleryImages: ImageWithTags[] = [
  {
    title: '雨林建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/12/Lm5UhD.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/12/Lm5UhD.md.png'
  },
  {
    title: '2022春节合照',
    tags: ['新春活动'],
    src: 'https://s1.ax1x.com/2022/04/12/LmhRVf.jpg',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/12/LmhRVf.md.jpg'
  },
  {
    title: '雨林建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/LuLlTJ.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/LuLlTJ.md.png'
  },
  {
    title: '出生点建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/12/Lm5d9e.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/12/Lm5d9e.md.png'
  },
  {
    title: 'WC服务器',
    tags: ['联谊活动'],
    src: 'https://s1.ax1x.com/2022/04/13/LuLUOO.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/LuLUOO.md.png'
  },
  {
    title: 'WC服务器',
    tags: ['联谊活动'],
    src: 'https://s1.ax1x.com/2022/04/13/LuLsfI.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/LuLsfI.md.png'
  },
  {
    title: '雨林建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/LuLj74.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/LuLj74.md.png'
  },
  {
    title: '2022春节',
    tags: ['新春活动'],
    src: 'https://s1.ax1x.com/2022/04/12/LmhOaT.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/12/LmhOaT.md.png'
  },
  {
    title: '一周年合照',
    tags: ['其他'],
    src: 'https://s1.ax1x.com/2022/04/12/Lm4FZ6.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/12/Lm4FZ6.md.png'
  },
  {
    title: '22春节广场',
    tags: ['日常照片', '新春活动'],
    src: 'https://s1.ax1x.com/2022/04/13/LKiVfO.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/LKiVfO.md.png'
  },
  {
    title: '末地建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/LKPNe1.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/LKPNe1.md.png'
  },
  {
    title: '雨林建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/Lu6IHS.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/Lu6IHS.md.png'
  },
  {
    title: '出生点建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/Lu66tH.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/Lu66tH.md.png'
  },
  {
    title: '出生点建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/Lu6yAe.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/Lu6yAe.md.png'
  },
  {
    title: '风景',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/Lu6r7D.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/Lu6r7D.png'
  },
  {
    title: '太阳花田',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/Lu6D0O.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/Lu6D0O.md.png'
  },
  {
    title: '出生点建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/Lu6BnK.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/Lu6BnK.md.png'
  },
  {
    title: '出生点建筑',
    tags: ['风景'],
    src: 'https://s1.ax1x.com/2022/04/13/Lu6wX6.png',
    smallSizeSrc: 'https://s1.ax1x.com/2022/04/13/Lu6wX6.md.png'
  }
]

export {ImageTagList, GalleryImages}