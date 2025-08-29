import React from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom"; // Asume que estás usando react-router-dom
import Button from "../../components/Button/Button";

// Datos de ejemplo para las entradas del blog
const blogPosts = [

];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <Button />
      <h2 className={styles.sectionTitle}>Últimas Entradas del Blog</h2>
      
      {blogPosts.length === 0 ? (
        <div className={styles.emptyWrapper}>
          <div className={styles.emptyIcon}>🛠️</div>
          <p className={styles.emptyMessage}>
            El blog está en construcción. ¡Pronto habrá contenido interesante!
          </p>
        </div>
      ) : (
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  <span className={styles.author}>{post.author}</span>
                  <span className={styles.date}>&bull; {post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`} className={styles.readMore}>
                  Leer más &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
