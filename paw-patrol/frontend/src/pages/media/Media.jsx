import React from 'react';
import './Media.css'; // Assume advanced CSS for styling

const Media = () => {
  // Extended example arrays for various types of media
  const blogPosts = [
    {
      id: 1,
      title: 'Why Adopt, Not Shop? The Impact of Your Choice',
      summary: 'Exploring the positive ripple effects of choosing to adopt a pet over purchasing from breeders or pet stores.',
      link: '/blogs/adopt-not-shop-impact'
    },
    {
      id: 2,
      title: 'Adoption Stories That Warm the Heart',
      summary: 'Compilation of touching stories from adopters, sharing how their rescue pets have brought joy and love into their lives.',
      link: '/blogs/adoption-stories'
    },
    {
      id: 3,
      title: 'The Unsung Heroes: Foster Families and Their Crucial Role',
      summary: 'Highlighting the incredible work of foster families in preparing pets for their forever homes.',
      link: '/blogs/foster-families'
    },
    {
      id: 4,
      title: 'Senior Pets: Why They Make Great Companions',
      summary: 'Dispelling myths and showcasing the benefits of adopting older pets.',
      link: '/blogs/senior-pets'
    },
    // More blog posts
  ];

  const userArticles = [
    {
      id: 1,
      title: 'From Skeptic to Advocate: My Journey Towards Supporting Animal Adoption',
      content: 'A personal narrative on how learning about pet adoption changed one person’s perspective and actions.',
      link: '/articles/skeptic-to-advocate'
    },
    {
      id: 2,
      title: 'How Adopting a Pet Can Improve Your Mental Health',
      content: 'Discussing the psychological benefits of pet companionship and how adoption plays a role.',
      link: '/articles/pet-adoption-mental-health'
    },
    {
      id: 3,
      title: 'The Logistics of Pet Adoption: What You Need to Know',
      content: 'A practical guide covering the steps, considerations, and what to expect when adopting a pet.',
      link: '/articles/logistics-pet-adoption'
    },
    // More user articles
  ];

  return (
    <div className="media-container">
      <h1>Paw Patrol Media Hub</h1>

      {/* Expanded Blog Posts Section */}
      <section className="media-section blogs">
        <h2>Insightful Blog Posts</h2>
        <div className="content-list">
          {blogPosts.map((post) => (
            <div key={post.id} className="content-item">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <a href={post.link}>Continue Reading</a>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded User Stories and Articles Section */}
      <section className="media-section user-articles">
        <h2>Community Stories & Insights</h2>
        <div className="content-list">
          {userArticles.map((article) => (
            <div key={article.id} className="content-item">
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <a href={article.link}>Discover More</a>
            </div>
          ))}
        </div>
      </section>
      
      {/* New Section: Expert Advice */}
      <section className="media-section expert-advice">
  <h2>Expert Advice</h2>
  <div className="content-list">
    <article className="content-item">
      <h3>Understanding Your Rescue Pet's Behavior</h3>
      <p>Dr. Jane Smith, a renowned animal behaviorist, explains common behaviors observed in rescue pets and how to address them to ensure a smooth transition into their new home.</p>
      <a href="/expert-advice/understanding-rescue-pet-behavior">Read More</a>
    </article>
    <article className="content-item">
      <h3>The Importance of Regular Veterinary Check-ups</h3>
      <p>Veterinarian Dr. Luke Rodriguez highlights why regular check-ups are crucial for your pet’s health, especially for newly adopted pets.</p>
      <a href="/expert-advice/regular-veterinary-checkups">Read More</a>
    </article>
    <article className="content-item">
      <h3>Nutritional Needs of Different Dog Breeds</h3>
      <p>Join pet nutrition expert, Emily Chen, as she breaks down the dietary requirements of various dog breeds, helping you make the best food choices for your furry friend.</p>
      <a href="/expert-advice/nutritional-needs-dog-breeds">Read More</a>
    </article>
    {/* Additional expert advice articles */}
  </div>
</section>

<section className="media-section how-to-guides">
  <h2>How-To Guides</h2>
  <div className="content-list">
    <article className="content-item">
      <h3>How to Prepare Your Home for a Rescue Pet</h3>
      <p>A comprehensive guide on preparing your home and family for the arrival of your new rescue pet, ensuring a comfortable and welcoming environment.</p>
      <a href="/how-to-guides/prepare-home-for-rescue-pet">Read More</a>
    </article>
    <article className="content-item">
      <h3>Training Your Newly Adopted Pet: Basics to Get Started</h3>
      <p>Essential training tips for your new pet, covering basic commands, potty training, and socialization to help them adjust to their new life.</p>
      <a href="/how-to-guides/training-newly-adopted-pet">Read More</a>
    </article>
    <article className="content-item">
      <h3>Adopting a Pet: What to Know and Do</h3>
      <p>Everything you need to know about the pet adoption process, from deciding if adoption is right for you to integrating your new pet into your home.</p>
      <a href="/how-to-guides/adopting-a-pet-process">Read More</a>
    </article>
    {/* Additional how-to guides */}
  </div>
</section>

      
      {/* Additional sections can be added based on content strategy */}

    </div>
  );
};

export default Media;
