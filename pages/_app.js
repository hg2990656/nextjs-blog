import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
          <>
            <header className="site-header">
              <div className="container">
                <h1 className="site-title">Next.js Blog</h1>
            <nav className="main-nav">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
      </ul>
      </nav>
      </div>
      </header>

      <Component {...pageProps} />

      <footer className="site-footer">
              <div className="container">
                <p>&copy; {new Date().getFullYear()} Next.js Blog</p>
      </div>
      </footer>
      </>
    );
}

export default MyApp;
