import React from 'react';
import styles from './page.module.css';

const Blogs = () => {
  // Step 1: Array of blog post data with unique titles and descriptions
  const blogPosts = [
    {
      title: 'The Future of Computer Education',
      description: 'Hundreds of students engage in a hands-on computer class, shaping the future of technology.',
      image: '/Resources/img1.jpg',  // Image of students taking a computer class
    },
    {
      title: 'Solopreneur: Earn as You Learn',
      description: 'Discover how solopreneurs master earning while learning. Motivational quotes to inspire your journey.',
      image: '/Resources/img2.jpg',  // Image with heading: Solopreneur, earn as you learn, motivational quotes
    },
    {
      title: 'Success as a Solopreneur: Earning Big',
      description: 'A determined solopreneur stands strong, working towards financial success and earning dollars.',
      image: '/Resources/img3.jpg',  // Image of a solopreneur and a strong man earning dollars
    },
    {
      title: 'Young AI Robotics Scientist in Action',
      description: 'A young scientist pushes the boundaries of AI and robotics, experimenting with cutting-edge technology.',
      image: '/Resources/img4.jpg',  // Image of a young AI robotics scientist doing experiments
    },
    {
      title: 'Graduation Day: Celebrating Success',
      description: 'A proud group of students celebrates their graduation and achievements, receiving their degrees.',
      image: '/Resources/img5.jpg',  // Image of students qualifying and taking their degree
    },
    {
      title: 'The Future of VR and AI: A Student\'s Vision',
      description: 'A tech-savvy student explores the power of AI and VR technology with a cutting-edge headset.',
      image: '/Resources/img6.jpg',  // Image of a student with an AI-powered VR headset
    },
  ];

  return (
    <div className={styles.MainDiv}>
      {/* Step 2: Loop through the blogPosts array */}
      {blogPosts.map((post, index) => (
        <div className={styles.SecondaryDiv} key={index}>
          
          {/* Blog Image */}
          <img className={styles.ImgDiv} src={post.image} alt={post.title} />
          
          {/* Blog Title */}
          <h3 className={styles.HeadingThree}>{post.title}</h3>

          {/* Blog Description */}
          <p className={styles.Desc}>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
