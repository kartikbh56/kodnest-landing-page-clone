import DOMPurify from 'isomorphic-dompurify';

export default function BlogPost({ post }) {
  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ 
        __html: DOMPurify.sanitize(post.content)
      }} 
    />
  );
} 