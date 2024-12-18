'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  content: string;
}

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.kodnest.com/wp-json/wp/v2/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost({
          id: data.id,
          title: data.title.rendered,
          category: data.class_list[data.class_list.length - 1]
            .split("-")
            .slice(1)
            .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
          content: data.content.rendered
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog post:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <div className="max-w-4xl mx-auto px-4 py-8 mt-20">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-8">
        {post.category}
      </span>
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPostPage; 