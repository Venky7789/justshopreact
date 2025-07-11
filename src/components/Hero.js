import React from 'react';
import blobBg from '../assets/blob-purple.svg';

import look1 from '../assets/look1.png';
import look2 from '../assets/look2.png';


function Hero() {
  return (
    <section style={styles.hero}>
  {/* Background Blob */}
  <img src={blobBg} alt="blob" style={styles.blob} />

  {/* Extra Style Images on Blob */}
  <img src={look1} alt="Look1" style={styles.look1} />
  <img src={look2} alt="Look2" style={styles.look2} />

  
  {/* Text Content */}
  <div style={styles.textContent}>
    <p style={styles.smallText}>Smart Products</p>
    <h1 style={styles.mainText}>
      Summer Offer<br />2025 Collection
    </h1>
    <button style={styles.button}>SHOP NOW</button>
  </div>

  {/* Optional: Venky */}
 
</section>


  );
}

const styles = {
  hero: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f0ff',
    padding: '60px 80px',
    minHeight: '80vh',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  blob: {
    position: 'absolute',
    top: '-120px',
    right: '-100px', // moved to right side
    zIndex: 0,
    width: '900px',
    opacity: 0.25,
  },
 
  

textContent: {
  maxWidth: '500px',
  zIndex: 2,              // Make sure text is above the faded image
  position: 'relative',
},

  smallText: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  },
  mainText: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.3',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '4px',
  },
 look1: {
  position: 'absolute',
  top: '200px',            // Adjust to shift higher
  right: '260px',          // Adjust to fit within blob
  width: '300px',          // ✅ Larger size
  height: '300px',
  zIndex: 1,
  opacity: 0.9,
  objectFit: 'cover',      // Keeps image neat (optional)
},

look2: {
  position: 'absolute',
  bottom: '300px',
  right: '80px',
  width:'300px',
  height: '300px',
  zIndex: 1,
  opacity: 0.9,
},


};

export default Hero;
