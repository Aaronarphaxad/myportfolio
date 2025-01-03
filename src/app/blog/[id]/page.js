import { notFound } from 'next/navigation';
import posts from '@/data/posts.json';
import BlogImage from '@/components/BlogImage';

export default async function BlogPost({ params }) {
  const id = await params.id;
  const post = posts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <BlogImage
            src={post.author.profile_image}
            alt={post.author.name}
          />
        </div>
        <div>
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-sm text-gray-600">{post.author.bio}</p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-[16/9] w-full mb-8">
        <BlogImage
          src={post.image}
          alt={post.title}
          priority
        />
      </div>

      {/* Content Sections */}
      <div className="prose max-w-none">
        {/* Excerpt */}
        <p className="text-xl text-gray-600 mb-8">
          {post.excerpt}
        </p>

        {/* Sections */}
        {post.content.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>

      {/* Metadata */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Published: {new Date(post.published_date).toLocaleDateString()}</p>
          <p>Last updated: {new Date(post.last_updated).toLocaleDateString()}</p>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}
