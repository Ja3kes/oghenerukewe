       import React from 'react';

function Products() {
  return (
    <section style={{ padding: '40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2>Our Products / Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '200px' }}>
          <h3>Product 1</h3>
          <p>Short description of Product 1.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '200px' }}>
          <h3>Product 2</h3>
          <p>Short description of Product 2.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '200px' }}>
          <h3>Product 3</h3>
          <p>Short description of Product 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
