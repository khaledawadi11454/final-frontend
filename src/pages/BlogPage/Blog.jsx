import React, { useState,useEffect } from 'react';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer/Footer.jsx';
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Tips for WordPress Security',
      author: 'John Doe',
      date: 'May 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      comments: [
        { id: 1, author: 'Jane Smith', date: 'May 2, 2023', content: 'Great tips, thanks for sharing!' },
        { id: 2, author: 'Bob Johnson', date: 'May 3, 2023', content: 'I found these tips really helpful, thanks!' },
      ]
    },
    {
      id: 2,
      title: 'How to Optimize Your WordPress Site for Speed',
      author: 'Jane Smith',
      date: 'April 28, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      comments: [
        { id: 1, author: 'John Doe', date: 'April 29, 2023', content: 'This was really helpful, thanks for sharing!' },
        { id: 2, author: 'Sally Johnson', date: 'April 30, 2023', content: 'Great post, I learned a lot!' },
      ]
    },
    {
      id: 2,
      title: 'How to Optimize Your WordPress Site for Speed',
      author: 'Jane Smith',
      date: 'April 28, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      comments: [
        { id: 1, author: 'John Doe', date: 'April 29, 2023', content: 'This was really helpful, thanks for sharing!' },
        { id: 2, author: 'Sally Johnson', date: 'April 30, 2023', content: 'Great post, I learned a lot!' },
      ]
    }
    // Add more blog posts here
  ];

  const filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  useEffect(() => {
    AOS.init()
    }, [])
  return (<>
  <div className="bgblog"></div>
    <div className="blog-page">
      <div className="headerblog">
      <h1 className="blog-page__title" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Blog</h1>
      <div className="blog-page__search">
        <input type="text" className="blog-page__search-input" placeholder="Search blog posts..." value={searchTerm} onChange={handleSearch} />
      </div>
      </div>
      <div className="blog-page__posts">
        {filteredPosts.map(post => (
          <div className="blog-page__post" key={post.id}>
            <h2 className="blog-page__post-title">{post.title}</h2>
            <p className="blog-page__post-meta">By {post.author} | {post.date}</p>
            <p className="blog-page__post-content">{post.content}</p>
            <div className="blog-page__comments">
              <h3 className="blog-page__comments-title">Comments:</h3>
              {post.comments.map(comment => (
                <div className="blog-page__comment" key={comment.id}>
                  <p className="blog-page__comment-meta">{comment.author} | {comment.date}</p>
                  <p className="blog-page__comment-content">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
  );
};

export default BlogPage;