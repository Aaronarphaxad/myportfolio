import Link from 'next/link';
import posts from '@/data/posts.json';
import BlogImage from '../../components/BlogImage';

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-12 text-center">Latest Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="group h-full">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative aspect-[16/10] w-full">
                <BlogImage
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3 text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <BlogImage
                      src={post.author.profile_image}
                      alt={post.author.name}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">{post.author.name}</p>
                    <p>{new Date(post.published_date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
