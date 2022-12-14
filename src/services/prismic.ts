import Prismic from '@prismicio/client'

export default function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client('https://nextjs-blog-infnet.cdn.prismic.io/api/v2', {
    req,
  })

  return prismic;
}