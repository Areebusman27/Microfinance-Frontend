// pages/categories/loans.js
import Link from 'next/link';

export default function BusinessLoans() {
  const subcategories = [
    { name: 'Stall Loan', link: '/loancalculator' },
    { name: 'Rent for Shop', link: '/loancalculator' },
    { name: 'Shop Machinery', link: '/loancalculator' },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Loan Subcategories</h1>
      </header>

      <main className="main">
        <div className="sgrid">
          {subcategories.map((subcategory, index) => (
            <div key={index} className="card">
              <h2>{subcategory.name}</h2>
              <Link href={subcategory.link} passHref>
                <button className="button">Proceed</button>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Saylani Microfinance. All rights reserved.</p>
      </footer>
    </div>
  );
}
