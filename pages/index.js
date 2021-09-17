import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'

const root = process.cwd()

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(root, 'pages/posts'))

  const posts = files.map(file => {
    const slug = file.replace('.mdx', '')
    const content = fs.readFileSync(root + '/pages/posts/' + file, 'utf-8')

    const {data: front} = matter(content)

    return {
      slug,
      front
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default function Home({posts}) {
  // console.log(posts)
  return (
    <div>
      <h1>Hello from Hompage</h1>
      <ul>
        {posts.map((post, meta) => (
          <li key={post.slug}><Link href={'/posts/' + post.slug}><a>{meta.title}</a></Link></li>
        ))}
      </ul>
    </div>
  )
}
