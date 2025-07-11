import React from 'react';

function Features() {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on all order',
    },
    {
      icon: '☎️',
      title: 'Support 24/7',
      description: 'Free support on all order',
    },
    {
      icon: '💰',
      title: 'Money Return',
      description: '30 days money back guarantee',
    },
    {
      icon: '🎁',
      title: 'Order Discount',
      description: 'Offer available all season',
    },
  ];

  return (
    <section style={styles.container}>
      {features.map((feature, index) => (
        <div key={index} style={styles.card}>
          <span style={styles.icon}>{feature.icon}</span>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px 20px',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  card: {
    textAlign: 'center',
    width: '200px',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '30px',
    display: 'block',
    marginBottom: '10px',
  },
};

export default Features;
