'use client';
import React, { useState, useMemo } from 'react';
import TipTapEditor from '@/components/TipTapEditor';
import { useRouter } from 'next/navigation';

const BlogCreate = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  // Check if form is valid
  const isFormValid = useMemo(() => {
    return title.trim() !== '' && 
           category.trim() !== '' && 
           content.trim() !== '' &&
           content !== '<p></p>'; // Check for empty editor content
  }, [title, category, content]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    const newPost = {
      id: Date.now(), // Generate a temporary ID
      title,
      category,
      content,
      timestamp: new Date().toISOString(),
    };

    // Store the post in localStorage
    const existingPosts = JSON.parse(localStorage.getItem('localBlogPosts') || '[]');
    localStorage.setItem('localBlogPosts', JSON.stringify([...existingPosts, newPost]));

    // Redirect to blog listing page
    router.push('/blog');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div className="flex-none w-1/3">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
          <TipTapEditor onChange={setContent} />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`px-6 py-2 bg-purple-600 text-white rounded-md ${
              isFormValid 
                ? 'hover:bg-purple-700' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;
