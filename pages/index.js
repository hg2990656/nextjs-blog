import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [posts] = useState([
      { id: 1, title: 'Getting Started with Next.js', excerpt: 'Learn the basics of Next.js and how to build a blog.' },
      { id: 2, title: 'Styling Your Next.js Blog', excerpt: 'Explore different styling options for your Next.js blog.' },
      { id: 3, title: 'Adding Interactivity to Your Blog', excerpt: 'Learn how to add interactive elements to your blog posts.' },
        ]);

  return (
        <div className="container">
          <Head>
            <title>Next.js Blog</title>
          <meta name="description" content="A blog built with Next.js" />
            <link rel="icon" href="/favicon.ico" />
    </Head>

      <main className="main">
            <h1 className="title">Welcome to My Blog</h1>

        <p className="description">
              A simple blog built with Next.js and deployed on Vercel
    </p>

        <div className="grid">
    {posts.map((post) => (
                  <div key={post.id} className="card">
                <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
  </Link>
  </div>
          ))}
            </div>
            </main>

      <footer className="footer">
                    <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
                      Powered by{' '}
          <span className="logo">
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
            </footer>
            </div>
  );
}
