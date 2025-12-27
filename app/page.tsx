import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        André Teodósio
      </h1>
      <p className="mb-8">
        {`Hi! I'm André Teodósio, a software engineer specializing in building exceptional
         digital experiences. Welcome to my personal website where I share my projects,
         blog posts, and more about my journey in tech.`}
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tighter">
        Fun facts about me: </h2>
        <ul className="list-disc list-inside mt-2">
          <li>🚀 Funfact n1</li>
          <li>🎓 Funfact n2</li>
        </ul>
      </div>
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tighter">
        A quick look at my latest blog posts
      </h2>
      <div className="my-8">
        <BlogPosts limit={3} />
      </div>
    </section>
  )
}
