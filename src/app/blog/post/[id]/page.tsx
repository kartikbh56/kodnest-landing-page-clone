'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  content: string;
  timestamp?: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // First check localStorage for the post
        const localPosts = JSON.parse(localStorage.getItem('localBlogPosts') || '[]');
        const localPost = localPosts.find((p: BlogPost) => p.id === Number(id));

        if (localPost) {
          setPost(localPost);
          setLoading(false);
          return;
        }

        // If not found locally, try fetching from WordPress API
        const response = await fetch(`https://www.kodnest.com/wp-json/wp/v2/posts/${id}`);
        if (!response.ok) throw new Error('Post not found');
        
        const data = await response.json();
        const formattedPost = {
          id: data.id,
          title: data.title.rendered,
          category: data.class_list[data.class_list.length - 1]
            .split("-")
            .slice(1)
            .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
          content: data.content.rendered,
          timestamp: data.date
        };
        
        setPost(formattedPost);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Error</h1>
          <p className="text-gray-600">{error || 'Post not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {typeof post.title === 'string' ? post.title : post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
            {post.timestamp && (
              <time dateTime={post.timestamp}>
                {formatDate(post.timestamp)}
              </time>
            )}
          </div>
        </header>

        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPostPage; 