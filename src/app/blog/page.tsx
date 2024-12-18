'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface CategoryButton {
  icon: string;
  label: string;
  href: string;
}

const categories: CategoryButton[] = [
  { icon: '📚', label: 'Learning Tips', href: '/blog/learning-tips' },
  { icon: '🎯', label: 'Finding a Job', href: '/blog/finding-job' },
  { icon: '🔗', label: 'Career Advice', href: '/blog/career-advice' },
  { icon: '💡', label: 'Get Inspired', href: '/blog/get-inspired' },
  { icon: '🍺', label: 'Tech Insights', href: '/blog/tech-insights' },
  { icon: '🔔', label: 'Industry News', href: '/blog/industry-news' },
  { icon: '✅', label: 'Success Stories', href: '/blog/success-stories' },
];

const randomBG = [
"https://images.ctfassets.net/kftzwdyauwt9/4uMG8AuQre4G4zXy6jLIpk/a393d8838bff23a44a22db247954da7e/updated_team-1.png?w=640&q=90&fm=webp",

"https://images.ctfassets.net/kftzwdyauwt9/1ZTOGp7opuUflFmI2CsATh/df5da4be74f62c70d35e2f5518bf2660/ChatGPT_Carousel1.png?w=640&q=90&fm=webp",

"https://images.ctfassets.net/kftzwdyauwt9/3XDJfuQZLCKWAIOleFIFZn/14b93d23652347ee7706eca921e3a716/enterprise.png?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/IPgFYDUMeUtWcg2ze2IsP/118ea87d54734ef3f49b432ee2a35b56/DALL_E_2024-07-17_16.25.57_-_Close-up_of_soft_pink_flower_petals_with_a_gentle_motion_blur_on_a_light_lavender_background__c.png?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/1qCEfO78yhwFeaBFu3kCd6/b57a627f10f4a353443994ed06453056/ChatGPT_Education.png?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/3vjzQxExAEnYGvBSiwT1zK/d76028c004dbc7e9830e541cced6224f/ChatGPT_Charts_Blog_Hero.png?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/5zFIncfIW0tcpLLslTVZyr/021f3e3a8cf7d5e6ff78600f304a2b70/Building-an-early-warning-system-for-LLM-aided-biological-threat-creation.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/dfdeca52-d054-4ce9-18d684209ff9/f3a2e6e71ebefb70fca386ff7bbb9d92/practices-for-governing-agentic-ai-systems.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/6Lw2ICzVMz56SHUabause2/db76183c01bd7510c2a049c010a87426/the-latest-milestone-in-openai-s-effort-in-scalling-up-deep-learning.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/2b8LxVBYdWfAji39UNft8X/09d9453f41b461c6e1f225be249de9d2/GPT-4V_ision__system_card.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/4YcfHUbF5aXPEYiKbS1yP5/6f480fd98bc6ead1cd6cac46f4bf68d9/explore_ai_solutions_for_companies_of_all_sizes.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/1og20QPrDYssv1fnRasbXW/af144bf758f510bf28b1c0da911fbcdf/empower_your_entire_workforce_with_enterprise_grade_ai.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/ZW0BGMvnWV1Li8uIrym3x/170893a2921cb25bb77b27b9d2d84067/updated_team-2.png?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/54Yl51mnEttF83c6fZBNv9/41cbdd41a9dd05e710ee861b98ac1a51/integrate_models_into_products_tools_or_operations.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/2PXUNHSP4R9aDSrbSwhIXs/9ea5be5ccfa6fee504c9696ed021afaa/Day9_4x5_thumbnailcard.jpg?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/139I6Ga8xl6qTXGPL9lWyc/82838b1ef1a26a4946a27d656de0c806/01_Realtime_API.png?w=640&q=90&fm=webp", 

"https://images.ctfassets.net/kftzwdyauwt9/2STrOu0d3xz2yHksnLDGNg/54c78f54d3357e7f626fa9a74bad80c7/03_Prompt_Caching.png?w=640&q=90&fm=webp", 

]


interface BlogPost {
  id: number;
  title: string;
  category: string;
  content: string;
}

const BlogPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://www.kodnest.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((e: any) => ({
          id: e.id,
          title: e.title.rendered,
          category: e.class_list[e.class_list.length - 1]
            .split("-")
            .slice(1)
            .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
          content: e.content.rendered,
        }));
        setBlogPosts(formattedData);
      })
      .catch((error) => console.error('Error fetching blog posts:', error));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Width of one card
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Function to handle card click
  const handleCardClick = (postId: number) => {
    router.push(`/blog/post/${postId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-yellow-400 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            KodNest Blog
          </span>
          <button
            onClick={() => router.push('/blog/create')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Create Blog
          </button>
        </div>
        <h1 className="text-5xl font-bold mb-4">Code, Transform and Succeed</h1>
        <p className="text-gray-600 text-lg">
          Your Source for Kodnest Stories, Insights, Tips, Guidance,
          <br />
          Discover, Learn and Innovation
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="font-medium">{category.label}</span>
          </a>
        ))}
      </div>

      {/* Products Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Kodnest Blog - A new era of Learning</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Blog Posts Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto p-4 -mx-4 px-4 scroll-smooth scrollbar-hide"
        >
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`flex-none w-[300px] h-[400px] rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 p-6 relative cursor-pointer transition-transform hover:scale-[1.02] overflow-hidden`}
              onClick={() => handleCardClick(post.id)}
              style={{
                backgroundImage: `url(${randomBG[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              
              <div className="flex flex-col h-full relative z-10">
                <div className="mb-auto">
                  <span className="text-sm text-white font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                    {post.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;