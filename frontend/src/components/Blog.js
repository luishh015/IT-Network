import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { mockBlogPosts } from './MockData';

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="blog" className="py-20 bg-bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="display-md text-text-primary mb-6"
          >
            IT-Insights & Trends
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="body-xl text-text-secondary max-w-2xl mx-auto"
          >
            Bleiben Sie auf dem Laufenden mit den neuesten Entwicklungen 
            in der IT-Welt und praktischen Tipps für Ihr Unternehmen.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="design-grid"
        >
          {mockBlogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="design-card group cursor-pointer"
              onClick={() => console.log(`Navigate to blog post: ${post.title}`)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <span className="text-sm font-medium text-brand-green">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-text-muted text-sm mb-4">
                <Calendar size={14} className="mr-2" />
                <span className="mr-4">{formatDate(post.date)}</span>
                <Clock size={14} className="mr-2" />
                <span className="mr-4">{post.readTime}</span>
                <User size={14} className="mr-2" />
                <span>{post.author}</span>
              </div>

              <h3 className="card-title group-hover:text-brand-green transition-colors">
                {post.title}
              </h3>
              
              <p className="card-description mb-6">
                {post.excerpt}
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-brand-green font-medium"
              >
                Weiterlesen
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Alle Blog-Artikel anzeigen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;