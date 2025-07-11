import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Rajesh Styles And Fashions.</div>

      <nav style={styles.nav}>
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Collection</a>
        <a href="/">Pages</a>
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
      </nav>

      <div style={styles.icons}>🔍 ❤️ 🛒 👤</div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  nav: {
    display: 'flex',
    gap: '20px', // 👈 This spaces links evenly
    fontSize: '16px',
    fontWeight: '500',
  },
  icons: {
    fontSize: '18px',
    display: 'flex',
    gap: '10px',
  },
};

export default Header;
