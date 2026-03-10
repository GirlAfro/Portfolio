import React from 'react';

const blogPosts = [
  {
    title: 'Understanding React',
    excerpt: 'A brief overview of React and its benefits.',
    date: '2026-03-10',
    category: 'React',
    link: '#'
  },
  {
    title: 'How to Use Hooks',
    excerpt: 'An introduction to using hooks in React.',
    date: '2026-03-09',
    category: 'React',
    link: '#'
  },
  {
    title: 'JavaScript ES6 Features',
    excerpt: 'Exploring the new features introduced in ES6.',
    date: '2026-03-08',
    category: 'JavaScript',
    link: '#'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <h2>Blog Posts</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <small>{post.date} | {post.category}</small>
            <a href={post.link}>Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
