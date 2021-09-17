import Head from 'next/head'

const PostMeta = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
  )
}

export default PostMeta