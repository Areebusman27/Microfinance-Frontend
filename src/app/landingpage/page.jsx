import Head from 'next/head';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="container">
      <Head>
        <title>Saylani Microfinance</title>
        <meta name="description" content="Saylani Microfinance Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>Saylani Microfinance</h1>
        <nav>
          <Link href="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link href="/admin">
            <button className="login-button">Admin Dashboard</button>
          </Link>
          <Link href="/loanuser">
            <button className="login-button">User Dashboard</button>
          </Link>
        </nav>
      </header>

      <main className="main">
        <section className="intro">
          <p>Welcome to Saylani Microfinance, where we provide financial assistance for various needs, including weddings, business startups, education, and home construction. Choose a loan category to proceed.</p>
        </section>

        <div className="grid">
          <div className="card">
            <h2>Wedding Loans</h2>
            <p>Financial support for your wedding ceremonies and celebrations, making your dream wedding come true.</p>
            <Link href="/wedding">
              <button className="button">Proceed</button>
            </Link>
          </div>
          <div className="card">
            <h2>Business Startup Loans</h2>
            <p>Start your business with a loan designed to help entrepreneurs get their ideas off the ground.</p>
            <Link href="/business">
              <button className="button">Proceed</button>
            </Link>
          </div>
          <div className="card">
            <h2>Education Loans</h2>
            <p>Loans to support students in pursuing higher education and achieving academic success.</p>
            <Link href="/education">
              <button className="button">Proceed</button>
            </Link>
          </div>
          <div className="card">
            <h2>Home Construction Loans</h2>
            <p>Financial assistance to build or renovate your dream home, making it a reality.</p>
            <Link href="/home">
              <button className="button">Proceed</button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Saylani Microfinance. All rights reserved.</p>
      </footer>
    </div>
  );
}
